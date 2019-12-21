import {Router} from 'express'

import {indexwelcome } from '../controllers/index.controller';

const router = Router();


router.route('/')
    .get(indexwelcome);

export default router;