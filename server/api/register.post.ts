import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const { username, password } = await readBody(event);

	const allGroups = await prisma.group.findMany();

	const existentUser = await prisma.user.findUnique({
		where: {
			username: username,
		},
	});

	if (existentUser) {
		return createError({
			statusCode: 400,
			message: 'User already exists',
		});
	}

	return await prisma.user.create({
		data: {
			username: username,
			password: password,
			groups: {
				connect: allGroups.map((group) => ({ id: group.id })),
			},
		},
	});
});
