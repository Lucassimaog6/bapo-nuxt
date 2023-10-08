import { prisma } from '~/server/prisma/prisma';

export default defineEventHandler(async (event) => {
	const { groupId } = await readBody(event);
	return await prisma.message.findMany({
		where: {
			groupId: groupId,
		},
		include: {
			author: true,
		},
	});
});
