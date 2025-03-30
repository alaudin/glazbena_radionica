<script setup>
import { reactive, onMounted } from 'vue'
import axios from 'axios'
import { useToast } from 'vue-toast-notification'
import router from '@/router'

const state = reactive({
  ucenici: {},
  isLoading: true,
})
const toast = useToast()
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

const delUcenik = async (id) => {
  try {
    const confirm = window.confirm('Želite li izbrisati učenika?')
    if (confirm) {
      await axios.delete(`http://localhost:5000/ucenici/${id}`)
      toast.success('Uspješno ste izbrisali učenika')
      router.push('/admin')
    }
  } catch (error) {
    toast.error('Nije moguće izbrisati učenika')
    console.error('greska', error)
  }
}
</script>

<template>
  <div>
    <table class="table-auto w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="">Ime</th>
          <th class="">Prezime</th>
          <th class="">Telefon</th>
          <th class="">Solfeggio</th>
          <th class="">Instrument</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(ucenik, id) in state.ucenici" :key="id" class="text-center">
          <td>{{ ucenik.ime }}</td>
          <td>{{ ucenik.prezime }}</td>
          <td>{{ ucenik.broj }}</td>
          <td>{{ ucenik.solf }}</td>
          <td>{{ ucenik.ins }}</td>
          <td class="max-w-8">
            <button type="button" class="hover:text-red-500" @click="delUcenik(ucenik.id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
