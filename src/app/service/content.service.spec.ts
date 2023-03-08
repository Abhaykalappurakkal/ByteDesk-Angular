import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RequestModel } from '../model/request-model';

import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContentService],
    });
    service = TestBed.inject(ContentService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service created', () => {
    expect(service).toBeDefined();
  });

  it('get to sent', () => {
    const data = 'open';
    service.getToSent(data);
    expect(data).toBe('open');
  });

  it('get request model', () => {
    const data: RequestModel = {
      requestId: '123',
      requestDate: new Date('February 23 2023'),
      userId: 'abc',
      requestedDepartment: 'xyz',
      ticketSummary: 'eee',
      ticketDescription: 'eeee',
      resolution: '',
      resolvedDate: '',
      ticketStatus: 'open',
      userRequests: [],
      totalItems: 0,
    };
    service.getRequest(data);
    expect(data).toEqual({
      requestId: '123',
      requestDate: new Date('February 23 2023'),
      userId: 'abc',
      requestedDepartment: 'xyz',
      ticketSummary: 'eee',
      ticketDescription: 'eeee',
      resolution: '',
      resolvedDate: '',
      ticketStatus: 'open',
      userRequests: [],
      totalItems: 0,
    });
  });

  it('get path', () => {
    const data = 'open';
    service.getPath(data);
    expect(data).toEqual('open');
  });

  it('get list by status', () => {
    const testData: RequestModel = {
      requestId: '',
      requestDate: new Date('February 23 2023'),
      userId: '',
      requestedDepartment: '',
      ticketSummary: '',
      ticketDescription: '',
      resolution: '',
      resolvedDate: '',
      ticketStatus: '',
      userRequests: [],
      totalItems: 0,
    };
    const page = 0;
    const status = 'closed';
    service
      .getListByStatus(page, status)
      .subscribe((data: RequestModel) => expect(data).toBe(testData));
    const req = httpController.expectOne(
      `${service.baseUrl}/list/${page}/5/${sessionStorage.getItem(
        'userId'
      )}/status/${status}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    expect(service).toBeDefined();
  });

  it('get list by dept', () => {
    const testData: RequestModel = {
      requestId: '',
      requestDate: new Date('February 23 2023'),
      userId: '',
      requestedDepartment: '',
      ticketSummary: '',
      ticketDescription: '',
      resolution: '',
      resolvedDate: '',
      ticketStatus: '',
      userRequests: [],
      totalItems: 0,
    };
    const page = 0;
    const dept = 'IT';
    service
      .getListByDept(page, dept)
      .subscribe((data: RequestModel) => expect(data).toBe(testData));
    const req = httpController.expectOne(
      `${service.baseUrl}/list/${page}/5/${sessionStorage.getItem(
        'userId'
      )}/dept/${dept}`
    );
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    expect(service).toBeDefined();
  });

  it('cancel the request', () => {
    const requestId = 'req001';
    const inputData: RequestModel = {
      requestId: '',
      requestDate: new Date('February 23 2023'),
      userId: '',
      requestedDepartment: '',
      ticketSummary: '',
      ticketDescription: '',
      resolution: '',
      resolvedDate: '',
      ticketStatus: 'open',
      userRequests: [],
      totalItems: 0,
    };
    const testData: RequestModel = {
      requestId: '',
      requestDate: new Date('February 23 2023'),
      userId: '',
      requestedDepartment: '',
      ticketSummary: '',
      ticketDescription: '',
      resolution: '',
      resolvedDate: '',
      ticketStatus: 'cancelled',
      userRequests: [],
      totalItems: 0,
    };
    service
      .cancelRequest(requestId, inputData)
      .subscribe((data: RequestModel) => expect(data).toEqual(testData));

    const req = httpController.expectOne(
      `${service.baseUrl}/cancel/${requestId}`
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(testData);
    expect(service).toBeDefined();
  });
  it('close the request', () => {
    const requestId = 'req001';
    const inputData: RequestModel = {
      requestId: '',
      requestDate: new Date('February 23 2023'),
      userId: '',
      requestedDepartment: '',
      ticketSummary: '',
      ticketDescription: '',
      resolution: '',
      resolvedDate: '',
      ticketStatus: 'Resolved',
      userRequests: [],
      totalItems: 0,
    };
    const testData: RequestModel = {
      requestId: '',
      requestDate: new Date('February 23 2023'),
      userId: '',
      requestedDepartment: '',
      ticketSummary: '',
      ticketDescription: '',
      resolution: '',
      resolvedDate: '',
      ticketStatus: 'closed',
      userRequests: [],
      totalItems: 0,
    };
    service
      .closeRequest(requestId, inputData)
      .subscribe((data: RequestModel) => expect(data).toEqual(testData));

    const req = httpController.expectOne(
      `${service.baseUrl}/close/${requestId}`
    );
    expect(req.request.method).toEqual('PUT');
    req.flush(testData);
    expect(service).toBeDefined();
  });
});
