<script>
export default {
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.about-title', {
            opacity: 0,
            y: 20,
            duration: 0.1,
        });
    }
}
</script>

<template>
    <div id="about" class="about-wrapper relative pb-48">
        <div class="flex justify-center items-center px-6">
            <div class="w-full md:w-[62.5%] px-3">
                <h2 class="title about-title">
                    CampusEntri® provides services in Manglore and Kerala. We assist our students with finding new and more effective ways to find the right course at the best colleges.
                </h2>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about-wrapper {
    .title {
        font-size: 3.125rem;
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        letter-spacing: -.01em;
        line-height: 1.2em;

        @media screen and (max-width: 768px) {
            font-size: calc(1.48438rem + 2.1875vw);
        }
    }
}
</style>