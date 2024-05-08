<script>
export default {
    data() {
        return {
            lead: {
                name: '',
                email: '',
                phoneNumber: '',
            },
            submitted: false
        }
    },
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        courseInfo: {
            type: Object,
            default: {}
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-contact-modal');
        },
        async handleSubmit() {
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
                this.submitted = true;
                setTimeout(()=> {
                    this.$emit('close-contact-modal');
                    if(this.courseInfo) {
                        this.$emit('open-modal', this.courseInfo);
                    }
                    this.submitted = false;
                }, 2000);
            } catch (error) {
                console.error('Error submitting lead:', error);
            }
        },
    },
    watch: {
        isOpen(newVal) {
            const navElement = document.querySelector('nav');
            if (newVal) {
                document.body.classList.add('body-no-scroll');
                navElement.classList.add('z-[1]');
            } else {
                document.body.classList.remove('body-no-scroll');
                navElement.classList.remove('z-[1]');
            }
        }
    },
}
</script>

<template>
    <transition name="modal-fade">
        <div v-if="isOpen" class="fold-view">
            <div class="inner" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

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
                    <div v-if="!submitted" class="wrapper">
                        <div class="contact-form-wrapper">
                            <div class="flex justify-center px-3 md:px-8">
                                <div class="header-container w-full">
                                    <h2 class="title">Let's Explore Your Future Together!</h2>
                                </div>
                            </div>
                        </div>
                        <form @submit.prevent="handleSubmit" class="contact-form-container mb-10">
                            <div class="form-line flex flex-col md:flex-row md:px-8">
                                <div class="flex items-center form-cols px-3 w-full md:w-1/4">
                                    <label for="name">Your Name</label>
                                </div>
                                <div class="flex items-center form-cols px-3 w-full md:w-3/4">
                                    <input class="px-3" name="name" id="name" v-model="lead.name" type="text" required />
                                </div>
                            </div>
                            <div class="form-line flex flex-col md:flex-row md:px-8">
                                <div class="flex items-center form-cols px-3 w-full md:w-1/4">
                                    <label for="email">Your Email</label>
                                </div>
                                <div class="flex items-center form-cols px-3 w-full md:w-3/4">
                                    <input class="px-3" name="email" id="email" v-model="lead.email" type="email" required />
                                </div>
                            </div>
                            <div class="form-line flex flex-col md:flex-row md:px-8">
                                <div class="flex items-center form-cols px-3 w-full md:w-1/4">
                                    <label for="phoneNumber">Phone Number</label>
                                </div>
                                <div class="flex items-center form-cols px-3 w-full md:w-3/4">
                                    <input class="px-3" name="phoneNumber" id="phoneNumber" v-model="lead.phoneNumber" type="tel" required />
                                </div>
                            </div>
                            <div class="flex justify-center md:px-8 mt-12">
                                <div class="send-btn">
                                    <button class="read-more-btn big-size black-color" type="submit" data-v-a2720cde="">
                                        <div class="inner-btn" data-v-a2720cde="">
                                            <span class="icon arrow-right" data-v-a2720cde="">
                                                <span class="icon-container arrow-right-icon-container"
                                                    data-v-a2720cde="">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="send-icon shadow-icon"
                                                        data-v-a2720cde="">
                                                        <path
                                                            d="M0.925387 9.31799C0.98019 9.85321 1.20439 10.357 1.56535 10.7559C1.92631 11.1549 2.40518 11.4282 2.93226 11.5361L8.10789 12.698C8.41486 12.7587 8.69776 12.9068 8.92261 13.1245C9.14745 13.3421 9.30467 13.62 9.37539 13.9249L10.5454 19.1817C10.6522 19.6982 10.927 20.1647 11.3267 20.5086C11.7265 20.8525 12.2288 21.0545 12.7554 21.083H12.9423C13.4368 21.0872 13.9205 20.9379 14.3265 20.6556C14.7325 20.3732 15.0409 19.9718 15.2091 19.5067L20.9454 4.31299C21.1164 3.8907 21.1704 3.43014 21.1017 2.97976C21.0331 2.52937 20.8444 2.10581 20.5554 1.75361C20.2295 1.37518 19.7952 1.10599 19.3113 0.982466C18.8274 0.858944 18.3172 0.887051 17.8498 1.06298L2.49351 6.84799C2.00004 7.03455 1.58041 7.37617 1.29765 7.82155C1.01489 8.26694 0.884266 8.79204 0.925387 9.31799ZM10.781 12.9174C10.752 12.7844 10.7569 12.6462 10.7953 12.5156C10.8336 12.385 10.9041 12.2661 11.0004 12.1699L18.8329 4.33736C18.8544 4.29857 18.8905 4.26994 18.9332 4.25775C18.9758 4.24556 19.0216 4.25081 19.0604 4.27236C19.0992 4.29391 19.1278 4.32999 19.14 4.37265C19.1522 4.41532 19.1469 4.46107 19.1254 4.49986L13.6491 18.938C13.587 19.1001 13.4746 19.238 13.3284 19.3316C13.1822 19.4252 13.0099 19.4695 12.8366 19.458C12.6629 19.4447 12.498 19.376 12.3664 19.2619C12.2347 19.1477 12.1432 18.9943 12.1054 18.8242L10.781 12.9174ZM3.07039 8.36737L17.5004 2.92361C17.5352 2.91065 17.5735 2.91004 17.6088 2.92188C17.644 2.93372 17.6742 2.9573 17.6941 2.98868C17.7141 3.02006 17.7227 3.05734 17.7185 3.0943C17.7143 3.13125 17.6975 3.16565 17.671 3.19174L9.83039 10.9999C9.73414 11.0961 9.61525 11.1667 9.48464 11.205C9.35403 11.2433 9.21589 11.2482 9.08289 11.2192L3.17601 9.92737C3.00599 9.88834 2.85305 9.79563 2.7398 9.66295C2.62655 9.53028 2.55901 9.36467 2.54717 9.19064C2.53532 9.0166 2.5798 8.84337 2.67403 8.69657C2.76826 8.54977 2.90723 8.43719 3.07039 8.37549V8.36737Z"
                                                            fill="#2C2C2C" data-v-a2720cde=""></path>
                                                    </svg>
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="send-icon"
                                                        data-v-a2720cde="">
                                                        <path
                                                            d="M0.925387 9.31799C0.98019 9.85321 1.20439 10.357 1.56535 10.7559C1.92631 11.1549 2.40518 11.4282 2.93226 11.5361L8.10789 12.698C8.41486 12.7587 8.69776 12.9068 8.92261 13.1245C9.14745 13.3421 9.30467 13.62 9.37539 13.9249L10.5454 19.1817C10.6522 19.6982 10.927 20.1647 11.3267 20.5086C11.7265 20.8525 12.2288 21.0545 12.7554 21.083H12.9423C13.4368 21.0872 13.9205 20.9379 14.3265 20.6556C14.7325 20.3732 15.0409 19.9718 15.2091 19.5067L20.9454 4.31299C21.1164 3.8907 21.1704 3.43014 21.1017 2.97976C21.0331 2.52937 20.8444 2.10581 20.5554 1.75361C20.2295 1.37518 19.7952 1.10599 19.3113 0.982466C18.8274 0.858944 18.3172 0.887051 17.8498 1.06298L2.49351 6.84799C2.00004 7.03455 1.58041 7.37617 1.29765 7.82155C1.01489 8.26694 0.884266 8.79204 0.925387 9.31799ZM10.781 12.9174C10.752 12.7844 10.7569 12.6462 10.7953 12.5156C10.8336 12.385 10.9041 12.2661 11.0004 12.1699L18.8329 4.33736C18.8544 4.29857 18.8905 4.26994 18.9332 4.25775C18.9758 4.24556 19.0216 4.25081 19.0604 4.27236C19.0992 4.29391 19.1278 4.32999 19.14 4.37265C19.1522 4.41532 19.1469 4.46107 19.1254 4.49986L13.6491 18.938C13.587 19.1001 13.4746 19.238 13.3284 19.3316C13.1822 19.4252 13.0099 19.4695 12.8366 19.458C12.6629 19.4447 12.498 19.376 12.3664 19.2619C12.2347 19.1477 12.1432 18.9943 12.1054 18.8242L10.781 12.9174ZM3.07039 8.36737L17.5004 2.92361C17.5352 2.91065 17.5735 2.91004 17.6088 2.92188C17.644 2.93372 17.6742 2.9573 17.6941 2.98868C17.7141 3.02006 17.7227 3.05734 17.7185 3.0943C17.7143 3.13125 17.6975 3.16565 17.671 3.19174L9.83039 10.9999C9.73414 11.0961 9.61525 11.1667 9.48464 11.205C9.35403 11.2433 9.21589 11.2482 9.08289 11.2192L3.17601 9.92737C3.00599 9.88834 2.85305 9.79563 2.7398 9.66295C2.62655 9.53028 2.55901 9.36467 2.54717 9.19064C2.53532 9.0166 2.5798 8.84337 2.67403 8.69657C2.76826 8.54977 2.90723 8.43719 3.07039 8.37549V8.36737Z"
                                                            fill="#2C2C2C" data-v-a2720cde=""></path>
                                                    </svg>
                                                </span>
                                            </span>
                                            <span class="label-sizer" data-v-a2720cde="">Send Message</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
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
        background-color: #fbfbfb;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        width: 70vw;

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
    right: 10%;
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