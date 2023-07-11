import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.css']
})
export class ResetPasswordFormComponent {
  token: string;
  password: string;
  confirmPassword: string;

  resetPassword() {
    // Add your logic here for resetting the password
    console.log('Reset password form submitted');
    console.log('Token:', this.token);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
  }

  checkPasswordMatch(confirmPasswordInput: HTMLInputElement | string) {
    if (typeof confirmPasswordInput === 'string') {
      confirmPasswordInput = document.getElementById(confirmPasswordInput) as HTMLInputElement;
    }
  
    const passwordInput = document.getElementById('password') as HTMLInputElement;
  
    if (confirmPasswordInput.value !== passwordInput.value) {
      confirmPasswordInput.setCustomValidity('Passwords do not match!');
    } else {
      confirmPasswordInput.setCustomValidity('');
    }
  }
}
