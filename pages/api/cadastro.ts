import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) =>{
    const tarefaData = req.body

    const savedTarefa = await prisma.tarefa.create({
        data: tarefaData
    })

    return res.json(savedTarefa)

}