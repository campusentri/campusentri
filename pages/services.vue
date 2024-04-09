<template>
    <div class="service-content">
        <Service />
        <div class="page-content">
            <ServiceCapabilities />
            <ServiceClients />
            <ServiceResults />
            <ServiceStory />
        </div>
        <ServiceFooter />
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
        background: linear-gradient(-180deg,#cbd7b5,hsla(81,30%,78%,0));
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