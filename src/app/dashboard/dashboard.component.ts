import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../shared/dataHandler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  usersData :any;
  constructor(private httpServe : DataHandlerService){}

  ngOnInit(): void {
   this.getData()
  }
  getData(){
    this.httpServe.getUsers().subscribe((res : any)=>{
      this.usersData = res
    })
  }

}
