<script setup>
import { get } from 'lodash';
const props = defineProps({
    infrastructure: {
        type: Object,
        default: () => { }
    }
});
</script>

<template>
    <div class="infrastructure-block-wrapper">
        <div class="flex px-8">
            <div class="w-full md:w-[31.25%] ml-0 md:ml-[6.25%] px-3 mb-8 md:mb-0">
                <h2 class="title">Infrastructure</h2>
            </div>
        </div>
        <div class="history-item item-0">
            <div class="inner">
                <NuxtImg src="/images/colleges/infrastructure-2.png" alt="Clinical Facilities" />
                <span class="label-title">Clinical Facilities</span>
                <span class="description">{{ get(infrastructure, 'clinicalFacilities', '') }}</span>
            </div>
        </div>
        <div class="history-item item-1">
            <div class="inner">
                <span class="label-title">Library</span>
                <span class="description">{{ get(infrastructure, 'library', '') }}</span>
            </div>
        </div>
        <div class="history-item item-2">
            <div class="inner">
                <SanityImage :asset-id="get(infrastructure, 'audioVisualLibrary.image.asset._ref', '')" />
                <span class="label-title">Audio-Visual Library</span>
                <span class="description">{{ get(infrastructure, 'audioVisualLibrary.information', '') }}</span>
            </div>
        </div>
        <div class="history-item item-3">
            <div class="inner">
                <NuxtImg src="/images/colleges/infrastructure-4.png" alt="Gymnasium" />
                <span class="label-title">Gymnasium</span>
                <span class="description">{{ get(infrastructure, 'gymnasium', '') }}</span>
            </div>
        </div>
        <div class="history-item item-4">
            <div class="inner">
                <span class="label-title">Conveyance</span>
                <span class="description">{{ get(infrastructure, 'conveyance', '') }}</span>
            </div>
        </div>
        <div class="history-item item-5">
            <div class="inner">
                <NuxtImg src="/images/colleges/infrastructure-2.png" alt="Medical Care" />
                <span class="label-title">Medical Care</span>
                <span class="description">{{ get(infrastructure, 'medicalCare', '') }}</span>
            </div>
        </div>
        <div class="history-item item-6">
            <div class="inner">
                <NuxtImg src="/images/services/pillar-3.png" alt="Student Support and Extra-Curricular activity" />
                <span class="label-title">Student Support and Extra-Curricular activity</span>
                <span class="description">{{ get(infrastructure, 'activities', '') }}</span>
            </div>
        </div>
        <div class="history-item item-7">
            <div class="inner">
                <span class="label-title">Cafeteria</span>
                <span class="description">{{ get(infrastructure, 'cafeteria', '') }}</span>
            </div>
        </div>
        <div class="history-item item-8">
            <div class="inner">
                <NuxtImg src="/images/services/service-7.png" alt="Hostles" />
                <span class="label-title">Hostels</span>
                <span class="description">{{ get(infrastructure, 'hostels', '') }}</span>
            </div>
        </div>
        <div class="history-item item-9">
            <div class="inner">
                <NuxtImg src="/images/colleges/infrastructure-4.png" :alt="get(infrastructure, 'institueInfo.title', '')" />
                <span class="label-title">{{ get(infrastructure, 'institueInfo.title', '') }}</span>
                <span class="description">{{ get(infrastructure, 'institueInfo.description', '') }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.infrastructure-block-wrapper {
    background-color: #2c2c2c;
    padding: calc(2.65625rem + 6.125vw) 0;
    margin-bottom: 50px;
    position: relative;

    .title {
        white-space: normal;
        color: #fff;
        margin-top: 1.25rem;
        font-size: calc(1.60156rem + 3.28125vw);
        font-family: 'Aeonik-Regular';
        letter-spacing: -.01em;
        line-height: 1.2em;
    }

    .history-item {
        margin: calc(1.40625rem + 1.45833vw) calc(1.48438rem + 0.1875vw);
        position: relative;

        .inner {
            position: relative;
            width: 35%;
            @media screen and (max-width: 768px) {
                width: 75%;
            }
        }
    }

    .label-title {
        font-size: calc(1.53125rem + 2.29167vw);
        color: #ff4134;
        display: block;
        font-family: 'Aeonik-Regular';
        letter-spacing: -.02em;
        line-height: 1em;
        position: relative;

        &:before {
            background-color: #ff4134;
            content: "";
            display: block;
            height: 1px;
            width: 100%;
        }
    }

    .description {
        font-size: 1rem;
        color: #909ea0;
        display: inline-block;
        font-family: 'Aeonik-Regular';
        line-height: 1.4em;
        position: relative;
        z-index: 10;
    }

    .item-0 {
        margin-top: 0;

        .inner {
            margin-left: 50%;

            img {
                position: absolute;
                right: -50%;
                top: 0;
                width: 480px;
            }
            @media screen and (max-width: 768px) {
                margin-left: 25%;
                img {
                    right: 0;
                    width: 400px;
                }
            }
        }
    }

    .item-1 {
        .inner {
            margin-left: 12.5%;
        }
    }

    .item-2 {
        .inner {
            margin-left: 60%;

            img {
                left: -70%;
                position: absolute;
                top: -10%;
                width: 21.1764705882vw;
            }
            @media screen and (max-width: 768px) {
                margin-left: 30%;
                img {
                    left: -20%;
                    top: 0;
                }
            }
        }
    }

    .item-3 {
        .inner {
            margin-bottom: calc(1.71875rem + 4.375vw);
            margin-left: 17.5%;
            margin-top: calc(1.71875rem + 4.375vw);

            img {
                left: -5.375vw;
                max-width: none;
                position: absolute;
                top: -40%;
                width: 31.25vw;
            }
            @media screen and (max-width: 768px) {
                margin-left: 12.5%;

                img {
                    top: -20%;
                }
            }
        }
    }

    .item-4 {
        .inner {
            margin-left: 48.75%;
            @media screen and (max-width: 768px) {
                margin-left: 30%;
            }
        }
    }

    .item-5 {
        .inner {
            margin-bottom: calc(1.71875rem + 4.375vw);
            margin-left: 17.5%;
            margin-top: calc(1.71875rem + 4.375vw);

            img {
                left: -5.375vw;
                max-width: none;
                position: absolute;
                top: -10%;
                width: 31.25vw;
            }
            @media screen and (max-width: 768px) {
                margin-left: 12.5%;
            }
        }
    }

    .item-6 {
        margin-top: 0;

        .inner {
            margin-left: 50%;

            img {
                position: absolute;
                right: -50%;
                top: 0;
                width: 480px;
            }
            @media screen and (max-width: 768px) {
                margin-left: 6%;
            }
        }
    }

    .item-7 {
        .inner {
            margin-left: 12.5%;
        }
    }

    .item-8 {
        .inner {
            margin-bottom: calc(1.71875rem + 4.375vw);
            margin-left: 60%;
            margin-top: calc(1.71875rem + 4.375vw);

            img {
                left: -18.375vw;
                max-width: none;
                position: absolute;
                top: -40%;
            }
            @media screen and (max-width: 768px) {
                margin-left: 25%;
                img {
                    top: -10%;
                }
            }
        }
    }
    .item-9 {
        .inner {
            margin-bottom: calc(1.71875rem + 4.375vw);
            margin-left: 17.5%;
            margin-top: calc(1.71875rem + 4.375vw);

            img {
                left: -5.375vw;
                max-width: none;
                position: absolute;
                top: -10%;
                width: 31.25vw;
            }
            @media screen and (max-width: 768px) {
                margin-left: 12.5%;
            }
        }
    }
}
</style>