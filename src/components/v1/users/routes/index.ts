import { Router } from 'express';
import { validate } from 'middlewares';

import { createUserController, deleteUserController, getAllUsersController, getUserByIdController } from '../controllers';
import { createUserValidator } from '../validators';

const usersRouter = Router();

usersRouter.get('/', getAllUsersController);
usersRouter.post('/', validate(createUserValidator), createUserController);
usersRouter.get('/:id', getUserByIdController);
usersRouter.delete('/:id', deleteUserController);

export default usersRouter;
