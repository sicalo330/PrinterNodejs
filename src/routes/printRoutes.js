import { Router } from "express"
import { print } from "../controllers/printController"

const router = Router()

router.get('/print', print)

export default router
