<script>
export default {
    data() {
        const institutes = [
            'AJ Institute of Medical Sciences',
            'AJ Institute of Dental Sciences',
            'Laxmi Memorial College of Physiotherapy',
            'Laxmi Memorial Institute of Nursing',
            'Laxmi Memorial College of Nursing',
            'Laxmi Memorial Institute of Paramedical Sciences',
            'AJ Institute of Hospital Managment',
            'AJ Institute of Engineering and Tech',
            'AJ Institute of Allied Health sciences'
        ];
        const items = [
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
            },
        ];
        const courses = [
            {
                name: 'AJ Institute of Medical Sciences',
                courses: ['MBBS', 'MD']
            },
            {
                name: 'AJ Institute of Dental Sciences',
                courses: ['BDS', 'MDS']
            },
            {
                name: 'AJ Institute of Allied Health Sciences',
                description: 'Our experts at CampusEntri® and Admission Counselors can assist you with identifying the right course and college for your Career. CampusEntri® has globally validated a multitude of assays for Admission Guidance, College Selection, Loan Assistance, Campus Visits, and others. We offer all our services for free so, that we can craft more students specifically for your career needs.',
                courses: ['BSc. MLT', 'BSc. Optometry', 'BSc. Cardiac Care Technology', 'BSc. MIT', 'BSc. Anesthesia& OT', 'BSc. Renal Dialysis Technology', 'BSc. Respiratory Therapy', 'BSc. Perfusion Technology', 'BSc. Emergency& Trauma', 'BSc. Neuroscience', 'BSc. Radiology', 'BASLP']
            },
            {
                name: 'Laxmi Memorial College of Physiotherapy',
                courses: ['BSc. BPT', 'BSC.MPT']
            },
            {
                name: 'Laxmi Memorial College of Nursing',
                courses: ['BSc. Nursing', 'MSc. Nursing']
            },
            {
                name: 'AJ Institute of Hospital Management',
                courses: ['BHA', 'С МНА']
            },
        ]

        return {
            institutes,
            items,
            courses
        }
    }
}
</script>

<template>
    <div id="college-content" class="college-content-wrapper">
        <div class="block-inner">
            <div class="flex flex-col md:flex-row px-8 intro-block-wrapper">
                <div class="w-full md:w-[43.75%] ml-0 md:ml-[6.25%] px-3 left-col">
                    <h1 class="title">AJ Insitute</h1>
                    <figure>
                        <div class="image-wrapper">
                            <img src="/images/technologies/technology-1.png" />
                        </div>
                        <figcaption>AJ Medical College</figcaption>
                    </figure>
                </div>
                <div class="px-3 md:w-[43.75%] right-col">
                    <div>
                        <h2>A.J Hospital and Research
                            Centre is one of the foremost
                            tertiary hospitals in India.</h2>
                        <p>This leading institution provides state of the art health care
                            treatment and facilities across 30 major medical disciplines.
                            The Visionary initiative of Dr. A.J. Shetty, a reputed entrepreneur,
                            educationist and well known philanthropist, was realized when
                            the hospital began in 2001 and today it stands as a unique
                            center of medical excellence.</p>
                        <p>A.J Hospital and Research Centre is a unit of the Laxmi
                            Memorial Educational Trust Ⓡ a premier institution which
                            manages a string of professional colleges that include medical,
                            dental and engineering</p>
                    </div>
                </div>
            </div>
            <div class="institute-block-wrapper">
                <div class="md:ml-[6.25%] px-8 md:px-3 flex">
                    <div>
                        <h2 class="title">Institutes</h2>
                        <ul class="list grid grid-rows-6 grid-flow-col gap-y-3 gap-x-3 md:gap-x-12">
                            <li v-for="(institute, index) of institutes" :key="index" class="item">{{ institute }}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="culture-block-wrapper">
                <div class="flex items-end px-6">
                    <div class="w-full md:w-[50.5%] ml-0 md:ml-[6.25%]">
                        <h2 class="title culture-title">Affiliation & Accreditation</h2>
                    </div>
                </div>
                <div class="list-container flex justify-center px-0 md:px-6">
                    <div class="w-full md:w-[87.5%] px-0 md:px-3">
                        <div class="values-list mt-24 md:mt-64 hidden md:grid grid-cols-1 md:grid-cols-3">
                            <div v-for="(item, index) of items" :key="index" class="item culture-items">
                                <span class="name">
                                    <span class="short-name">{{ item.shortName }}</span>
                                    <span class="full-name">{{ item.fullName }}</span>
                                </span>
                                <span class="content">
                                    <h3>{{ item.heading }}</h3>
                                    <p>{{ item.text }}</p>
                                </span>
                                <span class="content">
                                    <h3>{{ item.secondHeading }}</h3>
                                    <p>{{ item.text2 }}</p>
                                </span>
                            </div>
                        </div>
                        <div class="block md:hidden mt-32">
                            <CollegesSlider />
                        </div>
                    </div>
                </div>
            </div>
            <div class="clients-block-wrapper about-clients">
                <div class="bg-gradient"></div>
                <div class="flex justify-center px-6 relative">
                    <div class="w-full md:w-3/4 mx-auto">
                        <h2 class="title client-title mb-10">Location</h2>
                        <div class="flex flex-col md:flex-row justify-between gap-5">
                            <div class="w-full md:w-1/2">
                                <h5>Laxmi Memorial College of Physiotherapy / Laxmi Memorial College of Nursing</h5>
                                <p class="text-center mt-3">It is located in scenic campus, situated at A.J Towers,
                                    Balmatta, Mangalore with good connectivity with bus stations and railway stations.
                                </p>
                            </div>
                            <div class="w-full md:w-1/2">
                                <h5>A.J Institute of Medical Sciences / A.J Institute of Dental Sciences / A.J Institute
                                    of Allied Health Sciences / A.J Institute of Hospital Management</h5>
                                <p class="text-center mt-3">These colleges are located in Kuntikana in the outskirts of
                                    Mangalore which is the educational hub of south India and one of the fastest growing
                                    non metro cities in India. The campus is by the side of National highway 66 and
                                    students can commute easily to the campus from the city.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full relative px-6 flex image-container">
                    <div class="inner w-full px-3">
                        <svg viewBox="0 0 3001 1362" class="map" data-v-4e9c2f42=""
                            style="translate: none; rotate: none; scale: none;">
                            <g id="map" data-v-4e9c2f42="">
                                <image width="3001" height="1362" xlink:href="/images/company/clients-map.png"
                                    style="overflow:visible" data-v-4e9c2f42=""></image>
                            </g>
                            <g id="points" data-v-4e9c2f42="">
                                <circle id="chicago" data-label="Chicago" cx="810.5" cy="425.2" r="80"
                                    data-v-4e9c2f42=""></circle>
                                <circle id="london" data-label="Manchester" cx="1391.1" cy="444" r="80"
                                    data-v-4e9c2f42=""></circle>
                                <circle id="malaysia" data-label="Kuala Lumpur" cx="2227.4" cy="759.1" r="80"
                                    data-v-4e9c2f42=""></circle>
                                <circle id="shangai" data-label="Shanghai" cx="2405.7" cy="589.7" r="80"
                                    data-v-4e9c2f42=""></circle>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <CollegesInfrastructure />
            <div class="flex px-10 course-block-wrapper">
                <div class="w-full">
                    <h2 class="title w-full">
                        <span class="top-line"></span>
                        <span class="title-label">Courses Offered</span>
                        <span class="bottom-line"></span>
                    </h2>
                    <div class="px-0 md:px-5 mt-8">
                        <ul class="list">
                            <li v-for="(course, index) of courses" :key="index" class="item">
                                <div class="flex">
                                    <div class="md:w-1/2 w-3/5 my-4">
                                        <h5>{{ course.name }}</h5>
                                        <p class="mt-8">{{ course.description }}</p>
                                    </div>
                                    <ul class="courses-list md:w-1/2 w-2/5 md:ml-[25.25%]">
                                        <li v-for="(item, index) of course.courses" :key="index" class="course">
                                            <IconsTickCircle />
                                            <span class="ml-3">{{ item }}</span>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="collaboration-block-wrapper">
                <div class="flex flex-col md:flex-row px-8">
                    <div class="flex flex-col justify-start ml-0 md:ml-[6.25%] w-full md:w-[43.75%]">
                        <h2 class="title">Collaboration & Partnership</h2>
                        <p>AJ Hospital and Research Centre is a leading institution that
                            offers state of the art health care treatment and facilities
                            across 30 major medical disciplines. It is located in Mangalore,
                            India, and has a global outreach for international patients and
                            a specialized division of cardiothoracic and cardiovascular
                            surgery.</p>
                    </div>
                    <div class="flex flex-col justify-center ml-0 md:ml-[10.75%] w-full md:w-1/2 px-3 mt-0 md:mt-24">
                        <div class="list flex flex-wrap">
                            <div class="item my-2 px-3">
                                <div class="inner">
                                    <span class="label">AJ Medical College</span>
                                </div>
                            </div>
                            <div class="item my-2 px-3">
                                <div class="inner">
                                    <span class="label">Laxmi Memorial</span>
                                </div>
                            </div>
                            <div class="item my-2 px-3">
                                <div class="inner">
                                    <span class="label">AJ Dental Hospital</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex px-8 md:px-20 mt-8 contact-wrapper">
                <div>
                    <h2>Contact Information</h2>
                    <p class="w-full md:w-1/2">For specific inquiries or free consultations, students
                        can contact our respective academic counselor or
                        mail us to info@campusentri.com</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.college-content-wrapper {
    display: block;
    min-height: calc(100% - 40px);
    left: 20px;
    position: absolute;
    top: 40px;
    width: calc(100% - 40px);
    padding: 3.5rem 0rem;

    @media screen and (max-width: 768px) {
        width: 100%;
        left: 0;
        top: 50px;
    }

    .intro-block-wrapper {
        .left-col {
            .title {
                align-items: center;
                color: #2c2c2c;
                display: flex;
                font-family: 'Aeonik-Medium';
                font-size: calc(1.75rem + 4.66667vw);
                letter-spacing: -.03em;
                line-height: 1em;
                padding: .9375rem 0 calc(1.28906rem + .36458vw);
                position: relative;
            }

            figure {
                display: flex;
                flex-direction: column;
                height: 60vh;
                justify-content: flex-start;
                margin-top: 0;
                max-width: 350px;
                padding-bottom: calc(1.40625rem + 1.45833vw);
                position: relative;

                @media screen and (max-width: 768px) {
                    height: auto;
                }

                .image-wrapper {
                    width: 100%
                }

                figcaption {
                    color: #909ea0;
                    display: block;
                    font-family: 'Aeonik-Regular';
                    font-size: 1rem;
                    line-height: 1.4em;
                    position: relative;
                    text-align: center;
                }
            }

            .image-wrapper {
                align-items: flex-start;
                display: flex;
                height: 350px;
                justify-content: center;
                width: 350px;
            }
        }

        .right-col {
            margin-bottom: 1.25rem;
            margin-top: calc(2.03125rem + 7.29167vw);

            h2 {
                font-size: calc(1.3125rem + .58333vw);
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                line-height: 1.1em;
                margin-bottom: calc(1.40625rem + 1.45833vw);
                position: relative;
            }

            p {
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                font-size: 1.125rem;
                line-height: 1.6em;
                margin-bottom: calc(1.34375rem + .875vw);
            }
        }
    }

    .institute-block-wrapper {
        .title {
            font-size: calc(1.71875rem + 4.375vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            letter-spacing: -.03em;
            line-height: 1em;
            padding: .9375rem 0 calc(1.28906rem + .36458vw);
            position: relative;
        }

        .list {
            margin-bottom: calc(1.40625rem + 1.45833vw);
            position: relative;

            .item {
                font-size: calc(1.26563rem + .14583vw);
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                line-height: 1em;
                border-bottom: 1.5px solid #2c2c2c;
                padding: .9375rem 0;
                position: relative;
            }
        }
    }

    .culture-block-wrapper {
        margin: 0.25rem 0 9.375rem;

        .title {
            font-size: 4rem;
            margin-top: 1.25rem;
            white-space: pre-line;
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            letter-spacing: -.01em;
            line-height: 1.2em;

            @media screen and (max-width: 768px) {
                font-size: calc(1.40625rem + 1.45833vw);
            }
        }

        .values-list {
            @media screen and (max-width: 768px) {
                gap: 10rem;
            }

            .item {
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
                        top: -120px;
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
                        font-size: 2.5411764706vw;
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

    .clients-block-wrapper {
        padding-bottom: 3.5rem;
        position: relative;

        @media screen and (max-width: 768px) {
            padding-bottom: 0;
        }

        .bg-gradient {
            background: linear-gradient(180deg, rgba(247, 158, 190, 0), #ffa5a5 45.8%, rgba(247, 158, 163, 0) 89.72%);
            display: block;
            height: 160vh;
            left: 0;
            position: absolute;
            top: -10vh;
            width: 100%;

            @media screen and (max-width: 768px) {
                height: 120vh;
            }
        }

        .title {
            position: relative;
            text-align: center;
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            font-size: 3.8235294118vw;
            letter-spacing: -.01em;
            line-height: 1.2em;

            @media screen and (max-width: 768px) {
                font-size: calc(1.40625rem + 2.45833vw);
                margin-bottom: 3rem;
            }
        }

        h5 {
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            font-size: 1.8235294118vw;
            letter-spacing: -.01em;
            line-height: 1.2em;
            @media screen and (max-width: 768px) {
                font-size: 1.5rem;
            }
        }

        p {
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            font-size: 0.8rem;
            line-height: 1.6em;
            @media screen and (max-width: 768px) {
                font-size: 1rem;
            }
        }

        .image-container {
            .inner {
                @media screen and (max-width: 768px) {
                    width: 100%;
                }
            }

            .map {
                margin-bottom: 2.5rem;
                position: relative;

                #points {
                    circle {
                        cursor: pointer;
                        opacity: 0;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        user-select: none;
                    }
                }
            }
        }
    }

    .course-block-wrapper {
        .title {
            font-size: calc(1.5625rem + 2.91667vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Medium';
            letter-spacing: -.02em;
            line-height: 1em;
            padding: .9375rem 0;
            position: relative;
            text-transform: none;

            .top-line {
                background-color: #2c2c2c;
                display: block;
                height: 2px;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
            }

            .title-label {
                display: block;
                width: 100%;
            }

            .bottom-line {
                background-color: #2c2c2c;
                bottom: 0;
                display: block;
                height: 2px;
                left: 0;
                position: absolute;
                width: 100%;
            }
        }

        .list {
            .item {
                padding: 10px 10px;
                border-bottom: 1px solid #ccc;

                h5 {
                    font-size: 1.5625rem;
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    letter-spacing: -.02em;
                    line-height: 1em;
                    position: relative;
                    text-transform: none;
                }

                .courses-list {
                    .course {
                        display: flex;
                        align-items: center;
                        // margin-bottom: 10px;

                        svg {
                            width: 20px;
                        }

                        span {
                            font-size: 0.85rem;
                            color: #2c2c2c;
                            font-family: 'Aeonik-Regular';
                            letter-spacing: -.02em;
                            line-height: 1em;
                            padding: .9375rem 0;
                            position: relative;
                            text-transform: none;
                        }
                    }
                }
            }
        }
    }

    .collaboration-block-wrapper {
        .title {
            margin-bottom: calc(1.40625rem + 1.45833vw);
            font-size: calc(1.71875rem + 3.375vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            letter-spacing: -.03em;
            line-height: 1em;
            padding: .9375rem 0 calc(1.28906rem + .36458vw);
            position: relative;
            white-space: nowrap;
            @media screen and (max-width: 768px) {
                font-size: 1.8rem;
            }
        }

        p {
            font-size: 1.125rem;
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            line-height: 1.6em;
            margin-bottom: calc(1.34375rem + .875vw);
        }

        .list {
            .item {
                margin: 10px 0;
                position: relative;

                .inner {
                    height: 11.7647058824vw;
                    width: 11.7647058824vw;
                    align-items: center;
                    background-color: #ff4134;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    @media screen and (max-width: 768px) {
                        width: 25vw;
                        height: 25vw;
                    }

                    .label {
                        font-size: 1rem;
                        color: #fff;
                        display: block;
                        font-family: 'Aeonik-Medium';
                        line-height: 1em;
                        padding: 0 10px;
                        text-align: center;
                    }
                }
            }
        }
    }
    .contact-wrapper {
        h2 {
            margin-bottom: 2rem;
            font-size: calc(1.71875rem + 1.375vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            letter-spacing: -.03em;
            line-height: 1em;
            padding: .9375rem 0 calc(1.28906rem + .36458vw);
            position: relative;
            white-space: nowrap;
        }

        p {
            font-size: 1.125rem;
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            line-height: 1.6em;
            margin-bottom: calc(1.34375rem + .875vw);
        }
    }
}
</style>