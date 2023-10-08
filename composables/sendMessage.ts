export default async function (messageContent: string, currentGroup: number, userId: number) {
    if (!messageContent) return;
    $fetch('/api/sendMessage', {
        method: 'POST',
        body: {
            groupId: currentGroup,
            authorId: userId,
            content: messageContent,
        },
    });
    messageContent = '';
}