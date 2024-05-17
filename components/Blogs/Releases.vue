<script>
export default {
    props: {
        blogs: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#releases',
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play none none reverse',
            },
        });

        tl.from('.release-title', {
            opacity: 0,
            y: 20,
            duration: 0.1,
        });

        this.blogs.forEach((item, index) => {
            const direction = index % 2 === 0 ? -1 : 1; // Set the direction based on index

            tl.from(`.month-list:nth-child(${index + 1})`, {
                scale: 0, // Start with a scale of 0
                duration: 0.5, // Adjust duration for the desired speed
                ease: 'power2.out', // You can experiment with different easing functions
            });
        });
    }
}
</script>

<template>
    <div id="releases" class="press-release-container relative">
        <div class="flex px-8">
            <div class="title-col flex justify-between items-center relative ml-0 md:ml-[18.75%] w-full md:w-3/4">
                <h2 class="list-title release-title">Releases & Updates</h2>
            </div>
        </div>
        <div class="more-press-releases-wrapper">
            <span class="background"></span>
            <div class="press-releases-list-wrapper">
                <div v-for="(blog, index) of blogs" :key="index" class="flex px-8 month-list">
                    <div class="ml-0 md:ml-[18.75%] w-full md:w-3/4">
                        <ul class="list">
                            <li class="item">
                                <a href="#">
                                    <span class="date">{{ new Date(blog?._createdAt).toDateString() }}</span>
                                    <h3 class="title">{{ blog.title }}</h3>
                                    <!-- <p class="excerpt">{{ blog.description }}</p> -->
                                    <NuxtLink :to="'/blogs/' + blog._id" class="read-more">
                                        <BtnReadMore :title="'More'" />
                                    </NuxtLink>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- <div class="read-more text-center mt-12 ml-0 md:ml-[18.75%] w-full md:w-3/4">
                    <button class="read-more-btn big-size black-color" data-v-a2720cde="">
                        <div class="inner" data-v-a2720cde="">
                            <span class="icon arrow-right" data-v-a2720cde="">
                                <span class="icon-container arrow-right-icon-container" data-v-a2720cde="">
                                    <svg data-v-a2720cde="" width="11" height="11" view-box="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus-icon arrow-right-icon shadow-icon"><line data-v-a2720cde="" x1="5.38281" y1="0.75" x2="5.38281" y2="10.25" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></line> <line data-v-a2720cde="" x1="10.25" y1="5.38159" x2="0.75" y2="5.38159" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></line></svg>
                                    <svg data-v-a2720cde="" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus-icon arrow-right-icon"><line data-v-a2720cde="" x1="5.38281" y1="0.75" x2="5.38281" y2="10.25" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"></line> <line data-v-a2720cde="" x1="10.25" y1="5.38159" x2="0.75" y2="5.38159" stroke="#2C2C2C" stroke-width="1.5" stroke-linecap="round"></line></svg>
                                </span>
                            </span>
                            <span class="label-sizer" data-v-a2720cde="">View All Releases</span>
                        </div>
                    </button>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.press-release-container {
    padding-bottom: calc(1.32813rem + .72917vw);
    padding-top: calc(2.65625rem + 13.125vw);

    .title-col {
        border-bottom: 1px solid rgba(44, 44, 44, .2);
        margin-bottom: calc(1.40625rem + 1.45833vw);
        padding-bottom: calc(1.44531rem + 1.82292vw);
        z-index: 1;

        .list-title {
            font-size: calc(1.79688rem + 5.10417vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            letter-spacing: -.02em;
            line-height: 1em;
        }
    }

    .more-press-releases-wrapper {
        .background {
            background-color: #f9f9f9;
            border-radius: 20px;
            display: block;
            height: calc(100% - 40px);
            left: 20px;
            position: absolute;
            top: 20px;
            width: calc(100vw - 40px);
        }

        .press-releases-list-wrapper {
            padding-bottom: calc(1.48438rem + 2.1875vw);

            .month-list {
                .list {
                    display: block;
                    position: relative;

                    .item {
                        display: inline-block;
                        margin: .625rem 0;
                        position: relative;
                        width: 100%;

                        &:hover {
                            a {
                                background-color: #2c2c2c;
                                transition: background-color 1s cubic-bezier(.19, 1, .22, 1);

                                .date {
                                    color: #fff;
                                    transition: color 1s cubic-bezier(.19, 1, .22, 1);
                                }

                                .title {
                                    color: #fff;
                                    transition: color 1s cubic-bezier(.19, 1, .22, 1);
                                }

                                .excerpt {
                                    color: #fff;
                                    transition: color 1s cubic-bezier(.19, 1, .22, 1);
                                }
                            }
                        }

                        a {
                            background-color: #fff;
                            border-radius: 10px;
                            display: block;
                            padding: calc(1.32813rem + .72917vw) calc(1.52344rem + 2.55208vw);
                            position: relative;
                            transition: background-color .25s cubic-bezier(.19, 1, .22, 1);
                        }

                        .date {
                            color: #2c2c2c;
                            font-family: 'Aeonik-Regular';
                            font-size: .8125rem;
                            line-height: 1.4em;
                            position: relative;
                            transition: color .25s cubic-bezier(.19, 1, .22, 1);
                        }

                        .title {
                            font-size: calc(1.29688rem + .4375vw);
                            color: #2c2c2c;
                            font-family: 'Aeonik-Regular';
                            line-height: 1.3em;
                            margin: 5px 0;
                            position: relative;
                            transition: color .25s cubic-bezier(.19, 1, .22, 1);
                        }

                        .excerpt {
                            color: #939393;
                            font-family: 'Aeonik-Regular';
                            font-size: 1rem;
                            line-height: 1.4em;
                            margin-bottom: 0;
                            position: relative;
                            transition: color .25s cubic-bezier(.19, 1, .22, 1);
                        }
                    }
                }
            }

            .read-more {
                margin-top: 10px;
                display: block;
            }
        }
    }
}
</style>