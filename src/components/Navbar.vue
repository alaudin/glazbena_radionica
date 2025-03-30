<script setup>
import logo from '@/assets/img/icon-removebg.png'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import router from '@/router'

const navigation = [
  { name: 'Upis', to: '/upis', current: false },
  { name: 'Odsjeci', to: '/odsjeci', current: false },
  { name: 'Cijene', to: '/cijene', current: false },
  { name: 'O nama', to: '/about', current: false },
]
const adminPass = 'alaudin'
const enterPass = () => {
  var temp = prompt('Unesite šifru:')
  if (temp === adminPass) {
    sessionStorage.setItem('isAuthenticated', 'true')
    router.push('/admin')
  }
}
</script>

<template class="absolute">
  <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <RouterLink to="/" class="flex shrink-0 items-center">
            <img class="h-8 w-12 bg-white rounded-md px-2 mx-2" :src="logo" alt="logo" />
            <span class="font-bold text-white text-xl text-wrap">Glazbena radionica</span>
          </RouterLink>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.to"
                class="rounded-md px-3 py-2 text-sm font-medium text-nowrap text-gray-300 hover:bg-gray-700 hover:text-white"
                active-class="bg-gray-900 text-white"
                exact-active-class="bg-gray-900 text-white"
                >{{ item.name }}</RouterLink
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>
              <button
                class="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                @click="enterPass"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8 rounded-full"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>
            </div>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden" v-slot="{ close }">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <RouterLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.to"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          active-class="bg-gray-900 text-white"
          exact-active-class="bg-gray-900 text-white"
          @click="close"
          >{{ item.name }}</RouterLink
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
