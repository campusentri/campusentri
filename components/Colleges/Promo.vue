<script>
export default {
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        openModal() {
            this.$emit('open-contact-modal');
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    },
}
</script>

<template>
    <div>
        <div id="promo" class="promo-block-wrapper">
            <div class="row px-6 flex">
                <svg viewBox="0 0 375 414" fill="none" xmlns="http://www.w3.org/2000/svg" class="background-svg" data-v-2b22974e=""><path d="M188 8.21774e-06C84.1705 3.67921e-06 -3.67921e-06 84.1705 -8.21774e-06 188L-1.80965e-05 414L376 414L376 188C376 84.1705 291.83 1.27563e-05 188 8.21774e-06Z" fill="#FFFBFB" data-v-2b22974e=""></path></svg>
                <div class="text-container flex flex-col justify-center px-3 relative h-full md:w-[62.5%] md:ml-[5.5%]">
                    <span class="background"></span>
                    <div class="inner">
                        <h2 class="title">We are here to support you.</h2>
                        <h3 class="subtitle">Contact us to find out how our services can help achieve your goals.</h3>
                        <div class="cta-container inline-flex items-center gap-8 w-full">
                            <div class="cta-btn">
                                <button class="read-more-btn big-size white-color"  @click="openModal" data-v-a2720cde="">
                                    <div class="inner" data-v-a2720cde="">
                                        <span class="icon message" data-v-a2720cde="">
                                            <span class="icon-container message-icon-container" data-v-a2720cde="">
                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="message-icon shadow-icon"
                                                    data-v-a2720cde="">
                                                    <path
                                                        d="M13.5015 6.21102C13.8393 5.87317 14.1073 5.47208 14.2902 5.03066C14.473 4.58924 14.5671 4.11613 14.5671 3.63833C14.5671 3.16054 14.473 2.68743 14.2902 2.246C14.1073 1.80458 13.8393 1.40349 13.5015 1.06564C13.1636 0.727793 12.7625 0.459795 12.3211 0.276951C11.8797 0.094108 11.4066 -3.55983e-09 10.9288 0C10.451 3.55983e-09 9.97789 0.094108 9.53646 0.276951C9.09504 0.459795 8.69395 0.727793 8.3561 1.06564L1.01958 8.40533C0.695584 8.72777 0.438668 9.11119 0.26367 9.53347C0.0886718 9.95575 -0.000940527 10.4085 7.44314e-06 10.8656V14.5671H3.70151C4.15915 14.5685 4.61251 14.4791 5.03536 14.3041C5.45821 14.1291 5.84215 13.8719 6.16496 13.5475L13.5015 6.21102ZM3.70151 12.6673H1.89984V10.8656C1.89947 10.6576 1.94011 10.4515 2.01943 10.2592C2.09875 10.0668 2.21521 9.89201 2.36213 9.74471L9.70182 2.41136C10.0311 2.10266 10.4675 1.93413 10.9188 1.94141C11.3701 1.94868 11.8008 2.13119 12.12 2.45033C12.4391 2.76947 12.6216 3.20023 12.6289 3.65151C12.6362 4.10279 12.4676 4.53921 12.1589 4.86847L4.81925 12.205C4.52254 12.501 4.12059 12.6672 3.70151 12.6673Z"
                                                        fill="#2C2C2C" data-v-a2720cde=""></path>
                                                    <path d="M17.0985 17.1003H0V19.0002H17.0985V17.1003Z" fill="#2C2C2C"
                                                        data-v-a2720cde=""></path>
                                                </svg>
                                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="message-icon"
                                                    data-v-a2720cde="">
                                                    <path
                                                        d="M13.5015 6.21102C13.8393 5.87317 14.1073 5.47208 14.2902 5.03066C14.473 4.58924 14.5671 4.11613 14.5671 3.63833C14.5671 3.16054 14.473 2.68743 14.2902 2.246C14.1073 1.80458 13.8393 1.40349 13.5015 1.06564C13.1636 0.727793 12.7625 0.459795 12.3211 0.276951C11.8797 0.094108 11.4066 -3.55983e-09 10.9288 0C10.451 3.55983e-09 9.97789 0.094108 9.53646 0.276951C9.09504 0.459795 8.69395 0.727793 8.3561 1.06564L1.01958 8.40533C0.695584 8.72777 0.438668 9.11119 0.26367 9.53347C0.0886718 9.95575 -0.000940527 10.4085 7.44314e-06 10.8656V14.5671H3.70151C4.15915 14.5685 4.61251 14.4791 5.03536 14.3041C5.45821 14.1291 5.84215 13.8719 6.16496 13.5475L13.5015 6.21102ZM3.70151 12.6673H1.89984V10.8656C1.89947 10.6576 1.94011 10.4515 2.01943 10.2592C2.09875 10.0668 2.21521 9.89201 2.36213 9.74471L9.70182 2.41136C10.0311 2.10266 10.4675 1.93413 10.9188 1.94141C11.3701 1.94868 11.8008 2.13119 12.12 2.45033C12.4391 2.76947 12.6216 3.20023 12.6289 3.65151C12.6362 4.10279 12.4676 4.53921 12.1589 4.86847L4.81925 12.205C4.52254 12.501 4.12059 12.6672 3.70151 12.6673Z"
                                                        fill="#2C2C2C" data-v-a2720cde=""></path>
                                                    <path d="M17.0985 17.1003H0V19.0002H17.0985V17.1003Z" fill="#2C2C2C"
                                                        data-v-a2720cde=""></path>
                                                </svg>
                                            </span>
                                        </span>
                                        <span class="label-sizer" data-v-a2720cde="">Contact us
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div class="person-container">
                                <span>A member of our team will contact you shortly.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="image-container">
                <video autoplay muted loop="loop" webkit-playsinline="true" playsinline="true" disableRemotePlayback="true">
                    <source src="/videos/promo-block-small-uhd.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <ContactForm :is-open="isModalOpen" @close-contact-modal="closeModal" />
    </div>
</template>

<style lang="scss" scoped>
.promo-block-wrapper {
    height: 31.25rem;
    background-color: #fde5e4;
    display: block;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        height: 90vh;
    }

    .row {
        height: 100%;
        position: relative;
        z-index: 1;
        
        @media screen and (max-width: 768px) {
            height: 50%;
            z-index: 1;
        }

        svg {
            display: none;

            @media screen and (max-width: 768px) {
                display: block;
                left: 0;
                position: absolute;
                width: 100%;
                bottom: 0;
            }
        }

        .text-container {
            @media screen and (max-width: 768px) {
                padding-bottom: 100px;
            }
            .background {
                background: #fffbfb;
                border-radius: 20vw;
                height: 100%;
                left: -40vw;
                position: absolute;
                top: 0;
                width: 100vw;
                
                @media screen and (max-width: 768px) {
                    display: none;
                }
            }

            .inner {
                position: relative;
                @media screen and (max-width: 768px) {
                    position: relative;
                }

                .title {
                    font-size: 3.75rem;
                    line-height: 1em;
                    margin-bottom: 1.25rem;
                    padding-right: 60px;
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    @media screen and (max-width: 768px) {
                        margin-bottom: calc(1.875rem + 5.83333vw);
                        padding: 0 0 0 6.25vw;
                        font-size: calc(1.71875rem + 4.375vw);
                    }
                }

                .subtitle {
                    font-size: 1.625rem;
                    margin-bottom: 2.5rem;
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    line-height: 1.2em;
                    @media screen and (max-width: 768px) {
                        display: none;
                    }
                }

                .cta-btn {
                    .read-more-btn {
                        cursor: pointer;
                        position: relative;
                        transition: transform .5s cubic-bezier(.19, 1, .22, 1);

                        &:active {
                            transform: scale(.9);
                        }

                        &:hover {
                            .inner {
                                transform: scale(1.15);

                                .icon {
                                    &:before {
                                        opacity: 1;
                                        transform: scale(1);
                                    }
                                }

                                .message-icon-container {
                                    .shadow-icon {
                                        opacity: 1 !important;
                                        transform: translate(0) !important;

                                        path {
                                            fill: #fff !important;
                                        }
                                    }

                                    // svg {
                                    //     path {
                                    //         fill: #ff4134;
                                    //     }
                                    // }

                                    .message-icon {
                                        opacity: 0;
                                        transform: translate(30px);
                                    }
                                }
                            }

                        }

                        .inner {
                            height: 4.5rem;
                            border-radius: 60px;
                            align-items: center;
                            border: 1px solid transparent;
                            display: flex;
                            position: relative;
                            transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                            will-change: transform;

                            &:before {
                                background-color: #ff4134;
                                border-radius: 60px;
                                transform-origin: center;
                                transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                                content: "";
                                display: block;
                                height: 100%;
                                left: 0;
                                position: absolute;
                                top: 0;
                                width: 100%;
                                z-index: 0;
                            }

                            .icon {
                                height: 3.125rem;
                                width: 3.125rem;
                                border-radius: 50px;
                                margin-left: 11px;
                                align-items: center;
                                background-color: #fff;
                                display: flex;
                                justify-content: center;
                                overflow: hidden;
                                position: relative;

                                svg {
                                    path {
                                        transition: stroke .5s cubic-bezier(.19, 1, .22, 1);
                                    }
                                }

                                &:before {
                                    background-color: #ff4134;
                                    border-radius: 100%;
                                    content: "";
                                    display: block;
                                    height: calc(100% - 4px);
                                    left: 2px;
                                    opacity: 0;
                                    position: absolute;
                                    top: 2px;
                                    transform: scale(0);
                                    transform-origin: center;
                                    transition: opacity .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);
                                    width: calc(100% - 4px);
                                }

                                .message-icon-container {
                                    transform: scale(1.2);
                                    transform-origin: center;

                                    .message-icon {
                                        display: block;
                                        left: 1px;
                                        position: relative;
                                        transition: opacity .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);

                                        path {
                                            fill: #2c2c2c;
                                        }
                                    }

                                    .shadow-icon {
                                        display: block;
                                        left: 0;
                                        position: absolute;
                                        top: 0;
                                        transform: translate(-30px);
                                        width: 100%;
                                        opacity: 0;
                                        transition: opacity .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);
                                    }
                                }
                            }
                        }

                        .label-container {
                            left: 3.75rem;
                            align-items: center;
                            display: flex;
                            height: 100%;
                            position: absolute;
                            top: 0;
                            width: 100%;
                        }

                        .label-sizer {
                            color: #fff;
                            display: inline-block;
                            font-size: 1.3125rem;
                            padding: 0 2.125rem 0 1.375rem;
                            letter-spacing: -.01em;
                            line-height: 1em;
                            position: relative;
                            top: -1px;
                            transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }

    .image-container {
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;

        
        @media screen and (max-width: 768px) {
            height: 50%;
            order: 1;
            position: relative;
        }

        video {
            height: 100%;
            left: 7vw;
            position: relative;
            width: auto;

            
            @media screen and (max-width: 768px) {
                height: 100%;
                left: 0;
                margin: 0 auto;
                -o-object-fit: cover;
                object-fit: cover;
                width: 100%;
            }
        }
    }
}
</style>