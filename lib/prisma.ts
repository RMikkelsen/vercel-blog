import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;

//single instance of PrismaClient to be used across application where needed 
// Your prisma instance will be your interface to the database when you want to read and write data in it. 
// You can for example create a new User record by calling prisma.user.create() or retrieve all the Post records from the database with prisma.post.findMany(). 