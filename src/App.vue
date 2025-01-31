<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">New Blog</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup></script>

<style>
nav {
  padding: 10px;
}
</style>
