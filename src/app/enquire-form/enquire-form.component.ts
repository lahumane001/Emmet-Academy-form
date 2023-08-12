import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataHandlerService } from '../shared/dataHandler.service';

@Component({
  selector: 'app-enquire-form',
  templateUrl: './enquire-form.component.html',
  styleUrls: ['./enquire-form.component.css']
})
export class EnquireFormComponent implements OnInit{
  
  formData:any;

  constructor(private httpserve : DataHandlerService){}
  
  ngOnInit(): void {
   this.formData = new FormGroup({
    firstname : new FormControl('', Validators.required),
    lastname : new FormControl('', Validators.required),
    contact : new FormControl('', Validators.required),
    qualification : new FormControl('', Validators.required),
    course : new FormControl('', Validators.required),
    refer : new FormControl('', Validators.required),
   })
  }

  onSubmit(){
    console.log(this.formData.value)
    this.httpserve.postUsers(this.formData.value).subscribe()
    this.formData.reset()
  }
}
