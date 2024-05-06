<script setup>
const { $gsap } = useNuxtApp();
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
const filterNames = ['AJ Institute', 'Yenepoya Institute', 'NITTE', 'Srinivas College'];
const filteredColleges = filter(colleges, (college) => filterNames.includes(college.name));
const items = [
    { name: 'AJ Institute', img: '/images/technologies/technology-4.png' },
    { name: 'Yenepoya Institute', img: '/images/technologies/technology-2.png' },
    { name: 'Nitte Institute', img: '/images/technologies/technology-1.png' },
    { name: 'Srinivas Institute', img: '/images/technologies/technology-5.png' }
]
onMounted(() => {
    const tl = $gsap.timeline({
        scrollTrigger: {
            trigger: '#results',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
        },
    });
    tl.from('.result-title', {
        opacity: 0,
        y: 20,
        duration: 0.2,
    });
    const tl2 = $gsap.timeline({
        scrollTrigger: {
            trigger: '.result-list-items',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
        },
    });
    items.forEach((item, index) => {

        tl2.from(`.results-list .results-items:nth-child(${index + 1})`, {
            scale: 0, // Start with a scale of 0
            duration: 0.5, // Adjust duration for the desired speed
            ease: 'power2.out', // You can experiment with different easing functions
        });
    });
})
</script>

<template>
    <div id="results" class="results-block-wrapper">
        <div class="px-8 flex justify-center result-title">
            <div class="md:w-1/2 px-3 text-center">
                <div class="order-number-wrapper">
                    <span class="index">03</span>
                </div>
                <h2 class="title">Integrated Results</h2>
            </div>
        </div>
        <div class="flex justify-center px-8 result-list-items">
            <div class="relative w-[87.5%] px-1 md:px-3 list-container">
                <svg viewBox="0 0 1132 624" fill="none" xmlns="http://www.w3.org/2000/svg" class="lines-landscape"
                    data-v-4b2d19a0="">
                    <path
                        d="M1131 1C1131 209.211 878.041 378 566 378C462.469 378 365.442 359.419 282 326.983C113.949 261.657 1 140.13 1 1"
                        stroke="#909EA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                        stroke-dasharray="2 10" class="round-line" data-v-4b2d19a0=""
                        style="translate: none; rotate: none; scale: none; opacity: 0.9969;" data-svg-origin="1 1"
                        transform="matrix(1,0,0,1,0,-0.6203)"></path>
                    <path d="M553 407L553 623.201" stroke="url(#paint0_linear)" stroke-width="1.5"
                        stroke-linecap="round" stroke-dasharray="2 10" class="straight-line" data-v-4b2d19a0=""
                        style="translate: none; rotate: none; scale: none; opacity: 0.9969;" data-svg-origin="553 407"
                        transform="matrix(1,0,0,1,0,-0.6203)"></path>
                    <defs data-v-4b2d19a0="">
                        <linearGradient id="paint0_linear" x1="553" y1="454" x2="553" y2="583.852"
                            gradientUnits="userSpaceOnUse" data-v-4b2d19a0="">
                            <stop stop-color="#909EA0" data-v-4b2d19a0=""></stop>
                            <stop offset="1" stop-color="#909EA0" stop-opacity="0" data-v-4b2d19a0=""></stop>
                        </linearGradient>
                    </defs>
                </svg>
                <svg width="217" height="979" viewBox="0 0 217 979" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="lines-portrait" data-v-4b2d19a0="">
                    <path
                        d="M56.9996 1C113.833 4.5 242.894 67.1278 192 184.5C167.5 241 128 269.631 98.5001 273.5C75.4997 276.516 -9.61054 302.404 2.9996 428.5C11.5 513.5 42.0001 514.993 65.4997 522C101.833 532.833 175.098 564.401 196.5 590.5C237.5 640.5 219 721.5 87.4998 782.5L87.4998 892V977.5"
                        stroke="#909EA0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                        stroke-dasharray="2 10" data-v-4b2d19a0=""></path>
                </svg>
                <ul class="results-list">
                    <li v-for="(item, index) of filteredColleges" :key="index" class="item results-items">
                        <!-- <img :src="item.img" /> -->
                        <SanityImage class="rounded-lg w-full p-0" :asset-id="get(item, 'poster.asset._ref', '')" />
                        <span class="item-title">{{ get(item, 'name', '') }}</span>
                        <div class="read-more item-title">
                            <NuxtLink :to="`/colleges#${get(item, 'name', '')}`">
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
                                                    <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
                                                        stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" data-v-a2720cde=""></path>
                                                </svg>
                                                <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon"
                                                    data-v-a2720cde="">
                                                    <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C"
                                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                                        data-v-a2720cde=""></path>
                                                    <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
                                                        stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" data-v-a2720cde=""></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span class="label-sizer" data-v-a2720cde="">More</span>
                                    </div>
                                </button>
                            </NuxtLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center px-8 mt-20 md:mt-0">
            <div class="px-3 text-center md:w-[56.5%]">
                <h5 class="description">Experienced counselors / CampusEntri review results and provide integrated
                    reports for our students.</h5>
                <div class="results-cta-btn-wrapper">
                    <a href="#" class="results-cta-btn">
                        <span class="icon">
                            <svg width="31" height="36" viewBox="0 0 31 36" fill="none"
                                xmlns="http://www.w3.org/2000/svg" data-v-4b2d19a0="">
                                <path
                                    d="M4.47278 0C3.42921 0.0098955 2.43171 0.437445 1.69723 1.18965C0.96276 1.94185 0.550736 2.95787 0.550781 4.01668V25.0386C0.550781 26.313 1.04975 27.5351 1.93792 28.4362C2.82609 29.3373 4.03071 29.8436 5.28678 29.8436H13.1308C13.7098 30.9033 14.5068 31.8243 15.4676 32.5439C16.4284 33.2636 17.5306 33.765 18.6994 34.0143C19.8681 34.2636 21.076 34.2548 22.2411 33.9885C23.4062 33.7223 24.5012 33.2049 25.4518 32.4713L28.9298 36L30.4838 34.4234L27.0058 30.8947C27.8057 29.8415 28.348 28.6109 28.5883 27.3038C28.8286 25.9968 28.76 24.6505 28.388 23.3756C28.0161 22.1007 27.3515 20.9334 26.4487 19.9696C25.546 19.0058 24.4308 18.2729 23.1948 17.8311V5.74348H20.5308V0H4.47278ZM4.47278 2.25235H18.3108V5.74348H4.47278C4.05984 5.68188 3.68252 5.47165 3.4097 5.15118C3.13688 4.83071 2.98676 4.42137 2.98676 3.99791C2.98676 3.57446 3.13688 3.16512 3.4097 2.84465C3.68252 2.52418 4.05984 2.31395 4.47278 2.25235ZM26.4878 25.7518C26.4951 26.98 26.1423 28.1827 25.4743 29.2071C24.8063 30.2314 23.8532 31.0311 22.7362 31.5045C21.6192 31.978 20.3886 32.1038 19.2009 31.866C18.0132 31.6282 16.922 31.0375 16.066 30.169C15.21 29.3005 14.6278 28.1934 14.3934 26.9885C14.159 25.7835 14.283 24.535 14.7497 23.4017C15.2163 22.2683 16.0046 21.3014 17.0142 20.6236C18.0238 19.9459 19.2092 19.588 20.4198 19.5954C22.0261 19.6053 23.5639 20.257 24.6998 21.4095C25.8356 22.5619 26.4781 24.1221 26.4878 25.7518ZM20.9748 7.99583V17.3431H20.4198C19.1729 17.335 17.9404 17.6125 16.8139 18.1548C15.6874 18.6972 14.696 19.4904 13.9137 20.4754C13.1313 21.4604 12.578 22.6118 12.2951 23.8439C12.0122 25.0759 12.007 26.3568 12.2798 27.5912H5.24978C4.58249 27.5912 3.94254 27.3223 3.4707 26.8436C2.99886 26.3649 2.73378 25.7156 2.73378 25.0386V7.62044C3.27443 7.89194 3.86953 8.03325 4.47278 8.03337L20.9748 7.99583Z"
                                    fill="white" data-v-4b2d19a0=""></path>
                                <path d="M17.6435 12.2754H6.0625V14.5277H17.6435V12.2754Z" fill="white"
                                    data-v-4b2d19a0=""></path>
                            </svg>
                        </span>
                        <span class="label">Full CampusEntri Capabilities</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.results-block-wrapper {
    padding: calc(3.4375rem + 20.41667vw) 0 calc(2.34375rem + 10.20833vw);
    position: relative;

    @media screen and (max-width: 960px) {
        padding: calc(1.875rem + 5.83333vw) 0 calc(2.34375rem + 10.20833vw);
    }

    .order-number-wrapper {
        align-items: center;
        border-radius: 34px;
        display: inline-flex;
        margin: 0 auto;
        height: 34px;
        justify-content: center;
        position: relative;
        width: 34px;

        &:before {
            border: 1px solid #2c2c2c;
            border-radius: 34px;
            content: "";
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            transition: background-color .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);
            width: 100%;
            will-change: transform;
        }

        .index {
            color: #2c2c2c;
            font-family: 'Aeonik-Medium';
            font-size: .85rem;
            letter-spacing: .02em;
            line-height: 1em;
            position: relative;
            transition: color .5s cubic-bezier(.19, 1, .22, 1);
        }
    }

    .title {
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        font-size: calc(1.60156rem + 3.28125vw);
        letter-spacing: -.01em;
        line-height: 1.2em;
        white-space: normal;
        margin-top: 1.25rem;
    }

    .list-container {
        .lines-landscape {
            display: block;
            left: 10%;
            position: absolute;
            top: 0;
            width: 80%;

            @media screen and (max-width: 960px) {
                display: none;
            }
        }

        .lines-portrait {
            display: none;
            height: 90%;
            left: 10%;
            position: absolute;
            top: 300px;
            width: 90%;

            @media screen and (max-width: 960px) {
                display: block;
                top: 200px;
            }
        }

        .results-list {
            display: flex;
            justify-content: space-between;
            margin-top: calc(2.10938rem + 8.02083vw);
            position: relative;

            @media screen and (max-width: 960px) {
                flex-direction: column;
                flex-wrap: wrap;
            }

            .item {
                flex: 0 0 18.8235294118vw;
                height: 18.4705882353vw;
                margin: calc(1.875rem + 5.83333vw) 0;
                min-height: 280px;
                width: 18.8235294118vw;
                align-items: center;
                background: #fcfdfc;
                border-radius: 12px;
                box-shadow: 0 100px 80px rgba(0, 0, 0, .05), 0 41px 33px rgba(0, 0, 0, .035), 0 22px 17px rgba(0, 0, 0, .029), 0 12px 10px rgba(0, 0, 0, .025), 0 6px 5px rgba(0, 0, 0, .02);
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                position: relative;
                transition: background-color 1s cubic-bezier(.19, 1, .22, 1);

                @media screen and (max-width: 960px) {
                    height: 210px;
                    min-height: 210px;
                    width: 195px;
                }

                &:first-child {
                    top: -26.4705882353vw;

                    @media screen and (max-width: 960px) {
                        top: 0;
                    }
                }

                &:nth-child(2) {
                    left: -2.3529411765vw;

                    @media screen and (max-width: 960px) {
                        margin-left: calc(100% - 195px);
                        left: 0;
                    }
                }

                &:nth-child(3) {
                    left: 2.3529411765vw;

                    @media screen and (max-width: 960px) {
                        left: 0;
                    }
                }

                &:nth-child(4) {
                    top: -26.4705882353vw;

                    @media screen and (max-width: 960px) {
                        margin-left: calc(50% - 97.5px);
                        margin-top: calc(2.34375rem + 10.20833vw);
                        top: 0;
                    }
                }

                &:hover {
                    background-color: #f1f2f2;

                    img {
                        transform: scale(1.1);
                    }

                    .read-more {
                        .read-more-btn {
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
                    }
                }

                img {
                    margin-top: 15px;
                    max-height: 50%;
                    max-width: none;
                    position: relative;
                    transition: transform 1s cubic-bezier(.19, 1, .22, 1);
                    will-change: transform;
                }

                .item-title {
                    font-size: calc(1.28125rem + .29167vw);
                    color: #2c2c2c;
                    display: block;
                    font-family: 'Aeonik-Medium';
                    letter-spacing: -.02em;
                    line-height: 1.1em;
                    margin: 0 0 1.25rem;
                    padding: 0 .625rem;
                    position: relative;
                    text-align: center;
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
                            height: 2.2rem;
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
                                height: 1.5rem;
                                width: 1.5rem;
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
                            left: 1.75rem;
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
                            padding: 0 1.125rem 0 1rem;
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

    .description {
        font-size: calc(1.35938rem + 1.02083vw);
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        line-height: 1.1em;
    }

    .results-cta-btn-wrapper {
        margin-top: calc(1.71875rem + 4.375vw);
        position: relative;

        .results-cta-btn {
            align-items: center;
            border-radius: 47px;
            display: inline-flex;
            justify-content: space-between;
            padding: 22px 50px;
            position: relative;

            &::before {
                background: radial-gradient(162.35% 212.03% at 50.11% -62.03%, #21665e 0, #c3d1ab 100%);
                border-radius: 47px;
                content: "";
                display: block;
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                transform-origin: center;
                transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                width: 100%;
                z-index: 1;
            }

            &:after {
                border-radius: 47px;
                content: "";
                display: block;
                height: 150%;
                left: -10%;
                position: absolute;
                top: -25%;
                width: 120%;
            }

            &:hover {
                &:before {
                    transform: scale(1.1);
                }
            }

            .shadow {
                bottom: -60%;
                left: 10%;
                position: absolute;
                transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                width: 80%;
                z-index: 0;
            }

            .icon {
                align-items: center;
                display: flex;
                height: 40px;
                justify-content: center;
                position: relative;
                width: 40px;
                z-index: 2;

                svg {
                    position: relative;
                }
            }

            .label {
                font-size: calc(1.27344rem + .21875vw);
                color: #fff;
                font-family: 'Aeonik-Medium';
                letter-spacing: -.01em;
                line-height: 1em;
                margin-left: 1.25rem;
                position: relative;
                z-index: 2;

                @media screen and (max-width: 960px) {
                    font-size: 16px;
                    margin-left: 10px;
                }
            }
        }
    }
}
</style>