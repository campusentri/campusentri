<script>
export default {
    data() {
        const items = [
            {
                title: 'Service',
                description: 'At CampusEntri, our high-quality service is coupled with an exceptional customer experience. Our expert staff is known for thei supportive and professional manner. It is our goal to go above and beyond your expectations to support your success.'
            },
            {
                title: 'Accessibility',
                description: 'Our board-certified admission counsellors and academic team are always available for consultation to discuss your trial needs.'
            },
            {
                title: 'Personal',
                description: "CampusEntri looks beyond the boxes marked on a login form. What we see each time is a student waiting eagerly for a career decision to be made. We work to understand the differences each student's presents and how our assignments will impact their studies."
            }
        ]
        return {
            items,
            selectedIndex: 0
        }
    },
    methods: {
        toggleDescription(index) {
            this.selectedIndex = index;
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#core-values',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.mission-title-wrapper', {
            opacity: 0,
            y: 20,
            duration: 0.15,
        });
        tl.from('.images-container', {
            opacity: 0,
            y: 30,
            duration: 0.25,
        });
        tl.from('.mission-list', {
            opacity: 0,
            y: 30,
            duration: 0.25,
        });
    }
}
</script>

<template>
    <div id="core-values" class="mission-block-wrapper">
        <div class="px-8 flex mb-20">
            <div class="w-full md:w-[93.75%] ml-0 md:ml-[6.25%] mission-title-wrapper">
                <div class="order-number-wrapper">
                    <span class="index">06</span>
                </div>
                <h2 class="title">Our Core Values</h2>
            </div>
        </div>
        <div class="flex flex-col md:flex-row items-center px-8">
            <div class="relative ml-0 md:ml-[6.25%] w-full md:w-[56.25%] images-container">
                <img :style="selectedIndex === 0 && 'z-index: 2;'" src="/images/company/core-1.png" />
                <img :style="selectedIndex === 1 && 'z-index: 2;'" src="/images/company/core-2.png" />
                <img :style="selectedIndex === 2 && 'z-index: 2;'" src="/images/company/core-3.png" />
            </div>
            <div class="w-full md:w-[31.25%] m-auto">
                <ul class="mission-list">
                    <li @click="toggleDescription(index)" v-for="(item, index) of items" :key="index">
                        <h6 class="mission-title">{{ item.title }}</h6>
                        <span v-if="selectedIndex === index" class="mission-description">
                            <p>{{ item.description }}</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.mission-block-wrapper {
    background-color: #ff4134;
    height: auto;
    padding: calc(1.875rem + 5.83333vw) 0 calc(2.26563rem + 9.47917vw);
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
            border-color: #fff;
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
            color: #fff;
            font-family: 'Aeonik-Medium';
            font-size: .875rem;
            letter-spacing: .02em;
            line-height: 1em;
            position: relative;
            transition: color .5s cubic-bezier(.19, 1, .22, 1);
        }
    }

    .title {
        color: #fff;
        font-size: calc(1.71875rem + 4.375vw);
        margin-top: 1.25rem;
        white-space: normal;
        font-family: 'Aeonik-Regular';
        letter-spacing: -.01em;
        line-height: 1.2em;
    }

    .images-container {
        img {
            display: block;
            left: 0;
            position: absolute;
            top: 0;
            width: 480px;
            z-index: 0;

            &:first-child {
                position: relative;
                z-index: 2;
            }

            &:nth-child(2) {
                left: 2vw;
                top: 2vw;
                z-index: 1;
            }

            &:nth-child(3) {
                left: 6vw;
                top: -2vw;
                z-index: 0;
            }
        }
    }

    .mission-list {
        position: relative;

        li {
            border-top: 1px solid #fff;
            cursor: pointer;
            overflow: hidden;
        }

        .active {
            pointer-events: none;
        }

        .mission-title {
            font-size: calc(1.4375rem + 1.75vw);
            font-family: 'Aeonik-Medium';
            letter-spacing: -.02em;
            line-height: 1.1em;
            color: #fff;
            display: block;
            margin-bottom: 1.25rem;
            margin-top: 1.25rem;
            pointer-events: none;
            position: relative;
            transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
        }

        .mission-description {
            display: block;
            height: auto;
            overflow: hidden;
            pointer-events: none;
            position: relative;
            will-change: height;

            &:first-child {
                height: auto;
            }

            p {
                color: #fff;
                font-size: 1.125rem;
                font-family: 'Aeonik-Regular';
                line-height: 1.6em;
                margin-bottom: calc(1.34375rem + .875vw);
            }
        }
    }
}
</style>