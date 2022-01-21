import { version } from '../../../../package.json';
import config from '@config/config';

const swaggerDef = {
    openapi: '3.0.0',
    info: {
        title: 'File Converter API',
        version,
        description: 'API for file conversion',
        contact: {
            name: 'Felipe Endlich',
            email: 'endlichfelipe@gmail.com',
        },
    },
    servers: [
        {
            url: `http://localhost:${config.port}/v1`,
        },
    ],
};

export default swaggerDef;
