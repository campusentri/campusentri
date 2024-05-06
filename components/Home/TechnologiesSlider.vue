<script setup>
import { get, filter } from 'lodash';
const query = groq`*[_type == "colleges"] {
  ...,
  collegeVideo {
    asset-> {
      url
    }
  }
}
`;
const { data } = await useSanityQuery(query);
const colleges = get(data, 'value', []);
const filterNames = ['AJ Institute', 'Yenepoya Institute', 'NITTE', 'Srinivas College', 'Mangala College', 'Father Muller']
const filteredColleges = filter(colleges, (college) => filterNames.includes(college.name));
</script>

<template>
    <div class="slider-list mt-12">

        <Swiper 
            :height="200" 
            :modules="[SwiperScrollbar]" 
            :slides-per-view="2.5" 
            :loop="false"
            :effect="'scrollbar'"
            :scrollbar="{
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                snapOnRelease: true,
                snapOnDrag: true,
                releaseOnEdges: true,
                clickable: true,
            }"
        >
            <SwiperControls />

            <SwiperSlide v-for="(slide, idx) in filteredColleges" :key="idx">
                <NuxtLink :to="`/colleges#${get(slide, 'name', '')}`">
                    <div class="slider-item">
                        <div class="order-number">
                            <span class="index">{{ idx + 1 }}</span>
                        </div>
                        <div class="image-container">
                            <SanityImage class="rounded-lg" :asset-id="get(slide, 'poster.asset._ref', '')" />
                            <!-- <img :src="slide.image" /> -->
                        </div>
                        <h4>{{ get(slide, 'name', '') }}</h4>
                    </div>
                </NuxtLink>
            </SwiperSlide>

        </Swiper>
        <div class="swiper-scrollbar"></div>
    </div>
</template>


<style scoped>
.slider-list {
    padding-left: calc(12.5vw + 50px);
    position: relative;

    @media screen and (max-width: 768px) {
        padding-left: 0;
    }
}

.slider-list .swiper:first-child {
    display: flex !important;
    flex-direction: column-reverse;
}

.swiper-scrollbar, .swiper-scrollbar-horizontal {
    top: unset;
    bottom: -40px;
}

.slider-item {
    background: #f9f9f9;
    border-radius: 10px;
    cursor: pointer;
    flex: 0 26.4705882353vw;
    height: 32.3529411765vw;
    min-width: 26.4705882353vw;
    margin: 0 1.25rem;
    padding: 1.875rem 2.125rem 2.5rem;
    position: relative;
    transition: background-color 1s cubic-bezier(.19, 1, .22, 1);
}

.slider-item:hover {
    background: rgba(44, 44, 44, .1);
}

.slider-item:hover img {
    transform: scale(1.1);
}

.slider-item:hover .order-number::before {
    background-color: #2c2c2c;
    transform: scale(1.15);
}

.slider-item:hover .index {
    color: #fff;
}

.order-number {
    align-items: center;
    border-radius: 34px;
    display: flex;
    height: 34px;
    justify-content: center;
    position: relative;
    width: 34px;
}

.order-number::before {
    border: 1px solid #2c2c2c;
    border-radius: 34px;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: background-color .5s cubic-bezier(.19,1,.22,1), transform .5s cubic-bezier(.19,1,.22,1);
    width: 100%;
    will-change: transform;
}

.order-number .index {
    color: #2c2c2c;
    font-family: "Aeonik-Medium";
    font-size: 14px;
    letter-spacing: .02em;
    line-height: 1em;
    position: relative;
    transition: color .5s cubic-bezier(.19,1,.22,1);
}

.image-container {
    align-items: center;
    display: flex;
    height: 18.8235294118vw;
    justify-content: center;
    position: relative;
}

.image-container img {
    max-height: 80%;
    transition: transform 1s cubic-bezier(.19,1,.22,1);
    will-change: transform;
}

h4 {
    color: #2c2c2c;
    display: block;
    font-family: "Aeonik-Medium";
    font-size: 1.875rem;
    letter-spacing: -.02em;
    line-height: 1em;
    position: relative;
}
</style>
