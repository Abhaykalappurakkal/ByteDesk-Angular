import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { User } from '../model/user';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
    });
    service = TestBed.inject(LoginService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
    http;
  });

  it('service created', () => {
    expect(service).toBeDefined();
  });

  it('login api', () => {
    const testData: User = {
      userId: '',
      password: 'user',
      userName: 'user',
      salutation: '',
      userCode: '',
      token: '',
    };
    const inputData: User = {
      userId: '',
      password: 'user',
      userName: 'user',
      salutation: '',
      userCode: '',
      token: '',
    };
    service
      .loginUser(inputData)
      .subscribe((data: User) => expect(data).toEqual(testData));
    const req = httpController.expectOne(
      'http://localhost:8080/sec/user/authenticate'
    );
    expect(req.request.method).toEqual('POST');
    req.flush(testData);
    expect(service).toBeDefined();
  });

  it('get token', () => {
    expect(service.getToken()).toBeDefined();
  });
});
