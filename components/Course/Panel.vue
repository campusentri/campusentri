<script setup>
import { get, truncate } from 'lodash';
const query = groq`*[_type == "course"]`;
const { data } = await useSanityQuery(query);
const courses = get(data, 'value');
const emitOpenModal = defineEmits(['open-modal']);
function openModal(course) {
    emitOpenModal('open-modal', course);
}
const images = [
    '/images/courses/course-1.png',
    '/images/courses/course-2.png',
    '/images/courses/course-3.png',
    '/images/courses/course-4.png',
    '/images/courses/course-5.png',
    '/images/courses/course-6.png'
]
</script>

<template>
    <div class="panel-scroll-wrapper">
        <div class="panels-container">
            <div class="expertise-section panel-container">
                <section v-for="(course, index) of courses" :key="index" class="inner-block">
                    <span class="background"></span>
                    <div class="block-inner">
                        <div class="scroll-wrapper">
                            <div class="title-container flex px-8">
                                <div class="px-3 w-full md:w-[87.5%] md:ml-[6.25%]">
                                    <h2 class="title border-t-2 border-b-2 border-black">{{ get(course, 'shortName', '') }}</h2>
                                </div>
                            </div>
                            <div class="subtitle-container flex flex-col-reverse md:flex-row px-8"
                                :class="index !== 0 && ((index + 1) % 2 === 0 || (index + 1) % 4 === 0) && 'flex-row-reverse'">
                                <div class="w-full md:w-1/2 ml-[6.25%] px-3">
                                    <h3 class="description hidden md:block">{{ truncate(get(course, 'description', ''), { length: 200, omission: '...' }) }}</h3>
                                    <h3 class="description block md:hidden">{{ truncate(get(course, 'description', ''), { length: 150, omission: '...' }) }}</h3>
                                    <span class="read-more">
                                        <button @click="openModal(course)" class="read-more-btn big-size black-color"
                                            data-v-a2720cde="">
                                            <div class="inner" data-v-a2720cde="">
                                                <span class="icon arrow-right" data-v-a2720cde="">
                                                    <span class="icon-container arrow-right-icon-container"
                                                        data-v-a2720cde="">
                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            class="arrow-right-icon shadow-icon" data-v-a2720cde="">
                                                            <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C"
                                                                stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" data-v-a2720cde=""></path>
                                                            <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
                                                                stroke="#2C2C2C" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                data-v-a2720cde=""></path>
                                                        </svg>
                                                        <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon"
                                                            data-v-a2720cde="">
                                                            <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C"
                                                                stroke-width="1.5" stroke-linecap="round"
                                                                stroke-linejoin="round" data-v-a2720cde=""></path>
                                                            <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
                                                                stroke="#2C2C2C" stroke-width="1.5"
                                                                stroke-linecap="round" stroke-linejoin="round"
                                                                data-v-a2720cde=""></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span class="label-sizer" data-v-a2720cde="">More</span>
                                            </div>
                                        </button>
                                    </span>
                                </div>
                                <div class="w-full md:w-[37.5%] ml-[6.25%] px-3">
                                    <img class="main-img" :src="images[index % images.length]" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination flex items-center absolute w-full z-10 h-10">
                        <div class="px-8 flex w-full">
                            <div class="px-3">
                                <span class="number">1.{{ index + 1 }}</span>
                            </div>
                            <div class="px-3">
                                <span class="title">{{ get(course, 'name', '') }}</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.panel-scroll-wrapper {
    position: relative;

    .panels-container {
        will-change: transform;

        .panel-container {
            z-index: 6;
            // height: calc(-20px + 100vh);
            // overflow: hidden;
            position: relative;
            will-change: transform;

            &:before {
                background: linear-gradient(-180deg, #f8edec, hsla(5, 46%, 95%, 0));
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                content: "";
                display: block;
                height: 60px;
                left: 20px;
                position: absolute;
                top: 18px;
                width: calc(100% - 40px);
                z-index: 1;
            }

            &:after {
                bottom: 88px;
                top: auto;
                transform: rotateX(180deg);
                background: linear-gradient(-180deg, #f8edec, hsla(5, 46%, 95%, 0));
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                content: "";
                display: block;
                height: 60px;
                left: 20px;
                position: absolute;
                width: calc(100% - 40px);
                z-index: 1;
            }

            .inner-block {
                height: 100%;
                position: relative;
                margin-bottom: 50px;

                .background {
                    background-color: #f8edec;
                    border-radius: 20px;
                    display: block;
                    height: 100%;
                    left: 20px;
                    position: absolute;
                    top: 20px;
                    width: calc(100% - 40px);
                }

                .block-inner {
                    display: block;
                    height: calc(100% - 110px);
                    overflow: hidden;
                    padding: 85px 0;
                    position: relative;
                    top: 20px;
                    width: 100%;

                    @media screen and (max-width: 768px) {
                        padding-top: 50px;
                        padding-bottom: 70px;
                        height: 100%;
                    }

                    .title-container {
                        .title {
                            font-size: calc(1.5625rem + 2.91667vw);
                            color: #2c2c2c;
                            font-family: 'Aeonik-Medium';
                            letter-spacing: -.02em;
                            line-height: 1em;
                            padding: .9375rem 0 calc(1.28906rem + .36458vw);
                            position: relative;
                        }
                    }

                    .subtitle-container {
                        .description {
                            font-size: calc(1.3125rem + .58333vw);
                            color: #2c2c2c;
                            font-family: 'Aeonik-Regular';
                            line-height: 1.1em;
                            margin-top: calc(1.40625rem + 1.45833vw);
                            position: relative;

                            @media screen and (max-width: 768px) {
                                font-size: calc(1.26563rem + .14583vw);
                                line-height: 1.2em;
                            }
                        }

                        .read-more {
                            margin-top: calc(1.32813rem + .72917vw);
                            display: block;
                            z-index: 10;
                            position: relative;

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

                        .main-img {
                            margin-top: calc(-1.32812rem - .72917vw);
                            position: relative;

                            @media screen and (max-width: 768px) {
                                margin: 20px auto 0;
                                width: 70%;
                            }
                        }
                    }
                }
            }

            .pagination {
                top: calc(100% - 64px);

                span {
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    font-size: 1.0625rem;
                    line-height: 1em;
                    position: relative;
                    top: -2px;
                }

                @media screen and (max-width: 768px) {
                    top: calc(100% - 46px);
                }
            }
        }
    }
}
</style>
