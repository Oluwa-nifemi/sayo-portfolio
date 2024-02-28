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
    <section class="illustrations-h">
        <div>
            <h1 class="illustrations-h__heading">
                Illustrations
            </h1>
            <p class="illustrations-h__subtext">
                <br/>
                <br/>
                This is a collection of paintings I made in Adobe Photoshop called the Beauty in Black Collection.
                I made them to represent -as the name implies- the beauty in blackness; specifically in black women. They are 12 silhouettes that feature different body and hair types.
            </p>
        </div>
        <carousel id="illustrations" :count="12" class="illustrations-h__carousel"/>
    </section>
    <section class="illustrations-v">
        <div>
            <h1 class="illustrations-v__heading">
                Background Painting 1
            </h1>
            <p class="illustrations-v__subtext">
                This is a study background I painted as one of my projects for Izzy Burton,s course on Cinematic Digital Illustration with Photoshop. You also get to see snapshots of my progress from start to finish.
            </p>
        </div>
        <carousel id="bg-painting-1" :count="12" class="illustrations-v__carousel"/>
    </section>
    <section class="illustrations-h">
        <div>
            <h1 class="illustrations-h__heading">
                Background Painting 2
            </h1>
            <p class="illustrations-h__subtext">
                <br/>
                <br/>

                This is a study background I painted as one of my projects for Izzy Burton,s course on Cinematic Digital Illustration with Photoshop. You also get to see snapshots of my progress from start to finish.
            </p>
        </div>
        <carousel id="bg-painting-2" :count="12" class="illustrations-h__carousel"/>
    </section>
    <section class="illustrations-v">
        <div>
            <h1 class="illustrations-v__heading">
                Background Painting 3
            </h1>
            <p class="illustrations-v__subtext">

                This is a study background I painted. You also get to see snapshots of my progress from start to finish.I used Adobe Photoshop for this.
            </p>
        </div>
        <carousel id="bg-painting-3" :count="12" class="illustrations-v__carousel"/>
    </section>
    <section class="illustrations-h">
        <div>
            <h1 class="illustrations-h__heading">
                Background Painting 4
            </h1>
            <p class="illustrations-h__subtext">
                This is a study background of the Eko Bridge in Lagos, Nigeria. I used Adobe Photoshop for this as well. There are also some progress shots.
            </p>
        </div>
        <carousel id="bg-painting-4" :count="12" class="illustrations-h__carousel"/>
    </section>
    <section class="contact">
        <h1 class="contact__header">
            Contact Info.
        </h1>
        <a href="mailto:kiishicreatesart@gmail.com" class="contact__email">
            kiishicreatesart@gmail.com
        </a>
    </section>
</template>

<style scoped>

</style>