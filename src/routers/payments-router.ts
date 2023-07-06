import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getEnrollmentByUser, postCreateOrUpdateEnrollment, getAddressFromCEP } from '@/controllers';
import { createEnrollmentSchema } from '@/schemas';

const paymentsRouter = Router();

paymentsRouter
    .all('/*', authenticateToken)
    .get('/',)
    .post('/process',)

export { paymentsRouter };
