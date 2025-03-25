import { Router } from 'express';
import { validate } from 'middlewares';
import { createUserValidator } from 'validators';

import { createUserController, deleteUserController, getAllUsersController, getUserByIdController } from '../controllers';

const usersRouter = Router();

usersRouter.get('/', getAllUsersController);
usersRouter.post('/', validate(createUserValidator), createUserController);
usersRouter.get('/:id', getUserByIdController);
usersRouter.delete('/:id', deleteUserController);

export default usersRouter;
