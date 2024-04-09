<template>
    <div class="secondary-menu show md:flex hidden">
        <span class="bar"></span>
        <span class="point"></span>
        <ul class="items">
            <li class="item">Intro</li>
            <li class="item">Expertise</li>
            <li class="item">Technologies</li>
            <li class="item">Clinical Trials</li>
            <li class="item">Services</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.secondary-menu {
    left: 3.875rem;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 50%;
    translate: none;
    rotate: none;
    scale: none;
    transform: translate(0%, -50%);
    transition: opacity .5s cubic-bezier(.19, 1, .22, 1);
    will-change: transform;
    z-index: 10;

    .bar {
        background-color: hsla(0, 0%, 100%, .5);
        border-radius: 12px;
        display: block;
        height: calc(100% - 25px);
        left: 0;
        opacity: .4;
        position: absolute;
        top: 12.5px;
        transform: scaleY(0);
        transform-origin: top;
        width: 4px;
    }

    .point {
        background-color: #fff;
        border-radius: 6px;
        display: block;
        height: 8px;
        left: -2px;
        position: absolute;
        top: 8.5px;
        width: 8px;
    }

    .items {
        margin-left: 20px;
        position: relative;

        .item {
            align-items: center;
            color: #fff;
            cursor: pointer;
            display: flex;
            font-size: 16.5px;
            height: 25px;
            justify-content: flex-start;
            line-height: 1em;
            position: relative;
            transition: opacity .5s cubic-bezier(.19, 1, .22, 1);
        }
    }
}

.show {
    opacity: 1;
    pointer-events: visible;
}
</style>