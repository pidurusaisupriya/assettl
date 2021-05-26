import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpclient:HttpClient) { }
  getdata(): Observable <any> {
    return this.httpclient.get("/assets/details.JSON")
    }
    postdata(params){
      return this.httpclient.post("/assets/details.JSON" , params)
    }
    
}
