// export const userId = () => useState<number | undefined>('userId', undefined)
// export const currentGroup = () => useState<number | undefined>('currentGroup', undefined)

import { defineStore } from 'pinia';

export const useUserIdStore = defineStore('userId', {
	state: () => ({ userId: 0 }),
    actions: {
        setUserId(userId: number) {
            this.userId = userId;
        }
    }
});

export const useCurrentGroupStore = defineStore('currentGroup', {
    state: () => ({ currentGroup: 0 }),
    actions: {
        setCurrentGroup(currentGroup: number) {
            this.currentGroup = currentGroup;
        }
    }
});
