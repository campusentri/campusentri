<template>
    <div class="slider">
        <div to="blogs" class="slide" v-for="(slide, index) in slides" :key="index" v-show="currentIndex === index">
            <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
            <div class="press-release-container" :class="{ 'active': currentIndex === index }">
                <span class="label-wrapper">
                    <span>{{ slide.label }}</span>
                </span>
                <NuxtLink to="/blogs" class="ml-0 md:ml-4 h-full text-container">
                    <span class="mr-4 date">{{ slide.date }}</span>
                    <span class="title">{{ slide.text }}</span>
                </NuxtLink>
                <div class="controls">
                    <button @click="prevSlide" :disabled="currentIndex === 0">
                        <IconsChevronLeft />
                    </button>
                    <span>{{ currentIndex + 1 }} of {{ slides.length }}</span>
                    <button @click="nextSlide">
                        <IconsChevronRight />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            slides: [
                { label: 'Press Release', date: '2022-08-23', text: 'CampusEntriⓇ Marks the Opening Of The First educational Research, positioning Malaysia' },
                { label: 'Press Release', date: '2022-08-23', text: 'CampusEntriⓇ Marks the Opening Of The First Central Laboratory in Clinical Research positioning Malaysia as the Asia Pacific Hub' },
                { label: 'Publications', date: '2017-09-01', text: 'Agreement between Programmed Cell Death Ligand-1 Diagnostic Assays across Multiple Protein Expression Cutoffs in Non-Small Cell Lung Cancer' }
            ],
            currentIndex: 0,
            progressInterval: null,
            progressBarWidth: 0,
            progressBarDuration: 7000000000000 // Duration in milliseconds for each slide
        };
    },
    mounted() {
        this.startProgress();
    },
    methods: {
        startProgress() {
            this.progressInterval = setInterval(() => {
                this.progressBarWidth += 100 / (this.progressBarDuration / 100);
                if (this.progressBarWidth >= 100) {
                    this.progressBarWidth = 0;
                    clearInterval(this.progressInterval);
                    this.nextSlide();
                }
            }, 100);
        },
        nextSlide() {
            if (this.currentIndex < this.slides.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
            this.startProgress();
        },
        prevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.slides.length - 1;
            }
            this.startProgress();
        }
    }
};
</script>

<style lang="scss" scoped>
.slider {
    position: relative;
    width: 100%;
    height: 100px;
    overflow: hidden;
    border-top: 1px solid rgba(255, 255, 255, 0.3);

    .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .progress-bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 1.5px;
            background-color: #fff;
            transform-origin: left;
            transition: width 0.1s, transform 0.1s;

            &.active {
                transform: scaleX(0) translate3d(-100%, 0, 0);
            }
        }

        .progress-back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.1);
        }

        .press-release-container {
            color: #fff;
            font-size: .8125rem;
            display: flex;
            align-items: center;
            gap: 5px;
            justify-content: space-between;
            border-radius: 28px;
            padding: 8px 16px;
            width: 100%;
            cursor: pointer;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
            @media screen and (max-width: 768px) {
                padding: 8px;
                height: 60%;
                gap: 0;
            }
            .text-container {
                @media screen and (max-width: 768px) {
                    width: 50%;
                }
            }
            .date {
                @media screen and (max-width: 768px) {
                    display: none;
                }
            }
            .title {
                font-size: .875rem;
                letter-spacing: .01em;
                line-height: 1em;
                font-family: 'Aeonik-medium' !important;
                text-transform: capitalize;
                @media screen and (max-width: 768px) {
                    font-size: .75rem;
                    line-height: normal;
                    height: auto;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

            span {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }

            &.active {
                opacity: 1;
                transform: translateY(0);

                span{
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            &:hover {
                opacity: 1;
                transform: translateY(0);

                span {
                    opacity: 1;
                    transform: translateY(0);
                }

                .controls {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .label-wrapper {
                background-color: #fff;
                border-radius: 18px;
                color: #2c2c2c;
                font-family: 'Aeonik-medium';
                font-size: 13px;
                line-height: 1em;
                padding: 8px 17px;
                position: relative;
                width: 150px;
                transition: color .5s cubic-bezier(.19, 1, .22, 1), background-color .5s cubic-bezier(.19, 1, .22, 1);
                @media screen and (max-width: 768px) {
                    width: 70px;
                }
            }

            &:hover {
                background: #fff;
                color: #2c2c2c;

                .label-wrapper {
                    background: #2c2c2c;
                    color: #fff;
                }
            }

            .controls {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
                margin-top: 10px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 100px;

                button {
                    margin: 0 5px;
                    background-color: transparent;
                    color: #fff;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>