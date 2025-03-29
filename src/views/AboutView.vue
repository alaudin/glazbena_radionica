<script setup>
import Location from '@/components/Location.vue'
</script>
<template class="flex flex-col justify-center items-center p-2 m-auto">
  <!-- O nama -->
  <section class="max-w-7xl p-2 m-auto mt-8">
    <h1 class="ml-4 lg:ml-6 mb-4 text-4xl tracking-tight font-extrabold text-gray-900">O nama</h1>
    <p class="text-justify">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore deleniti corrupti
      consequatur eos aliquam exercitationem fuga iure beatae deserunt, natus dignissimos, ipsam
      cupiditate numquam unde quos atque iusto sequi sapiente! Quasi eveniet hic praesentium dolores
      quisquam unde reprehenderit soluta, maxime enim, nam dicta ipsum aspernatur. Beatae omnis
      adipisci quia reiciendis officia asperiores vel assumenda nostrum, eum repellat iure. Modi,
      culpa. Perferendis omnis aliquam tempore quo. Neque quibusdam laboriosam suscipit rerum itaque
      quod quos aspernatur? Labore quaerat obcaecati, facilis debitis doloremque velit voluptatum
      provident unde impedit. Ipsa reiciendis eaque quasi aperiam. Maiores, illum, eius odit
      aspernatur at assumenda distinctio quia nesciunt reprehenderit quidem blanditiis eos, aut
      quibusdam molestiae? Voluptas molestias id doloremque velit quos! Similique minus labore
      pariatur delectus eius quaerat! Nobis enim sint iste animi pariatur, placeat id quia! Maiores
      beatae debitis, dolor vero esse cumque blanditiis quisquam facilis dolores recusandae tenetur!
      Vel dolorem molestias sit facere dignissimos velit aut!
    </p>
  </section>
  <!-- Kartice sa uposlenicima-->
  <section class="max-w-7xl p-2 m-auto mt-8">
    <h1 class="ml-4 lg:ml-6 mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Osoblje</h1>

    <div class="w-full lg:max-w-full lg:flex mt-6">
      <div
        class="max-w-sm h-80 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style="background-image: url('/src/assets/img/user1.png')"
        title="profesor"
      ></div>
      <div class="p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">Ime i Prezime</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quidem sunt vel
            perferendis maiores consectetur, labore ducimus aut earum ipsam ratione illo laudantium
            rerum nostrum quis quas eveniet repudiandae fuga! Consequatur voluptates tempora
            accusamus provident ipsum aliquid, saepe magni perspiciatis reiciendis et quaerat quia
            expedita. Veniam quo commodi aliquid fugit officia ipsam. Molestiae magni minus nihil
            assumenda dolorum, veniam eos. Reiciendis excepturi eius quod dolor eveniet quo
            explicabo accusantium eum in! Ut harum, asperiores quisquam explicabo, sit quibusdam
            facere voluptates modi aliquid dolorem obcaecati, nisi inventore magni! Adipisci, harum?
            Vitae?
          </p>
        </div>
      </div>
    </div>
    <div class="w-full lg:max-w-full lg:flex mt-6">
      <div
        class="max-w-sm h-80 lg:h-auto lg:w-60 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style="background-image: url('/src/assets/img/user2.png')"
        title="profesor"
      ></div>
      <div class="bg-white p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">Ime i Prezime</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quidem sunt vel
            perferendis maiores consectetur, labore ducimus aut earum ipsam ratione illo laudantium
            rerum nostrum quis quas eveniet repudiandae fuga! Consequatur voluptates tempora
            accusamus provident ipsum aliquid, saepe magni perspiciatis reiciendis et quaerat quia
            expedita. Veniam quo commodi aliquid fugit officia ipsam. Molestiae magni minus nihil
            assumenda dolorum, veniam eos. Reiciendis excepturi eius quod dolor eveniet quo
            explicabo accusantium eum in! Ut harum, asperiores quisquam explicabo, sit quibusdam
            facere voluptates modi aliquid dolorem obcaecati, nisi inventore magni! Adipisci, harum?
            Vitae?
          </p>
        </div>
      </div>
    </div>
  </section>
  <Location />
</template>
