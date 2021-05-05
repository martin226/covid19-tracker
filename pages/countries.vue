<template>
    <main v-if="!loading">
        <p class="mt-3 italic">
            Data automatically updates every 5 minutes.
        </p>
        <h2 class="text-3xl m-5 font-bold">
            Individual Country Statistics
        </h2>
        <CountryTable :countries="countries" />
    </main>
    <main class="flex justify-center items-center flex-grow" v-else>
        <LoadingCircle />
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import * as client from '~/API/client';
import { Country } from '~/API/interfaces';

export default Vue.extend({
    name: 'Index',
    data() {
        return {
            loading: true,
            date: '',
            countries: [] as Country[]
        };
    },
    async fetch() {
        this.loading = true;
        const data = await client.summary();
        this.date = data.Date;
        this.countries = data.Countries;
        this.loading = false;
    },
    async created() {
        setInterval(this.$fetch, 300000);
    }
});
</script>
