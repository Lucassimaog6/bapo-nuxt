export default async function (groupId: number) {
    const messages = await $fetch('/api/message', {
        method: 'POST',
        body: { groupId: groupId },
    });
    return messages;
}