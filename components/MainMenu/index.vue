<template>
    <div class="fixed top-0 left-0 w-full h-full z-[1000]">
        <div class="absolute top-0 left-0 w-full h-full" @click="closeNavbar"></div>
        <nav ref="topNav" class="absolute top-0 left-0 bg-[#f23c2f] w-1/4 h-full p-8">
            <div class="flex flex-col justify-between h-full">
                <NuxtLink to="/">
                    <div class="flex items-center logo">
                        <img src="@/assets/imgs/logo-2.png" alt="Logo" class="h-full ml-0 md:ml-2" />
                    </div>
                </NuxtLink>
                <span class="text-white text-base">Made by CampusEntri</span>
            </div>
        </nav>
        <nav ref="bottomNav" class="absolute top-0 right-0 bg-[#ff4134] w-3/4 h-full p-8">
            <div class="grid grid-cols-3 gap-8 h-full">
                <div class="col-span-2 flex items-center">
                    <ul class="menu-items">
                        <li><NuxtLink to="/" class="text-[5rem] mb-2 text-white" href="#"><span>Home</span></NuxtLink></li>
                        <li><NuxtLink to="/courses" class="text-[5rem] mb-2 text-white" href="#"><span>Course</span></NuxtLink></li>
                        <li><NuxtLink to="/colleges" class="text-[5rem] mb-2 text-white" href="#"><span>College</span></NuxtLink></li>
                        <li><NuxtLink to="/fee" class="text-[5rem] mb-2 text-white" href="#"><span>Fee Structure</span></NuxtLink></li>
                        <li><NuxtLink to="/company" class="text-[5rem] text-white" href="#"><span>Company</span></NuxtLink></li>
                    </ul>
                </div>
                <div class="flex justify-between flex-col">
                    <div class="flex justify-end">
                        <button @click="closeNavbar"
                            class="menu-button w-11 h-11 bg-white rounded-full flex justify-center items-center gap-2">
                            <span class="flex flex-col gap-2">
                                <span class="h-0.5 w-7 bg-black line-1 line"></span>
                                <span class="h-0.5 w-7 bg-black line-2 line"></span>
                            </span>
                        </button>
                    </div>
                    <ul class="menu-items">
                        <li><a class="text-3xl mb-2 text-white" href="#"><span>Careers</span></a></li>
                        <li><a class="text-3xl mb-2 text-white" href="#"><span>Resources</span></a></li>
                        <li><a class="text-3xl mb-2 text-white" href="#"><span>Contacts</span></a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        closeNavbar() {
            const topNavAnim = this.$gsap.to(this.$refs.topNav, { y: -window.innerHeight, duration: 0.5 });
            const bottomNavAnim = this.$gsap.to(this.$refs.bottomNav, { y: window.innerHeight, duration: 0.5 });
            Promise.all([topNavAnim, bottomNavAnim]).then(() => {
                this.$emit('close');
            });
        },
        animateNav() {
            this.$gsap.from(this.$refs.topNav, { y: -window.innerHeight, duration: 0.5 });
            this.$gsap.from(this.$refs.bottomNav, { y: window.innerHeight, duration: 0.5 });
        },
    },
    mounted() {
        this.animateNav();
    }
};
</script>

<style lang="scss" scoped>
.menu-items {
    li {
        position: relative;

        a {
            color: #fff;
            display: block;
            line-height: 1.1em;
            outline: none;
            position: relative;
            -webkit-text-decoration: none;
            text-decoration: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;

            &:hover:before {
                transform: scaleX(1);
            }

            &:hover {
                span {
                    transform: translateX(1em);
                }
            }

            &:before {
                display: block;
                transition: transform 1s cubic-bezier(.19, 1, .22, 1);
                will-change: transform;
                color: #fff;
                content: "—";
                left: 0;
                position: absolute;
                top: 0;
                transform: scaleX(0);
                transform-origin: left;
            }

            span {
                position: relative;
                display: block;
                transition: transform 1s cubic-bezier(.19, 1, .22, 1);
                will-change: transform;
            }
        }
    }
}
</style>