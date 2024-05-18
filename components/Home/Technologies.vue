<script>
export default {
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        openModal() {
            this.$emit('open-contact-modal');
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#technologies',
                start: 'top bottom',
                end: 'bottom',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.technology-title', {
            opacity: 0,
            x: -60,
            duration: 0.1,
        });

        tl.from('.choice-btn', {
            opacity: 0,
            x: 90,
            duration: 0.1,
        }, '-=0.2');
        tl.from('.text-container-text', {
            opacity: 0,
            y: 40,
            duration: 0.1,
        });
        tl.from('.promo-block-wrapper', {
            scale: 0,
            duration: 1,
            ease: 'power2.out',
        });

        tl.from(['.inner-promo', '.promo-video'], {
            scale: 0,
            duration: 1,
            ease: 'power2.out',
        }, '-=1');
    }
}
</script>

<template>
    <div id="technologies" class="technologies-wrapper">
        <section class="relative py-12 md:py-28 pb-24 md:pb-52">
            <div class="flex justify-between px-12 w-full md:w-3/4 mx-auto">
                <h1 class="technology-title">Top Choices</h1>
                <div class="w-1/4 top-coices-wrapper hidden md:block">
                    <NuxtLink to="/colleges">
                        <BtnReadMore :title="'Colleges'" />
                    </NuxtLink>
                </div>
            </div>
            <div class="text-container flex flex-col md:flex-row py-6 px-12 mt-12">
                <div class="w-full md:w-[31.25%] ml-0 md:ml-[12.5%] text-container-text">
                    <h3 class="m-0 text-4xl">Our team features the top most colleges available that goes beyond
                        Traditional boundaries.</h3>
                </div>
                <div class="w-full md:w-[31.25%] mt-12 md:mt-0 ml-0 md:ml-[12.5%] text-container-text">
                    <p class="text-4xl">We continuously invest in Top technologies to provide the highest quality of
                        data to our students.</p>
                </div>
            </div>
            <div>
                <HomeTechnologiesSlider />
            </div>
        </section>
        <section class="promo-block-wrapper ">
            <div class="grid grid-cols-1 md:grid-cols-2 md:flex-row h-full">
                <div
                    class="inner inner-promo p-6 md:p-0 bg-[#ff4134] text-white h-full flex justify-center order-2 md:order-1 items-center flex-col">
                    <h2 class="title">We are here to support you.</h2>
                    <div class="cta-container flex items-center gap-8 pl-0 md:pl-20 mt-6 md:mt-10">
                        <button name="Read More" class="read-more-btn big-size white-color" @click="openModal" data-v-a2720cde="">
                            <div class="inner" data-v-a2720cde="">
                                <span class="icon message" data-v-a2720cde="">
                                    <span class="icon-container message-icon-container" data-v-a2720cde="">
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" class="message-icon shadow-icon"
                                            data-v-a2720cde="">
                                            <path
                                                d="M13.5015 6.21102C13.8393 5.87317 14.1073 5.47208 14.2902 5.03066C14.473 4.58924 14.5671 4.11613 14.5671 3.63833C14.5671 3.16054 14.473 2.68743 14.2902 2.246C14.1073 1.80458 13.8393 1.40349 13.5015 1.06564C13.1636 0.727793 12.7625 0.459795 12.3211 0.276951C11.8797 0.094108 11.4066 -3.55983e-09 10.9288 0C10.451 3.55983e-09 9.97789 0.094108 9.53646 0.276951C9.09504 0.459795 8.69395 0.727793 8.3561 1.06564L1.01958 8.40533C0.695584 8.72777 0.438668 9.11119 0.26367 9.53347C0.0886718 9.95575 -0.000940527 10.4085 7.44314e-06 10.8656V14.5671H3.70151C4.15915 14.5685 4.61251 14.4791 5.03536 14.3041C5.45821 14.1291 5.84215 13.8719 6.16496 13.5475L13.5015 6.21102ZM3.70151 12.6673H1.89984V10.8656C1.89947 10.6576 1.94011 10.4515 2.01943 10.2592C2.09875 10.0668 2.21521 9.89201 2.36213 9.74471L9.70182 2.41136C10.0311 2.10266 10.4675 1.93413 10.9188 1.94141C11.3701 1.94868 11.8008 2.13119 12.12 2.45033C12.4391 2.76947 12.6216 3.20023 12.6289 3.65151C12.6362 4.10279 12.4676 4.53921 12.1589 4.86847L4.81925 12.205C4.52254 12.501 4.12059 12.6672 3.70151 12.6673Z"
                                                fill="#2C2C2C" data-v-a2720cde=""></path>
                                            <path d="M17.0985 17.1003H0V19.0002H17.0985V17.1003Z" fill="#2C2C2C"
                                                data-v-a2720cde=""></path>
                                        </svg>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                            xmlns="http://www.w3.org/2000/svg" class="message-icon" data-v-a2720cde="">
                                            <path
                                                d="M13.5015 6.21102C13.8393 5.87317 14.1073 5.47208 14.2902 5.03066C14.473 4.58924 14.5671 4.11613 14.5671 3.63833C14.5671 3.16054 14.473 2.68743 14.2902 2.246C14.1073 1.80458 13.8393 1.40349 13.5015 1.06564C13.1636 0.727793 12.7625 0.459795 12.3211 0.276951C11.8797 0.094108 11.4066 -3.55983e-09 10.9288 0C10.451 3.55983e-09 9.97789 0.094108 9.53646 0.276951C9.09504 0.459795 8.69395 0.727793 8.3561 1.06564L1.01958 8.40533C0.695584 8.72777 0.438668 9.11119 0.26367 9.53347C0.0886718 9.95575 -0.000940527 10.4085 7.44314e-06 10.8656V14.5671H3.70151C4.15915 14.5685 4.61251 14.4791 5.03536 14.3041C5.45821 14.1291 5.84215 13.8719 6.16496 13.5475L13.5015 6.21102ZM3.70151 12.6673H1.89984V10.8656C1.89947 10.6576 1.94011 10.4515 2.01943 10.2592C2.09875 10.0668 2.21521 9.89201 2.36213 9.74471L9.70182 2.41136C10.0311 2.10266 10.4675 1.93413 10.9188 1.94141C11.3701 1.94868 11.8008 2.13119 12.12 2.45033C12.4391 2.76947 12.6216 3.20023 12.6289 3.65151C12.6362 4.10279 12.4676 4.53921 12.1589 4.86847L4.81925 12.205C4.52254 12.501 4.12059 12.6672 3.70151 12.6673Z"
                                                fill="#2C2C2C" data-v-a2720cde=""></path>
                                            <path d="M17.0985 17.1003H0V19.0002H17.0985V17.1003Z" fill="#2C2C2C"
                                                data-v-a2720cde=""></path>
                                        </svg>
                                    </span>
                                </span>
                                <span class="label-sizer" data-v-a2720cde="">Contact us
                                </span>
                            </div>
                        </button>
                        <p>A member of our team will contact you shortly.</p>
                    </div>
                </div>
                <div class="background-video promo-video relative inset-0 overflow-hidden h-full order-1 md:order-2">
                    <video autoplay muted loop="loop" webkit-playsinline="true" playsinline="true" disableRemotePlayback="true" class="min-w-full min-h-full">
                        <source src="/videos/promo-block-big-uhd.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </section>
        <ContactForm :is-open="isModalOpen" @close-contact-modal="closeModal" />
    </div>
</template>

<style lang="scss" scoped>
.technologies-wrapper {
    h1 {
        @media screen and (max-width:768px) {
            font-size: calc(1.79688rem + 5.10417vw);
        }
    }

    .text-container {
        h3 {
            font-size: calc(1.35938rem + 1.02083vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Medium';
            line-height: 1.1em;
            @media screen and (max-width: 768px) {
                font-size: calc(1.26563rem + .14583vw);
            }
        }
        p {
            font-size: calc(1.35938rem + 1.02083vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            line-height: 1.1em;
            @media screen and (max-width: 768px) {
                font-size: calc(1.26563rem + .14583vw);
            }
        }
    }
}

.promo-block-wrapper {
    background-color: #fef3f3;
    display: block;
    height: 47.0588235294vw;
    max-height: 90vh;
    overflow: hidden;
    position: relative;
    transform: scale(1);

    @media screen and (max-width: 768px) {
        height: 100%;
        max-height: 100%;
    }

    .inner {
        .title {
            font-size: 60px;
            font-family: 'Aeonik-Regular';
            letter-spacing: -.03em;
            line-height: 1.2em;
            margin-bottom: .625rem;
            padding: 0 12.5vw 0 6.25vw;

            @media screen and (max-width: 768px) {
                font-size: 50px;
            }
        }
    }

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

                .message-icon-container {
                    .shadow-icon {
                        opacity: 1 !important;
                        transform: translate(0) !important;

                        path {
                            fill: #ff4134 !important;
                        }
                    }

                    // svg {
                    //     path {
                    //         fill: #ff4134;
                    //     }
                    // }

                    .message-icon {
                        opacity: 0;
                        transform: translate(30px);
                    }
                }
            }

        }

        .inner {
            height: 4.5rem;
            border-radius: 60px;
            align-items: center;
            border: 1px solid transparent;
            display: flex;
            position: relative;
            transition: transform .5s cubic-bezier(.19, 1, .22, 1);
            will-change: transform;

            &:before {
                background-color: #fff;
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
                height: 3.125rem;
                width: 3.125rem;
                border-radius: 50px;
                margin-left: 11px;
                align-items: center;
                background-color: #ff4134;
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
                    background-color: #fff;
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

                .message-icon-container {
                    transform: scale(1.2);
                    transform-origin: center;

                    .message-icon {
                        display: block;
                        left: 1px;
                        position: relative;
                        transition: opacity .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);

                        path {
                            fill: #fff;
                        }
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
            color: #2c2c2c;
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
</style>