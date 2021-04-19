import {Router} from 'express';
import {HomeControler, RegisterController, LoginController, LogoutController} from '#root/controllers/user.controller';
import {verifySessionMiddleware, verifySessionHome} from '#root/config/junk';
const router = Router();

router.get('/', HomeControler);


router.post('/register', RegisterController);
router.post('/login',verifySessionMiddleware, LoginController);
router.post('/logout', LogoutController);

export default router;