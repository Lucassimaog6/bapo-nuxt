import { prisma } from '~/server/prisma/prisma';

export default defineEventHandler(async (event) => {
	const { messageId } = await readBody(event);
	return await prisma.message.delete({
        where: {
            id: parseInt(messageId),
        },
    });
});