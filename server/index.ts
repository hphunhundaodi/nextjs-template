import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({
  // 最好加上log不然不知道为啥报错了 因为是serverless
  log: ['query', 'info', 'warn', 'error'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

async function main() {
  try {
    // const newPost = await prisma.post.create({
    //   data: {
    //     title: 'first prisma',
    //     content: 'la 呱皮.6!!',
    //     date: new Date()
    //   }
    // })
    console.log(1213123);
    const newPost = await prisma.post.findMany()
    console.log('newPost', newPost);
    
    return NextResponse.json(newPost)
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}
// main()