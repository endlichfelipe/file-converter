import app from './app';
import { Server } from 'http';
import config from '@config/config';
import logger from '@config/Logger';

let server: Server = app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`);
});

const exitHandler = () => {
    if (server) {
        logger.info('Closing server...');
        server.close(() => {
            logger.info('Server closed.');
            process.exit(1);
        });
    } else {
        logger.info('Server not running.');
        process.exit(1);
    }
};

const unexpectedErrorHandler = (err: Error) => {
    logger.error(err);
    exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
    logger.info('SIGTERM received');
    if (server) {
        server.close();
    }
});
