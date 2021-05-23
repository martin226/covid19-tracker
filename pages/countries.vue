<template>
    <main v-if="!loading" class="my-auto">
        <p class="mt-3 italic">Data automatically updates every 5 minutes.</p>
        <p class="mt-3">Last Updated: {{ formatDate(date) }}</p>
        <h2 class="text-3xl m-5 font-bold">Individual Country Statistics</h2>
        <CountryTable :countries="countries" />
    </main>
    <main v-else class="flex justify-center items-center flex-grow">
        <LoadingCircle />
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import summary from '~/API/client';
import { Country } from '~/API/interfaces';

export default Vue.extend({
    name: 'Index',
    data() {
        return {
            loading: true,
            date: '',
            countries: [] as Country[],
        };
    },
    async fetch() {
        this.loading = true;
        const data = await summary();
        this.date = data.Date;
        this.countries = data.Countries;
        this.loading = false;
    },
    created() {
        setInterval(this.$fetch, 300000);
    },
});
</script>
