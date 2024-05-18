<script setup lang="ts">
const swiper = useSwiper()
</script>

<template>
    <div class="mb-6 flex justify-end w-5/6 slider-buttons" data-v-37808d0f="" data-v-8953d350="">
        <button name="Prev Slide" @click="swiper.slidePrev()" class="arrow-left arrow" data-v-37808d0f="">
            <span class="bg" data-v-37808d0f=""></span>
            <span class="icon" data-v-37808d0f="">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-label="Slide Left" class="shadow-icon" data-v-37808d0f="">
                    <path d="M13 7L1.5 7" stroke="#0F1F4A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" data-v-37808d0f=""></path>
                    <path d="M7 13.5L1 7L7 1" stroke="#0F1F4A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" data-v-37808d0f=""></path>
                </svg>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-label="Slide Left" data-v-37808d0f="">
                    <path d="M13 7L1.5 7" stroke="#0F1F4A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" data-v-37808d0f=""></path>
                    <path d="M7 13.5L1 7L7 1" stroke="#0F1F4A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" data-v-37808d0f=""></path>
                </svg>
            </span>
        </button>
        <button name="Next Slide" @click="swiper.slideNext()" class="arrow-right arrow" data-v-37808d0f="">
            <span class="bg" data-v-37808d0f=""></span>
            <span class="icon" data-v-37808d0f="">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-label="Slide Right" class="shadow-icon" data-v-37808d0f="">
                    <path d="M1 7L12.5 7" stroke="#0F1F4A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" data-v-37808d0f=""></path>
                    <path d="M7 13.5L13 7L7 1" stroke="#0F1F4A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" data-v-37808d0f=""></path>
                </svg>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    aria-label="Slide Right" data-v-37808d0f="">
                    <path d="M1 7L12.5 7" stroke="#0F1F4A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" data-v-37808d0f=""></path>
                    <path d="M7 13.5L13 7L7 1" stroke="#0F1F4A" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" data-v-37808d0f=""></path>
                </svg>
            </span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.slider-buttons {
    .arrow {
        border-radius: 50px;
        height: 50px;
        margin: 0 5px;
        transition: transform .5s cubic-bezier(.19, 1, .22, 1);
        width: 50px;
        will-change: transform;
        align-items: center;
        display: flex;
        justify-content: center;
        position: relative;

        &:hover {
            .bg {
                opacity: 1;
                transform: scale(1);
            }
        }

        &:before {
            background-color: #f1f2f2;
            border-radius: 100%;
            content: "";
            display: block;
            height: 100%;
            left: 0;
            position: absolute;
            top: 0;
            width: 100%;
        }

        &:after {
            content: "";
            display: block;
            height: 150%;
            left: -25%;
            position: absolute;
            top: -25%;
            width: 150%;
        }

        .bg {
            border-radius: 100%;
            content: "";
            display: block;
            height: 100%;
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            transform: scale(0);
            transform-origin: center;
            transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
            width: 100%;
            will-change: transform;
        }

        .icon {
            position: relative;
            top: 2px;

            svg {
                pointer-events: none;
                transform: translateX(0);
                transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
                will-change: transform;

                path {
                    transition: stroke .5s cubic-bezier(.19, 1, .22, 1);
                }
            }

            .shadow-icon {
                transform: translateX(10px);
                display: block;
                left: 0;
                opacity: 0;
                position: absolute;
                top: 0;
                transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
                width: 100%;
                will-change: transform;
            }
        }
    }
}
</style>
