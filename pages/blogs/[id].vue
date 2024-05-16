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
          <!-- <img src="/images/company/core-1.png" class="w-full" /> -->
        </div>
        <div class="mt-8">
          <SanityContent :blocks="blog.content" />
        </div>
        <NuxtLink to="/blogs" class="read-more text-center mt-20">
          <button class="read-more-btn big-size black-color" data-v-a2720cde="">
            <div class="inner" data-v-a2720cde="">
              <span class="icon arrow-right" data-v-a2720cde="">
                <span class="icon-container arrow-right-icon-container" data-v-a2720cde="">
                  <svg data-v-a2720cde="" width="11" height="11" view-box="0 0 11 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="plus-icon arrow-right-icon shadow-icon">
                    <line data-v-a2720cde="" x1="5.38281" y1="0.75" x2="5.38281" y2="10.25" stroke="#fff"
                      stroke-width="1.5" stroke-linecap="round"></line>
                    <line data-v-a2720cde="" x1="10.25" y1="5.38159" x2="0.75" y2="5.38159" stroke="#fff"
                      stroke-width="1.5" stroke-linecap="round"></line>
                  </svg>
                  <svg data-v-a2720cde="" width="11" height="11" viewBox="0 0 11 11" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="plus-icon arrow-right-icon">
                    <line data-v-a2720cde="" x1="5.38281" y1="0.75" x2="5.38281" y2="10.25" stroke="#2C2C2C"
                      stroke-width="1.5" stroke-linecap="round"></line>
                    <line data-v-a2720cde="" x1="10.25" y1="5.38159" x2="0.75" y2="5.38159" stroke="#2C2C2C"
                      stroke-width="1.5" stroke-linecap="round"></line>
                  </svg>
                </span>
              </span>
              <span class="label-sizer" data-v-a2720cde="">View All Releases</span>
            </div>
          </button>
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

    .read-more {
      display: block;

      .read-more-btn {
        cursor: pointer;
        position: relative;
        transition: transform .5s cubic-bezier(.19, 1, .22, 1);

        &:active {
          transform: scale(.9);
        }

        &:hover {
          .inner {
            transform: scale(1.15);

            .icon {
              &:before {
                opacity: 1;
                transform: scale(1);
              }
            }

            .arrow-right-icon-container {
              .shadow-icon {
                opacity: 1 !important;
                transform: translate(0) !important;
              }

              svg {
                path {
                  stroke: #fff;
                }
              }

              .arrow-right-icon {
                opacity: 0;
                transform: translate(30px);
              }
            }
          }

        }

        .inner {
          height: 3.5rem;
          border-radius: 60px;
          align-items: center;
          border: 1px solid transparent;
          display: flex;
          position: relative;
          transition: transform .5s cubic-bezier(.19, 1, .22, 1);
          will-change: transform;

          &:before {
            background-color: #2c2c2c;
            border-radius: 60px;
            transform-origin: center;
            transition: transform .5s cubic-bezier(.19, 1, .22, 1);
            content: "";
            display: block;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
            z-index: 0;
          }

          .icon {
            height: 2.125rem;
            width: 2.125rem;
            border-radius: 50px;
            margin-left: 11px;
            align-items: center;
            background-color: #fff;
            display: flex;
            justify-content: center;
            overflow: hidden;
            position: relative;

            svg {
              path {
                transition: stroke .5s cubic-bezier(.19, 1, .22, 1);
              }
            }

            &:before {
              background-color: #2c2c2c;
              border-radius: 100%;
              content: "";
              display: block;
              height: calc(100% - 4px);
              left: 2px;
              opacity: 0;
              position: absolute;
              top: 2px;
              transform: scale(0);
              transform-origin: center;
              transition: opacity .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);
              width: calc(100% - 4px);
            }

            .arrow-right-icon-container {
              transform: scale(1.2);
              transform-origin: center;

              .arrow-right-icon {
                display: block;
                left: 1px;
                position: relative;
                transition: opacity .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);
              }

              .shadow-icon {
                display: block;
                left: 0;
                position: absolute;
                top: 0;
                transform: translate(-30px);
                width: 100%;
                opacity: 0;
                transition: opacity .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);
              }
            }
          }
        }

        .label-container {
          left: 3.75rem;
          align-items: center;
          display: flex;
          height: 100%;
          position: absolute;
          top: 0;
          width: 100%;
        }

        .label-sizer {
          color: #fff;
          display: inline-block;
          font-size: 1.3125rem;
          padding: 0 2.125rem 0 1.375rem;
          letter-spacing: -.01em;
          line-height: 1em;
          position: relative;
          top: -1px;
          transition: transform .5s cubic-bezier(.19, 1, .22, 1);
          white-space: nowrap;
        }
      }
    }
  }
}
</style>