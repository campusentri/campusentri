<script setup>
const items = [
    {
        college: 'NITTE',
        info: 'The MBBS program at NITTE spans five and a half years, including a one-year rotating internship',
        firstYear: '17,64,500',
        secondYear: '17,58,500',
        thirdYear: '17,58,500',
        fifthYear: '17,58,500',
        sixthYear: '8,79,000',
    },
    {
        college: 'Srinivas College',
        info: 'The MBBS program at Srinivas spans five and a half years, including a one-year rotating internship',
        firstYear: '22,00,000',
        secondYear: '22,00,000',
        thirdYear: '22,00,000',
        fifthYear: '22,00,000',
        sixthYear: '12,00,000',
    },
    {
        college: 'Yenepoya Institute ',
        info: 'The MBBS program at Yenepoya spans five and a half years, including a one-year rotating internship',
        firstYear: '6,40,000',
        secondYear: '6,47,000',
        thirdYear: '6,54,000',
        fifthYear: '6,62,000',
        sixthYear: '6,54,000',
    },
    {
        college: 'Father Muller',
        info: 'The MBBS program at Father Muller spans five and a half years, including a one-year rotating internship',
    },
    {
        college: 'AJ Institute',
        info: 'The MBBS program at AJ Institute spans five and a half years, including a one-year rotating internship',
    },
]
</script>

<template>
    <div class="fee-wrapper">
        <div class="flex px-0 md:px-12 flex-col">
            <div class="mb-8">
                <h2 class="title">MBBS</h2>
            </div>
            <div class="table-layout overflow-x-auto mt-6">
                <div class="inline-block overflow-hidden">
                    <table class="table-auto min-w-full">
                        <thead>
                            <tr>
                                <th class="light">Ranked Higher The better</th>
                                <th class="light">Duration / Info</th>
                                <th class="blue">First Year</th>
                                <th>Second Year</th>
                                <th class="blue">Third Year</th>
                                <th>Fourth Year</th>
                                <th class="blue">Fifth Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of items" :key="index">
                                <td class="light">{{ item.college }}</td>
                                <td class="light">{{ item.info }}</td>
                                <td class="blue">{{ item.firstYear ? item.firstYear : '--' }}</td>
                                <td>{{ item.secondYear ? item.secondYear : '--' }}</td>
                                <td class="blue">{{ item.thirdYear ? item.thirdYear : '--' }}</td>
                                <td>{{ item.fifthYear ? item.fifthYear : '--' }}</td>
                                <td class="blue">{{ item.sixthYear ? item.sixthYear : '--' }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.fee-wrapper {
    display: block;
    min-height: calc(100% - 40px);
    left: 20px;
    position: absolute;
    top: 40px;
    width: calc(100% - 40px);
    padding: 8rem 3rem;

    @media screen and (max-width: 768px) {
        padding: 4rem 0.5rem;
        top: 50px;
    }

    .title {
        font-size: 3.75rem;
        color: #2c2c2c;
        font-family: 'Aeonik-Medium';
        letter-spacing: -.02em;
        line-height: 1.1em;
        margin-bottom: 8px;
        position: relative;
        text-transform: uppercase;
        @media screen and (max-width: 768px) {
            font-size: 3rem;
        }
    }

    tr {
        th {
            padding: 25px 10px;
            text-align: start;

            @media screen and (max-width: 768px) {
                padding: 5px;
            }

            &:first-child {
                color: #909ea0;
            }
            &:nth-child(2) {
                color: #909ea0;
            }
            &:nth-child(3) {
                color: rgb(56 189 248);
            }
            &:nth-child(5) {
                color: rgb(56 189 248);
            }
            &:nth-child(7) {
                color: rgb(56 189 248);
            }
        }
        td {
            padding: 15px 10px;
            text-align: start;
            @media screen and (max-width: 768px) {
                padding: 5px 8px;
            }
            &:first-child {
                color: #909ea0;
            }
            &:nth-child(2) {
                color: #909ea0;
                font-size: 0.675rem;
            }
            &:nth-child(3) {
                color: rgb(56 189 248);
            }
            &:nth-child(5) {
                color: rgb(56 189 248);
            }
            &:nth-child(7) {
                color: rgb(56 189 248);
            }
        }
    }
}
</style>