import express, { Router } from 'express';
import validate from '@api-v1/middlewares/validate';
import { HtmlValidation as validation } from '@api-v1/validations';
import { HtmlController as controller } from '@api-v1/controllers';

const router: Router = express.Router();

router.route('/from-url').post(validate(validation.fromUrl), controller.fromUrl);
router.route('/from-code').post(validate(validation.fromCode), controller.fromCode);

export default router;

/**
 * @swagger
 *  tags:
 *    name: Html Converter
 *    description: Converter for html to pdf
 */

/**
 * @swagger
 * /html/from-url:
 *   post:
 *     summary: Convert a website to pdf
 *     description: Convert a website to pdf
 *     tags: [Html Converter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - url
 *             properties:
 *               url:
 *                 type: string
 *                 description: Url to convert
 *             examples:
 *               url: https://www.google.com
 *     responses:
 *       '200':
 *         description: Returns PDF
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 *
 *
 * /html/from-code:
 *   post:
 *     summary: Convert html code to pdf
 *     description: Convert html code to pdf
 *     tags: [Html Converter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *             properties:
 *               code:
 *                 type: string
 *                 description: HTML code to convert
 *             examples:
 *               code: <h1>Hello World</h1>
 *     responses:
 *       '200':
 *         description: Returns PDF
 *         content:
 *           application/pdf:
 *             schema:
 *               type: string
 *               format: binary
 */
