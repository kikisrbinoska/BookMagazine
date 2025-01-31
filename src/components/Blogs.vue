<template>
  <div>
    <h1>Books</h1>

    <!-- Display Loading message if fetching books -->
    <div v-if="loading">Loading books...</div>

    <!-- Display Error message if fetching fails -->
    <div v-else-if="error">{{ error }}</div>

    <!-- Display the list of books if fetched successfully -->
    <div v-else>
      <ul>
        <li v-for="book in blogs" :key="book.id">
          <h3>{{ book.title }}</h3>
          <p>{{ book.authorName }}</p>
          <p>{{ book.bookDescription }}</p>
          <p>{{ book.releaseDate }}</p>
          <img v-if="book.coverImage" :src="book.coverImage.fields.file.url" alt="Cover Image" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useBlogs } from '../composables/useBlogs'; // Import the composable

export default {
  setup() {
    const { blogs, loading, error, fetchBlogs } = useBlogs(); // Use the composable

    // Return the reactive variables to be used in the template
    return {
      blogs,
      loading,
      error,
    };
  },
};
</script>
