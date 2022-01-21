import express, { Router } from 'express';
import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerDefinition from '@api-v1/docs/swaggerDef';

const router: Router = express.Router();

const specs = swaggerJSDoc({
    swaggerDefinition,
    apis: ['src/api/v1/docs/*yml', 'src/api/v1/routes/*.ts'],
});

router.use('/', swaggerUi.serve);
root: router.get('/', swaggerUi.setup(specs, { explorer: true }));

export default router;
