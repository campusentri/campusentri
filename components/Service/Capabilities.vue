<script>
export default {
    data() {
        const pillars = [
            '/images/services/pillar-1.png',
            '/images/services/pillar-2.png',
            '/images/services/pillar-3.png'
        ]
        const appreciations = [
            { name: 'IAO-Accredited', image: 'images/services/cap.png' },
            { name: 'NACAC-Certified', image: 'images/services/clia.png' },
            { name: 'ECS-Complaint' },
            { name: 'A Global Reference Team & System' },
        ];
        return {
            pillars,
            appreciations
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#capabilities',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.capabilities-title', {
            opacity: 0,
            y: 20,
            duration: 0.2,
        });
        tl.from('.list-title', {
            opacity: 0,
            y: 20,
            duration: 0.3,
        });
        tl.from('.list-description', {
            opacity: 0,
            y: 20,
            duration: 0.4,
        });
        this.pillars.forEach((item, index) => {
            const delay = index * 0.1; // Adjust the delay for each item

            tl.from(`.pillars-items:nth-child(${index + 1})`, {
                opacity: 0,
                y: 30,
                duration: 0.2,
                delay,
            });
        });
        this.appreciations.forEach((item, index) => {
            const delay = index * 0.2; // Adjust the delay for each item

            tl.from(`.capabilities-items:nth-child(${index + 1})`, {
                opacity: 0,
                x: -60,
                duration: 0.2,
                delay,
            });
        });
    }
}
</script>

<template>
    <div id="capabilities" class="intro-block-wrapper">
        <div class="px-8 flex justify-center">
            <div class="md:w-1/2 px-3 text-center capabilities-title">
                <div class="order-number-wrapper">
                    <span class="index">01</span>
                </div>
                <h2 class="title">A Student & Counsellor-Centric Team</h2>
            </div>
        </div>
        <div class="px-8 flex justify-center">
            <div class="px-3 md:w-[87.5%]">
                <div class="pillars-list grid grid-cols-1 md:grid-cols-3">
                    <div v-for="(pillar, index) of pillars" :key="index" class="item pillars-items">
                        <img :src="pillar" />
                    </div>
                </div>
            </div>
        </div>
        <div class="px-8 flex justify-center flex-col items-center bg-[#D4E6DF] pt-16 pb-32">
            <div class="px-3 md:w-[62.5%]">
                <h3 class="list-title">CampusEntri® is proud to offer the highest standard of Guidance and Admission
                    services.</h3>
                <p class="list-description">We are recognized as :</p>
            </div>
            <div class="px-3 md:w-[43.75%]">
                <ul class="list">
                    <li v-for="(appreciation, index) of appreciations" :key="index" class="item capabilities-items">
                        <span class="label">{{ appreciation.name }}</span>
                        <img v-if="appreciation.image" :src="appreciation.image" :alt="appreciation.name" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.intro-block-wrapper {
    padding: calc(1.875rem + 5.83333vw) 0 0;
    position: relative;

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

    .pillars-list {
        margin: calc(1.875rem + 5.83333vw) 0 calc(2.65625rem + 13.125vw);
        position: relative;

        .item {
            padding: 0 calc(1.40625rem + 1.45833vw);

            .pillar-title {
                font-size: calc(1.35938rem + 1.02083vw);
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                line-height: 1.1em;
            }
        }
    }

    .list-title {
        font-size: calc(1.5rem + 2.33333vw);
        margin-bottom: calc(1.40625rem + 1.45833vw);
        color: #2c2c2c;
        font-family: 'Aeonik-Medium';
        letter-spacing: -.02em;
        line-height: 1.1em;
        margin-bottom: 1.25rem;
        position: relative;
        text-align: center;
    }

    .list-description {
        margin-bottom: 30px;
        padding: 0 calc(2.1875rem + 8.75vw);
        position: relative;
        text-align: center;
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        font-size: 1.125rem;
        line-height: 1.6em;
    }

    .list {
        .item {
            align-items: center;
            border-bottom: 1px solid #2c2c2c;
            display: flex;
            height: calc(1.5625rem + 2.91667vw);
            justify-content: space-between;
            position: relative;

            @media screen and (max-width: 768px) {
                height: calc(2.64063rem + 3.64583vw);
            }

            span {
                color: #2c2c2c;
                flex-grow: 1;
                font-family: 'Aeonik-Regular';
                font-size: 1.25rem;
                line-height: 1.1em;
            }

            img {
                max-width: 60px;
            }
        }
    }
}
</style>