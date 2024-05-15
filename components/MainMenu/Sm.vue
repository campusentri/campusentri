<template>
    <div ref="nav" class="fixed top-0 left-0 bg-[#ff4134] p-8 w-full h-full z-[1000]">
        <div class="absolute top-0 left-0 w-full h-full" @click="closeNavbar"></div>
        <nav>
            <div class="flex justify-between">
                <NuxtLink to="/">
                    <div class="flex flex-grow-0 items-center logo">
                        <img src="@/assets/imgs/logo-2.png" alt="Logo" class="h-full ml-0 md:ml-2" />
                    </div>
                </NuxtLink>
                <div class="flex-grow flex justify-end">
                    <button @click="closeNavbar"
                        class="menu-button w-11 h-11 bg-white rounded-full flex justify-center items-center gap-2">
                        <span class="flex flex-col gap-2">
                            <span class="h-0.5 w-7 bg-black line-1 line"></span>
                            <span class="h-0.5 w-7 bg-black line-2 line"></span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
        <nav class="flex justify-center flex-col h-full px-16">
            <ul class="menu-items">
                <li><NuxtLink to="/" class="main-links mb-1 text-white"><span>Home</span></NuxtLink></li>
                <li><NuxtLink to="/courses" class="main-links mb-1 text-white"><span>Course</span></NuxtLink></li>
                <li><NuxtLink to="/colleges" class="main-links mb-1 text-white"><span>College</span></NuxtLink></li>
                <li><NuxtLink to="/fee" class="main-links mb-1 text-white"><span>Fees</span></NuxtLink></li>
                <li><NuxtLink to="/company" class="main-links text-white"><span>Company</span></NuxtLink></li>
                <li><NuxtLink to="/services" class="main-links text-white"><span>Services</span></NuxtLink></li>
            </ul>
            <ul class="menu-items mt-12">
                <li><NuxtLink class="other-links mb-2 text-white" to="/company#careers"><span>Careers</span></NuxtLink></li>
                <li><NuxtLink class="other-links mb-2 text-white" to="/blogs"><span>Resources</span></NuxtLink></li>
                <li><NuxtLink class="other-links mb-2 text-white" to="/colleges#promo"><span>Contacts</span></NuxtLink></li>
                <li><NuxtLink class="other-links mb-2 text-white" to="/privacyPolicy"><span>Privacy Policy</span></NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    methods: {
        closeNavbar() {
            const bottomNavAnim = this.$gsap.to(this.$refs.nav, { y: window.innerHeight, duration: 0.5 });
            Promise.all([bottomNavAnim]).then(() => {
                this.$emit('close');
            });
        },
        animateNav() {
            this.$refs.nav.classList.add('transition-transform', 'translate-y-full');
            
            this.$refs.nav.classList.remove('translate-y-full');
            // setTimeout(() => {
            // }, 0);
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
        .main-links {
            font-size: calc(1.71875rem + 4.375vw);
        }
        .other-links {
            font-size: calc(1.40625rem + 1.45833vw)
        }

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
.translate-y-full {
    transform: translateY(-100%);
}
</style>