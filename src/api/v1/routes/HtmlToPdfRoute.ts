import express, { Router } from 'express';
import validate from '@api-v1/middlewares/validate';
import { HtmlToPdfValidation as validation } from '@api-v1/validations';
import { HtmlToPdfController as controller } from '@api-v1/controllers';

const router: Router = express.Router();

router.route('/from-url').post(validate(validation.fromUrl), controller.fromUrl);
router.route('/from-code').post(validate(validation.fromCode), controller.fromCode);

export default router;
