import { createUserController, deleteUserController, getAllUsersController, getUserByIdController } from 'controllers';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', getAllUsersController);
usersRouter.post('/', createUserController);
usersRouter.get('/:id', getUserByIdController);
usersRouter.delete('/:id', deleteUserController);

export default usersRouter;
