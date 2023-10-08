import { prisma } from '~/server/prisma/prisma';

export default defineEventHandler(async (event) => {
	const { userId } = await readBody(event);
	console.log(userId);
	return await prisma.group.findMany({
		where: {
			users: {
				some: {
					id: userId,
				},
			},
		},
	});
});
