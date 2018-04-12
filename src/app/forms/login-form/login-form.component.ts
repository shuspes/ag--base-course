import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AppService } from 'App/services/app.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({    
    "userName": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
});
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  public submit(): void {
    console.log("submit", this.loginForm);

    if(this.loginForm.valid) {
      this.appService.login(this.loginForm.value.userName);
    }
  }

}
