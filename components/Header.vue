<template>
    <nav
        class="text-white flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-purple-800 shadow sm:items-baseline w-full"
    >
        <div class="mb-2 sm:mb-0">
            <NuxtLink to="/" class="font-bold text-3xl md:text-4xl">
                <font-awesome-icon :icon="['fas', 'shield-virus']" /> COVID-19
                Tracker</NuxtLink
            >
            <p class="text-center">
                Built with
                <a href="https://covid19api.com" class="text-purple-300"
                    >https://covid19api.com/</a
                >
            </p>
        </div>
        <div class="pr-4">
            <NuxtLink
                to="/countries"
                class="text-lg no-underline text-white hover:text-purple-300 ml-2"
                >Countries</NuxtLink
            >
        </div>
    </nav>
</template>
