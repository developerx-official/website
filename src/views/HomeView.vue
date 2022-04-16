<script lang="ts">
import NavigationBar from "@/components/NavigationBar.vue";
import AnIntro from "../components/AnIntro.vue";

export default {
    name: "HomeView",
    components: {
        NavigationBar,
        AnIntro
    },
};
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <NavigationBar />
        <AnIntro />
    </div>
</template>

<style scoped>
</style>
