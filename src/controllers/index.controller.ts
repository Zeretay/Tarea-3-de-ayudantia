import { Request, Response } from 'express';


export function indexwelcome(req:Request,res:Response): Response{
    return res.json('bienvenido');
}