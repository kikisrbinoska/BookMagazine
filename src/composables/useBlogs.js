// src/composables/useBlogs.js
import { ref } from 'vue';
import axios from 'axios';

// Replace these with your Contentful space ID and access token
const spaceId = 'pdhxtv0ei3j5'; // Your Space ID from Contentful
const accessToken = 'nqX75OZk7RwLVyRAQ8ompmozQkaytU8GTsCEJKwV0E0'; // Your Access Token from Contentful

// Contentful API URL for fetching entries
const apiUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries`;

export function useBlogs() {
  const blogs = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // Fetching the books (blogs in your case)
  const fetchBlogs = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      blogs.value = response.data.items.map(item => ({
        ...item.fields,
        id: item.sys.id, // Add the ID from Contentful's response
      }));
    } catch (err) {
      error.value = 'Failed to fetch books';
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // Call the function to fetch books when this composable is used
  fetchBlogs();

  return {
    blogs,
    loading,
    error,
    fetchBlogs, // In case you need to manually trigger the fetch
  };
}
