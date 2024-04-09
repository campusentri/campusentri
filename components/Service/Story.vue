<script setup>
const slides = [
    {
        name: 'Sidharth',
        department: 'Renal Dialysis',
        text: '“We greatly appreciate all the hard work from the CampusEntri team! Everything for our trial was handled with ease. Would definitely use them again for other studies. ”'
    },
    {
        name: 'Anisha',
        department: 'BSc AT OT',
        text: "“I couldn't be more satisfied! GREAT JOB! I look forward to working together on the next project.”"
    },
    {
        name: 'Raj',
        department: 'Pharma D',
        text: "“The quality of the data from your site was excellent.”"
    },
]
</script>

<template>
    <div id="stories" class="story-block-wrapper">
        <div class="flex px-8 title-container">
            <div class="title-col w-[62.5%] md:ml-[18.75%] px-3">
                <h2 class="title">Student Stories</h2>
            </div>
            <!-- <div class="arrow-container w-[12.5%]">
                <SwiperControls />
            </div> -->
        </div>
        <div class="slider-list mt-12">

            <Swiper :height="200" :modules="[SwiperScrollbar]" :slides-per-view="1.5" :loop="true" :effect="'scrollbar'"
                :scrollbar="{
                el: '.swiper-scrollbar',
                draggable: true,
                hide: false,
                snapOnRelease: true,
                snapOnDrag: true,
                releaseOnEdges: true,
                clickable: true,
            }">
            <div class="arrows">
                <SwiperControls />
            </div>

                <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
                    <div class="slider-item">
                        <span class="excerpt">{{ slide.text }}</span>
                        <span class="name-location">
                            <span class="name">{{ slide.department }}</span>
                            <span class="location">{{ slide.name }}</span>
                        </span>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.story-block-wrapper {
    background-color: #9ab698;
    padding: calc(2.42188rem + 10.9375vw) 0;
    position: relative;

    .title-col {
        border-bottom: 1px solid hsla(0, 0%, 100%, .2);
        padding-bottom: calc(1.44531rem + 1.82292vw);
        position: relative;
    }

    .title {
        font-size: calc(1.79688rem + 5.10417vw);
        padding-right: 40px;
        white-space: normal;
        color: #fff;
        font-family: 'Aeonik-Regular';
        letter-spacing: -.01em;
        line-height: 1em;
        margin-top: 1.25rem;
        white-space: pre-line;
    }

    .arrow-container {
        align-items: flex-end;
        border-bottom: 1px solid hsla(0, 0%, 100%, .2);
        display: flex;
        justify-content: flex-end;
        padding-bottom: calc(1.44531rem + 1.82292vw);
    }

    .slider-list {
        padding-left: calc(12.5vw + 50px);
        position: relative;
        
        @media screen and (max-width: 960px) {
            padding-left: 20px;
        }
        .swiper {
            display: flex;
            flex-direction: column-reverse;
            position: relative;
            @media screen and (max-width: 960px) {
                gap: 20px;
            }
        }
        .swiper-slide {
            @media screen and (max-width: 960px) {
                width: 100%;
                margin-right: 30px;
            }
        }
        
        .swiper-scrollbar {
            &.swiper-scrollbar-horizontal {
                top: unset;
                bottom: -40px;
            }
        }
        .slider-item {
            height: 60vh;
            min-width: 35vw;
            width: 35vw;
            background-color: #f9f9f9;
            align-items: center;
            border-radius: 10px;
            display: flex;
            flex: 0 0 28.5294117647vw;
            flex-direction: column;
            justify-content: center;
            margin: 0 .75rem;
            padding: calc(1.5625rem + 2.91667vw) calc(1.40625rem + 1.45833vw);
            position: relative;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            @media screen and (max-width: 960px) {
                width: 100%;
            }
            .excerpt {
                color: #2c2c2c;
                flex: 0 0 60%;
                font-family: 'Aeonik-Regular';
                font-size: calc(1.29688rem + .4375vw);
                line-height: 1.3em;
                margin-bottom: .9375rem;
                margin-top: .3125rem;
                position: relative;
            }
            .name-location {
                margin-top: 1.25rem;
                position: relative;

                .name {
                    color: #2c2c2c;
                    display: block;
                    font-family: 'Aeonik-Medium';
                    font-size: calc(1.32813rem + .72917vw);
                    letter-spacing: -.02em;
                    line-height: 1.1em;
                    margin-top: 1rem;
                    position: relative;
                }

                .location {
                    color: #939393;
                    display: block;
                    font-family: 'Aeonik-Regular';
                    font-size: 16px;
                    line-height: 1.4em;
                    margin-top: .3125rem;
                    position: relative;
                }
            }
        }
    }
}
</style>