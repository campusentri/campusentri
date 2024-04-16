<script>
export default {
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        openModal() {
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
            duration: 0.2,
        });
    }
}
</script>

<template>
    <div class="technology-content">
        <FeeStructure />
        <div class="page-content">
            <div class="hero-text-wrapper pb-24 md:pb-48 relative">
                <div class="flex items-center justify-center px-6">
                    <div class="w-full md:w-[62.5%] px-3">
                        <h2 class="hero-text">
                            Our use of sophisticated plan, highly responsive analysis and insights from expert career
                            counsellors ensures a standard of excellence that enhances the effectiveness of innovative
                            guidance.
                        </h2>
                    </div>
                </div>
            </div>
            <FeeStructureList @open-modal="openModal" />
            <CollegesPromo />
        </div>
        <FeeStructureFooter />
        <Modal :is-open="isModalOpen" @close-modal="closeModal">
            <template v-slot:body>
                <FeeStructureContent />
            </template>
        </Modal>
    </div>
</template>

<style lang="scss" scoped>
.page-content {
    position: relative;
    z-index: 10;
    padding-top: 9.375rem;

    @media screen and (max-width: 768px) {
        padding-top: 3rem;
    }

    &:before {
        background: linear-gradient(-180deg, #fdc8a5, hsla(24, 96%, 82%, 0));
        height: 99vh;
        content: "";
        display: block;
        left: 0;
        position: absolute;
        top: -1px;
        width: 100%;
    }

    .hero-text {
        font-size: 4.0625rem;
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