import { Router } from "express";
import { createProduct,getAllProducts } from "../controllers/product";
import { verifyPermission } from "../middleware/authmiddleware";
import {checkAuthMiddleware} from '../middleware/authmiddleware';
import { UserRolesEnum } from "../constants";
import { upload } from "../middleware/multer";

const router=Router();

router.post('/',checkAuthMiddleware,verifyPermission([UserRolesEnum.ADMIN]),upload.fields([{name:"image",maxCount:1}]), createProduct);
router.get('/',checkAuthMiddleware, getAllProducts);

export default router;