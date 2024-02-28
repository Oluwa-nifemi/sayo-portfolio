<script setup lang="ts">
import Logo from "~/images/logo.svg"
import LandingImage from "~/assets/images/landing.png"
</script>

<template>
    <Logo/>
    <section class="landing">
        <img src="~/assets/images/landing.png" alt="" class="landing__image">
        <h1 class="landing__header">
            Hi, I’m Kiishi.
        </h1>
        <p class="landing__subtext">
            background design artist and illustrator
        </p>
    </section>
    <section class="about">
        <h1 class="about__header">
            About Me
        </h1>
        <div class="about__content">
            <p class="about__subtext">
                <br/>
                <br/>
                Hello,
                <br/>
                <br/>
                My name is Kiishi Abudu. I am a background design artist and illustrator based in Lagos, Nigeria. I really love world building and creating pieces that are fun to me; and whoever finds them fun as well.
                I have worked on different art projects, from portraits, to comics, concept art, animation, collections, personal projects... I love what I do.
                <br/>
                Welcome to my digital canvas.
            </p>
            <figure class="about__image">
                <img src="~/assets/images/about.png" alt="">
            </figure>
        </div>
    </section>
</template>

<style scoped>

</style>