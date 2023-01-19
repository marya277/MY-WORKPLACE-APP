import { Router } from "express";
import { getUsers, createUser } from "../controllers/users.controller.js";
const router = Router()

router.get('/users', getUsers)
router.post('/users', createUser)
router.put('/users')
router.delete('/users/:id')
router.delete('/users/:id')

export default router
