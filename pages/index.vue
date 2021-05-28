<template>
    <div v-if="$nuxt.isOnline">
        <main v-if="!loading">
            <div class="min-h-screen flex flex-col">
                <Navbar />
                <Header ref="header" />
            </div>
            <div>
                <StatsDaily ref="dailyStats" :stats="stats" />
                <StatsAllTime :stats="stats" />
                <StatsCountries :countries="countries" />
                <Footer />
            </div>
        </main>
        <main
            v-else
            class="min-h-screen flex justify-center items-center flex-grow"
        >
            <LoadingCircle />
        </main>
    </div>
    <div v-else class="min-h-screen flex flex-col">
        <Navbar />
        <div class="text-center h-full m-auto align-middle">
            <font-awesome-icon
                class="text-9xl text-blue-800 my-10"
                :icon="['fas', 'exclamation-triangle']"
            />
            <p class="text-2xl">
                An error occurred while connecting to the internet.
            </p>
        </div>
        <Footer />
    </div>
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
            stats: {},
            countries: [] as Country[],
        };
    },
    async fetch() {
        const data = await summary();
        this.date = data.Date;
        this.stats = data.Global;
        this.countries = data.Countries;
        this.loading = false;
    },
    created() {
        this.loading = true;
        setInterval(this.$fetch, 300000);
    },
    mounted() {
        const interval = setInterval(() => {
            if (this.$refs.header && this.$refs.dailyStats) {
                clearInterval(interval);
                const viewStats = (this.$refs.header as Vue).$refs
                    .viewStats as HTMLElement;
                const dailyStats = (this.$refs.dailyStats as Vue)
                    .$el as HTMLElement;
                viewStats.addEventListener('click', () => {
                    dailyStats.scrollIntoView({ behavior: 'smooth' });
                });
            }
        }, 50);
    },
});
</script>
