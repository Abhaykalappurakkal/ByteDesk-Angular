import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestModel } from '../model/request-model';

@Injectable({
  providedIn: 'root',
})
export class NewService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080/request/create';
  // creating new request
  public createNewRequest(request: RequestModel): Observable<RequestModel> {
    return this.http.post<RequestModel>(`${this.baseUrl}`, request);
  }
}
