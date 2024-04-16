<template>
    <div class="company-content">
        <Company />
        <div class="page-content">
            <CompanyAbout />
            <CompanyLeader />
            <CompanyClients />
            <CompanyCulture />
            <CompanyValues />
            <CompanyCareers />
        </div>
        <CompanyFooter />
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
        background: linear-gradient(-180deg, #ed736a, hsla(4, 78%, 67%, 0));
        height: 99vh;
        content: "";
        display: block;
        left: 0;
        position: absolute;
        top: -1px;
        width: 100%;
    }
}
</style>