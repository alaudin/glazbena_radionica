<script setup>
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    default: 'Ime i Prezime',
  },
  image: String,
})
</script>

<template>
  <div class="w-full lg:max-w-full lg:flex mt-6">
    <div
      class="max-w-sm h-80 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="{ backgroundImage: `url('${image}')` }"
      title="profesor"
    ></div>
    <div class="p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{ name }}</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quidem sunt vel
          perferendis maiores consectetur, labore ducimus aut earum ipsam ratione illo laudantium
          rerum nostrum quis quas eveniet repudiandae fuga! Consequatur voluptates tempora accusamus
          provident ipsum aliquid, saepe magni perspiciatis reiciendis et quaerat quia expedita.
          Veniam quo commodi aliquid fugit officia ipsam. Molestiae magni minus nihil assumenda
          dolorum, veniam eos. Reiciendis excepturi eius quod dolor eveniet quo explicabo
          accusantium eum in! Ut harum, asperiores quisquam explicabo, sit quibusdam facere
          voluptates modi aliquid dolorem obcaecati, nisi inventore magni! Adipisci, harum? Vitae?
        </p>
      </div>
    </div>
  </div>
</template>
