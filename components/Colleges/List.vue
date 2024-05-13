<script setup>
const { $gsap } = useNuxtApp();
import { get } from 'lodash';
const query = groq`*[_type == "colleges"] | order(_createdAt asc) {
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
const emitOpenModal = defineEmits(['open-modal']);
const isModalOpen = ref(false);
const collegeInfo = ref({});
function openCollegeModal() {
    emitOpenModal('open-modal', collegeInfo.value);
}
function openModal(item) {
    collegeInfo.value = item;
    const getUser = localStorage.getItem('user');
    const user = JSON.parse(getUser);
    if(!user) {
        isModalOpen.value = true;
        emitOpenModal('open-contact-modal', item);
    } else {
        emitOpenModal('open-modal', collegeInfo.value);
    }
}
function closeModal() {
    isModalOpen.value = false;
    emitOpenModal('close-contact-modal');
}
onMounted(() => {
    const tl = $gsap.timeline({
        scrollTrigger: {
            trigger: '#list',
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse',
        },
    });

    colleges.forEach((item, index) => {
        const direction = index % 2 === 0 ? -1 : 1; // Set the direction based on index

        tl.from(`.technologies-list .technologies-item:nth-child(${index + 1})`, {
            scale: 0, // Start with a scale of 0
            duration: 0.5, // Adjust duration for the desired speed
            ease: 'power2.out', // You can experiment with different easing functions
            transformOrigin: direction === -1 ? 'left center' : 'right center', // Set transform origin based on direction
        });
    });
})
</script>

<template>
    <div id="list" class="technologies-list-wrapper mt-28">
        <ul class="items-list technologies-list">
            <li v-for="(item, index) of colleges" :key="index" :id="get(item, 'name', '')" class="item technologies-item">
                <span class="top-line"></span>
                <span class="right-line"></span>
                <div class="left-col">
                    <div class="top-row">
                        <div class="order-number-wrapper">
                            <span class="index">0{{ index + 1 }}</span>
                        </div>
                        <h2 class="title">{{ get(item, 'name', '') }}</h2>
                        <h3 class="subtitle">{{ get(item, 'shortDescription', '') }}</h3>
                    </div>
                    <div class="bottom-row">
                        <div class="read-more">
                            <button @click="openModal(item)" class="read-more-btn big-size black-color">
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
                        </div>
                    </div>
                </div>
                <div class="right-col">
                    <!-- <img :src="item.image" /> -->
                    <SanityImage class="rounded-lg" :asset-id="get(item, 'poster.asset._ref', '')" />
                </div>
            </li>
        </ul>
        <ContactForm :is-open="isModalOpen" @close-contact-modal="closeModal" @open-modal="openCollegeModal" :course-info="collegeInfo" />
    </div>
</template>

<style lang="scss" scoped>
.technologies-list-wrapper {
    .items-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
        }

        .item {
            padding-left: 2.25rem;
            padding: 2.5rem 0 3.125rem 3.875rem;
            cursor: pointer;
            display: flex;
            height: 65vh;
            position: relative;

            @media screen and (max-width: 768px) {
                height: 100%;
                padding: calc(1.40625rem + 1.45833vw) 2rem calc(1.48438rem + 2.1875vw);
            }

            .top-line {
                transform-origin: right;
                background-color: hsla(188, 8%, 60%, .3);
                height: 1px;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
            }

            .right-line {
                background-color: hsla(188, 8%, 60%, .3);
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                transform-origin: top;
                width: 1px;
            }

            .left-col {
                width: 80%;
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-between;
                position: relative;

                .order-number-wrapper {
                    align-items: center;
                    border-radius: 34px;
                    display: flex;
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

                    span {
                        color: #2c2c2c;
                        font-family: 'Aeonik-Medium';
                        font-size: .875rem;
                        letter-spacing: .02em;
                        line-height: 1em;
                        position: relative;
                        transition: color .5s cubic-bezier(.19, 1, .22, 1);
                    }
                }

                .title {
                    font-size: 3.375rem;
                    color: #2c2c2c;
                    font-family: 'Aeonik-Medium';
                    letter-spacing: -.03em;
                    line-height: 1em;
                    margin-bottom: 1.25rem;
                    margin-top: 1.25rem;
                    position: relative;

                    @media screen and (max-width: 768px) {
                        font-size: calc(1.51563rem + 2.47917vw);
                    }
                }

                .subtitle {
                    line-height: 1.2em;
                    font-size: 1rem;
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    position: relative;
                    width: 80%;

                    @media screen and (max-width: 768px) {
                        line-height: 1.3em;
                        margin-bottom: 20px;
                        padding-right: 20vw;
                        width: auto;
                    }
                }

                .bottom-row {
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
                }
            }

            .right-col {
                bottom: 20px;
                position: absolute;
                right: 20px;
                width: 40%;
                align-items: flex-end;
                display: flex;

                img {
                    left: 0;
                    margin: 0 auto;
                    max-height: 100%;
                    max-width: 100%;
                    position: relative;
                    top: 15%;
                    width: 100%;

                    @media screen and (max-width: 768px) {
                        width: 85%;
                    }
                }
            }
        }
    }
}
</style>