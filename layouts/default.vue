<script>
export default {
    data() {
        return {
            isModalOpen: false
        }
    },
    methods: {
        openModal() {
            this.$emit('open-contact-modal');
            this.isModalOpen = true;
        },
        closeModal() {
            this.isModalOpen = false;
        }
    },
    mounted() {
        const route = useRoute();
        const user = localStorage.getItem('user');
        const parsedUser = JSON.parse(user);
        if (!parsedUser) {
            if (route.fullPath === '/') {
                this.openModal();
            } else {
                watch(() => route.fullPath, () => {
                    this.openModal();
                });
            }
        }
    },
}
</script>

<template>
    <div>
        <Header />
        <!-- <HeaderSecondary /> -->
        <slot />
        <ContactForm :is-open="isModalOpen" @close-contact-modal="closeModal" />
    </div>
</template>