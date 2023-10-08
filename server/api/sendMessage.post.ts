import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const { groupId, authorId, content } = await readBody(event);
	return await prisma.message.create({
		data: {
			content: content,
			authorId: authorId,
			groupId: groupId,
		},
	});
});
