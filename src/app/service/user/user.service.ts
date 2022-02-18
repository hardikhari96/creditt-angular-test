import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http_req: HttpClient) { }
  fetchUserList(data:any){
    return this.http_req.post(`${environment.base_url}/web/user/list`,data);
  }
}
