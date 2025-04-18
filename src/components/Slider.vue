<script setup>
import { ref, onUnmounted } from 'vue'
import solf from '/img/slider/solf.jpg'
import guitar from '/img/slider/guitar_1280.jpg'
import piano from '/img/slider/piano_1280.jpg'
import { RouterLink } from 'vue-router'

const images = [
  {
    src: solf,
    alt: 'Image 1',
  },
  {
    src: guitar,
    alt: 'Image 2',
  },
  {
    src: piano,
    alt: 'Image 3',
  },
]

const currentSliderIndex = ref(0)
let intervalId

const nextSlide = () => {
  currentSliderIndex.value = (currentSliderIndex.value + 1) % images.length
}

const startSlider = () => {
  intervalId = setInterval(() => {
    nextSlide()
  }, 3000)
}

startSlider()

onUnmounted(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div class="h-full max-w-7xl flex flex-col m-auto">
    <div class="relative w-full mx-auto overflow-hidden">
      <div class="flex relative max-w-7xl pb-[56.25%] m-auto">
        <span class="text-white font-bold text-3xl w-xl z-11 m-8"
          >Naučite nove vještine, usavršite svoje talente i uživajte u kreativnom okruženju. Upis je
          otvoren!</span
        >
        <RouterLink to="cijene">
          <button
            class="bg-gray-700 hover:bg-gray-500 absolute bottom-10 right-10 h-12 w-30 rounded-xl text-white font-bold z-11"
          >
            Saznajte više
          </button></RouterLink
        >
        <template v-for="(image, index) in images" :key="index">
          <transition name="fade">
            <img
              :src="image.src"
              :alt="image.alt"
              class="aspect-[16/9] absolute w-full h-full object-cover"
              v-if="index === currentSliderIndex"
            />
          </transition>
        </template>

        <!-- indicators -->
        <div class="absolute bottom-0 flex h-24 w-full justify-center items-center">
          <ol class="z-50 flex w-4/12 justify-center">
            <li
              v-for="index in images"
              :key="index"
              :class="
                index === currentSliderIndex
                  ? 'md:w-4 md:h-4 bg-gray-100 rounded-full cursor-pointer mx-2'
                  : 'md:w-4 md:h-4 bg-gray-400 rounded-full cursor-pointer mx-2'
              "
            ></li>
          </ol>
        </div>
      </div>
      <section class="mt-4 m-auto relative max-w-7xl text-justify">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae architecto aspernatur
        similique incidunt consequatur dolorum tempora quo dignissimos molestiae doloribus quis,
        debitis quae eos delectus quasi tempore! Maiores, dolorem enim! Itaque impedit culpa illum
        tempore cupiditate repudiandae adipisci quis expedita quidem, labore aut? Omnis maxime
        laboriosam rerum repellat et non animi. Sint possimus ipsam voluptas officiis molestias
        sapiente aliquid sit? Accusamus, ipsa ratione aspernatur excepturi, voluptatem fugit cumque
        officiis eius, in doloremque asperiores odio ab harum voluptates magnam odit ipsum eum?
        Corporis nostrum quis sit earum architecto nam illum doloribus. Dolores aspernatur fugit
        animi quod impedit est. Fugiat tempora sit et qui numquam saepe consequuntur omnis quia
        dolorem fuga incidunt, quod adipisci eveniet sapiente, ratione culpa possimus sint,
        recusandae ipsa? Obcaecati qui minus consectetur voluptatem reprehenderit quasi quae
        delectus, ea explicabo provident repellendus, asperiores ipsum ratione dolore aliquam sed
        minima beatae? Alias praesentium inventore ab nam necessitatibus magni, adipisci odio!
        Voluptatem optio dignissimos reiciendis labore deserunt excepturi blanditiis temporibus at
        minus! Eius deserunt aliquam tempore sapiente. Provident omnis libero ratione animi iusto.
        Impedit, laborum non. Similique ullam minus nobis a! Quae beatae possimus sit, adipisci
        expedita unde molestiae earum labore? Voluptates, voluptatum in eveniet, ratione magnam
        porro accusantium aut, ipsum ut modi reprehenderit atque animi laborum. Architecto optio
        animi aut. Similique illum, maxime doloremque fuga nam omnis minima fugiat praesentium
        cumque molestiae quos reprehenderit accusantium labore, natus dicta magnam obcaecati velit
        sint atque aut modi dolore amet iste adipisci? Dolores.
      </section>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 1s,
    transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}
</style>
