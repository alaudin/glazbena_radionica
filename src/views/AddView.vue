<script setup>
import { reactive } from 'vue'
import axios from 'axios'
import router from '@/router'
import { useToast } from 'vue-toastification'

const toast = useToast()
const form = reactive({
  ime: '',
  prezime: '',
  broj: '',
  solf: '',
  ins: '',
})

const submit = async () => {
  const novi = {
    ime: form.ime,
    prezime: form.prezime,
    broj: form.broj,
    solf: form.solf,
    ins: form.ins,
  }

  try {
    await axios.post('http://localhost:5000/ucenici', novi)
    router.push('/')
    toast.success('Uspješno ste se prijavili!')
  } catch (error) {
    console.error('Error posting data', error)
    toast.error('Greška sa prijavom!')
  }
}
</script>

<template>
  <form @submit.prevent="submit" class="m-auto p-6 max-w-2xl">
    <h2 class="text-3xl text-center font-semibold mb-6">Prijava</h2>

    <div class="mb-4">
      <label for="name" class="block text-gray-700 font-bold mb-2">Ime</label>
      <input
        v-model="form.ime"
        type="text"
        id="name"
        name="name"
        class="border rounded w-full py-2 px-3 mb-2"
        required
      />
    </div>

    <div class="mb-4">
      <label for="surname" class="block text-gray-700 font-bold mb-2">Prezime</label>
      <input
        v-model="form.prezime"
        type="text"
        id="surname"
        name="surname"
        class="border rounded w-full py-2 px-3 mb-2"
        required
      />
    </div>
    <div class="mb-4">
      <label for="phone" class="block text-gray-700 font-bold mb-2">Broj telefona</label>
      <input
        v-model="form.broj"
        type="tel"
        id="phone"
        name="phone"
        maxlength="10"
        class="border rounded w-full py-2 px-3 mb-2"
        required
      />
    </div>

    <div class="mb-4">
      <label for="solf" class="block text-gray-700 font-bold mb-2">Solfeggio</label>
      <select
        v-model="form.solf"
        id="solf"
        name="solf"
        class="border rounded w-full py-2 px-3"
        required
      >
        <option value="da">Da</option>
        <option value="ne">Ne</option>
      </select>
    </div>
    <div class="mb-4">
      <label for="inst" class="block text-gray-700 font-bold mb-2">Instrument</label>
      <select
        v-model="form.ins"
        id="inst"
        name="solf"
        class="border rounded w-full py-2 px-3"
        required
      >
        <option value="gitara">Gitara</option>
        <option value="harmonika">Harmonika</option>
        <option value="klavir">Klavir</option>
        <option value="violina">Violina</option>
      </select>
    </div>
    <div>
      <button
        class="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Prijavi se!
      </button>
    </div>
  </form>
</template>
