import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userLogin, userRegister } from 'src/app/interfaces/auth.if';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http_req: HttpClient) { }
}
