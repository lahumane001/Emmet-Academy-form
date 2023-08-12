import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginData: any;

  constructor(private router : Router){}

  ngOnInit(): void {
   this.loginData = new FormGroup({
    userName : new FormControl('' , Validators.required),
    password : new FormControl('' , Validators.required),
   })
  }

  login(){
    console.log(this.loginData.value)
    // console.log(this.loginData.value.userName == 'emmetacademy@gmail.com' && this.loginData.value.password == 'test123')

    if(this.loginData.value.userName === 'emmetacademy@gmail.com' && this.loginData.value.password === 'test123'){
      console.log('success')
      this.router.navigate(['dashboard'])
    }else{
      console.log('failed')
    }
  }

}
