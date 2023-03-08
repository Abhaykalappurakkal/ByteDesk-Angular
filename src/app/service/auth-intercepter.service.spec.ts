import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthIntercepterService } from './auth-intercepter.service';
import { LoginService } from './login.service';

xdescribe('AuthIntercepterService', () => {
  let service: AuthIntercepterService;
  let loginService:LoginService;
  let http:HttpTestingController;
  let router:Router;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[ LoginService, AuthIntercepterService]
    });
    service = TestBed.inject(AuthIntercepterService);
    loginService = TestBed.inject(LoginService);
    http = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);

  });

  afterEach(()=>{
    http.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should add Authorization header with bearer token', () => {
  //   spyOn(loginService, 'getToken').and.returnValue('test-token');
  //   const url = `http://localhost:8080/sec/user/authenticate`;
  //   const req = http.expectOne(url);
  //   const modifiedReq = req.request.clone({
  //     headers: req.request.headers.append('Authorization', 'Bearer test-token')
  //   });
  //   modifiedReq.headers.keys().forEach((key: any) => {
  //     expect(modifiedReq.headers.get(key)).toEqual(req.request.headers.get(key));
  //   });
  // });

  it('should redirect to login page when server returns 401 Unauthorized error', () => {
    spyOn(loginService, 'getToken').and.returnValue('test-token');
    const req = http.expectOne('/api/test');
    req.flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });
    expect(sessionStorage.clear).toHaveBeenCalled();
    expect(sessionStorage.setItem).toHaveBeenCalledWith('login', 'false');
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });
});
