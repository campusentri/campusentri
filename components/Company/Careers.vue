<script>
export default {
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#careers',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.careers-title', {
            opacity: 0,
            y: 20,
            duration: 0.1,
        });
        tl.from('.careers-text', {
            opacity: 0,
            y: 20,
            duration: 0.3,
        });
        tl.from('.careers-btn', {
            opacity: 0,
            y: 20,
            duration: 0.4,
        });
    }
}
</script>

<template>
    <div id="careers" class="careers-block-container">
        <div class="flex px-6">
            <div class="w-full md:w-[31.25%] ml-0 md:ml-[6.25%] px-3">
                <h2 class="title careers-title">Come work with us!</h2>
            </div>
        </div>
        <div class="flex mb-20 px-6">
            <div class="w-full md:w-[37.5%] ml-0 md:ml-[43.75%] px-3">
                <div class="text">
                    <p class="mb-8 careers-text">CampusEntri is a fast-growing guidance team committed to excellence
                        and high-quality services. We treat all individuals with mutual respect and integrity, and we
                        value their contributions. We are committed to providing a positive and flexible environment
                        that supports work-life balance.</p>
                    <p class="mb-8 careers-text">We are always looking for talented and highly motivated individuals to join our
                        team. We offer a very competitive benefits package and career development opportunities to help
                        you achieve your highest professional and personal goals. We are eager to show you all we have
                        to offer!</p>
                </div>
            </div>
        </div>
        <div class="resume-container pb-52">
            <div class="flex justify-center px-6">
                <div class="text-center w-full md:w-[62.5%]">
                    <h2 class="title careers-title">Do you want to be considered for future openings?</h2>
                </div>
            </div>
            <div class="flex justify-center px-6">
                <div class="w-full md:w-[37.5%] text-center">
                    <p class="mb-12 careers-text">If you believe that you have what it takes to be part of a highly successful team
                        and you share our commitment to improve patient care, please send us your resume.</p>
                    <div class="careers-btn">
                        <BtnReadMore :title="'Send us your resume'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.careers-block-container {
    padding-top: 1.25rem;

    .title {
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        font-size: 3.8235294118vw;
        letter-spacing: -.01em;
        line-height: 1.2em;
        margin-top: 1.25rem;
        white-space: pre-line;
        @media screen and (max-width: 768px) {
            font-size: calc(1.60156rem + 3.28125vw);
            margin-bottom: 40px;
        }
    }

    .text {
        font-family: 'Aeonik-Regular';
        font-size: 1.0588235294vw;
        line-height: 1.6em;
        color: #909ea0;
        @media screen and (max-width: 768px) {
            font-size: 1.125rem;
        }
    }

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
            height: 4.5rem;
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
                height: 3.125rem;
                width: 3.125rem;
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
</style>