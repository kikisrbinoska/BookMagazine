<template>
  <div>
    <h1>{{ isEditing ? "Edit Blog" : "Create Blog" }}</h1>
    <form @submit.prevent="saveBlog">
      <input v-model="blog.title" placeholder="Title" required />
      <input v-model="blog.author" placeholder="Author" required />
      <textarea v-model="blog.content" placeholder="Content"></textarea>
      <input v-model="blog.releaseDate" type="date" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const blog = ref({
  title: "",
  author: "",
  content: "",
  releaseDate: "",
});

const saveBlog = async () => {
  console.log("Saving Blog:", blog.value);
};
</script>
