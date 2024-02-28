<script setup lang="ts">
import Left from "~/images/left.svg"
import Right from "~/images/right.svg"
import Close from "~/images/close.svg"

const props = defineProps({
    id: {
        type: String
    },
    count: {
        type: Number,
        required: true
    }
})
const basePath = `/illustrations/${props.id}`

const modalOpen = ref(false);
const activeImage = ref(1)

const toggleModalOpen = () => {
    modalOpen.value = !modalOpen.value;
    activeImage.value = 1
}
9
const handleLeft = () => {
    activeImage.value = Math.max(activeImage.value - 1, 1);
}

const handleRight = () => {
    activeImage.value = Math.min(activeImage.value + 1, props.count);
}

</script>

<template>
    <div class="carousel">
        <div @click="toggleModalOpen">
            <img :src="`${basePath}/1.jpg`" alt="" class="carousel__main">
            <img :src="`${basePath}/2.jpg`" alt="" class="carousel__preview">
        </div>
      <div class="modal" v-if="modalOpen">
        <div class="modal__overlay"/>
          <div class="modal__main">
              <button class="modal__close" @click="toggleModalOpen">
                  <Close/>
              </button>

              <img v-for="i in count" :src="`${basePath}/${i}.jpg`" alt="" class="modal__image" :class="{active: activeImage === i}">
              <button class="modal__left" @click="handleLeft" :disabled="activeImage === 1">
                  <Left/>
              </button>
              <button class="modal__right" @click="handleRight" :disabled="activeImage === count">
                  <Right/>
              </button>
          </div>
      </div>
    </div>
</template>

<style scoped>

</style>