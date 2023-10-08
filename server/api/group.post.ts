import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const { userId } = await readBody(event)
	console.log(userId);
	return await prisma.group.findMany({
		where: {
			users: {
				some: {
					id: userId
				}
			}
		}
	});	
});