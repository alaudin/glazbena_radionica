<script setup>
import EmployeeCard from '@/components/EmployeeCard.vue'
import Location from '@/components/Location.vue'
import employee1 from '/img/user1.png'
import employee2 from '/img/user2.png'
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
  <!-- Employees-->
  <section class="max-w-7xl p-2 m-auto mt-8">
    <h1 class="ml-4 lg:ml-6 mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Osoblje</h1>

    <EmployeeCard name="Alaudin Hujdur" :image="employee1" />
    <EmployeeCard name="Neko Drugi" :image="employee2" />
  </section>
  <Location />
</template>
