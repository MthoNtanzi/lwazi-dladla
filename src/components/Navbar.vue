<template>
  <nav class="flex gap-6 p-4 bg-gray-100 shadow-md">
    <router-link to="/" class="hover:underline">Home</router-link>
    <router-link to="/about" class="hover:underline">About</router-link>
    <router-link to="/expertise" class="hover:underline">Expertise</router-link>
    <router-link to="/projects" class="hover:underline">Projects</router-link>
  </nav>
</template>

<script>
// import { name } from '@vue/eslint-config-prettier/skip-formatting';

export default {
    name: 'NavbarItem'
  }
</script>
