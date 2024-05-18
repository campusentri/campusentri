<script>
export default {
    data() {
        return {
            isModalOpen: false,
        };
    },
    watch: {
        '$route'() {
            const user = localStorage?.getItem('user');
            const parsedUser = JSON.parse(user);

            if (!parsedUser) {
                setTimeout(()=> {
                    this.isModalOpen = true;
                    this.$emit('open-contact-modal');
                }, 30000);
            } else {
                this.$emit('close-contact-modal');
                this.isModalOpen = false;
            }
        }
    },
    methods: {
        closeModal() {
            this.isModalOpen = false;
            this.$emit('close-contact-modal');
        },
    },
};
</script>

<template>
    <div>
        <Header />
        <!-- <HeaderSecondary /> -->
        <slot />
        <ContactForm :is-open="isModalOpen" @close-contact-modal="closeModal" />
    </div>
</template>