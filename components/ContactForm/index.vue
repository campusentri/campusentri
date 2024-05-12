<script>
export default {
    data() {
        return {
            lead: {
                name: '',
                email: '',
                phoneNumber: '',
            },
            user: null,
            otplessCallbackSet: false
        }
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        courseInfo: {
            type: Object,
            default: null
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-contact-modal');
        },
        async handleSubmit() {
            if (!this.user) return;
            const sanity = useSanity();
            try {
                await sanity.client.create({
                    _type: 'leads',
                    ...this.lead,
                })
                localStorage.setItem('user', JSON.stringify(this.lead));
                this.lead = {
                    name: '',
                    email: '',
                    phoneNumber: '',
                }
                this.closeModal();
                if(this.courseInfo) {
                    this.$emit('open-modal', this.courseInfo);
                } else {
                    console.log(this.courseInfo, this.$route)
                    navigateTo(this.$route.fullPath);
                }
            } catch (error) {
                console.error('Error submitting lead:', error);
            }
        },
        loadScript() {
            const script = document.createElement('script');
            script.src = 'https://otpless.com/v2/auth.js';
            script.id = "otpless-sdk";
            script.type = "text/javascript";
            script.setAttribute('data-appid', '6NPRDLIELNK25NADMUOZ');
            document.body.appendChild(script);
        },
        openModal() {
            this.loadScript();
        }
    },
    watch: {
        isOpen(newVal) {
            const navElement = document.querySelector('nav');
            if (newVal) {
                document.body.classList.add('body-no-scroll');
                navElement.classList.add('z-[1]');
                this.openModal();
            } else {
                document.body.classList.remove('body-no-scroll');
                navElement.classList.remove('z-[1]');
            }
        }
    },
    mounted() {
        if (!this.otplessCallbackSet) {
            window.otpless = (otplessUser) => {
                if (!this.otplessCallbackSet) {
                    this.otplessCallbackSet = true;
                    this.user = otplessUser.identities[0];
                    this.lead = {
                        name: this.user?.name,
                        phoneNumber: this.user?.identityValue,
                        email: this.user?.email
                    };
                    this.handleSubmit();
                }
            };
        }
    }
}
</script>

<template>
    <transition name="modal-fade">
        <div v-if="isOpen && !user" class="fold-view">
            <div :class="!user ? 'bg-transparent' : 'bg-[#fbfbfb]'" class="inner" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

                <header class="modal-header" id="modalTitle">
                    <button type="button" class="btn-close z-10" @click="closeModal" aria-label="Close modal">
                        <span class="bg"></span>
                        <span class="label"></span>
                        <span class="icon">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="mobile-icon icon-svg" data-v-96ba656a="">
                                <line x1="1.99816" y1="1.94167" x2="15.0625" y2="15.006" stroke="#FF4134"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                    data-v-96ba656a=""></line>
                                <line x1="15.0625" y1="2.06066" x2="1.99816" y2="15.125" stroke="#FF4134"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
                                    data-v-96ba656a=""></line>
                            </svg>
                        </span>
                    </button>
                </header>

                <section class="modal-body" id="modalDescription">
                    <div v-if="!user" id="otpless-login-page"></div>
                    <div v-else class="wrapper">
                        <div class="success flex justify-center items-center flex-col">
                            <svg class="text-emerald-500" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"/></svg>
                            <h2 class="mt-8">Your message has been sent successfully!</h2>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<style lang="scss" scoped>
.fold-view {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(44, 44, 44, .8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .inner {
        // background-color: #fbfbfb;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        width: 38vw;
        border-radius: 20px;

        @media screen and (max-width: 768px) {
            width: 95vw;
        }

        .modal-header {
            position: relative;
            justify-content: space-between;
        }

        .modal-body {
            position: relative;

            .wrapper {
                display: block;
                min-height: calc(100% - 40px);
                left: 20px;
                position: absolute;
                top: 40px;
                width: calc(100% - 40px);

                @media screen and (max-width: 768px) {
                    left: 0;
                    width: 100%;
                }

                .success {
                    min-height: 70vh;
                    h2 {
                        color: #2c2c2c;
                        font-family: 'Aeonik-Regular';
                        font-size: calc(1.35938rem + 1.02083vw);
                        line-height: 1.1em;
                        letter-spacing: -.01em;
                    }
                }

                .contact-form-wrapper {
                    padding: calc(1.5625rem + 2.91667vw) 0 0;

                    .header-container {
                        box-shadow: 0 1.5px 0 #2c2c2c;
                        padding-bottom: calc(1.40625rem + 1.45833vw);

                        .title {
                            color: #2c2c2c;
                            font-family: 'Aeonik-Regular';
                            font-size: calc(1.35938rem + 1.02083vw);
                            line-height: 1.1em;
                            letter-spacing: -.01em;
                        }
                    }
                }

                .contact-form-container {
                    margin-top: calc(1.76563rem + 4.8125vw);
                    position: relative;

                    .form-line {
                        height: calc(1.48438rem + 2.1875vw);
                        margin-bottom: calc(1.36719rem + 1.09375vw);
                        position: relative;
                        @media screen and (max-width: 768px) {
                            height: auto;
                            .form-cols {
                                height: auto;
                                min-height: 40px;
                            }
                        }

                        label {
                            color: #2c2c2c;
                            font-family: 'Aeonik-Regular';
                            font-size: 1.125rem;
                            line-height: 1.3em;
                        }

                        input {
                            font-size: 1.125rem;
                            align-items: center;
                            background-color: #f1f2f2;
                            border: none;
                            border-radius: 2px;
                            box-shadow: none;
                            color: #2c2c2c;
                            display: flex;
                            font-family: 'Aeonik-Regular';
                            height: 100%;
                            line-height: 1.3em;
                            outline: none;
                            padding: 0 10px;
                            position: relative;
                            width: 100%;
                            @media screen and (max-width: 768px) {
                                height: 40px;
                            }
                        }

                    }

                    .text-area-line {
                        height: calc(2.65625rem + 13.125vw);
                    }

                    .send-btn {
                        .read-more-btn {
                            cursor: pointer;
                            position: relative;
                            transition: transform .5s cubic-bezier(.19, 1, .22, 1);

                            &:active {
                                transform: scale(.9);
                            }

                            &:hover {
                                .inner-btn {
                                    transform: scale(1.15);

                                    .icon {
                                        &:before {
                                            opacity: 1;
                                            transform: scale(1);
                                        }
                                    }

                                    .arrow-right-icon-container {
                                        .shadow-icon {
                                            opacity: 1 !important;
                                            transform: translate(0) !important;
                                        }

                                        svg {
                                            path {
                                                stroke: #fff;
                                            }
                                        }

                                        .send-icon {
                                            opacity: 0;
                                            transform: translate(30px);
                                        }
                                    }
                                }

                            }

                            .inner-btn {
                                height: 4.5rem;
                                border-radius: 60px;
                                align-items: center;
                                border: 1px solid transparent;
                                display: flex;
                                position: relative;
                                transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                                will-change: transform;

                                &:before {
                                    background-color: #2c2c2c;
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
                                        background-color: #2c2c2c;
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

                                    .arrow-right-icon-container {
                                        transform: scale(1.2);
                                        transform-origin: center;

                                        .send-icon {
                                            display: block;
                                            left: 1px;
                                            position: relative;
                                            transition: opacity .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);
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
    }
}

.btn-close {
    align-items: center;
    background-color: #2c2c2c;
    border-radius: 100%;
    display: flex;
    flex-direction: column;
    height: 45px;
    justify-content: center;
    width: 45px;
    position: absolute;
    right: 27%;
    top: 5px;
    position: fixed;

    &:hover {
        .icon {
            &:before {
                opacity: 1;
                transform: scale(1);
            }
        }
    }

    .bg {
        backdrop-filter: blur(4px);
        background-color: rgba(44, 44, 44, .15);
        border-radius: 60px;
        display: block;
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transform: scale(.7);
        transform-origin: right;
        transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
        width: 100%;
        will-change: transform;
    }

    .label {
        color: #2c2c2c;
        display: none;
    }

    .icon {
        align-items: center;
        border-radius: 100%;
        display: flex;
        height: 45px;
        justify-content: center;
        margin-right: 0;
        min-height: 45px;
        position: relative;
        width: 45px;

        &:before {
            background-color: #2c2c2c;
            opacity: 1;
            transform: scale(.95);
            border-radius: 100%;
            content: "";
            display: block;
            height: 100%;
            left: 0;
            opacity: 0;
            position: absolute;
            top: 0;
            transform: scale(.7);
            transform-origin: center;
            transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
            width: 100%;
            will-change: transform;
        }

        .icon-svg {
            position: relative;
            transform-origin: center;
            transition: transform .5s cubic-bezier(.19, 1, .22, 1);
            will-change: transform;

            line {
                stroke: #fff;
                transition: stroke .5s cubic-bezier(.19, 1, .22, 1);
            }
        }
    }
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease;
}
</style>