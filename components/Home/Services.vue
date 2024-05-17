<script>
export default {
    data() {
        const slides = [
            '/images/services/service-1.png',
            '/images/services/service-2.png',
            '/images/services/service-3.png',
            '/images/services/service-4.png'
        ];
        const services = [
            { name: 'College Selection', image: 'images/services/service-5.png', link: '/services#college-selection' },
            { name: 'Free Campus Visits', image: 'images/services/service-6.png', link: '/services#campus-visits' },
            { name: 'Loan Assistance', image: 'images/services/service-7.png', link: '/services#loan-assistance' },
        ];
        const appreciations = [
            { name: 'IAO-Accredited', image: 'images/services/cap.png' },
            { name: 'NACAC-Certified', image: 'images/services/clia.png' },
            { name: 'ECS-Complaint' },
            { name: 'A Global Reference Team & System' },
        ];
        const clients = [
            { text: 'Our Counselors are renowned, with expertise in several subspecialities', svg: '/images/services/client-1.svg' },
            { text: 'Our Counselors are available to serve as Principal investigators and Consultants', svg: '/images/services/client-2.svg' },
            { text: 'Our Counselors are also employed full-time and at all our locations', svg: '/images/services/client-3.svg' },
        ]
        return {
            slides,
            services,
            appreciations,
            clients
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#services',
                start: 'top',
                end: 'bottom',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.service-title', {
            opacity: 0,
            x: -60,
            duration: 0.1,
        });

        tl.from('.service-btn', {
            opacity: 0,
            x: 90,
            duration: 0.1,
        }, '-=0.2');
        tl.from('.service-text', {
            opacity: 0,
            y: 40,
            duration: 0.1,
        });
        tl.from('.service-item', {
            opacity: 0,
            x: -20,
            duration: 0.2,
        });
        tl.from('.service-list', {
            opacity: 0,
            y: 60,
            duration: 0.2,
        });
        tl.from('.clients-item', {
            opacity: 0,
            y: 60,
            duration: 0.2,
        });
    }
}
</script>

<template>
    <div id="services">
        <section class="image-slider-warpper relative">
            <div class="slider-list h-full mt-0 md:mt-12">
                <Swiper :height="200" :modules="[SwiperScrollbar]" :slides-per-view="1" :loop="true"
                    :effect="'scrollbar'" :scrollbar="{
                    el: '.swiper-scrollbar',
                    draggable: true,
                    hide: false,
                    snapOnRelease: true,
                    snapOnDrag: true,
                    releaseOnEdges: true,
                    clickable: true,
                }" :autoplay="{
                    delay: 5000,
                }">
                    <SwiperSlide v-for="(slide, idx) in slides" :key="idx">
                        <div class="slider-item">
                            <div class="image-container">
                                <NuxtImg :src="slide" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <span class="caption text-2xl text-white">CampusEntri</span>
            </div>
        </section>
        <section class="services-block">
            <div class="flex justify-start md:justify-center px-0 md:px-6">
                <div class="flex justify-between items-center w-3/4 px-3 mb-4 md:mb-12">
                    <h2 class="service-title">Services</h2>
                    <NuxtLink to="/services">
                        <BtnReadMore :title="'Services'" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex justify-center my-12">
                <div class="flex justify-between items-start flex-col md:flex-row w-full md:w-3/4 px-3 mb-12">
                    <div class="w-full md:w-[42.25%]">
                        <h3 class="block md:hidden service-text">Propelling Career Guidance & placements for free</h3>
                        <ul class="services-list">
                            <li v-for="(service, index) of services" :key="index">
                                <NuxtLink  class="item service-item cursor-pointer" :to="service.link">
                                    <div class="image-wrapper">
                                        <NuxtImg :src="service.image" />
                                    </div>
                                    <span class="label ml-3">{{ service.name }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full md:w-[37.5%] mt-12 md:mt-0">
                        <h3 class="mb-8 hidden md:block service-text">Propelling Career Guidance & placements for free
                        </h3>
                        <ul class="list">
                            <li v-for="(appreciation, index) of appreciations" :key="index" class="item service-list">
                                <span class="label">{{ appreciation.name }}</span>
                                <NuxtImg v-if="appreciation.image" :src="appreciation.image" :alt="appreciation.name" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex justify-center px-6">
                <div class="w-full md:w-3/4 px-3 mb-12">
                    <div class="flex justify-between items-center flex-col md:flex-row clients-list">
                        <div v-for="(client, index) of clients" :key="index"
                            class="item clients-item flex flex-col justify-around px-3">
                            <div class="image-wrapper">
                                <NuxtImg :src="client.svg" />
                            </div>
                            <div class="text-wrapper mt-6">
                                <p class="text text-center">{{ client.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.image-slider-warpper {
    height: 80vh;

    @media screen and (max-width: 768px) {
        height: 100%;
    }

    .slider-list {
        .swiper {
            height: 100%;
            position: relative;
        }

        .slider-item {
            .image-container {
                img {
                    height: 500px;
                    width: 100%;

                    @media screen and (max-width: 768px) {
                        height: 300px;
                    }
                }
            }
        }

        .caption {
            font-size: calc(1.28125rem + .29167vw);
            bottom: calc(1.64063rem + 3.64583vw);
            color: #fff;
            left: calc(1.64063rem + 3.64583vw);
            line-height: 1em;
            position: absolute;
            z-index: 2;
        }
    }
}

.services-block {
    background-color: #fbfcfa;
    padding: 8rem 0;
    position: relative;

    @media screen and (max-width:768px) {
        padding: 4rem 2rem;
        margin-top: 3rem;
    }

    h2 {
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        font-size: calc(0.5rem + 5.10417vw);
        white-space: normal;
        letter-spacing: -.02em;
        line-height: 1em;

        @media screen and (max-width: 768px) {
            font-size: calc(1.79688rem + 5.10417vw);
        }
    }

    h3 {
        margin-bottom: calc(1.5625rem + 2.91667vw);
        padding-right: calc(1.5625rem + 2.91667vw);
        font-size: calc(1.35938rem + 1.02083vw);
        color: #2c2c2c;
        font-family: 'Aeonik-Medium';
        line-height: 1.1em;
        position: relative;
    }

    .services-list {
        .item {
            align-items: center;
            background: #fff;
            border-radius: 12px;
            box-shadow: 1px 2px 3px rgba(0, 0, 0, .03);
            display: flex;
            height: 7.2941176471vw;
            margin: 10px 0;
            padding: 15px 5px;
            position: relative;

            @media screen and (max-width: 768px) {
                height: 80px;
            }

            .image-wrapper {
                align-items: center;
                display: flex;
                height: 5.8823529412vw;
                justify-content: center;
                width: calc(1.79688rem + 5.10417vw);

                img {
                    margin: 0 auto;
                    max-height: 100%;
                    width: auto;
                }
            }

            .label {
                color: #2c2c2c;
                font-family: 'Aeonik-Medium';
                font-size: 1.25rem;
                line-height: 1.1em;
                margin-left: 1.25rem;
            }
        }
    }

    .list {
        .item {
            align-items: center;
            border-bottom: 1px solid #2c2c2c;
            display: flex;
            height: calc(1.5625rem + 2.91667vw);
            justify-content: space-between;
            position: relative;

            @media screen and (max-width: 768px) {
                height: calc(2.64063rem + 3.64583vw);
            }

            span {
                color: #2c2c2c;
                flex-grow: 1;
                font-family: 'Aeonik-Regular';
                font-size: 1.25rem;
                line-height: 1.1em;
            }

            img {
                max-width: 60px;
            }
        }
    }

    .clients-list {
        height: 340px;

        .image-wrapper {
            align-items: center;
            display: flex;
            height: 180px;
            justify-content: center;

            svg {
                margin: 0 auto;
            }
        }

        .text-wrapper {
            display: block;
            height: 100px;
            margin-top: 0;
            padding: 0 1.25rem;
            position: relative;

            p {
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                font-size: 1.125rem;
                line-height: 1.6em;
                margin-bottom: calc(1.34375rem + .875vw);
            }
        }
    }
}
</style>