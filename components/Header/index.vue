<script>
export default {
    data() {
        return {
            showNavbar: false,
            isMobile: false
        };
    },
    methods: {
        toggleNavbar() {
            this.showNavbar = !this.showNavbar;
        },
        closeNavbar() {
            this.showNavbar = false;
        }
    },
    mounted() {
        const route = useRoute();
        this.isMobile = window.matchMedia('(max-width: 768px)').matches;
        
        watch(() => route.fullPath, () => {
            this.showNavbar = false;
        });
    }
};
</script>
<template>
    <nav class="bg-transparent pt-6 px-3 absolute z-[1000] w-full">
        <div class="flex items-stretch px-4 md:px-6">
            <NuxtLink to="/">
                <div class="flex flex-grow-0 items-center logo">
                    <img src="@/assets/imgs/logo-1.png" alt="Logo" class="h-full ml-0 md:ml-2" />
                </div>
            </NuxtLink>
            <div :class="showNavbar && 'open'" class="mr-0 md:mr-2 z-10 flex-grow flex fixed right-10 justify-end">
                <button @click="toggleNavbar"
                    class="menu-button w-11 h-11 bg-white rounded-full flex justify-center items-center gap-2">
                    <span class="flex flex-col gap-2">
                        <span class="h-0.5 w-7 bg-black line-1 line"></span>
                        <span class="h-0.5 w-7 bg-black line-2 line"></span>
                    </span>
                </button>
                <MainMenuSm v-if="showNavbar && isMobile" @close="closeNavbar" />
                <MainMenu v-if="showNavbar && !isMobile" @close="closeNavbar" />
            </div>
        </div>
    </nav>
</template>

<style lang="scss">
.logo {
    align-items: center;
    display: flex;
    max-width: 180px;
    position: relative;
    width: 100%;

    img {
        min-width: 120px;
    }
}

.menu-button {
    transition: transform .5s cubic-bezier(.19, 1, .22, 1);
    will-change: transform;

    &:active,
    &:hover {
        transform: scale(.8);
    }

    .line {
        transition: transform .5s cubic-bezier(.19, 1, .22, 1), background-color .5s cubic-bezier(.19, 1, .22, 1);
        will-change: transform;
    }
}

.open {
    .menu-button {
        span {
            &:first-child {
                gap: 5px;
            }
        }
        .line-1 {
            transform: translateY(4px) rotate(-45deg) scaleX(.8);
        }

        .line-2 {
            transform: translateY(-3px) rotate(45deg) scaleX(.8);
        }
    }
}
</style>