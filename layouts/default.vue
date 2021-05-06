<template>
    <div class="text-center flex flex-col h-screen">
        <Header />
        <Nuxt v-if="$nuxt.isOnline" />
        <Error
            v-else
            error="An error occurred while connecting to the internet."
        />
        <Footer />
    </div>
</template>
