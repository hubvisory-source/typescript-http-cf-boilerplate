import { HttpFunction } from '@google-cloud/functions-framework/build/src/functions';
import { Request, Response } from 'express';

export const helloFunction: HttpFunction = (req, res) => {
  handleHttpRequest(req, res)
};

export function handleHttpRequest(req: Request, res: Response): void {
    res.send('Hello !')
}