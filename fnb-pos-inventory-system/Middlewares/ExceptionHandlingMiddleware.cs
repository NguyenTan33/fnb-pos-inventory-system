using fnb_pos_inventory_system.Exceptions;
using System.Net;
using System.Text.Json;

namespace fnb_pos_inventory_system.Middlewares
{
    public class ExceptionHandlingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ExceptionHandlingMiddleware> _logger;

        public ExceptionHandlingMiddleware(
            RequestDelegate next,
            ILogger<ExceptionHandlingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                // Cho request đi tiếp xuống middleware / controller phía sau
                await _next(context);
            }
            catch (BusinessException ex)
            {
                // Lỗi nghiệp vụ do mình chủ động throw
                await HandleBusinessExceptionAsync(context, ex);
            }
            catch (Exception ex)
            {
                // Lỗi không dự đoán trước
                await HandleUnexpectedExceptionAsync(context, ex);
            }
        }

        private async Task HandleBusinessExceptionAsync(
            HttpContext context,
            BusinessException ex)
        {
            context.Response.StatusCode =
                StatusCodes.Status400BadRequest;

            context.Response.ContentType =
                "application/json";

            var response = new
            {
                message = ex.Message
            };

            var json = JsonSerializer.Serialize(response);

            await context.Response.WriteAsync(json);
        }

        private async Task HandleUnexpectedExceptionAsync(
            HttpContext context,
            Exception ex)
        {
            // Log lỗi thật để developer kiểm tra
            _logger.LogError(
                ex,
                "Unhandled exception occurred.");

            context.Response.StatusCode =
                StatusCodes.Status500InternalServerError;

            context.Response.ContentType =
                "application/json";

            var response = new
            {
                message = "Đã xảy ra lỗi hệ thống."
            };

            var json = JsonSerializer.Serialize(response);

            await context.Response.WriteAsync(json);
        }
    }
}