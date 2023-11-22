import {defineStore} from 'pinia';

export const useExampleStore = defineStore('example', {
    state: () => ({
        id: 0,
        name: 'Usman Asghar',
        email: '',
    }),
    getters: {
        getName: (state) => state.name,
    },
    actions: {
        setName() {
            this.name = 'Muhammad Usman';
        },
    },
});
