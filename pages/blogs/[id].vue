<script setup>
useHead({
  title: 'CampusEntri | Blogs'
});
import { get, filter } from 'lodash';
const route = useRoute();
const query = groq`*[_type == "blogs" && _id == "${route.params.id}"][0]`;
const { data } = await useSanityQuery(query);
const blog = get(data, 'value', {});
</script>

<template>
  <div>
    <div class="blog-wrapper relative">
      <div class="flex px-8">
        <div class="title-col flex flex-col justify-between items-start relative ml-0 md:ml-[18.75%] w-full md:w-3/4">
          <h2 class="list-title release-title">{{ get(blog, 'title', '') }}</h2>
          <p class="date mt-5">{{ new Date(get(blog, '_createdAt', '')).toDateString() }}</p>
        </div>
      </div>
      <div class="blog-container ml-0 md:ml-[18.75%] w-full md:w-3/4 px-4">
        <div v-if="get(blog, 'poster.asset._ref')" class="image-wrapper w-full">
          <SanityImage class="rounded-lg w-full" :asset-id="get(blog, 'poster.asset._ref')" />
        </div>
        <div class="mt-8">
          <SanityContent :blocks="blog.content" />
        </div>
        <NuxtLink to="/blogs" class="read-more text-center mt-20">
          <BtnReadMore :title="'View All Releases'" />
        </NuxtLink>
      </div>
    </div>
    <BlogsFooter />
  </div>
</template>

<style lang="scss" scoped>
.blog-wrapper {
  padding-bottom: calc(1.32813rem + .72917vw);
  padding-top: calc(2.65625rem + 8.125vw);

  .title-col {
    border-bottom: 1px solid rgba(44, 44, 44, .2);
    margin-bottom: calc(1.40625rem + 1.45833vw);
    padding-bottom: calc(1.44531rem + 1.82292vw);
    z-index: 1;

    .list-title {
      font-size: calc(1.79688rem + 2.10417vw);
      color: #2c2c2c;
      font-family: 'Aeonik-Regular';
      letter-spacing: -.02em;
      line-height: 1em;
    }

    .date {
      color: #2c2c2c;
      font-family: 'Aeonik-Regular';
      font-size: .8125rem;
      line-height: 1.4em;
      position: relative;
      transition: color .25s cubic-bezier(.19, 1, .22, 1);
    }
  }

  .blog-container {
    display: block;
    height: calc(100% - 40px);
    padding-bottom: calc(1.48438rem + 2.1875vw);

    p {
      font-family: 'Aeonik-Regular';
      font-size: .8125rem;
      line-height: 1.4em;
      margin-bottom: calc(1.48438rem + 2.1875vw);
    }

    .read-more {
      display: block;
    }
  }
}
</style>