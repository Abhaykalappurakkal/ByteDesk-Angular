import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RequestModel } from '../model/request-model';

import { NewService } from './new.service';

describe('NewService', () => {
  let service: NewService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewService],
    });
    service = TestBed.inject(NewService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpController.verify();
  });

  it('service created', () => {
    expect(service).toBeDefined();
  });

  it('new model api', () => {
    const inputData: RequestModel = {
      requestId: '122',
      requestDate: new Date(),
      userId: 'aaa',
      requestedDepartment: 'qwerty',
      ticketSummary: 'xyz',
      ticketDescription: 'zyx',
      resolution: '',
      resolvedDate: '',
      ticketStatus: 'open',
      userRequests: [],
      totalItems: 0,
    };
    const testData: RequestModel = {
      requestId: '233',
      requestDate: new Date(),
      userId: 'aaa',
      requestedDepartment: 'qwerty',
      ticketSummary: 'xyz',
      ticketDescription: 'zyx',
      resolution: 'wss',
      resolvedDate: 'asaa',
      ticketStatus: 'sdsdsd',
      userRequests: [],
      totalItems: 0,
    };
    service
      .createNewRequest(inputData)
      .subscribe((data: RequestModel) => expect(data).toEqual(testData));
    const req = httpController.expectOne(
      'http://localhost:8080/request/create'
    );
    expect(req.request.method).toEqual('POST');
    req.flush(testData);
  });
});
