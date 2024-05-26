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
    emitOpenModal('open-modal', collegeInfo.value);
}
function closeModal() {
    isModalOpen.value = false;
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
            opacity: 0,
            y: direction === -1 ? 20 : -20,
            duration: 0.1,
        });
    });
})
</script>

<template>
    <div id="list" class="technologies-list-wrapper mt-28">
        <ul class="items-list technologies-list">
            <li v-for="(item, index) of colleges" :key="index" :id="get(item, 'name', '')"
                class="item technologies-item">
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
                        <div @click="openModal(item)" class="read-more">
                            <BtnReadMore :title="'More'" />
                        </div>
                    </div>
                </div>
                <div class="right-col">
                    <SanityImage class="rounded-lg" :asset-id="get(item, 'poster.asset._ref', '')" />
                </div>
            </li>
        </ul>
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