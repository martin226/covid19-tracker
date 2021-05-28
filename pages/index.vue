<template>
    <div v-if="$nuxt.isOnline">
        <main v-if="!loading">
            <div class="min-h-screen flex flex-col">
                <Navbar />
                <Header />
            </div>
        </main>
        <main
            v-else
            class="min-h-screen flex justify-center items-center flex-grow"
        >
            <LoadingCircle />
        </main>
    </div>
    <div v-else>
        <Navbar />
        <div class="text-center">
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

export default Vue.extend({
    name: 'Index',
    data() {
        return {
            loading: true,
            date: '',
            stats: {},
        };
    },
    async fetch() {
        this.loading = true;
        const data = await summary();
        this.date = data.Date;
        this.stats = data.Global;
        this.loading = false;
    },
    created() {
        setInterval(this.$fetch, 300000);
    },
});
</script>
