using fnb_pos_inventory_system.Areas.Auth.DTOs;
using fnb_pos_inventory_system.Entities;
using fnb_pos_inventory_system.Exceptions;
using fnb_pos_inventory_system.Services.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;

namespace fnb_pos_inventory_system.Areas.Auth.Services;
public class AuthService : IAuthService
{
    //Dependency Injection
    private readonly UserManager<Account> _userManager;
    private readonly IPhoneService _phoneService;
    private readonly ISmsService _smsService;

    // Constructor
    public AuthService(UserManager<Account> userManager, IPhoneService phoneService, ISmsService smsService )
    {
        _userManager = userManager;
        _phoneService = phoneService;
        _smsService = smsService;
    }

    // Implement the RegisterAsync method
    public async Task<RegisterResponse> RegisterAsync(RegisterRequest request)
    {
        // Validate the request
        var phonenumber = _phoneService.Normalize(request.PhoneNumber);

        // Validate the phone number format
        if (!_phoneService.IsValid(phonenumber))
        {
            throw new BusinessException("Số điện thoại không hợp lệ.");
        }

        // Check if the phone number is already registered
        var existingUser = await _userManager.Users.FirstOrDefaultAsync(x => x.PhoneNumber == phonenumber);

        // If the user already exists, throw a BusinessException
        if (existingUser != null) 
        {
            // Throw a BusinessException with a message indicating that the phone number is already registered
            throw new BusinessException("Số điện thoại đã được đăng ký.");
        }

        // Create a new account
        var account = new Account
        {
            FullName = request.FullName,
            PhoneNumber = phonenumber,
            UserName = phonenumber
        };

        // Create the user using UserManager
        var result = await _userManager.CreateAsync(account, request.Password);

        // If the creation failed, throw a BusinessException with the error messages
        if (! result.Succeeded )
        {
            var errors = string.Join(", ", result.Errors.Select(e => e.Description));
            throw new BusinessException(errors);
        }

        // Return the response
        var response = new RegisterResponse
        {
            FullName = account.FullName,
            PhoneNumber = account.PhoneNumber,
            UserId = account.Id
        };

        return response;
    }
}