<template>
    <div class="text-center flex flex-col h-screen">
        <Header />
        <main v-if="!loading"></main>
        <main class="flex justify-center items-center flex-grow" v-else>
            <LoadingCircle />
        </main>
    </div>
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
            currentCountry: 'Global',
            date: '',
            stats: {},
            countries: [] as Country[]
        };
    },
    methods: {
        async fetchSummary() {
            this.loading = true;
            const data = await client.summary();
            this.date = data.Date;
            this.stats = data.Global;
            this.countries = data.Countries;
            this.loading = false;
        }
    },
    async created() {
        await this.fetchSummary();
        setInterval(async () => {
            await this.fetchSummary();
        }, 300000);
    }
});
</script>
