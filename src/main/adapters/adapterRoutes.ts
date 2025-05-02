import { Request, Response, NextFunction, RequestHandler } from 'express';

interface HttpResponse {
    statusCode: number;
    body: any;
    header?: any;
    }

    export const adaptRoute = (controller: any): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
        const httpResponse: HttpResponse = await controller.handle(req);

        if (httpResponse.header) {
            res.set(httpResponse.header);
        }

        res.status(httpResponse.statusCode).json(httpResponse.body);
        } catch (error) {
        next(error);
        }
    };
};