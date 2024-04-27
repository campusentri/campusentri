<script>

export default {
    data() {
        return {
            isModalOpen: false,
            course: {}
        }
    },
    methods: {
        openModal(data) {
            this.course = data;
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-text-wrapper',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.hero-text', {
            opacity: 0,
            y: 20,
            duration: 0.3,
        });
    }
}
</script>

<template>
    <div class="courses-content">
        <Course />
        <div class="bubbles-container">
            <img src="/images/courses/bubble-1.png" class="bubble-1" />
            <img src="/images/courses/bubble-2.png" class="bubble-2" />
            <img src="/images/courses/bubble-3.png" class="bubble-3" />
        </div>
        <div>
            <main class="page-content">
                <div class="hero-text-wrapper">
                    <div class="flex justify-center items-center px-8">
                        <div class="px-3 md:w-[56.25%]">
                            <h2 class="hero-text">
                                Our academic experts at CampusEntri® have the experience and tools that allow them to
                                be highly responsive to the needs of our students.
                            </h2>
                        </div>
                    </div>
                </div>
                <CoursePanel @open-modal="openModal" />
            </main>
            <CourseFooter />
        </div>
        <Modal :is-open="isModalOpen" @close-modal="closeModal">
            <template v-slot:body>
                <CourseContent :course="course" />
            </template>
        </Modal>
    </div>
</template>

<style lang="scss" scoped>
.bubbles-container {
    display: block;
    height: 100vh;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 80vh;
    width: 100%;
    z-index: 100;

    @media screen and (max-width: 768px) {
        height: 55vh;
    }

    .bubble-1 {
        display: block;
        left: 15%;
        position: absolute;
        top: 20%;
        width: 80px;
    }

    .bubble-2 {
        display: block;
        left: 40%;
        position: absolute;
        top: 90%;
        width: 240px;
        @media screen and (max-width: 768px) {
            left: 35%;
        }
    }

    .bubble-3 {
        right: 0;
        top: 60%;
        display: block;
        position: absolute;
        width: 420px;
    }
}

.page-content {
    position: relative;
    z-index: 10;
    padding-top: calc(2.26563rem + 9.47917vw);
    position: relative;
    background: none;

    @media screen and (max-width: 768px) {
        padding-top: 3rem;
    }

    &:before {
        background: linear-gradient(-180deg, #fa9688, hsla(7, 92%, 76%, 0));
        top: -2px;
        content: "";
        display: block;
        height: 50vh;
        left: 0;
        position: absolute;
        top: -4px;
        width: 100%;
    }

    .hero-text-wrapper {
        padding-bottom: calc(2.65625rem + 13.125vw);
        position: relative;

        .hero-text {
            font-size: calc(1.48438rem + 2.1875vw);
            color: #2c2c2c;
            font-family: 'Aeonik-Regular';
            letter-spacing: -.01em;
            line-height: 1.2em;
        }
    }
}
</style>