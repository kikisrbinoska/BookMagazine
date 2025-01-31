<template>
  <div v-if="blog">
    <h1>{{ blog.title }}</h1>
    <img v-if="blog.coverImage" :src="blog.coverImage" alt="Cover Image" />
    <p><strong>Author:</strong> {{ blog.author }}</p>
    <p><strong>Published:</strong> {{ blog.releaseDate }}</p>
    <div v-html="blog.content"></div>
    <router-link to="/">Back to Blogs</router-link>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { createClient } from "contentful";

const route = useRoute();
const blog = ref(null);

const client = createClient({
  space: "pdhxtv0ei3j5",
  accessToken: "nqX75OZk7RwLVyRAQ8ompmozQkaytU8GTsCEJKwV0E0",
});

const fetchBlog = async () => {
  const { fields } = await client.getEntry(route.params.id);
  blog.value = {
    title: fields.blogTitle,
    author: fields.authorName,
    content: fields.blogContent,
    releaseDate: fields.releaseDate,
    coverImage: fields.coverImage?.fields.file.url ?? null,
  };
};

onMounted(fetchBlog);
</script>
