import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isLoading = false;
  errorMessage = undefined;
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: NgForm) {
    this.isLoading = true;
    console.log(form);
    try {
      await this.authSrv.signup(form.value).subscribe(res => console.log(res));
      form.reset();
      this.isLoading = false;
      this.errorMessage = undefined;
      this.router.navigate(['/']);
    } catch (error: any) {
      this.isLoading = false;
      this.errorMessage = error;
      console.error(error);
    }
  }
}
