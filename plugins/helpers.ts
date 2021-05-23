import Vue from 'vue';

const Helpers = {
    methods: {
        formatDate(date: string): string {
            return new Date(date).toLocaleString('en-US');
        },
        formatNumber(x: number): string {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
    },
};
Vue.mixin(Helpers);
