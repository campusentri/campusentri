<script>
export default {
    data() {
        const slides = [
            {
                shortName: 'Qu',
                fullName: 'Quality',
                heading: 'We focus on quality',
                text: 'Our team of board - certified career and admission experts work in conjunction with top colleges from mangalore to provide quality education, consultation and guidance fro all aspects of the services we provide.'
            },
            {
                shortName: 'Sp',
                fullName: 'Specialized',
                heading: 'We are career specialists',
                text: 'Across all of our locations, we have a strong and experienced team of counsellors, guidance experts and team managers.'
            },
            {
                shortName: 'Pa',
                fullName: 'Patient',
                heading: 'We are student centric',
                text: 'Above all, students come first. With no venture capitalists or shareholders to influence our decisions, we focus on what is best for the students.'
            },
        ]
        return {
            slides
        }
    },
}
</script>

<template>
    <div class="culture-slider-block-wrapper">
        <div class="slider-list mt-12">
            <div class="values-list">
                <Swiper :height="200" :modules="[SwiperScrollbar]" :slides-per-view="1" :loop="false"
                    :effect="'scrollbar'" :scrollbar="{
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
                        <div class="slider-item culture-items">
                            <span class="name">
                                <span class="short-name">{{ slide.shortName }}</span>
                                <span class="full-name">{{ slide.fullName }}</span>
                            </span>
                            <span class="content">
                                <h3>{{ slide.heading }}</h3>
                                <p>{{ slide.text }}</p>
                            </span>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.culture-slider-block-wrapper {
    padding: 0;
    position: relative;

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

        .values-list {
            @media screen and (max-width: 768px) {
                gap: 10rem;
            }

            .arrows {
                position: relative;
                top: -20px;
            }

            .slider-item {
                border-left: 1px dashed hsla(188, 8%, 60%, .4);
                border-right: 1px dashed hsla(188, 8%, 60%, .4);
                padding: 40px;
                position: relative;

                @media screen and (max-width: 768px) {
                    padding: 20px;
                }

                .name {
                    align-items: center;
                    border: 1px dashed hsla(188, 8%, 60%, .4);
                    display: flex;
                    flex-direction: column;
                    height: 7.7647058824vw;
                    justify-content: center;
                    position: absolute;
                    right: 0;
                    top: -9.4117647059vw;
                    width: 7.7647058824vw;

                    @media screen and (max-width: 768px) {
                        height: 100px;
                        top: -60px;
                        width: 100px;
                    }

                    .first-name {
                        color: #2c2c2c;
                        font-family: 'Aeonik-Regular';
                        font-size: 2.9411764706vw;
                        line-height: 1.1em;

                        @media screen and (max-width: 768px) {
                            font-size: calc(1.48438rem + 2.1875vw);
                        }
                    }

                    .full-name {
                        color: #909ea0;
                        font-family: 'Aeonik-Regular';
                        font-size: .9411764706vw;
                        line-height: 1em;

                        @media screen and (max-width: 768px) {
                            font-size: 1rem;
                        }
                    }
                }

                .content {
                    display: block;
                    position: relative;

                    h3 {
                        margin-bottom: 1.875rem;
                        padding-right: 40px;
                        color: #2c2c2c;
                        font-family: 'Aeonik-Regular';
                        font-size: 2.9411764706vw;
                        letter-spacing: -.02em;
                        line-height: 1.1em;

                        @media screen and (max-width: 768px) {
                            font-size: calc(1.48438rem + 2.1875vw);
                        }
                    }

                    p {
                        color: #909ea0;
                        margin-bottom: 2rem;
                        font-family: 'Aeonik-Regular';
                        font-size: 1.0588235294vw;
                        line-height: 1.6em;

                        @media screen and (max-width: 768px) {
                            font-size: 1.125rem;
                        }
                    }
                }
            }
        }
    }
}
</style>