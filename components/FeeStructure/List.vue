<script>
export default {
    data() {
        const items = [
            {
                title: 'MBBS',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'BDS',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Nursing',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Bachelor of Physiotherapy',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'BASLP',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Medical Imaging Technology',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Anestheia & OT Technology',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Renal Dialysis',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Radiology',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Optometry',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Respiratory Therapy',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Occupational Therapy',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Perfusion Technology',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Cardio Vascular Technology',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Cardiac Care Technology',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Emergency Medicine',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'MLT',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Neuro Science',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Food Nutrition & Dietetics',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Microbiology',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Emergency & Trauma Care',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'B.Pharm',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
            {
                title: 'Pharma D',
                svg: '<svg xml:space="preserve" viewBox="0 0 200 200" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="Layer_1" version="1.1"><style>.st0{fill:none;stroke:#2c2c2c;stroke-width:1.9;stroke-miterlimit:10}</style><path d="M92.2 68.1h48.9M162.7 71.9c-4.9 4-20.6 18.5-20.6 30.2 0 12.2 9.5 15.4 13.7 15.4 4.2 0 13.7-3.3 13.7-15.4 0-11.7-16.9-28.3-21.8-32.3L65.5 152c-7.9 7.9-20.8 7.9-28.7 0-7.9-7.9-7.9-20.8 0-28.7L119 41.2" class="st0"></path></svg>'
            },
        ]
        return {
            items
        }
    },
    methods: {
        openModal() {
            this.$emit('open-modal');
        }
    },
    mounted() {
        const tl = this.$gsap.timeline({
            scrollTrigger: {
                trigger: '#fee-strutures',
                start: 'top center',
                end: 'bottom center',
                toggleActions: "play none none reverse",
            }
        });
        tl.from('.fee-title', {
            opacity: 0,
            y: 20,
            duration: 0.2,
        });
        this.items.forEach((item, index) => {
            const delay = index * 0.01; // Adjust the delay for each item

            tl.from(`.fee-items:nth-child(${index + 1})`, {
                opacity: 0,
                y: 20,
                duration: 0.1,
                delay,
            });
        });
    }
}
</script>

<template>
    <div>
        <div id="fee-strutures" class="item-list-wrapper">
            <div class="px-3 md:px-6">
                <div class="px-3">
                    <div class="px-0 md:px-24">
                        <div class="px-8 py-4 border-black border-t-2 border-b-2 mb-16">
                            <h2 class="fee-title">Fee Structure</h2>
                        </div>
                    </div>
                    <ul class="items-list">
                        <li v-for="(item, index) of items" :key="index" class="item fee-items leave-top">
                            <span class="bottom-line"></span>
                            <span class="inner-list">
                                <div class="item-row">
                                    <div
                                        class="left-col relative flex justify-start md:justify-center items-start self-stretch w-[18.75%] px-0 md:px-3">
                                        <div class="order-number-wrapper">
                                            <span class="index">0{{ index + 1 }}</span>
                                        </div>
                                    </div>
                                    <div class="middle-col px-1 md:px-3 w-[68.5%] md:w-[62.5%]">
                                        <h2 class="title">{{ item.title }}</h2>
                                        <div class="read-more">
                                            <!-- <NuxtLink to="/fee/mbbs"> -->
                                            <button @click="openModal"
                                                class="read-more-btn big-size black-color" data-v-a2720cde="">
                                                <div class="inner" data-v-a2720cde="">
                                                    <span class="icon arrow-right" data-v-a2720cde="">
                                                        <span class="icon-container arrow-right-icon-container"
                                                            data-v-a2720cde="">
                                                            <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="arrow-right-icon shadow-icon" data-v-a2720cde="">
                                                                <path d="M1.19922 4.82703L9.23616 4.82703"
                                                                    stroke="#2C2C2C" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-v-a2720cde=""></path>
                                                                <path
                                                                    d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
                                                                    stroke="#2C2C2C" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-v-a2720cde=""></path>
                                                            </svg>
                                                            <svg width="11" height="10" viewBox="0 0 11 10" fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                class="arrow-right-icon" data-v-a2720cde="">
                                                                <path d="M1.19922 4.82703L9.23616 4.82703"
                                                                    stroke="#2C2C2C" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-v-a2720cde=""></path>
                                                                <path
                                                                    d="M5.73438 8.8457L9.37779 4.89867L5.73437 1.25526"
                                                                    stroke="#2C2C2C" stroke-width="1.5"
                                                                    stroke-linecap="round" stroke-linejoin="round"
                                                                    data-v-a2720cde=""></path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                    <span class="label-sizer" data-v-a2720cde="">More</span>
                                                </div>
                                            </button>
                                            <!-- </NuxtLink> -->
                                        </div>
                                    </div>
                                    <div class="right-col relative flex justify-center items-center px-3 md:w-[18.75%]">
                                        <span class="icon-svg" v-html="item.svg">
                                        </span>
                                    </div>
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.item-list-wrapper {
    margin-bottom: 3.125rem;

    .fee-title {
        font-size: 3.75rem;
        color: #2c2c2c;
        font-family: 'Aeonik-Medium';
        letter-spacing: -.02em;
        line-height: 1.1em;
        margin-bottom: 8px;
        position: relative;
        text-transform: uppercase;

        @media screen and (max-width: 786px) {
            font-size: 2.5rem;
        }
    }

    .items-list {
        .item {
            margin: 0;
            position: relative;

            &:hover {
                .inner-list {
                    &:before {
                        transform: scaleY(1);
                    }

                    .item-row {
                        .left-col {
                            .order-number-wrapper {
                                &:before {
                                    border-color: #fff;
                                }

                                .index {
                                    color: #fff;
                                }
                            }
                        }

                        .middle-col {
                            .title {
                                color: #fff;
                            }

                            .read-more {
                                .read-more-btn {
                                    .inner {
                                        transform: scale(1.15);

                                        &:before {
                                            background-color: #fff;
                                        }

                                        .icon {
                                            background-color: #2c2c2c;

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

                                        .label-sizer {
                                            color: #2c2c2c;
                                        }
                                    }

                                }
                            }
                        }

                        .right-col {
                            .icon-svg {
                                svg {
                                    path {
                                        stroke: #fff;
                                    }
                                }
                            }
                        }
                    }

                }
            }

            &:before {
                content: "";
                height: 100%;
                left: 0;
                pointer-events: none;
                position: absolute;
                top: 0;
                width: 100%;
            }

            .bottom-line {
                background-color: hsla(188, 8%, 60%, .3);
                bottom: 0;
                height: 1.5px;
                left: 0;
                position: absolute;
                transform-origin: center;
                width: 100%;
            }

            .inner-list {
                padding-bottom: 4.0625rem;
                padding-top: 4.0625rem;
                cursor: pointer;
                display: block;
                position: relative;

                &:before {
                    background-color: #2c2c2c;
                    content: "";
                    height: 100%;
                    left: 0;
                    pointer-events: none;
                    position: absolute;
                    top: 0;
                    transform: scaleY(0);
                    transform-origin: bottom;
                    transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                    width: 100%;
                }

                .item-row {
                    display: flex;
                    margin-left: -.75rem;
                    margin-right: -.75rem;

                    .left-col {
                        .order-number-wrapper {
                            align-items: center;
                            border-radius: 34px;
                            display: flex;
                            height: 34px;
                            justify-content: center;
                            position: relative;
                            width: 34px;
                            left: 20px;
                            top: 11px;

                            &:before {
                                border: 1px solid #2c2c2c;
                                border-radius: 34px;
                                content: "";
                                height: 100%;
                                left: 0;
                                position: absolute;
                                top: 0;
                                transition: background-color .5s cubic-bezier(.19, 1, .22, 1), transform .5s cubic-bezier(.19, 1, .22, 1);
                                width: 100%;
                                will-change: transform;
                            }

                            .index {
                                color: #2c2c2c;
                                font-family: 'Aeonik-Medium';
                                font-size: .85rem;
                                letter-spacing: .02em;
                                line-height: 1em;
                                position: relative;
                                transition: color .5s cubic-bezier(.19, 1, .22, 1);
                            }
                        }
                    }

                    .middle-col {
                        .title {
                            font-size: 3.75rem;
                            color: #2c2c2c;
                            font-family: 'Aeonik-Medium';
                            letter-spacing: -.02em;
                            line-height: 1.1em;
                            margin-bottom: 8px;
                            position: relative;
                            text-transform: uppercase;

                            @media screen and (max-width: 786px) {
                                font-size: 30px;
                            }
                        }

                        .read-more {
                            .read-more-btn {
                                cursor: pointer;
                                position: relative;
                                transition: transform .5s cubic-bezier(.19, 1, .22, 1);

                                &:active {
                                    transform: scale(.9);
                                }

                                // &:hover {
                                //     .inner {
                                //         transform: scale(1.15);

                                //         .icon {
                                //             &:before {
                                //                 opacity: 1;
                                //                 transform: scale(1);
                                //             }
                                //         }

                                //         .arrow-right-icon-container {
                                //             .shadow-icon {
                                //                 opacity: 1 !important;
                                //                 transform: translate(0) !important;
                                //             }

                                //             svg {
                                //                 path {
                                //                     stroke: #fff;
                                //                 }
                                //             }

                                //             .arrow-right-icon {
                                //                 opacity: 0;
                                //                 transform: translate(30px);
                                //             }
                                //         }
                                //     }

                                // }

                                .inner {
                                    height: 3.5rem;
                                    border-radius: 60px;
                                    align-items: center;
                                    border: 1px solid transparent;
                                    display: flex;
                                    position: relative;
                                    transition: transform .5s cubic-bezier(.19, 1, .22, 1);
                                    will-change: transform;

                                    @media screen and (max-width: 786px) {
                                        height: 2.5rem;
                                    }

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
                                        height: 2.125rem;
                                        width: 2.125rem;
                                        border-radius: 50px;
                                        margin-left: 11px;
                                        align-items: center;
                                        background-color: #fff;
                                        display: flex;
                                        justify-content: center;
                                        overflow: hidden;
                                        position: relative;

                                        @media screen and (max-width: 786px) {
                                            height: 1.9rem;
                                            margin-left: 8px;
                                        }

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

                                    @media screen and (max-width: 786px) {
                                        padding: 0 1rem 0 1rem;
                                    }
                                }
                            }
                        }
                    }

                    .right-col {
                        .icon-svg {
                            height: 8.2352941176vw;
                            position: relative;
                            width: 8.2352941176vw;

                            @media screen and (max-width: 786px) {
                                left: -10px;
                                transform: scale(2.8);
                            }

                            svg {
                                display: block !important;
                                overflow: visible;

                                .st0 {
                                    fill: none;
                                    stroke: #2c2c2c;
                                    stroke-width: 1.9;
                                    stroke-miterlimit: 10;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>