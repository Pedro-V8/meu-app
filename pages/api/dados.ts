import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) =>{
    const dataTarefas = await prisma.tarefa.findMany()

    return res.json(dataTarefas)

}