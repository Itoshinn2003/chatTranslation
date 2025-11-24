import { defineStore } from 'pinia';

export const userStore = defineStore('userStore', {
    state: () => ({
        userData: null as null | string
    }),
    actions: {
        getUserData() {
            this.userData = window.sessionStorage.getItem('id');
        }
    }
});