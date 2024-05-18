<script setup>
import { get, truncate } from 'lodash';
const query = groq`*[_type == "course"]`;
const { data } = await useSanityQuery(query);
const courses = get(data, 'value');
const sortedNames = [
    'MBBS', 'BDS', "BSc. Nursing", "BPT", "BSc. Radiology", "BSC. AT & OT Technology", 
    "BSc. Renal Dialysis Technology", "BASLP", "BSc. MIT", "BSc. Optometry", "BSc. Respiratory Therapy",
    "BSc. Occupational Therapy", "BSc. Perfusion Technology", "BSc. Cardiovascular Technology", 
    "BSc. Cardiac Care Technology", "BSc. Emergency Medicine", "BSc. MLT", "BSc. Neuroscience",
    "BSc. Food Nutrition and Dietetics", "BSc. Microbiology", "BSc. Emergency and Trauma Care",
    "B.Pharm", "Pharm.D"
]
const sortByCustomOrder = (a, b) => {
    const indexA = sortedNames.indexOf(a.shortName);
    const indexB = sortedNames.indexOf(b.shortName);

    // If either index is not found in the sortedNames array, prioritize the one that is found
    if (indexA === -1 && indexB === -1) {
        // If both are not found, maintain original order
        return 0;
    } else if (indexA === -1) {
        // If only indexA is not found, prioritize indexB
        return 1;
    } else if (indexB === -1) {
        // If only indexB is not found, prioritize indexA
        return -1;
    } else {
        // Both indexes found, sort based on their positions
        return indexA - indexB;
    }
};
const sortedCourses = courses.sort(sortByCustomOrder);
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
                <section v-for="(course, index) of sortedCourses" :key="index" :id="get(course, 'shortName', '')" class="inner-block">
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
                                    <span @click="openModal(course)" class="read-more">
                                        <BtnReadMore :title="'More'" />
                                    </span>
                                </div>
                                <div class="w-full md:w-[37.5%] ml-[6.25%] px-3">
                                    <NuxtImg class="main-img" :src="images[index % images.length]" :alt="get(course, 'shortName', '')" />
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
