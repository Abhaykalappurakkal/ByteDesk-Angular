import { RequestModel } from './request-model';

describe('RequestModel', () => {
  let request: RequestModel;

  beforeEach(() => {
    request = new RequestModel();
  });

  it('should create an instance', () => {
    expect(new RequestModel()).toBeTruthy();
  });

  it('should create a new instance of RequestModel with default values', () => {
    expect(request.requestId).toBeUndefined();
    expect(request.requestDate).toBeUndefined();
    expect(request.userId).toBeUndefined();
    expect(request.requestedDepartment).toBeUndefined();
    expect(request.ticketSummary).toBeUndefined();
    expect(request.ticketDescription).toBeUndefined();
    expect(request.resolution).toBeUndefined();
    expect(request.resolvedDate).toBeUndefined();
    expect(request.ticketStatus).toBeUndefined();
    expect(request.userRequests).toBeUndefined();
    expect(request.totalItems).toBeUndefined();
  });

  it('should set requestId property when given a string value', () => {
    request.requestId = '123';

    expect(request.requestId).toEqual('123');
  });

  it('should set requestDate property when given a Date object', () => {
    const date = new Date();
    request.requestDate = date;

    expect(request.requestDate).toEqual(date);
  });

  it('should set userId property when given a string value', () => {
    request.userId = 'user';

    expect(request.userId).toEqual('user');
  });

  it('should set requestedDepartment property when given a string value', () => {
    request.requestedDepartment = 'IT';

    expect(request.requestedDepartment).toEqual('IT');
  });

  it('should set ticketSummary property when given a string value', () => {
    request.ticketSummary = 'System error';

    expect(request.ticketSummary).toEqual('System error');
  });

  it('should set ticketDescription property when given a string value', () => {
    request.ticketDescription = 'The system is not responding';

    expect(request.ticketDescription).toEqual('The system is not responding');
  });

  it('should set resolution property when given a string value', () => {
    request.resolution = 'Restarted the server';

    expect(request.resolution).toEqual('Restarted the server');
  });

  it('should set resolvedDate property when given a string value', () => {
    request.resolvedDate = '2022-02-28';

    expect(request.resolvedDate).toEqual('2022-02-28');
  });

  it('should set ticketStatus property when given a string value', () => {
    request.ticketStatus = 'Closed';

    expect(request.ticketStatus).toEqual('Closed');
  });

  it('should set totalItems property when given a number value', () => {
    request.totalItems = 10;

    expect(request.totalItems).toEqual(10);
  });
});
