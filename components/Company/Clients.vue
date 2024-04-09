<template>
    <div id="clients" class="clients-block-wrapper">
        <div class="bg-gradient"></div>
        <div class="flex justify-center px-6 relative">
            <div class="w-full md:w-1/2 mx-auto">
                <h2 class="title">Our students are from Kerala. So are we...</h2>
            </div>
        </div>
        <div class="w-full relative px-6 flex image-container">
            <div class="inner w-full px-3">
                <svg viewBox="0 0 3001 1362" class="map" data-v-4e9c2f42="" style="translate: none; rotate: none; scale: none;"><g id="map" data-v-4e9c2f42=""><image width="3001" height="1362" xlink:href="/images/company/clients-map.png" style="overflow:visible" data-v-4e9c2f42=""></image></g> <g id="points" data-v-4e9c2f42=""><circle id="chicago" data-label="Chicago" cx="810.5" cy="425.2" r="80" data-v-4e9c2f42=""></circle> <circle id="london" data-label="Manchester" cx="1391.1" cy="444" r="80" data-v-4e9c2f42=""></circle> <circle id="malaysia" data-label="Kuala Lumpur" cx="2227.4" cy="759.1" r="80" data-v-4e9c2f42=""></circle> <circle id="shangai" data-label="Shanghai" cx="2405.7" cy="589.7" r="80" data-v-4e9c2f42=""></circle></g></svg>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.clients-block-wrapper {
    padding-bottom: 12.5rem;
    position: relative;

    .bg-gradient {
        background: linear-gradient(180deg, rgba(247, 158, 190, 0), #ffa5a5 45.8%, rgba(247, 158, 163, 0) 89.72%);
        display: block;
        height: 200vh;
        left: 0;
        position: absolute;
        top: -50vh;
        width: 100%;
        @media screen and (max-width: 768px) {
            height: 120vh;
        }
    }

    .title {
        position: relative;
        text-align: center;
        color: #2c2c2c;
        font-family: 'Aeonik-Regular';
        font-size: 3.8235294118vw;
        letter-spacing: -.01em;
        line-height: 1.2em;
        @media screen and (max-width: 768px) {
            font-size: calc(1.40625rem + 1.45833vw);
            margin-bottom: 3rem;
        }
    }

    .image-container {
        .inner {
            @media screen and (max-width: 768px) {
                width: 100%;
            }
        }
        .map {
            margin-bottom: 2.5rem;
            position: relative;

            #points {
                circle {
                    cursor: pointer;
                    opacity: 0;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                }
            }
        }
    }
}
</style>