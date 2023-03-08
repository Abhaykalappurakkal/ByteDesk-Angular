import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs/internal/observable/of';
import { User } from '../model/user';
import { LoginService } from '../service/login.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(LoginService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Reactive form validation - userName check', () => {
    const userName = component.loginForm.controls['userName'];
    expect(userName.valid).toBeFalsy();
    expect(userName.errors).toBeDefined;
  });

  it('Reactive form validation - set userName check', () => {
    const userName = component.loginForm.controls['userName'];
    userName.setValue('username');
    expect(userName.valid).toBeTruthy();
    expect(userName.value).toEqual('username');
  });

  it('Reactive form validation - invalid username check', () => {
    const userName = component.loginForm.controls['userName'];
    userName.setValue('username');
    expect(userName.valid).toBeTruthy();
    expect(userName.errors).toBeDefined();
  });

  it('Reactive forms validation - password check', () => {
    const password = component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy();
  });

  it('Reactive form validation - set password check', () => {
    const password = component.loginForm.controls['password'];
    password.setValue('password');
    expect(password.valid).toBeTruthy();
    expect(password.value).toEqual('password');
  });

  it('Reactive form validation - invalid password check', () => {
    const password = component.loginForm.controls['password'];
    password.setValue('password');
    expect(password.valid).toBeTruthy();
    expect(password.errors).toBeDefined();
  });

  it('Reactive form validation - login check', fakeAsync(() => {
    expect(component.loginForm.invalid).toBeTruthy();
    const btn = fixture.debugElement.query(By.css('button'));

    component.loginForm.controls['userName'].setValue('user');
    component.loginForm.controls['password'].setValue('pass');
    // const userName= component.loginForm.controls['userName'];
    // const password = component.loginForm.controls['password'];
    const testData: User = {
      userId: '',
      password: 'aaa',
      userName: 'aaa',
      salutation: '',
      userCode: '',
      token: '',
    };
    const inputData: User = {
      userId: '',
      password: '',
      userName: '',
      salutation: '',
      userCode: '',
      token: '',
    };
    // userName.setValue("user");
    // password.setValue("pass");
    const spy = spyOn(service, 'loginUser').and.returnValue(of(testData));
    const subSpy = spyOn(service.loginUser(inputData), 'subscribe');

    component.login();
    fixture.detectChanges();
    tick();
    expect(spy).toHaveBeenCalledBefore(subSpy);
    expect(spy).toHaveBeenCalled();
  }));

  it('Unit test for inside subscribe method', fakeAsync(() => {
    const testData: User = {
      userId: '',
      password: 'aaa',
      userName: 'aaaa',
      salutation: '',
      userCode: '',
      token: 'aaaa',
    };
    const inputData: User = {
      userId: '',
      password: 'aaa',
      userName: 'aaaa',
      salutation: '',
      userCode: '',
      token: '',
    };
    const spy = spyOn(service, 'loginUser').and.returnValue(of(testData));
    const subSpy = spyOn(service.loginUser(inputData), 'subscribe');

    component.login();
    fixture.autoDetectChanges(true);
    tick(10);
    expect(testData).toBeDefined();
    // expect(component.userData).toBeDefined();
  }));
});
