import express, { Router } from 'express';
import config from '@config/config';
import htmlToPdfRoute from './HtmlToPdfRoute';
import { ENVIRONMENT } from '@config/constants';

const router: Router = express.Router();

const defaultRoutes: { path: string; route: Router }[] = [
    {
        path: '/html-to-pdf',
        route: htmlToPdfRoute,
    },
];

const devRoutes: { path: string; route: Router }[] = [];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

if (config.env === ENVIRONMENT.DEVELOPMENT) {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

export default router;
