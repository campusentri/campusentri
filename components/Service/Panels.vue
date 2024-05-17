<script setup>
import { get, filter } from 'lodash';
const query = groq`*[_type == "colleges"] {
  ...,
  collegeVideo {
    asset-> {
      url
    }
  }
}
`;
const { data } = await useSanityQuery(query);
const colleges = get(data, 'value', []);
const filterNames = ['AJ Institute', 'Yenepoya Institute', 'NITTE','Father Muller']
const filteredColleges = filter(colleges, (college) => filterNames.includes(college.name));
</script>

<template>
    <div class="panels-container">
        <div id="college-selection" class="panel-container even-panel">
            <section class="list-block-wrapper service-even">
                <span class="background"></span>
                <div class="block-inner">
                    <div class="scroll-wrapper">
                        <div class="title-container px-8 flex relative">
                            <div class="px-3 ml-0 md:ml-[6.25%] w-full md:w-[87.5%]">
                                <h2 class="title">
                                    <span class="top-line"></span>
                                    <span class="title-label">College Selection</span>
                                    <span class="bottom-line"></span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div class="px-8 flex flex-col md:flex-row first-content-container relative mt-12">
                                <div class="w-full md:w-1/2 ml-0 md:ml-[6.25%] px-3">
                                    <NuxtImg class="main-img" src="/images/services/service-5.png" />
                                    <ul class="list">
                                        <li class="item">
                                            <span class="name">World-renowned counselors with expertise in multiple
                                                subspecialties</span>
                                        </li>
                                        <li class="item">
                                            <span class="name">Full-time and employed in all our locations</span>
                                        </li>
                                        <li class="item">
                                            <span class="name">Available to serve as Principal Investigators and
                                                Consultants</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="w-full md:w-[37.5%] px-3">
                                    <div>
                                        <h4>World-renowned couselors with
                                            expertise in many different
                                            subspecialties lead CampusEntri®
                                            admission guidance, analyses,
                                            and integrated reporting.</h4>
                                    </div>
                                    <div class="technology-list-container">
                                        <ul class="technologies-list">
                                            <li v-for="(institute, index) of filteredColleges" :key="index" class="item">
                                                <NuxtLink :to="`/colleges#${get(institute, 'name', '')}`" class="flex">
                                                    <SanityImage class="rounded-lg" :asset-id="get(institute, 'poster.asset._ref', '')" />
                                                    <div class="text-container">
                                                        <span class="name">{{ get(institute, 'name', '') }}</span>
                                                        <div class="read-more">
                                                            <button class="read-more-btn big-size black-color"
                                                                data-v-a2720cde="">
                                                                <div class="inner" data-v-a2720cde="">
                                                                    <span class="icon arrow-right" data-v-a2720cde="">
                                                                        <span
                                                                            class="icon-container arrow-right-icon-container"
                                                                            data-v-a2720cde="">
                                                                            <svg width="11" height="10" viewBox="0 0 11 10"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                class="arrow-right-icon shadow-icon"
                                                                                data-v-a2720cde="">
                                                                                <path d="M1.19922 4.82703L9.23616 4.82703"
                                                                                    stroke="#2C2C2C" stroke-width="1.5"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    data-v-a2720cde=""></path>
                                                                                <path
                                                                                    d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
                                                                                    stroke="#2C2C2C" stroke-width="1.5"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    data-v-a2720cde=""></path>
                                                                            </svg>
                                                                            <svg width="11" height="10" viewBox="0 0 11 10"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                class="arrow-right-icon" data-v-a2720cde="">
                                                                                <path d="M1.19922 4.82703L9.23616 4.82703"
                                                                                    stroke="#2C2C2C" stroke-width="1.5"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    data-v-a2720cde=""></path>
                                                                                <path
                                                                                    d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
                                                                                    stroke="#2C2C2C" stroke-width="1.5"
                                                                                    stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    data-v-a2720cde=""></path>
                                                                            </svg>
                                                                        </span>
                                                                    </span>
                                                                    <span class="label-sizer" data-v-a2720cde="">More</span>
                                                                </div>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div id="campus-visits" class="panel-container">
            <section class="list-block-wrapper service-odd">
                <span class="background"></span>
                <div class="block-inner">
                    <div class="scroll-wrapper">
                        <div class="title-container flex px-8">
                            <div class="px-3 ml-0 md:ml-[6.25%] w-full md:w-[87.5%]">
                                <h2 class="title">
                                    <span class="top-line"></span>
                                    <span class="title-label">Free Campus Visits</span>
                                    <span class="bottom-line"></span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div class="first-content-container relative px-8 mt-12 flex flex-col-reverse md:flex-row">
                                <div class="ml-0 md:ml-[6.25%] w-full md:w-[43.25%] px-3">
                                    <div>
                                        <h4>Biomarkers</h4>
                                        <h2 class="mb-6">CAMPUSENTRI® IS AT THE FOREFRONT OF ADMISSION GUIDANCE, FROM
                                            CAMPUS
                                            VISITS TO ONE ON ONE PERSONALIZED GUIDANCE FOR YOUR FIRST STEP TOWARS
                                            YOUR DREAMS.</h2>
                                        <p>Embarking on the journey of higher education is a significant milestone, and
                                            we believe that firsthand experiences shape informed decisions. Introducing
                                            our exceptional "Free Campus Visit" service, where we extend an invitation
                                            to
                                            students and parents to explore the colleges they aspire to without any
                                            financial commitment.</p>
                                    </div>
                                </div>
                                <div class="px-3 w-full md:w-[43.75%] flex justify-center">
                                    <NuxtImg src="/images/services/service-7.png" alt="" class="main-img" />
                                </div>
                            </div>
                        </div>
                        <div class="px-8 flex content-container">
                            <div class="w-full md:w-[87.5%] ml-0 md:ml-[6.25%] px-3">
                                <div>
                                    <h4>Guidance</h4>
                                    <h2>THE USE OF DIGITAL SERVICES PROVIDES NEW OPPORTUNITIES FOR STUDENTS CAREER
                                        ADVANCEMENTS</h2>
                                    <p>At CampusEntri, we understand the importance of making the
                                        right choice, and that's why we've curated a unique opportunity for
                                        you. Our dedicated career counselors will guide you through
                                        personalized campus visits, providing insights into academic life,
                                        facilities, and the overall college atmosphere.
                                        The best part? It comes with no cost - our commitment to
                                        empowering you in making educated decisions about your
                                        academic future. Take the first step towards your dreams with
                                        our "Free Campus Visit" service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div id="loan-assistance" class="panel-container">
            <section class="list-block-wrapper service-odd">
                <span class="background"></span>
                <div class="block-inner">
                    <div class="scroll-wrapper">
                        <div class="title-container flex px-8">
                            <div class="px-3 ml-0 md:ml-[6.25%] w-full md:w-[87.5%]">
                                <h2 class="title">
                                    <span class="top-line"></span>
                                    <span class="title-label">Loan Assistance</span>
                                    <span class="bottom-line"></span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div class="first-content-container relative px-8 mt-12 flex flex-col md:flex-row">
                                <div class="px-3 ml-0 md:ml-[6.25%] w-full md:w-[43.75%] flex justify-center">
                                    <NuxtImg src="/images/services/service-6.png" alt="" class="main-img" />
                                </div>
                                <div class=" w-full md:w-[43.25%] px-3">
                                    <div>
                                        <h4 class="mb-6">CAMPUSENTRI®'s academic experts are well equipped to develop an analysis that is specific to your career needs.</h4>
                                        <p>At CampusEntri, we understand that financing your education can be a crucial aspect of your academic journey. That's why we offer comprehensive 'Loan Assistance' to students aspiring to secure an educational loan. Our dedicated team will guide you through the entire process, providing all necessary documents and papers required for a seamless loan application. Whether you are exploring options for tution fees, accomodation or other educational expenses, our commitment is to make this process stress-free for you. It's important to note that all our services including loan Assistance are provided entirely free of charge.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-8 flex content-container mt-12">
                            <div class="w-full md:w-[87.5%] ml-0 md:ml-[6.25%] px-3">
                                <div>
                                    <h2>Your dreams deserve the support they need and at CampusEntri, we are here to make those dreams a reality without any financial burden.</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.panels-container {
    will-change: transform;

    .list-block-wrapper {
        height: 100%;
        position: relative;

        &:before {
            background: linear-gradient(-180deg, #f5f7f1, #f5f7f1 20%, hsla(80, 27%, 96%, 0));
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

        .background {
            background-color: #f5f7f1;
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
            padding-top: 135px;
            position: relative;
            top: 20px;
            width: 100%;

            .title-container {
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
            }
        }

        .first-content-container {
            .main-img {
                position: relative;
            }

            .list {
                padding-right: 25%;
                margin-bottom: calc(1.71875rem + 4.375vw);
                margin-top: calc(1.40625rem + 1.45833vw);
                position: relative;

                .item {
                    cursor: pointer;

                    .name {
                        font-size: 1.0625rem;
                        border-top: 1px solid #2c2c2c;
                        color: #2c2c2c;
                        display: block;
                        font-family: 'Aeonik-Regular';
                        letter-spacing: .02em;
                        line-height: 1.4em;
                        padding: .625rem 0;
                    }
                }
            }
        }

        h4 {
            font-size: calc(1.35938rem + 1.02083vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            line-height: 1.1em;
            margin: 1.25rem 0 calc(1.36719rem + 1.09375vw);
            position: relative;
        }

        .technology-list-container {
            margin-top: calc(1.71875rem + 4.375vw);
            position: relative;

            .technologies-list {
                margin-bottom: calc(1.71875rem + 4.375vw);
                margin-top: 1.25rem;
                position: relative;
                width: 100%;

                .item {
                    height: 9.7647058824vw;
                    align-items: center;
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 1px 2px 3px rgba(0, 0, 0, .03);
                    cursor: pointer;
                    display: flex;
                    margin: .625rem 0;
                    padding: 0 .9375rem;
                    position: relative;

                    @media screen and (max-width: 768px) {
                        height: 100px;
                    }

                    img {
                        max-height: 70%;
                        width: 35%;
                    }

                    .text-container {
                        margin-left: calc(1.32813rem + .72917vw);
                        position: relative;

                        .name {
                            font-size: calc(1.28125rem + .29167vw);
                            color: #2c2c2c;
                            display: block;
                            font-family: 'Aeonik-Medium';
                            letter-spacing: -.02em;
                            line-height: 1.1em;
                            margin-bottom: .625rem;
                            position: relative;

                            @media screen and (max-width: 768px) {
                                font-size: 1.125rem;
                            }
                        }

                        .read-more {
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
                                    height: 2.5rem;
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
                                        height: 1.8rem;
                                        width: 1.8rem;
                                        border-radius: 50px;
                                        margin-left: 5px;
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
            }
        }

        .content-container {
            padding-bottom: calc(2.26563rem + 9.47917vw);
            position: relative;

            h4 {
                font-size: calc(1.35938rem + 1.02083vw);
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                line-height: 1.1em;
                margin: 1.25rem 0 calc(1.36719rem + 1.09375vw);
                position: relative;
            }

            h2 {
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                font-size: 1rem;
                line-height: 1.4em;
                margin-bottom: .625rem;
                position: relative;
                text-transform: uppercase;
                width: 54%;

                @media screen and (max-width: 768px) {
                    width: 100%;
                }
            }

            p {
                column-count: 2;
                -moz-column-gap: calc(6.25vw + 1.5rem);
                column-gap: calc(6.25vw + 1.5rem);
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                font-size: 1.125rem;
                line-height: 1.6em;
                margin-bottom: calc(1.34375rem + .875vw);

                @media screen and (max-width: 768px) {
                    column-count: 1;
                }
            }
        }
    }
}
</style>