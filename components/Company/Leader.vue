<script>
export default {
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#leaders',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.leader-title', {
            opacity: 0,
            y: 20,
            duration: 0.3,
        });
        tl.from('.leader-text', {
            opacity: 0,
            y: 20,
            duration: 0.3,
        }, '-=0.1');
    }
}
</script>

<template>
    <div id="leaders" class="leader-wrapper pb-48">
        <div class="flex flex-col md:flex-row px-6">
            <div class="block-bg-cover w-full md:w-1/2 relative px-3">
                <img src="/images/company/leader.png" />
            </div>
            <div class="text-container ml-0 md:ml-[6.25%] w-full md:w-[31.25%] px-3">
                <div>
                    <h2 class="leader-title">Industry Leaders</h2>
                </div>
                <p class="mb-12 leader-text">We are industry leaders in the field of Admission Guidance for career transition and skill
                    development.</p>
                <p class="mb-12 leader-text">Since 2019, we have been optimizing our methods to provide the highest levels of performance, quality
                    and sustainability.</p>
                <h3 class="mb-5 leader-text">Firm ...</h3>
                <p class="mb-12 leader-text">CampusEntri® was established with a clear commitment to put students needs above all. We are firm
                    when it comes to being student centric. With no venture capitalists or shareholders to influence our
                    decisions, we refuse to put finances above student's education.</p>
                <h3 class="mb-5 leader-text">... Yet Flexible</h3>
                <p class="leader-text">We also pride ourselves in being flexible by providing high quality service with rapid turnaround
                    times. We are attentive.</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.leader-wrapper {
    .block-bg-cover {
        height: 100%;
        left: 0;
        overflow: hidden;
        top: 0;
        z-index: 0;

        img {
            height: 120%;
            width: 120%;
            display: block;
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: 50% 50%;
            object-position: 50% 50%;
            overflow: hidden;
            position: relative;

            @media screen and (max-width: 768px) {
                height: 100%;
                width: 100%;
            }
        }
    }

    .text-container {
        h2 {
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            font-size: 3.8235294118vw;
            letter-spacing: -.01em;
            line-height: 1.2em;
            margin: 2.5rem 0 3.25rem;
            position: relative;
            white-space: pre-line;

            @media screen and (max-width: 768px) {
                font-size: calc(1.40625rem + 1.45833vw);
                padding-right: 40vw;
            }
        }
        p {
            color: #8c8c8c;
            font-family: 'Aeonik-Regular';
            font-size: 1.0588235294vw;
            line-height: 1.6em;
            @media screen and (max-width: 768px) {
                font-size: 1.125rem;
            }
        }
        h3 {
            font-size: 1.625rem;
            font-family: 'Aeonik-Regular';
            letter-spacing: -.02em;
            line-height: 1.1em;
            @media screen and (max-width: 768px) {
                font-size: calc(1.29688rem + .4375vw)
            }
        }
    }
}
</style>