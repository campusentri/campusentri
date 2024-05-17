<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Read More'
        }
    }
}
</script>

<template>
    <button class="read-more-btn big-size black-color" data-v-a2720cde="">
        <div class="inner" data-v-a2720cde="">
            <span class="icon arrow-right" data-v-a2720cde="">
                <span class="icon-container arrow-right-icon-container" data-v-a2720cde="">
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="arrow-right-icon shadow-icon" data-v-a2720cde="">
                        <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" data-v-a2720cde=""></path>
                        <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526" stroke="#2C2C2C" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" data-v-a2720cde=""></path>
                    </svg>
                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="arrow-right-icon" data-v-a2720cde="">
                        <path d="M1.19922 4.82703L9.23616 4.82703" stroke="#2C2C2C" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" data-v-a2720cde=""></path>
                        <path d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526" stroke="#2C2C2C" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" data-v-a2720cde=""></path>
                    </svg>
                </span>
            </span>
            <span class="label-sizer">{{ title }}</span>
        </div>
    </button>
</template>

<style lang="scss" scoped>
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

                .arrow-right-icon {
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

                .arrow-right-icon {
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
</style>