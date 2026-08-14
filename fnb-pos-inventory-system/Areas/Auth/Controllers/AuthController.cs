using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using fnb_pos_inventory_system.Services.Auth;
using fnb_pos_inventory_system.Areas.Auth.DTOs;

namespace fnb_pos_inventory_system.Areas.Auth.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        // Dependency injection for the IAuthService
        private readonly IAuthService _authService;

        // Constructor to initialize the AuthController with the IAuthService
        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        // POST endpoint for user registration
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            // Call the RegisterAsync method from the IAuthService
            var response = await _authService.RegisterAsync(request);
            // Return a 201 Created response with the RegisterResponse object
            return CreatedAtAction(nameof(Register), new { id = response.UserId }, response);
        }
    }
}
