import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  errorMessage = undefined;
  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(form: any) {
    console.log(form);

    try {
      await this.authSrv.login(form.value).subscribe(res => console.log(res));
      form.reset();
      this.errorMessage = undefined;
      this.router.navigate(['/home']);
    } catch (error: any) {
      this.errorMessage = error;
      console.error(error);
    }
  }
}
