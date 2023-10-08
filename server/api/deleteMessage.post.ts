import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const { messageId } = await readBody(event);
	return await prisma.message.delete({
        where: {
            id: parseInt(messageId),
        },
    });
});