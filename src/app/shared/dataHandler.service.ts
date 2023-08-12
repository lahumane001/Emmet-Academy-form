import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { map } from "rxjs";

@Injectable()

export class DataHandlerService {

    baseUrl = `https://emmet-academy-form-default-rtdb.asia-southeast1.firebasedatabase.app/UsersData.json`

    constructor( private http : HttpClient){}

    postUsers(obj : any){
        return this.http.post(this.baseUrl, obj)
    }

    getUsers(){
        return this.http.get(this.baseUrl).pipe(map((rowData : any)=>{
            let arr = [];
            for(let data in rowData){
                arr.push({
                    ...rowData[data], id : data
                })
            }
            
            return arr
        }))
    }
}