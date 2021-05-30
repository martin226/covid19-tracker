<template>
    <nav
        class="
            flex flex-col
            text-center
            mx-auto
            sm:flex-row
            sm:justify-between
            py-8
            sm:px-6
            sm:items-baseline
            w-10/12
        "
    >
        <div>
            <NuxtLink to="/" class="font-bold text-3xl md:text-4xl">
                <font-awesome-icon :icon="['fas', 'shield-virus']" />
                COVID-19 Tracker</NuxtLink
            >
        </div>
        <div class="w-14 h-8 mt-5 mx-auto sm:m-0">
            <input
                id="dark-mode-toggle"
                type="checkbox"
                class="hidden"
                onchange="document.documentElement.classList.toggle('dark')"
                @change="toggleTheme()"
            />
            <label
                for="dark-mode-toggle"
                class="
                    w-full
                    h-full
                    bg-gray-800
                    dark:bg-white
                    rounded-full
                    p-1
                    flex
                    justify-between
                    cursor-pointer
                "
            >
                <span class="inline dark:hidden">🌞</span>
                <span
                    class="
                        w-6
                        h-6
                        rounded-full
                        bg-white
                        dark:bg-gray-800
                        block
                        float-right
                        dark:float-left
                    "
                ></span>
                <span class="hidden dark:inline">🌛</span>
            </label>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    methods: {
        toggleTheme() {
            if (localStorage.theme === 'dark') {
                localStorage.theme = 'light';
            } else if (localStorage.theme === 'light') {
                localStorage.theme = 'dark';
            }
        },
    },
});
</script>
