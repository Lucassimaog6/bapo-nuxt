import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const { groupId } = await readBody(event);
	return await prisma.message.findMany({
        where: {
            groupId: groupId
        },
        include: {
            author: true
        }
    });	
});