<script>
export default {
    methods: {
        async scrollToNextComponent() {
            const nextComponent = document.getElementsByClassName('page-content');
            if (nextComponent) {
                const offsetTop = nextComponent[0].offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '.company-container',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.company-title', {
            opacity: 0,
            y: 20,
            duration: 0.15,
        });
    }
}
</script>

<template>
    <div id="hero" class="company-container h-screen relative">
        <div class="background-video relative inset-0 overflow-hidden">
            <video autoplay muted loop="loop" preload="metadata" webkit-playsinline="true" playsinline="true" disableRemotePlayback="true" class="min-w-full min-h-full">
                <source src="/videos/company-hd.mp4" type="video/mp4">
            </video>
        </div>
        <div class="text-overlay absolute inset-0 flex items-center flex-col justify-center">
            <div class="page-title flex justify-center items-center">
                <h1 class="text-gray-100 text-start title company-title">Our story. Firm, Yet Flexible.
                </h1>
            </div>
            <div class="flex items-stretch mt-10 w-full px-3 md:px-10">
                <div class="scroll-btn h-full flex flex-grow-0">
                    <button name="Company" class="big-circle-btn" @click="scrollToNextComponent">
                        <span class="icon-container">
                            <IconsArrowDown />
                        </span>
                    </button>
                </div>
                <div class="flex-grow mx-4 md:ml-12 md:mr-6">
                    <span class="line"></span>
                </div>
                <Audio :audioSrc="'/audio/company.mp3'" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.company-container {
    .line {
        background-color: #fff;
        display: block;
        height: 1px;
        position: relative;
        width: 100%;
    }
    .page-title {
        .title {
            font-size: 5.625rem;

            @media screen and (max-width: 768px) {
                font-size: calc(1.79688rem + 5.10417vw);
            }
        }
    }
}
.background-video {
    translate: none;
    rotate: none;
    scale: none;
    transform-origin: 50% 50%;
    transform: translate(0px, 0px);
    opacity: 1;
    height: 100%;
    overflow: visible;
    pointer-events: none;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    video {
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
        transform: scale(1);
        width: 100%;
    }

    &:after {
        background: linear-gradient(-180deg,hsla(4,78%,67%,0),#ed736a);
        content: "";
        display: block;
        height: 100px;
        left: 0;
        position: absolute;
        top: calc(100% - 100px);
        width: 100%;
    }
}
</style>