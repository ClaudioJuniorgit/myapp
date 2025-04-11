import { Router } from 'express';
import { UserController } from './modules/users/controller.js';
import { UserService } from './modules/users/service.js';
import { UserRepository } from './modules/users/repository.js';

const router = Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/users', userController.handle.bind(userController));

router.get('/users/:id', userController.handleOne.bind(userController));

router.post('/users', userController.handleCreate.bind(userController));

router.patch('/users/:id', userController.handleUpdate.bind(userController));

router.delete('/users/:id', userController.handleDelete.bind(userController));

export default router;
