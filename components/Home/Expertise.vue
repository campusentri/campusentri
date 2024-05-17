<script>
export default {
    data() {
        return {
            expertise: [
                { id: '01', name: 'MBBS', link: '/courses#MBBS' },
                { id: '02', name: 'Bachelor Dental Sciences', link: '/courses#BDS' },
                { id: '03', name: 'Bachelor of Nursing', link: '/courses#BSc. Nursing' },
                { id: '04', name: 'Bachelor of Physiotherapy', link: '/courses#BPT' },
                { id: '05', name: 'Bachelor of Audiology & Speech', link: '/courses#BASLP' },
                { id: '06', name: 'Bachelor of Medical Imaging Technology', link: '/courses#BSc. MIT' },
            ]
        };
    },
    mounted() {

        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#expertise',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });

        tl.from('.expertise-title', {
            opacity: 0,
            y: 50,
            duration: 0.1,
            delay: 0.1
        });
        tl.from('.section', {
            opacity: 0,
            y: 20,
            duration: 0.1,
            delay: 0.1
        });
        tl.from('.section-line', {
            scale: 0,
            duration: 1,
            ease: 'power2.out'
        });
    }
};
</script>

<template>
    <section id="expertise" class="expertise-container relative z-20">
        <div class="h-full absolute left-0 top-0 w-full hidden md:block">
            <NuxtImg class="absolute right-[12%] top-[5%] w-48" src="/images/expertise/expertise-1.jpg" />
            <NuxtImg class="absolute right-0 top-[40%] w-48" src="/images/expertise/expertise-2.jpg" />
            <NuxtImg class="absolute left-[10%] top-[70%] w-52" src="/images/expertise/expertise-3.jpg" />
            <NuxtImg class="absolute right-1/4 top-[80%] w-40" src="/images/expertise/expertise-4.jpg" />
            <NuxtImg class="absolute right-0 top-[-7%] w-40" src="/images/expertise/expertise-5.jpg" />
        </div>
        <div class="flex mx-auto px-12">
            <h1 class="w-1/2 ml-[15.75%] expertise-title text-white">Transforming Discoveries</h1>
        </div>
        <div class="bio-list-container z-50 relative flex flex-col md:flex-row px-6 md:px-12 mt-12 md:mt-20 text-white">
            <div class="flex mx-auto w-full md:w-1/4 ml-0 md:ml-[15.75%]">
                <div class="section">
                    <span class="subtitle flex gap-3 items-center">
                        <span>Our Bio</span>
                        <span class="section-line line"></span>
                    </span>
                    <p class="mt-3">Our expertised, counseling and guidance teams have the experience needed to propel
                        students
                        towards novel educational discoveries and the development of personalized academic paths.
                    </p>
                </div>
            </div>
            <div class="flex mr-auto mt-8 md:mt-0 w-full md:w-[31.25%] ml-0 md:ml-[0.25%]">
                <div class="section">
                    <span class="subtitle flex gap-3 items-center">
                        <span>Expertise</span>
                        <span class="section-line line"></span>
                    </span>
                    <ul class="mt-3">
                        <li class="list" v-for="item in expertise" :key="item.id">
                            <NuxtLink :to="item.link">
                                <span class="flex text-base mb-1 items-center justify-between cursor-pointer">
                                    <span class="grow-0">{{ item.id }}</span>
                                    <span class="label text-start grow mx-3 font-semibold">{{ item.name }}</span>
                                    <IconsArrowRight />
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="btn-wrapper mt-5">
            <NuxtLink to="/courses">
                <BtnReadMore :title="'More Courses'" />
            </NuxtLink>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.expertise-container {
    padding: 7.5rem 0 25rem;

    @media screen and (max-width: 768px) {
        padding: 2rem 1rem;

        h1 {
            font-size: calc(1.79688rem + 5.10417vw);
            margin-left: 0;
        }
    }

    .line {
        background-color: #fff;
        display: block;
        flex-grow: 1;
        height: 1px;
        position: relative;
        transform-origin: left;
    }

    .list {
        &:hover {
            .label {
                transform: translateX(4px);
                opacity: 0.7;
            }
        }

        .label {
            flex-grow: 1;
            transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
        }
    }

    .btn-wrapper {
        width: 100%;
        text-align: center;
    }
}
</style>