<template>
    <div class="home-content">
        <Home />
        <div class="page-content">
            <HomeExpertise />
            <HomeTechnologies />
            <HomeFeeStructure />
            <HomeServices />
        </div>
        <HomeFooter />
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
        background: linear-gradient(180deg, #eb675e 3.55%, hsla(6, 87%, 70%, 0));
        height: 200vh;
        max-height: 1400px;
        content: "";
        display: block;
        left: 0;
        position: absolute;
        top: -4px;
        width: 100%;
    }
}
</style>