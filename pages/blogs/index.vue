<script setup>
useHead({
  title: 'CampusEntri | Blogs'
});
import { get } from 'lodash';
const query = groq`*[_type == "blogs"]`;
const { data } = await useSanityQuery(query);
const blogs = get(data, 'value', []);
</script>

<template>
    <div class="blog-content">
        <BlogsReleases :blogs="blogs" />
        <!-- <BlogsPublications :blogs="publications" /> -->
        <CollegesPromo />
        <BlogsFooter />
    </div>
</template>