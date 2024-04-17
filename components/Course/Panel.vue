<script>
export default {
    data() {
        const courses = [
            {
                title: 'MBBS',
                description: 'The MBBS (Bachelor of Medicine and Bachelor of Surgery) is a professional undergraduate degree awarded to individuals upon completion of medicl school.',
                paginate: 'Bachelor of Medicine and Bachelor of Surgery',
                image: '/images/courses/course-1.png'
            },
            {
                title: 'BDS (Bachelor of Dental Surgery)',
                description: 'BDS is a professional undergraduate degree awarded to individuals upon completion of dental school. The program is designed to',
                paginate: 'Bachelor of Dental Surgery',
                image: '/images/courses/course-2.png'
            },
            {
                title: 'Nursing',
                description: 'Nursing is a professional healthcare program that prepares individuals to become skilled and compassionate nuerses. The curriculum focues on ...',
                paginate: 'Nursing',
                image: '/images/courses/course-3.png'
            },
            {
                title: 'BSc. BPT',
                description: 'BSc. BPT is an undergraduate degree program in physiotherapy. It is designed to train students in assesing, diagnosing and treating various physical conditions and injuries.',
                paginate: 'Bachelor of Science in Physiotherapy',
                image: '/images/courses/course-4.png'
            },
            {
                title: 'BASLP',
                description: 'BASLP is an undergraduate program designed to train students in the field of  audiology and speech-language pathology.',
                paginate: 'Bachelor of Audiology and Speech-Language Pathology',
                image: '/images/courses/course-5.png'
            },
            {
                title: 'BSc. MIT ',
                description: 'BSc. MIT is an undergraduate program designed to train healthcare professionals in medical imaging techniques. The curriculum covers various aspects of diagnosing, imaging, including radiography, CT Scans, MRI and ultrasound.',
                paginate: 'Bachelor of Science in Medical Imaging Technology',
                image: '/images/courses/course-6.png'
            },
            {
                title: 'BSc AT & OT Technology',
                description: 'BSc. Anesthesia & Operation Theatre Technology is an undergraduate program designed to train healthcare professionals in the field of anesthesia and surgical procedures.',
                paginate: 'Bachelor of Science in Anesthesia & Operation Theatre Technology',
                image: '/images/courses/course-1.png'
            },
            {
                title: 'Renal Dialysis Technology',
                description: 'BSc. Renal Dialysis Technology is an undergraduate degree program that focuses on training students in the field of renal care and dialysis technology.',
                paginate: 'Bachelor of Sience in Renal Dialysis Technology',
                image: '/images/courses/course-2.png'
            },
            {
                title: 'BSc. Radiology',
                description: 'BSc. Radialogy is an undergraduate program designed to train students in the field of medical imaging and radiological sciences.',
                paginate: 'Bachelor of Science in Radiology',
                image: '/images/courses/course-3.png'
            },
            {
                title: 'BSc. Optometry',
                description: 'BSc. Optometry is an undergraduate program designed to train healthcare professionals in the field of optometry.',
                paginate: 'Bachelor of Science in Optometry',
                image: '/images/courses/course-4.png'
            },
            {
                title: 'BSc. Respiratory Therapy',
                description: 'BSc. Respiratory Therapy is an undergradute program focused on training healthcare professionals to assess, treat and manage patients with respiratory disorders.',
                paginate: 'Bachelor of Science in Respiratory Therapy',
                image: '/images/courses/course-5.png'
            },
            {
                title: 'BSc. Occupational Therapy',
                description: 'BSc. Occupational Therapy is an undergraduate program designed to train students in the field of occupational therapy.',
                paginate: 'Bachelor of Science in Occupational Therapy',
                image: '/images/courses/course-6.png'
            },
            {
                title: 'BSc. Perfusion Technology',
                description: 'BSc. Perfusion Technology is an undergraduate program designed to train healthcare professionals in the field of perfusion, a critical aspect of cardiac surgery.',
                paginate: 'Bachelor of Science in Perfusion Technology',
                image: '/images/courses/course-1.png'
            },
            {
                title: 'Cardiovascular Technology',
                description: 'BSc. Cardiovascular Technology is an undergraduate program aimed at training healthcare professionals to specialize in cardiovascular diagnostics, monitoring, and therapeutic interventions.',
                paginate: 'Bachelor of Science in Cardiovascular Technology',
                image: '/images/courses/course-2.png'
            },
            {
                title: 'BSc. Cardiac Care Technology',
                description: 'BSc. Cardiac Care Technology is an undergraduate program designed to train healthcare professionals in the field of cardiac care.',
                paginate: 'Bachelor of Science in Cardiac Care Technology',
                image: '/images/courses/course-3.png'
            },
            {
                title: 'BSc. Emergency Medicine',
                description: 'BSc. Emergency Medicine is an undergraduate program designed to train healthcare professionals in the specialized field of emergency care..',
                paginate: 'Bachelor of Science in Emergency Medicine',
                image: '/images/courses/course-4.png'
            },
            {
                title: 'BSc. MLT',
                description: 'BSc. MLT is an undergraduate program designed to train healthcare professionals in medical laboratory sciences.',
                paginate: 'Bachelor of Science in Medical Laboratory Technology',
                image: '/images/courses/course-5.png'
            },
            {
                title: 'BSc. Neuroscience',
                description: 'BSc. Neuroscience is an undergraduate program designed to provide students with a comprehensive understanding of the structure and function of the nervous system.',
                paginate: 'Bachelor of Science in Neuroscience',
                image: '/images/courses/course-6.png'
            },
            {
                title: 'Food Nutrition and Dietetics',
                description: 'BSc. Food Nutrition and Dietetics is an undergraduate program designed to educate students about the principles of nutrition, food science, and dietetics.',
                paginate: 'Bachelor of Science in Food Nutrition and Dietetics',
                image: '/images/courses/course-1.png'
            },
            {
                title: 'BSc. Microbiology',
                description: 'BSc. Microbiology is an undergraduate program designed to provide students with a comprehensive understanding of microorganisms, their structure, functions.',
                paginate: 'Bachelor of Science in Microbiology',
                image: '/images/courses/course-2.png'
            },
            {
                title: 'BSc. Emergency and Trauma Care',
                description: 'BSc. Emergency and Trauma Care is an undergraduate program designed to train students in the specialized field of emergency medical care.',
                paginate: 'Bachelor of Science in Emergency and Trauma Care',
                image: '/images/courses/course-3.png'
            },
            {
                title: 'B Pharm',
                description: 'Our mission is to advance the reach of precision medicine to all patients.',
                paginate: 'Bachelor of Pharmacy Courses',
                image: '/images/courses/course-4.png'
            },
            {
                title: 'Pharm D',
                description: 'Pharm.D is a professional doctoral-level program designed to train students as clinical pharmacists.',
                paginate: 'Doctor of Pharmacy Courses',
                image: '/images/courses/course-5.png'
            },
        ];
        return {
            courses
        }
    },
    methods: {
        openModal() {
            this.$emit('open-modal');
        }
    }
}
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
                                    <h2 class="title border-t-2 border-b-2 border-black">{{ course.title }}</h2>
                                </div>
                            </div>
                            <div class="subtitle-container flex flex-col-reverse md:flex-row px-8"
                                :class="index !== 0 && ((index + 1) % 2 === 0 || (index + 1) % 4 === 0) && 'flex-row-reverse'">
                                <div class="w-full md:w-1/2 ml-[6.25%] px-3">
                                    <h3 class="description">{{ course.description }}</h3>
                                    <span class="read-more">
                                        <button @click="openModal" class="read-more-btn big-size black-color"
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
                                    <img class="main-img" :src="course.image" />
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
                                <span class="title">{{ course.paginate }}</span>
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
            overflow: hidden;
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

                .background {
                    background-color: #f8edec;
                    border-radius: 20px;
                    display: block;
                    height: calc(100% - 40px);
                    left: 20px;
                    position: absolute;
                    top: 20px;
                    width: calc(100% - 40px);
                }

                .block-inner {
                    display: block;
                    height: calc(100% - 110px);
                    overflow: hidden;
                    padding-top: 85px;
                    position: relative;
                    top: 20px;
                    width: 100%;

                    @media screen and (max-width: 768px) {
                        padding-top: 50px;
                        padding-bottom: 30px;
                        height: 100vh;
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
            }
        }
    }
}
</style>
