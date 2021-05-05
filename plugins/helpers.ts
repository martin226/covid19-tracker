import Vue from 'vue';

const Helpers = {
    methods: {
        formatDate: function(date: string): string {
            return new Date(date).toLocaleString('en-US');
        },
        formatNumber: function(x: number): string {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
    }
};
Vue.mixin(Helpers);
