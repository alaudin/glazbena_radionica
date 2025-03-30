<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import { useRoute } from 'vue-router'

const route = useRoute()
const state = reactive({
  ucenici: {},
  isLoading: true,
})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/ucenici')

    state.ucenici = response.data
  } catch (error) {
    console.error('Greška pri pristupu učenicima')
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <div class="user-list">
    <table class="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border px-4 py-2">Ime</th>
          <th class="border px-4 py-2">Prezime</th>
          <th class="border px-4 py-2">Telefon</th>
          <th class="border px-4 py-2">Solfeggio</th>
          <th class="border px-4 py-2">Instrument</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(ucenik, id) in state.ucenici" :key="id">
          <td class="border px-4 py-2">{{ ucenik.ime }}</td>
          <td class="border px-4 py-2">{{ ucenik.prezime }}</td>
          <td class="border px-4 py-2">{{ ucenik.broj }}</td>
          <td class="border px-4 py-2">{{ ucenik.solf }}</td>
          <td class="border px-4 py-2">{{ ucenik.ins }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
