import httpStatus from 'http-status';
import pick from '@api-v1/helpers/pick';
import catchAsync from '@api-v1/helpers/catchAsync';
import { controller } from '@api-v1/interfaces';
import { Request, Response } from 'express';
import { HtmlToPdfService as service } from '@api-v1/services';

export const fromUrl = catchAsync(async (req: Request<any, any, controller.htmlToPdf.IFromUrlBody>, res: Response) => {
    const { url } = req.body;
    const response = await service.fromUrl(url);
    res.status(httpStatus.OK).send(response);
});

export const fromCode = catchAsync(
    async (req: Request<any, any, controller.htmlToPdf.IFromCodeBody>, res: Response) => {
        const { code } = req.body;
        const response = await service.fromCode(code);
        res.status(httpStatus.OK).send(response);
    }
);
