"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("@config/config"));
let server = app_1.default.listen(config_1.default.port, () => {
    console.log(`App listening on port ${config_1.default.port}`);
});
// const exitHandler = () => {
//     if (server) {
//         logger.info('Closing server...');
//         server.close(() => {
//             logger.info('Server closed.');
//             process.exit(1);
//         });
//     } else {
//         logger.info('Server not running.');
//         process.exit(1);
//     }
// };
// const unexpectedErrorHandler = (err: Error) => {
//     logger.error(err);
//     exitHandler();
// };
// process.on('uncaughtException', unexpectedErrorHandler);
// process.on('unhandledRejection', unexpectedErrorHandler);
// process.on('SIGTERM', () => {
//     logger.info('SIGTERM received');
//     if (server) {
//         server.close();
//     }
// });
