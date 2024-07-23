import { Request, Response, NextFunction } from 'express';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';

jest.mock('../services/user.service');

const mockRequest = () => {
  const req = {} as Request;
  req.body = {};
  return req;
};

const mockResponse = () => {
  const res = {} as Response;
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

const mockNext = () => jest.fn() as NextFunction;

describe('UserController', () => {
  let userController: UserController;
  let userService: jest.Mocked<UserService>;

  beforeEach(() => {
    userService = new UserService() as jest.Mocked<UserService>;
    userController = new UserController();
  });

  it('should register a user successfully', async () => {
    const req = mockRequest();
    const res = mockResponse();
    const next = mockNext();

    req.body = {
      name: 'Test User',
      email: 'email@testemail.com',
      password: 'testPassword',
      role: 'adminTest',
      privileges: ['testPrivileges'],
    };

    userService.registerUser.mockResolvedValue(req.body);

    await userController.registerUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
  });
});
