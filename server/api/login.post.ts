import { prisma } from '~/server/prisma/prisma';

export default defineEventHandler(async (event) => {
	const { username, password } = await readBody(event);
	const existentUser = await prisma.user.findUnique({
		where: {
			username: username,
		},
	});
	if (existentUser === null) {
		return createError({
			statusCode: 404,
			message: 'Usuário não encontrado',
		});
	}
	if (existentUser.password !== password) {
		return createError({
			statusCode: 401,
			message: 'Senha incorreta',
		});
	}
	return existentUser.id;
});
