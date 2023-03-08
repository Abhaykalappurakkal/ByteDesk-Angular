import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestModel } from '../model/request-model';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  baseUrl = 'http://localhost:8080/request';

  requestData!: RequestModel;
  request!: RequestModel;
  path!: string;
  toSent!: string;
  constructor(private http: HttpClient) {}
  // get value to sent (status / dept)
  getToSent(data: string) {
    this.toSent = data;
  }
  //get request model to sent
  getRequest(data: RequestModel) {
    this.request = data;
  }
  //get path
  getPath(path: string) {
    this.path = path;
  }
  //get method to get list by given status
  public getListByStatus(
    pageNumber: number,
    status: string
  ): Observable<RequestModel> {
    return this.http.get<RequestModel>(
      `${this.baseUrl}/list/${pageNumber}/5/${sessionStorage.getItem(
        'userId'
      )}/status/${status}`
    );
  }
  //get method for list by given department
  public getListByDept(
    pageNumber: number,
    dept: string
  ): Observable<RequestModel> {
    return this.http.get<RequestModel>(
      `${this.baseUrl}/list/${pageNumber}/5/${sessionStorage.getItem(
        'userId'
      )}/dept/${dept}`
    );
  }
  // put method to change the status of request from open to cancelled
  public cancelRequest(
    requestId: string,
    request: RequestModel
  ): Observable<RequestModel> {
    return this.http.put<RequestModel>(
      `${this.baseUrl}/cancel/${requestId}`,
      request
    );
  }
  //put method to change the status of request from resolved to closed
  public closeRequest(
    requestId: string,
    request: RequestModel
  ): Observable<RequestModel> {
    return this.http.put<RequestModel>(
      `${this.baseUrl}/close/${requestId}`,
      request
    );
  }
}
