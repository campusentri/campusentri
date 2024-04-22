<script>
export default {
    data() {
        const slides = [
            {
                shortName: 'Qu',
                fullName: 'Quality',
                heading: 'AJ Institute of Medical Sciences',
                text: 'is affiliated with Rajiv Gandhi University of Health Sciences and approved by the National Medical Commission (NMC), formerly known as the Medical Council of India (MCI). The college has also been accredited by the National Accreditation Board for Hospital (NABH) & Healthcare Providers.',
                secondHeading: 'Laxmi Memorial college of Physiotherapy',
                text2: 'It is affiliated with Rajiv Gandhi University of Health Sciences and approved by the All Indian Association of Physiotherapist (IAP).'
            },
            {
                shortName: 'Sp',
                fullName: 'Specialized',
                heading: 'AJ Institute of Dental Sciences',
                text: 'It is affiliated with Rajiv Gandhi University of Health Sciences and approved by the Dental Council of India.',
                secondHeading: 'Laxmi Memorial college of Nursing',
                text2: 'is affiliated with Rajiv Gandhi University of Health Sciences and is permanently recognized by the Indian Nursing Council (INC), New Delhi and Karnataka State Nursing Council Bangalore..'
            },
            {
                shortName: 'Pa',
                fullName: 'Patient',
                heading: 'AJ Institute of Allied Health Science',
                text: 'It is affiliated with Rajiv Gandhi University of Health Sciences and recognized by the University Grants Commission (UGC)',
                secondHeading: 'AJ Institute of Hotel Management',
                text2: 'it is a constituent of A.J. Group of Institutions and is affiliated with Rajiv Gandhi University of Health Sciences.'
            }
        ];
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
                <Swiper  :modules="[SwiperScrollbar]" :slides-per-view="1" :centered-slides="true" :loop="false"
                    :effect="'scrollbar'" :scrollbar="{
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: false,
                    snapOnRelease: true,
                    snapOnDrag: true,
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
                            <span class="content">
                                <h3>{{ slide.secondHeading }}</h3>
                                <p>{{ slide.text2 }}</p>
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
            padding-left: 0px;
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
                width: 100% !important;
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