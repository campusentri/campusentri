<script>
export default {
    data() {
        return {
            courses: [
                {
                    name: 'MBBS', svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
                },
                {
                    name: 'BDS', svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M116.3 84.2V45h23v39.2M65.2 84.2V45h23.1v39.2M154.5 154.5h-108V88.9h18.7v39.2c0 6.4 5.2 11.5 11.5 11.5 6.4 0 11.5-5.2 11.5-11.5V88.9h3.2c3.5 0 6 .7 8.3 2.6 2.6 2.3 10 9 10 15.4 0 6.7-5.2 8.4-7.5 8.4s-7.5-1.8-7.5-8.4c0-6.4 7.4-13.1 10-15.4 2.2-1.9 4.8-2.6 8.3-2.6h3.2v39.2c0 6.4 5.2 11.5 11.5 11.5 6.4 0 11.5-5.2 11.5-11.5V88.9h15.1" class="st0"></path></svg>'
                },
                {
                    name: 'Nursing', svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.866;stroke-miterlimit:10}</style><path d="M121.8 94.9l-22.4 18-19.3-24.2 62.5-50.2L162 62.6l-30.8 24.8c-2.1 1.6-4.7 2.6-7.5 2.6-6.7 0-12.2-5.5-12.2-12.2 0-6.7 5.5-12.2 12.2-12.2 3.4 0 6.4 1.4 8.6 3.6 15.2 15.5 14 43.8 3.3 61-13.3 21.4-41.7 27.7-63.1 14.3-5.5-3.5-10.1-8-13.5-13.1M36 131.4h46.9M72.4 162h46.9M95 162v-10.4" class="st0"></path></svg>'
                },
                {
                    name: 'BSc. BPT', svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path stroke-miterlimit="10" stroke-width="1.9" stroke="#2c2c2c" fill="none" d="M110.5 105.5v-54H35v71.9h17.9c7.6 0 22.1 5.6 22.1 15.7 0 7.4-6.4 9.4-9 9.4-2.6 0-9-2-9-9.4 0-10.1 14.5-15.7 22.1-15.7h46.3c7.6 0 22.1 5.6 22.1 15.7 0 7.4-6.4 9.4-9 9.4-2.6 0-9-2-9-9.4 0-10.1 14.5-15.7 22.1-15.7H165V93.8l-26.7-27.5h-21.9"></path></svg>'
                },
                {
                    name: 'BASLP', svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path stroke-miterlimit="10" stroke-width="1.9" stroke="#2c2c2c" fill="none" d="M145.2 122.7c-4.7 3.8-19.8 17.8-19.8 29.1 0 11.7 9.2 14.9 13.2 14.9s13.2-3.1 13.2-14.9c0-11.3-15.1-25.3-19.8-29.1h.1l-26.9-21-13.8-7.9L50.5 53c-4.1-4.1-3.4-11.3 1.5-16.3 4.9-4.9 12.2-5.6 16.3-1.5L109.2 76l7.9 13.8 21 26.9"></path></svg>'
                },
                {
                    name: 'BSc. MIT', svg: '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path stroke-miterlimit="10" stroke-width="1.9" stroke="#2c2c2c" fill="none" d="M149.8 81.8V64.9h-14.1c-6.4 0-18.5-4.6-18.5-13.1 0-6.2 5.4-7.8 7.6-7.8 2.2 0 7.6 1.7 7.6 7.8 0 8.5-12.1 13.1-18.5 13.1H99.7 85.6c-6.4 0-18.5-4.6-18.5-13.1 0-6.2 5.4-7.8 7.6-7.8 2.2 0 7.6 1.7 7.6 7.8 0 8.5-12.1 13.1-18.5 13.1H49.6v23.2h100.3v67.2H49.5V96.2"></path></svg>'
                },
                {
                    name: 'BSc. AT & OT', svg: `<svg xml:space="preserve" style="enable-background:new 0 0 200 200;" viewBox="0 0 200 200" y="0px" x="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1">
                        <g>
                            <path d="M103,137.5c23.8,0,43-19.3,43-43c0-23.8-19.3-43-43-43s-43,19.3-43,43S79.2,137.5,103,137.5z" class="st0"></path>
                            <path d="M71.5,168h64.6" class="st0"></path>
                            <path d="M94.2,168c2.2-6.7,8.7-13,11.6-15.2c4.7-3.5,7.7-3.8,7.7-3.8c11.2-2.1,21.3-7.6,29.1-15.4" class="st0"></path>
                            <path d="M103,39c-30.6,0-55.5,24.8-55.5,55.5c0,27.1,19.5,49.7,45.2,54.5c0,0,3,0.3,7.7,3.8c3,2.2,9.4,8.4,11.6,15.2" class="st0"></path>
                        </g>
                        </svg>`
                },
                {
                    name: 'BSc. Renal Dialysis', svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M102.1 136.7c5.8 4.7 11 9 11 12.6M113.1 83.1c0 9.9-26.6 19.4-26.6 33.1 0 6.8 6.6 13 13.3 18.6" class="st0"></path><path d="M102.3 100.3c5.7 4.8 10.8 10 10.8 16 0 13.7-26.6 24.8-26.6 33.1M86.5 83.1c0 5 6.6 9.8 13.3 15.2" class="st0"></path><path d="M84.4 47.8h-25v13.9h25.1c8.9 0 25.8-6.5 25.8-18.3 0-8.7-7.6-11-10.6-11s-10.6 2.3-10.6 11c0 11.8 16.9 18.3 25.8 18.3H140V167H59.4V70.7M141 47.8h-26.2" class="st0"></path></svg>'
                }
            ]
        };
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#clinical-trials',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.fee-title', {
            opacity: 0,
            x: -60,
            duration: 0.5,
        });
        tl.from('.clinical-trials-block .text-container-text', {
            opacity: 0,
            y: 40,
            duration: 0.2,
        });

        tl.from(['.fee-img', '.fee-section'], {
            scale: 0,
            duration: 2,
            ease: 'power2.out',
        }, '-=1');
    }
};
</script>

<template>
    <div id="clinical-trials" class="clinical-trials-block py-24 md:py-48">
        <div class="flex items-center px-16 md:px-12">
            <h2 class="w-3/4 mb-6 text-8xl title md:mx-auto fee-title">Fee Structure</h2>
        </div>
        <div class="text-container flex flex-col md:flex-row py-6 pl-16 md:pl-0 px-8 md:px-12 mt-8">
            <div class="w-full md:w-[31.25%] ml-0 md:ml-[12.5%] mb-12 md:mb-0 text-container-text">
                <h3 class=" m-0 text-4xl">CampusEntri's mission is to assist young minds bring novel success from bench
                    to bedside.</h3>
            </div>
            <div class="w-full md:w-[38.25%] ml-0 md:ml-[8.5%] text-container-text">
                <p class="text-3xl">Our use of sophisticated plan, highly responsive analyses, and insights from expert
                    career counselors ensures a standard of excellence that enhances the effectiveness of innovative
                    guidance.</p>
            </div>
        </div>
        <div class="flex justify-center px-4 md:px-14 h-full mt-16 inner">
            <div class="grid grid-cols-1 md:grid-cols-2  px-0 md:px-3 w-[95%] md:w-[87.25%] h-full">
                <div class="image-col  h-full fee-img">
                    <img src="@/assets/imgs/fee-structure/fee-structure.png" />
                </div>
                <div class="text-col flex items-start flex-col  h-full fee-section">
                    <div>
                        <h3>At a Glance</h3>
                        <ul class="list my-6 grid grid-cols-2 gap-2">
                            <li v-for="(course, index) in courses" :key="index" class="item">
                                <span class="flex items-center cursor-pointer">
                                    <div class="image-wrapper">
                                        <span class="icon-svg" v-html="course.svg"></span>
                                    </div>
                                    <span class="label">
                                        <span class="inner">{{ course.name }}</span>
                                    </span>
                                </span>
                            </li>
                        </ul>
                        <div class="btn-wrapper">
                            <NuxtLink to="/fee">
                                <button class="read-more-btn big-size black-color" data-v-a2720cde="">
                                    <div class="inner" data-v-a2720cde="">
                                        <span class="icon arrow-right" data-v-a2720cde="">
                                            <span class="icon-container arrow-right-icon-container" data-v-a2720cde="">
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon shadow-icon"
                                                    data-v-a2720cde="">
                                                    <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                                        data-v-a2720cde=""></path>
                                                    <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526" stroke="#2C2C2C"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                                        data-v-a2720cde=""></path>
                                                </svg>
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon"
                                                    data-v-a2720cde="">
                                                    <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                                        data-v-a2720cde=""></path>
                                                    <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526" stroke="#2C2C2C"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                                        data-v-a2720cde=""></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span class="label-sizer" data-v-a2720cde="">Fee Structure</span>
                                    </div>
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.clinical-trials-block {
    .title {
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        font-size: 80px;
        letter-spacing: -.02em;
        line-height: 1em;
        white-space: pre-line;
    }

    .inner {
        .text-col {
            padding: 3.3125rem 1.25rem 3.3125rem 3.875rem;
            background: radial-gradient(85.94% 131.15% at 82.42% -2.57%, #ffb192 0, #ebb999 100%);

            @media screen and (max-width: 768px) {
                padding: 3.3125rem 1.5rem;
            }

            h3 {
                font-size: 55px;
                color: #2c2c2c;
                font-family: 'Aeonik-Medium';
                letter-spacing: -.02em;
                line-height: 1.1em;
            }

            .list {
                .item {
                    .image-wrapper {
                        align-items: center;
                        display: flex;
                        flex: 0 0 45px;
                        height: 45px;
                        justify-content: center;
                        width: 45px;

                        .icon-svg {
                            position: relative;
                            transform: scale(1.1);
                            transform-origin: center;
                            display: block;
                            height: 40px;
                            width: 40px;
                            svg {
                                path {
                                    stroke-width: 5;
                                    fill: none;
                                    stroke: #2c2c2c;
                                    stroke-miterlimit: 10;
                                }
                            }
                        }

                    }
                    span {
                        &:hover {
                            .label {
                                .inner {
                                    transform: translateX(.7em);
                                }
                                &:before {
                                    transform: scaleX(.7);
                                }
                            }
                        }
                    }
                    .label {
                        color: #2c2c2c;
                        font-family: 'Aeonik-Regular';
                        font-size: 1.125rem;
                        line-height: 1em;
                        margin-left: 1.25rem;
                        position: relative;

                        &:before {
                            color: #2c2c2c;
                            content: "—";
                            display: block;
                            left: 0;
                            position: absolute;
                            top: 0;
                            transform: scaleX(0);
                            transform-origin: left;
                            transition: transform 1s cubic-bezier(.19,1,.22,1);
                            will-change: transform;
                        }

                        .inner {
                            display: block;
                            position: relative;
                            transition: transform 1s cubic-bezier(.19,1,.22,1);
                            will-change: transform;
                        }
                    }
                }
            }
            .btn-wrapper {
                @media screen and (max-width: 768px) {
                    width: 100%;
                    text-align: center;
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
}
</style>