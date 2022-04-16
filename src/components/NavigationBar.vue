<script lang="ts">
import GlitchedWriter from "vue-glitched-writer";
import Config from "../components/GlitchesWriterConfig.json"
export default {
    name: "NavigationBar",
    components: {
        GlitchedWriter,
    },
    data() {
        return {
            homeMsgs: ["", "home"],
            projectsMsgs: ["", "projects"],
            blogMsgs: ["", "blog"],
            aboutMsgs: ["", "about"],
        }
    },
    setup() {
        return { config: Config }
    }
}
</script>

<template>
    <nav class="z-50 w-full flex justify-center items-center mx-auto max-w-4xl px-8 my-20">
        <a class="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
            href="/">
            <GlitchedWriter :text="homeMsgs" />
        </a>
        <a class="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
            href="/projects">
            <GlitchedWriter :text="projectsMsgs" :options="config.options" :queueOptions="config.queueOptions" />
        </a>
        <a class="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
            href="/blog">
            <GlitchedWriter :text="blogMsgs" :options="config.options" :queueOptions="config.queueOptions" />
        </a>
        <a class="focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
            href="/about">
            <GlitchedWriter :text="aboutMsgs" :options="config.options" :queueOptions="config.queueOptions" />
        </a>
        <!-- <div class="ml-auto">
            <svg aria-hidden="true" focusable="false" data-prefix="fad" data-icon="sun"
                class="svg-inline--fa fa-sun fa-w-16 h-4 w-4 text-gray-800 dark:text-gray-200" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <g class="fa-group">
                    <path class="fa-secondary" fill="currentColor"
                        d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z">
                    </path>
                    <path class="fa-primary" fill="currentColor"
                        d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"></path>
                </g>
            </svg>
        </div> -->
    </nav>
</template>

<style scoped>
</style>