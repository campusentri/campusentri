<script>
export default {
    props: {
        audioSrc: {
            type: String,
            required: true
        }
    },
    methods: {
        toggleAudio() {
            var audioPlayer = document.getElementById("audioPlayer");
            var audioToggleBtn = document.getElementById("audioToggleBtn");

            if (audioPlayer.paused) {
                audioPlayer.play();
                audioToggleBtn.classList.add("on");
                audioToggleBtn.classList.remove("off");
            } else {
                audioPlayer.pause();
                audioToggleBtn.classList.remove("on");
                audioToggleBtn.classList.add("off");
            }
        }
    }
}
</script>

<template>
    <div class="flex relative justify-end px-2 w-[6.25%] audio-container">
        <audio id="audioPlayer" autoplay loop>
            <source :src="audioSrc" type="audio/mpeg">
        </audio>
        <button class="audio-btn" id="audioToggleBtn" @click="toggleAudio">
            <span class="icon">
                <svg data-v-7d4dd1aa="" width="19" height="14" viewBox="0 0 19 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="audio-icon">
                    <path data-v-7d4dd1aa=""
                        d="M1 8.80355V5.51784C1 5.06418 1.36777 4.69641 1.82143 4.69641H4.037C4.19918 4.69641 4.35772 4.64841 4.49265 4.55845L7.93721 2.26208C8.48313 1.89816 9.21429 2.28948 9.21429 2.94555V11.3759C9.21429 12.0319 8.48313 12.4233 7.93721 12.0593L4.49265 9.7629C4.35772 9.67295 4.19918 9.62498 4.037 9.62498H1.82143C1.36777 9.62498 1 9.25723 1 8.80355Z"
                        stroke="white" stroke-width="1.5"></path>
                    <g data-v-7d4dd1aa="" class="on">
                        <path data-v-7d4dd1aa=""
                            d="M12.9102 3.46429C12.9102 3.46429 14.1423 4.69644 14.1423 6.75001C14.1423 8.80358 12.9102 10.0357 12.9102 10.0357"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path data-v-7d4dd1aa=""
                            d="M15.375 1C15.375 1 17.4286 3.05357 17.4286 6.75C17.4286 10.4464 15.375 12.5 15.375 12.5"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                    <g data-v-7d4dd1aa="" class="off">
                        <path data-v-7d4dd1aa=""
                            d="M14.1433 6.16071L15.7857 7.80357M12.5 7.80357L14.1433 6.16071L12.5 7.80357ZM15.7857 4.51785L14.1433 6.16071L15.7857 4.51785ZM14.1433 6.16071L12.5 4.51785L14.1433 6.16071Z"
                            stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </span>
        </button>
    </div>
</template>

<style lang="scss" scoped>
.audio-container {
    position: relative;
    top: -25px;
    .off {
        .icon {
            .audio-icon {
                .on {
                    opacity: 0 !important;
                    transform: translateX(-10px) scale(1.2) !important;
                }

                .off {
                    opacity: 1 !important;
                    transform: translateX(-2px) scale(1.2) !important;
                }
            }
        }
    }

    .audio-btn {
        align-items: center;
        border-radius: 60px;
        display: flex;
        height: 54px;
        justify-content: center;
        transition: transform .5s cubic-bezier(.19, 1, .22, 1);
        white-space: nowrap;
        will-change: transform;

        &:after {
            height: 74px;
            left: auto;
            right: -15px;
            top: -10px;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            width: 74px;
            border-radius: 140%;
            content: "";
            display: block;
            position: absolute;
        }

        &:active {
            transform: scale(.9);
        }

        &:hover {
            transform: scale(.9);

            .icon {
                &:before {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            path {
                stroke: #2c2c2c;
            }
        }

        .icon {
            align-items: center;
            border-radius: 100%;
            display: flex;
            height: 44px;
            justify-content: center;
            margin-right: 0;
            position: relative;
            width: 44px;
            will-change: transform;

            &:before {
                background-color: #fff;
                border-radius: 100%;
                content: "";
                display: block;
                height: 100%;
                left: 0;
                opacity: .2;
                position: absolute;
                top: 0;
                transform: scale(.9);
                transform-origin: center;
                transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
                width: 100%;
                will-change: transform;
            }

            .audio-icon {
                position: relative;
                transform-origin: center;
                transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                will-change: transform;

                path {
                    transition: stroke .5s cubic-bezier(.19, 1, .22, 1);
                }

                g {
                    transition: transform .5s cubic-bezier(.19, 1, .22, 1), opacity .5s cubic-bezier(.19, 1, .22, 1);
                    will-change: transform;
                }

                .on {
                    opacity: 1;
                    transform: translateX(0);
                }

                .off {
                    opacity: 0;
                    transform: translateX(-2px) scale(1.2);
                }
            }
        }
    }
}
</style>