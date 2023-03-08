import { User } from './user';

describe('User', () => {
  let user: User;

  beforeEach(() => {
    user = new User();
  });

  it('should create a new instance of User with default values', () => {
    expect(user.userId).toBeUndefined();
    expect(user.password).toBeUndefined();
    expect(user.userName).toBeUndefined();
    expect(user.salutation).toBeUndefined();
    expect(user.userCode).toBeUndefined();
    expect(user.token).toBeUndefined();
  });

  it('should set userId property when given a string value', () => {
    user.userId = 'user';

    expect(user.userId).toEqual('user');
  });

  it('should set password property when given a string value', () => {
    user.password = 'password';

    expect(user.password).toEqual('password');
  });

  it('should set userName property when given a string value', () => {
    user.userName = 'name';

    expect(user.userName).toEqual('name');
  });

  it('should set salutation property when given a string value', () => {
    user.salutation = 'Mr.';

    expect(user.salutation).toEqual('Mr.');
  });

  it('should set userCode property when given a string value', () => {
    user.userCode = 'ABC';

    expect(user.userCode).toEqual('ABC');
  });

  it('should set token property when given a string value', () => {
    user.token = 'abc';

    expect(user.token).toEqual('abc');
  });
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
