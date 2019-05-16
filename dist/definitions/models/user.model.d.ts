import { Request, Response, NextFunction } from 'express';
export declare class User {
    _model: any;
    constructor(norm: any);
    deleteUser(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUser(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createUser(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllUsers(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUserById(model: any): (req: Request, res: Response, next: NextFunction) => Promise<void>;
    model: any;
}
