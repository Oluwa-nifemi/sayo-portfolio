<script setup lang="ts">
import Left from "~/images/left.svg"
import Right from "~/images/right.svg"
import Close from "~/images/close.svg"
import gsap from "gsap";

const props = defineProps({
    id: {
        type: String
    },
    count: {
        type: Number,
        required: true
    }
})

const carousel = ref()

const basePath = `/illustrations/${props.id}`

const modalOpen = ref(false);
const activeImage = ref(1)
const isAnimatingImages = ref(false);

const toggleModalOpen = () => {
    modalOpen.value = !modalOpen.value;
    activeImage.value = 1
}

const handleLeft = () => {
    activeImage.value = Math.max(activeImage.value - 1, 1);
}

const handleRight = () => {
    activeImage.value = Math.min(activeImage.value + 1, props.count);
}


const animateImage = () => {
    isAnimatingImages.value = true;

    const image = carousel.value.querySelector('[data-main-image]')!;
    const targetImage = image.cloneNode() as HTMLImageElement;
    targetImage.classList.add('absolute')
    image.parentElement!.append(targetImage);

    const currentDimensions = image.getBoundingClientRect();
    const targetDimensions = targetImage.getBoundingClientRect();


    const scaleX = currentDimensions.width / targetDimensions.width;
    const scaleY = currentDimensions.height / targetDimensions.height;

    targetImage.style.width = `${currentDimensions.width}px`
    targetImage.style.height = `${currentDimensions.height}px`
    targetImage.style.top = `${currentDimensions.top}px`
    targetImage.style.left = `${currentDimensions.left}px`
    targetImage.style.transform = `translate(0px, 0px)`

    targetImage.classList.add('show')

    modalOpen.value = true;

    gsap.to(targetImage, {
        left: targetDimensions.left,
        top: targetDimensions.top,
        width: targetDimensions.width,
        height: targetDimensions.height,
    }).then(() => {
        isAnimatingImages.value = false;
        targetImage.remove();
    })
}
</script>

<template>
    <div class="carousel" ref="carousel">
        <div @click="animateImage">
            <img :src="`${basePath}/1.jpg`" alt="" class="carousel__main" data-main-image>
            <img :src="`${basePath}/2.jpg`" alt="" class="carousel__preview">
        </div>
      <div class="modal" :class="{active: modalOpen}">
        <div class="modal__overlay" @click="toggleModalOpen"/>
          <button class="modal__close" @click="toggleModalOpen">
              <Close/>
          </button>
          <button class="modal__left" @click="handleLeft" :disabled="activeImage === 1">
              <Left/>
          </button>
          <button class="modal__right" @click="handleRight" :disabled="activeImage === count">
              <Right/>
          </button>
          <img v-for="i in count" :src="`${basePath}/${i}.jpg`" alt="" class="modal__image" :class="{active: activeImage === i}" v-if="!isAnimatingImages">
          <div class="modal__dots">
              <span v-for="i in count" class="modal__dot" :class="{active: activeImage === i}"/>
          </div>
      </div>
    </div>
</template>

<style scoped>

</style>