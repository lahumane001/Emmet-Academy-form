import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataHandlerService } from '../shared/dataHandler.service';

@Component({
  selector: 'app-enquire-form',
  templateUrl: './enquire-form.component.html',
  styleUrls: ['./enquire-form.component.css']
})
export class EnquireFormComponent implements OnInit{
  
   formData:FormGroup | any;

  constructor(private httpserve : DataHandlerService){}
  
  ngOnInit(): void {
   this.formData = new FormGroup({
    firstName : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    contact : new FormControl('', Validators.required),
    qualification : new FormControl('', Validators.required),
    course : new FormControl('', Validators.required),
    refer : new FormControl('', Validators.required),
   })

  }

  onSubmit(){
    console.log(this.formData)
    this.httpserve.postUsers(this.formData.value).subscribe((res : any)=>{
      // console.log(res)
    })
    alert("Thank You For Registration...")
    this.formData.reset()
  }
}
