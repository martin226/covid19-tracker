<template>
    <main class="h-full" v-if="!loading">
        <p class="mt-3 italic">
            Data automatically updates every 5 minutes.
        </p>
        <p class="mt-3">Last Updated: {{ formatDate(date) }}</p>
        <h2 class="text-3xl m-5 font-bold">Daily Global Report</h2>
        <StatsReport :stats="stats" :daily="true" />
        <h2 class="text-3xl m-5 font-bold">All-Time Global Report</h2>
        <StatsReport :stats="stats" :daily="false" />
    </main>
    <main class="flex justify-center items-center flex-grow" v-else>
        <LoadingCircle />
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import * as client from '~/API/client';

export default Vue.extend({
    name: 'Index',
    data() {
        return {
            loading: true,
            date: '',
            stats: {}
        };
    },
    async fetch() {
        this.loading = true;
        const data = await client.summary();
        this.date = data.Date;
        this.stats = data.Global;
        this.loading = false;
    },
    async created() {
        setInterval(this.$fetch, 300000);
    }
});
</script>
