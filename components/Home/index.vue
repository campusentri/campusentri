<script>
export default {
    methods: {
        async scrollToNextComponent() {
            const nextComponent = document.getElementsByClassName('page-content');
            if (nextComponent) {
                const offsetTop = nextComponent[0].offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth' // smooth scrolling behavior
                });
            }
        }
    }
}
</script>
<template>
    <div id="hero" class="home-container h-screen relative">
        <div class="background-video relative inset-0 overflow-hidden">
            <video autoplay muted loop="loop" webkit-playsinline="true" playsinline="true" disableRemotePlayback="true" class="min-w-full min-h-full">
                <source src="/videos/homepage-hd.mp4" type="video/mp4">
            </video>
        </div>
        <div class="text-overlay absolute inset-0 flex items-center flex-col justify-center">
            <div class="page-title flex justify-center items-center">
                <h1 class="text-gray-100 text-start title">Finding your Dream University made easy with CampusEntri
                </h1>
            </div>
            <div class="flex items-stretch mt-10 w-full px-3 md:px-10">
                <div class="scroll-btn h-full flex flex-grow-0">
                    <button class="big-circle-btn" @click="scrollToNextComponent">
                        <span class="icon-container">
                            <IconsArrowDown />
                        </span>
                    </button>
                </div>
                <div class="flex-grow mx-4 md:mx-12">
                    <HomeBannerSlider />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        background: linear-gradient(-180deg, hsla(7, 92%, 76%, 0), #fa9688);
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