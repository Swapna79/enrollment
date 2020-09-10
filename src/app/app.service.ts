import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  public getEnrollees() {
    return this.http.get('../assets/enrolleeList.json');
  }

  public postEnrollee(data) {
    return this.http.post('post url should here', data);
  }
}
