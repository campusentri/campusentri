<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal');
        }
    }
}
</script>

<template>
    <transition name="modal-fade">
        <div v-if="isOpen" class="fold-view">
            <div class="inner" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">

                <header class="modal-header" id="modalTitle">
                    <slot name="header">
                    </slot>
                    <button type="button" class="btn-close" @click="closeModal" aria-label="Close modal">
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
                    <slot name="body">
                        This is the default body!
                    </slot>
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
    background-color: rgba(44,44,44,.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;

    .inner {
        background-color: #fbfbfb;
        border-radius: 20px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        width: 90vw;
        @media screen and (max-width: 768px) {
            width: 95vw;
        }
        .modal-header {
            position: relative;
            justify-content: space-between;
        }
        .modal-body {
            position: relative;
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
    right: .75rem;
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