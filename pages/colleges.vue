<template>
    <div class="technology-content">
        <Colleges />
        <div class="page-content">
            <div class="hero-text-wrapper pb-24 md:pb-48 relative">
                <div class="flex items-center justify-center px-6">
                    <div class="w-full md:w-[62.5%] px-3">
                        <h2 class="hero-text">Our team features the most Colleges available. We continuously invest in top Technologies to provide the highest quality of data to our Students.</h2>
                    </div>
                </div>
            </div>
            <CollegesList />
            <CollegesPromo />
        </div>
        <CollegesFooter />
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
        background: linear-gradient(180deg,#82ded7,rgba(130,222,215,0));
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