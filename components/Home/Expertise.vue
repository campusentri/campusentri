<script>
export default {
    data() {
        return {
            expertise: [
                { id: '01', name: 'MBBS', link: '/courses#MBBS' },
                { id: '02', name: 'Bachelor Dental Sciences', link: '/courses#BDS' },
                { id: '03', name: 'Bachelor of Nursing', link: '/courses#BSc. Nursing' },
                { id: '04', name: 'Bachelor of Physiotherapy', link: '/courses#BPT' },
                { id: '05', name: 'Bachelor of Audiology & Speech', link: '/courses#BASLP' },
                { id: '06', name: 'Bachelor of Medical Imaging Technology', link: '/courses#BSc. MIT' },
            ]
        };
    },
    mounted() {

        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#expertise',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });

        tl.from('.expertise-title', {
            opacity: 0,
            y: 50,
            duration: 0.2,
            delay: 0.2
        });
        tl.from('.section', {
            opacity: 0,
            y: 20,
            duration: 0.2,
            delay: 0.2
        });
        tl.from('.section-line', {
            scale: 0,
            duration: 1,
            ease: 'power2.out'
        });
    }
};
</script>

<template>
    <section id="expertise" class="expertise-container relative z-20">
        <div class="h-full absolute left-0 top-0 w-full hidden md:block">
            <img class="absolute right-[12%] top-[5%] w-48" src="@/assets/imgs/expertise/expertise-1.jpg" />
            <img class="absolute right-0 top-[40%] w-48" src="@/assets/imgs/expertise/expertise-2.jpg" />
            <img class="absolute left-[10%] top-[70%] w-52" src="@/assets/imgs/expertise/expertise-3.jpg" />
            <img class="absolute right-1/4 top-[80%] w-40" src="@/assets/imgs/expertise/expertise-4.jpg" />
            <img class="absolute right-0 top-[-7%] w-40" src="@/assets/imgs/expertise/expertise-5.jpg" />
        </div>
        <div class="flex mx-auto px-12">
            <h1 class="w-1/2 ml-[15.75%] expertise-title text-white">Transforming Discoveries</h1>
        </div>
        <div class="bio-list-container z-50 relative flex flex-col md:flex-row px-6 md:px-12 mt-12 md:mt-20 text-white">
            <div class="flex mx-auto w-full md:w-1/4 ml-0 md:ml-[15.75%]">
                <div class="section">
                    <span class="subtitle flex gap-3 items-center">
                        <span>Our Bio</span>
                        <span class="section-line line"></span>
                    </span>
                    <p class="mt-3">Our expertised, counseling and guidance teams have the experience needed to propel
                        students
                        towards novel educational discoveries and the development of personalized academic paths.
                    </p>
                </div>
            </div>
            <div class="flex mr-auto mt-8 md:mt-0 w-full md:w-[31.25%] ml-0 md:ml-[0.25%]">
                <div class="section">
                    <span class="subtitle flex gap-3 items-center">
                        <span>Expertise</span>
                        <span class="section-line line"></span>
                    </span>
                    <ul class="mt-3">
                        <li class="list" v-for="item in expertise" :key="item.id">
                            <NuxtLink :to="item.link">
                                <span class="flex text-base mb-1 items-center justify-between cursor-pointer">
                                    <span class="grow-0">{{ item.id }}</span>
                                    <span class="label text-start grow mx-3 font-semibold">{{ item.name }}</span>
                                    <IconsArrowRight />
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="btn-wrapper mt-5">
            <NuxtLink to="/courses">
                <button class="read-more-btn big-size black-color" data-v-a2720cde="">
                    <div class="inner" data-v-a2720cde="">
                        <span class="icon arrow-right" data-v-a2720cde="">
                            <span class="icon-container arrow-right-icon-container" data-v-a2720cde="">
                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon shadow-icon"
                                    data-v-a2720cde="">
                                    <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" data-v-a2720cde=""></path>
                                    <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526" stroke="#2C2C2C"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                        data-v-a2720cde=""></path>
                                </svg>
                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon" data-v-a2720cde="">
                                    <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" data-v-a2720cde=""></path>
                                    <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526" stroke="#2C2C2C"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                        data-v-a2720cde=""></path>
                                </svg>
                            </span>
                        </span>
                        <span class="label-sizer" data-v-a2720cde="">More Courses</span>
                    </div>
                </button>
            </NuxtLink>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.expertise-container {
    padding: 7.5rem 0 25rem;

    @media screen and (max-width: 768px) {
        padding: 3rem 1rem;

        h1 {
            font-size: calc(1.79688rem + 5.10417vw);
            margin-left: 0;
        }
    }

    .line {
        background-color: #fff;
        display: block;
        flex-grow: 1;
        height: 1px;
        position: relative;
        transform-origin: left;
    }

    .list {
        &:hover {
            .label {
                transform: translateX(4px);
                opacity: 0.7;
            }
        }

        .label {
            flex-grow: 1;
            transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
        }
    }

    .btn-wrapper {
        width: 100%;
        text-align: center;
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
                height: 4.5rem;
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
                    height: 3.125rem;
                    width: 3.125rem;
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
</style>