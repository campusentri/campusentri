<script>
export default {
    data() {
        const clients = [
            { text: 'Our Counselors are renowned, with expertise in several subspecialities', svg: '/images/services/client-1.svg' },
            { text: 'Our Counselors are available to serve as Principal investigators and Consultants', svg: '/images/services/client-2.svg' },
            { text: 'Our Counselors are also employed full-time and at all our locations', svg: '/images/services/client-3.svg' },
        ]
        return {
            clients
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '.client-students',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.client-title-container', {
            opacity: 0,
            y: 20,
            duration: 0.15,
        });
        this.clients.forEach((item, index) => {
            const delay = index * 0.2; // Adjust the delay for each item

            tl.from(`.client-student-list:nth-child(${index + 1})`, {
                opacity: 0,
                x: -20,
                duration: 0.5,
                delay,
            });
        });
    }
}
</script>

<template>
    <div id="clients" class="client-block-wrapper client-students bg-[#D4E6DF]">
        <div class="title-col flex justify-center px-8">
            <div class="text-center md:w-[37.5%] px-3 client-title-container">
                <div class="order-number-wrapper">
                    <span class="index">02</span>
                </div>
                <h2 class="title">Our Students</h2>
                <p class="mt-6">CampusEntri® provides services to students , who are pursuing their dreams of a career
                    in the medical field.</p>
            </div>
        </div>
        <div class="flex justify-center px-8">
            <div class="webgl-clients">
                <ul class="percentage-list">
                    <li class="item">
                        <div class="inner">
                            <div class="inner-content">
                                <span class="percentage">15%</span>
                                <span class="text">Pharmacy</span>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="inner">
                            <div class="inner-content">
                                <span class="percentage">55%</span>
                                <span class="text">ParaMedical</span>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="inner">
                            <div class="inner-content">
                                <span class="percentage">15%</span>
                                <span class="text">Medical</span>
                            </div>
                        </div>
                    </li>
                    <li class="item">
                        <div class="inner">
                            <div class="inner-content">
                                <span class="percentage">15%</span>
                                <span class="text">Nursing</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="flex justify-center px-6 mt-24">
            <div class="w-full md:w-3/4 px-3 mb-12">
                <div class="flex justify-between items-center flex-col md:flex-row clients-list">
                    <div v-for="(client, index) of clients" :key="index" class="item flex flex-col justify-around px-3 client-student-list">
                        <div class="image-wrapper">
                            <img :src="client.svg" />
                        </div>
                        <div class="text-wrapper mt-6">
                            <p class="text text-center">{{ client.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.client-block-wrapper {
    padding: calc(1.875rem + 5.83333vw) 0 calc(1.71875rem + 4.375vw);
    position: relative;

    .title-col {
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

        p {
            margin-bottom: calc(1.34375rem + .875vw);
            position: relative;
            text-align: center;
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            font-size: 1.125rem;
            line-height: 1.6em;
        }
    }

    .clients-list {
        height: 340px;

        @media screen and (max-width: 768px) {
            height: auto;
        }

        .image-wrapper {
            align-items: center;
            display: flex;
            height: 180px;
            justify-content: center;

            svg {
                margin: 0 auto;
            }
        }

        .text-wrapper {
            display: block;
            height: 100px;
            margin-top: 0;
            padding: 0 1.25rem;
            position: relative;

            p {
                color: #2c2c2c;
                font-family: 'Aeonik-Regular';
                font-size: 1.125rem;
                line-height: 1.6em;
                margin-bottom: calc(1.34375rem + .875vw);
            }
        }
    }

    .webgl-clients {
        position: relative;
        z-index: 1;
        touch-action: none;

        .percentage-list {
            align-items: center;
            display: flex;
            gap: 50px;
            height: 80vh;
            justify-content: space-between;
            position: relative;
            text-align: center;
            z-index: 1;
            @media screen and (max-width: 768px) {
                gap: 0px;
            }

            li {
                $blob-color: #006B0F;

                @keyframes blobMove {
                    0% {
                        transform: translate(0, 0);
                    }

                    50% {
                        transform: translate(10px, 5px);
                    }

                    100% {
                        transform: translate(0, 0);
                    }
                }

                width: 200px;
                height: 200px;
                border-radius: 50%;
                background: rgb(0, 107, 15);
                background: radial-gradient(circle, rgba(0, 107, 15, 1) 0%, rgba(0, 73, 0, 1) 35%, rgba(152, 205, 188, 1) 100%);
                animation: blobMove 5s infinite alternate;
                box-shadow: 0 0 10px #004900,
                0 0 20px #006B0F,
                0 0 30px #98CDBC,
                0 0 40px rgba(0, 0, 0, 0.2)
                ;
                @media screen and (max-width: 768px) {
                    height: 100px;
                    width: 100px;
                }

                &:nth-child(2) {
                    position: relative;
                    top: 35%;
                }

                &:nth-child(3) {
                    position: relative;
                    top: 35%;
                }

                .inner {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    height: 100%;
                    justify-content: center;
                    left: 0;
                    // position: absolute;
                    top: 0;
                    width: 100%;
                    transform-origin: center;

                    .inner-content {
                        .percentage {
                            font-size: calc(1.48438rem + 2.1875vw);
                            color: #fff;
                            font-family: 'Aeonik-Regular';
                            display: block;
                            letter-spacing: -.01em;
                            line-height: 1em;
                            @media screen and (max-width: 768px) {
                                font-size: 16px;
                            }
                        }

                        .text {
                            font-size: calc(1.32813rem + .72917vw);
                            color: #fff;
                            font-family: 'Aeonik-Regular';
                            display: block;
                            letter-spacing: -.01em;
                            line-height: 1em;
                            @media screen and (max-width: 768px) {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>