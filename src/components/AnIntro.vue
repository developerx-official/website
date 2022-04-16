<script lang="ts">
import GlitchedWriter from "vue-glitched-writer";
import Config from "../components/GlitchesWriterConfig.json";

export default {
    name: "LoadingView",
    components: {
        GlitchedWriter
    },
    data() {
        return {
            title: ["", "Developer X"],
            subTitle: ["", "19-year-old developer, very cool and loves pizza."]
        };
    },
    setup() {
        return { config: Config }
    }
};
</script>

<template>
    <div class="h-full lg:px-0 px-10">
        <div class="flex justify-center max-w-3xl mx-auto mb-16 sm:px-0">
            <div class="mt-8">
                <h1 class="text-6xl font-bold">
                    <GlitchedWriter :text="title" :options="config.options" :queueOptions="config.queueOptions" />
                </h1>
                <p class="text-lg text-gray-600 dark:text-gray-400 max-w-sm mt-2">
                    <GlitchedWriter :text="subTitle" :options="config.options" :queueOptions="config.queueOptions" />
                </p>
            </div>
        </div>
    </div>
</template>