import 'dotenv/config'
import express, { Application, ErrorRequestHandler, NextFunction, Request, Response } from 'express';

import { PrismaClient } from '@prisma/client'

import { attachRouters } from 'routes/attachRouters';

const app: Application = express();
export const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = 5050;

attachRouters(app)

/**
 * GERENCIAMENTO DE ERROS CENTRALIZADO
 * Não remova os 4 parâmetros da função de callback abaixo
 * pois é a presença dos 4 que informa ao Express que este
 * é um local centralizado para o gerenciamento de erros.
 */
app.use((error: { status: number, message: string }, req: Request, res: Response, next: NextFunction) => {
    res.status(error.status).json({ message: error.message });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})