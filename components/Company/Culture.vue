<script>
export default {
    data() {
        const items = [
            {
                shortName: 'Qu',
                fullName: 'Quality',
                heading: 'We focus on quality',
                text: 'Our team of board - certified career and admission experts work in conjunction with top colleges from mangalore to provide quality education, consultation and guidance fro all aspects of the services we provide.'
            },
            {
                shortName: 'Sp',
                fullName: 'Specialized',
                heading: 'We are career specialists',
                text: 'Across all of our locations, we have a strong and experienced team of counsellors, guidance experts and team managers.'
            },
            {
                shortName: 'Pa',
                fullName: 'Patient',
                heading: 'We are student centric',
                text: 'Above all, students come first. With no venture capitalists or shareholders to influence our decisions, we focus on what is best for the students.'
            },
        ]
        return {
            items
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#culture',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.culture-title', {
            opacity: 0,
            y: 20,
            duration: 0.1,
        });
        this.items.forEach((item, index) => {
            const delay = index * 0.2; // Adjust the delay for each item

            tl.from(`.culture-items:nth-child(${index + 1})`, {
                opacity: 0,
                x: -20,
                duration: 0.2,
                delay,
            });
        });
    }
}
</script>

<template>
    <div id="culture" class="culture-block-wrapper">
        <div class="flex items-end px-6">
            <div class="w-[50.5%] ml-0 md:ml-[6.25%]">
                <h2 class="title culture-title">The elements that form our company</h2>
            </div>
        </div>
        <div class="list-container flex justify-center px-0 md:px-6">
            <div class="w-full md:w-[87.5%] px-0 md:px-3">
                <div class="values-list mt-24 md:mt-64 hidden md:grid grid-cols-1 md:grid-cols-3">
                    <div v-for="(item, index) of items" :key="index" class="item culture-items">
                        <span class="name">
                            <span class="short-name">{{ item.shortName }}</span>
                            <span class="full-name">{{ item.fullName }}</span>
                        </span>
                        <span class="content">
                            <h3>{{ item.heading }}</h3>
                            <p>{{ item.text }}</p>
                        </span>
                    </div>
                </div>
                <div class="block md:hidden mt-32">
                    <CompanyCultureSlider />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.culture-block-wrapper {
    margin: 0.25rem 0 9.375rem;

    .title {
        font-size: 5rem;
        margin-top: 1.25rem;
        white-space: pre-line;
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        letter-spacing: -.01em;
        line-height: 1.2em;

        @media screen and (max-width: 768px) {
            font-size: calc(1.40625rem + 1.45833vw);
        }
    }

    .values-list {
        @media screen and (max-width: 768px) {
            gap: 10rem;
        }

        .item {
            border-left: 1px dashed hsla(188, 8%, 60%, .4);
            border-right: 1px dashed hsla(188, 8%, 60%, .4);
            padding: 40px;
            position: relative;

            @media screen and (max-width: 768px) {
                padding: 20px;
            }

            .name {
                align-items: center;
                border: 1px dashed hsla(188, 8%, 60%, .4);
                display: flex;
                flex-direction: column;
                height: 7.7647058824vw;
                justify-content: center;
                position: absolute;
                right: 0;
                top: -9.4117647059vw;
                width: 7.7647058824vw;

                @media screen and (max-width: 768px) {
                    height: 100px;
                    top: -120px;
                    width: 100px;
                }

                .first-name {
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    font-size: 2.9411764706vw;
                    line-height: 1.1em;

                    @media screen and (max-width: 768px) {
                        font-size: calc(1.48438rem + 2.1875vw);
                    }
                }

                .full-name {
                    color: #909ea0;
                    font-family: 'Aeonik-Regular';
                    font-size: .9411764706vw;
                    line-height: 1em;

                    @media screen and (max-width: 768px) {
                        font-size: 1rem;
                    }
                }
            }

            .content {
                display: block;
                position: relative;

                h3 {
                    margin-bottom: 1.875rem;
                    padding-right: 40px;
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    font-size: 2.9411764706vw;
                    letter-spacing: -.02em;
                    line-height: 1.1em;

                    @media screen and (max-width: 768px) {
                        font-size: calc(1.48438rem + 2.1875vw);
                    }
                }

                p {
                    color: #909ea0;
                    margin-bottom: 2rem;
                    font-family: 'Aeonik-Regular';
                    font-size: 1.0588235294vw;
                    line-height: 1.6em;

                    @media screen and (max-width: 768px) {
                        font-size: 1.125rem;
                    }
                }
            }
        }
    }
}
</style>