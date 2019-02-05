import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private toastr:ToastrService, private authService:AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
      // this.authService.login();


      const value = form.value;
      const loginDetails = {
        username: value.username,
        password: value.password
      };

      console.log(loginDetails);
      this.authService.login(loginDetails).subscribe((res: Response) => {
            const result: any = res;

            if (result.status == "FAILURE") {
              this.toastr.error('Invalid username or password. Please try again', 'Login Failed');
            } else {
              const r = res['body'];
              let resultBody: any = {};
              resultBody = r;
              const token: any = resultBody.token;
              if (token) {
                localStorage.setItem('token', token);
                this.router.navigate(['/view']);
              } else {
                this.toastr.error('Access Denied');
              }
            }
          });

  }

}
