<template>
    <div
        class="
            bg-gray-100
            py-20
            px-5
            md:px-24
            xl:px-36
            grid grid-cols-1
            lg:grid-cols-2
            xl:gap-x-52
            2xl:gap-x-96
            dark:bg-gray-800
        "
    >
        <div>
            <p class="py-8 text-xl leading-loose">
                Real-time statistics tracker for the novel coronavirus
                (2019-nCoV), with global reports and individual country data.
            </p>
        </div>
        <div class="lg:ml-24 grid grid-cols-2 gap-x-4 sm:gap-x-24">
            <div class="py-3">
                <p
                    class="
                        text-gray-600
                        font-medium
                        pb-2
                        text-lg
                        leading-loose
                        dark:text-gray-400
                    "
                >
                    COVID-19 TRACKER
                </p>
                <a
                    class="cursor-pointer text-lg leading-loose underline"
                    target="_blank"
                    @click="scrollToDaily()"
                    >Daily Stats</a
                >
                <br />
                <a
                    class="cursor-pointer text-lg leading-loose underline"
                    target="_blank"
                    @click="scrollToAllTime()"
                    >All-Time Stats</a
                >
                <br />
                <a
                    class="cursor-pointer text-lg leading-loose underline"
                    target="_blank"
                    @click="scrollToCountry()"
                    >Country Stats</a
                >
            </div>
            <div class="py-3">
                <p
                    class="
                        text-gray-600
                        font-medium
                        pb-2
                        text-lg
                        leading-loose
                        dark:text-gray-400
                    "
                >
                    LINKS
                </p>
                <a
                    href="https://github.com/martin-sit/covid19-tracker"
                    class="text-lg leading-loose underline"
                    target="_blank"
                    >Source Code</a
                >
                <br />
                <a
                    href="https://github.com/martin-sit"
                    class="text-lg leading-loose underline"
                    target="_blank"
                    >Github</a
                >
                <br />
                <a
                    href="https://covid19api.com"
                    class="text-lg leading-loose underline"
                    target="_blank"
                    >API</a
                >
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    methods: {
        scrollToDaily() {
            (this.$parent.$refs.dailyStats as Vue).$el.scrollIntoView({
                behavior: 'smooth',
            });
        },
        scrollToAllTime() {
            (this.$parent.$refs.allTimeStats as Vue).$el.scrollIntoView({
                behavior: 'smooth',
            });
        },
        scrollToCountry() {
            (this.$parent.$refs.countryStats as Vue).$el.scrollIntoView({
                behavior: 'smooth',
            });
        },
    },
});
</script>
