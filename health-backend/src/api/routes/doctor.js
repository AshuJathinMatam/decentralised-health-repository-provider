import { Router } from 'express';
import { requestAccess, register, profile } from '../controllers/doctor/index.js';
import { auth, imageUpload } from '../middlewares/index.js';
import temp from '../controllers/user/register-user-ledger-old.js'
import multer from 'multer';
import {upload} from '../../utils/index.js';

const router = Router();

// AUTH

// router.post('/verify-mobile', verifyMobile);
router.post('/register', register);
// router.post('/logout', auth, logout);
// // router.post('/verify-email', verifyEmail);
// router.post('/refresh-token', refreshToken);
// // router.post('/forgot-password', auth, forgotPassword);
// router.post('/send-verification-code', sendVerificationCode);
router.get('/profile', auth, profile);
router.post('/request-access', requestAccess)

// router.post('/createEHR', upload.single('files'), auth, createEHR);

// EDIT
// router.post('/change-password', auth, changePassword);
// router.put('/', auth, imageUpload, editUser);
// router.get('/', auth, getUser);
// router.delete('/', auth, deleteUser);

export default router