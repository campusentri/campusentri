<script>
export default {
    data() {
        const publications = [
            {
                label: 'Clinical',
                title: 'Agreement between Programmed Cell Death Ligand-1 Diagnostic Assays across Multiple Protein Expression Cutoffs in Non-Small Cell Lung Cancer',
                author: 'AACR Publications',
                year: '2017'
            },
            {
                label: 'Clinical',
                title: 'Concordance of tumor and immune cell staining with Ventana SP142, Ventana SP263. Dako 28-8 and Dako 22C3 PD-L1 tests in NSCLC patient samples',
                author: 'Journal of Clinical Oncology',
                year: '2017'
            },
            {
                label: 'Research',
                title: 'Megakaryocytes, erythropoietic and granulopoietic cells express CAL2 antibody in myeloproliferative neoplasms carrying CALR gene mutations',
                author: 'International Journal of Experimental Pathology',
                year: '2020'
            },
        ];
        return {
            publications
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#publications',
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
        });

        tl.from('.publication-title', {
            opacity: 0,
            y: 20,
            duration: 0.1,
        });

        this.publications.forEach((item, index) => {
            const direction = index % 2 === 0 ? -1 : 1; // Set the direction based on index

            tl.from(`.publication-list:nth-child(${index + 1})`, {
                scale: 0, // Start with a scale of 0
                duration: 0.5, // Adjust duration for the desired speed
                ease: 'power2.out', // You can experiment with different easing functions
            });
        });
    }
}
</script>

<template>
    <div id="publications" class="research-container">
        <div class="other-research-wrapper">
            <span class="background"></span>
            <div class="research-list-wrapper">
                <div class="flex px-8">
                    <div class="ml-0 md:ml-[18.75%] w-full md:w-3/4 flex justify-between items-center mb-16">
                        <h2 class="list-title publication-title">Dive into our</h2>
                    </div>
                </div>
                <ul class="research-list relative">
                    <li class="publication-list" v-for="(publication, index) of publications" :key="index">
                        <a href="#" class="item">
                            <div class="px-3 w-full md:w-[18.75%]">
                                <span class="label">{{ publication.label }}</span>
                            </div>
                            <div class="px-3 w-full md:w-[56.25%]">
                                <h3 class="title">{{ publication.title }}</h3>
                                <div class="read-more">
                                    <button name="Read More Button" class="read-more-btn big-size black-color" data-v-a2720cde="">
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
                                                            stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" data-v-a2720cde=""></path>
                                                    </svg>
                                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="arrow-right-icon"
                                                        data-v-a2720cde="">
                                                        <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C"
                                                            stroke-width="1.5" stroke-linecap="round"
                                                            stroke-linejoin="round" data-v-a2720cde=""></path>
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
                            <div class="px-3 w-[12.5%] ml-[6.25%] hidden md:block">
                                <span class="label">{{ publication.author }}</span>
                            </div>
                            <div class="px-3 w-[6.25%] hidden md:block">
                                <span class="label year">{{ publication.year }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="read-more text-center mt-12 ml-0 md:ml-[18.75%] w-full md:w-3/4">
                <button name="Read More Button" class="read-more-btn big-size black-color" data-v-a2720cde="">
                    <div class="inner" data-v-a2720cde="">
                        <span class="icon arrow-right" data-v-a2720cde="">
                            <span class="icon-container arrow-right-icon-container" data-v-a2720cde="">
                                <svg data-v-a2720cde="" width="11" height="11" view-box="0 0 11 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="plus-icon arrow-right-icon shadow-icon">
                                    <line data-v-a2720cde="" x1="5.38281" y1="0.75" x2="5.38281" y2="10.25"
                                        stroke="#fff" stroke-width="1.5" stroke-linecap="round"></line>
                                    <line data-v-a2720cde="" x1="10.25" y1="5.38159" x2="0.75" y2="5.38159"
                                        stroke="#fff" stroke-width="1.5" stroke-linecap="round"></line>
                                </svg>
                                <svg data-v-a2720cde="" width="11" height="11" viewBox="0 0 11 11" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="plus-icon arrow-right-icon">
                                    <line data-v-a2720cde="" x1="5.38281" y1="0.75" x2="5.38281" y2="10.25"
                                        stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"></line>
                                    <line data-v-a2720cde="" x1="10.25" y1="5.38159" x2="0.75" y2="5.38159"
                                        stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"></line>
                                </svg>
                            </span>
                        </span>
                        <span class="label-sizer" data-v-a2720cde="">View All Publications</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.research-container {
    padding-bottom: calc(1.32813rem + .72917vw);
    padding-top: calc(0.65625rem + 10.125vw);
    position: relative;

    .other-research-wrapper {
        .background {
            // background-color: #f9f9f9;
            border-radius: 20px;
            display: block;
            height: calc(100% - 40px);
            left: 20px;
            position: absolute;
            top: 20px;
            width: calc(100vw - 40px);
        }

        .research-list-wrapper {
            display: block;
            left: 20px;
            overflow: hidden;
            padding-bottom: calc(1.32813rem + .72917vw);
            position: relative;
            width: calc(100vw - 40px);

            .list-title {
                font-size: calc(1.79688rem + 5.10417vw);
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                letter-spacing: -.02em;
                line-height: 1em;
            }

            .research-list {
                position: relative;

                .item {
                    border-top: 1px solid #ebebeb;
                    padding-bottom: calc(1.32813rem + .72917vw);
                    padding-top: calc(1.32813rem + .72917vw);
                    align-items: baseline;
                    border-bottom: 1px solid #ebebeb;
                    display: flex;
                    position: relative;
                    transition: background-color .25s cubic-bezier(.19, 1, .22, 1);

                    @media screen and (max-width: 768px) {
                        flex-direction: column;
                    }

                    &:hover {
                        background-color: #2c2c2c;
                        transition: background-color 1s cubic-bezier(.19, 1, .22, 1);

                        .label {
                            color: #fff;
                            transition: color 1s cubic-bezier(.19, 1, .22, 1);
                        }

                        .title {
                            color: #fff;
                            transition: color 1s cubic-bezier(.19, 1, .22, 1);
                        }
                    }

                    .label {
                        font-size: 1rem;
                        color: #939393;
                        font-family: 'Aeonik-Regular';
                        line-height: 1.4em;
                        transition: color .25s cubic-bezier(.19, 1, .22, 1);
                    }

                    .title {
                        font-size: 1.125rem;
                        color: #2c2c2c;
                        font-family: 'Aeonik-Regular';
                        line-height: 1.6em;
                        transition: color .25s cubic-bezier(.19, 1, .22, 1);
                    }
                }
            }
        }

        .read-more {
            margin-top: 10px;
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
    }
}
</style>