<template>
    <div v-if="$nuxt.isOnline" class="dark:bg-black dark:text-white">
        <main v-if="!loading">
            <div class="min-h-screen flex flex-col">
                <Navbar />
                <Header />
            </div>
            <div>
                <StatsDaily ref="dailyStats" :stats="stats" />
                <StatsAllTime ref="allTimeStats" :stats="stats" />
                <StatsCountries ref="countryStats" :countries="countries" />
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
    <div
        v-else
        class="min-h-screen flex flex-col dark:bg-black dark:text-white"
    >
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
        if (!['dark', 'light'].includes(localStorage.theme)) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        }

        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },
});
</script>
