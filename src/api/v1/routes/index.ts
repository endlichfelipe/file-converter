import express, { Router } from 'express';
import config from '@config/config';
import htmlRoute from './HtmlRoute';
import docsRoute from './DocRoute';
import { ENVIRONMENT } from '@config/constants';

const router: Router = express.Router();

const defaultRoutes: { path: string; route: Router }[] = [
    {
        path: '/html',
        route: htmlRoute,
    },
];

const devRoutes: { path: string; route: Router }[] = [
    {
        path: '/docs',
        route: docsRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

if (config.env === ENVIRONMENT.DEVELOPMENT) {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

export default router;
