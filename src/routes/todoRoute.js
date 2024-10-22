import { Router } from "express";
import todoController from "../controllers/todoController.js"

const router = Router();

router.post("/", todoController.store)
router.get("/", todoController.index)
router.get("/:id", todoController.show)
router.put("/:id", todoController.update)
router.delete("/:id", todoController.destroy)

export default router;