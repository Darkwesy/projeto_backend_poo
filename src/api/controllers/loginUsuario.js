import Express from 'express';
import crypto from 'crypto';
import UserClass from '../models/classUser.js';

export const loginRouter = Express.Router();

loginRouter.post('/', (request, response) => {
  const { email, password } = request.body;
  const passwordHash = crypto.createHash('md5').update(password).digest('hex');
  const NewUser = new UserClass(email, passwordHash);
  console.log(NewUser);

  response.status(201).json({
    status: true,
    message: `Login Sucess at ${NewUser.email}`,
  });
});
