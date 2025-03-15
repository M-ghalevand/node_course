import { createUserController, deleteUserController, getAllUsersController, getUserByIdController } from 'controllers';
import { Router } from 'express';

const router = Router();

router.get('/', getAllUsersController);
router.post('/', createUserController);
router.get('/:id', getUserByIdController);
router.delete('/:id', deleteUserController);

export default router;
