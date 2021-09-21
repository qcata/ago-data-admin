using System.ComponentModel.DataAnnotations;

namespace agro_data_models.Dto.Authentication
{
    public class LoginRequest
    {
        [Display(Name = "Email")]
        [Required(ErrorMessage = "{0} is required.")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [Display(Name = "Password")]
        [Required(ErrorMessage = "{0} is required.")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
