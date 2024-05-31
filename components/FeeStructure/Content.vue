<script setup>
import { get } from 'lodash';
const props = defineProps({
    courseInfo: {
        type: Object,
        default: () => {}
    }
});
</script>

<template>
    <div class="fee-wrapper">
        <div class="flex flex-col">
            <div class="mb-8 px-0 md:px-12 ">
                <h2 class="title">{{ get(courseInfo, 'course.shortName', '') }}</h2>
            </div>
            <div class="table-layout overflow-x-auto mt-6">
                <div class="inline-block overflow-hidden">
                    <table class="table-fixed min-w-full">
                        <thead>
                            <tr>
                                <th class="light">Ranked Higher The better</th>
                                <th class="light">Duration / Info</th>
                                <th v-if="courseInfo.collegesFees.some(item => item.comment)" class="light"></th>
                                <th class="blue">First Year</th>
                                <th >Second Year</th>
                                <th class="blue">Third Year</th>
                                <th >Fourth Year</th>
                                <th class="blue">Fifth Year</th>
                                <th>Total Fees</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of get(courseInfo, 'collegesFees', [])" :key="index">
                                <td class="light">{{ get(item, 'college', '') }}</td>
                                <td class="light min-w-16">{{ get(item, 'information', '') }}</td>
                                <td  v-if="courseInfo.collegesFees.some(item => item.comment)" class="light">{{ get(item, 'comment', '') }}</td>
                                <td v-if="get(item, 'fees.firstYear.girlsFee', null) ">
                                    <span class="flex items-center"><small class="sm-text">GIRLS: </small>{{ get(item, 'fees.firstYear.girlsFee', '--') }}</span>
                                    <span class="blue flex items-center"><small class="sm-text">BOYS: </small>{{ get(item, 'fees.firstYear.boysFee', '--') }}</span>
                                </td>
                                <td v-else class="blue">
                                    <span class="light sm-text" v-if="get(item, 'fees.firstYear.feeBreakdown')">{{ get(item, 'fees.firstYear.feeBreakdown', '--') }}</span>
                                    {{ get(item, 'fees.firstYear.fee', '--') }}
                                </td>
                                <td v-if="get(item, 'fees.secondYear.girlsFee', null) ">
                                    <span class="flex items-center"><small class="sm-text">GIRLS: </small>{{ get(item, 'fees.secondYear.girlsFee', '--') }}</span>
                                    <span class="blue flex items-center"><small class="sm-text">BOYS: </small>{{ get(item, 'fees.secondYear.boysFee', '--') }}</span>
                                </td>
                                <td v-else>
                                    <span class="light sm-text" v-if="get(item, 'fees.secondYear.feeBreakdown')">{{ get(item, 'fees.secondYear.feeBreakdown', '--') }}</span>
                                    {{ get(item, 'fees.secondYear.fee', '--') }}
                                </td>
                                <td v-if="get(item, 'fees.thirdYear.girlsFee', null) ">
                                    <span class="flex items-center"><small class="sm-text">GIRLS: </small>{{ get(item, 'fees.thirdYear.girlsFee', '--') }}</span>
                                    <span class="blue flex items-center"><small class="sm-text">BOYS: </small>{{ get(item, 'fees.thirdYear.boysFee', '--') }}</span>
                                </td>
                                <td v-else class="blue">
                                    <span class="light sm-text" v-if="get(item, 'fees.thirdYear.feeBreakdown')">{{ get(item, 'fees.thirdYear.feeBreakdown', '--') }}</span>
                                    {{ get(item, 'fees.thirdYear.fee', '--') }}
                                </td>
                                <td v-if="get(item, 'fees.fourthYear.girlsFee', null) ">
                                    <span class="flex items-center"><small class="sm-text">GIRLS: </small>{{ get(item, 'fees.fourthYear.girlsFee', '--') }}</span>
                                    <span class="blue flex items-center"><small class="sm-text">BOYS: </small>{{ get(item, 'fees.fourthYear.boysFee', '--') }}</span>
                                </td>
                                <td v-else>
                                    <span class="light sm-text" v-if="get(item, 'fees.fourthYear.feeBreakdown')">{{ get(item, 'fees.fourthYear.feeBreakdown', '--') }}</span>
                                    {{ get(item, 'fees.fourthYear.fee', '--') }}
                                </td>
                                <td v-if="get(item, 'fees.fifthYear.girlsFee', null) ">
                                    <span class="flex items-center"><small class="sm-text">GIRLS: </small>{{ get(item, 'fees.fifthYear.girlsFee', '--') }}</span>
                                    <span class="blue flex items-center"><small class="sm-text">BOYS: </small>{{ get(item, 'fees.fifthYear.boysFee', '--') }}</span>
                                </td>
                                <td v-else class="blue">
                                    <span class="light sm-text" v-if="get(item, 'fees.fifthYear.feeBreakdown')">{{ get(item, 'fees.fifthYear.feeBreakdown', '--') }}</span>
                                    {{ get(item, 'fees.fifthYear.fee', '--') }}
                                </td>
                                <td>
                                    {{ get(item, 'fees.totalFees', '--') }}
                                </td>
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
    padding: 8rem 2rem;

    @media screen and (max-width: 768px) {
        padding: 4rem 0rem;
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

    .sm-text {
        font-size: 8px;
    }

    tr {
        .blue {
            color: rgb(56 189 248);
        }
        .light {
            color: #909ea0;
        }
        th {
            padding: 25px 10px;
            text-align: start;

            @media screen and (max-width: 768px) {
                padding: 5px;
                font-size: 8px;
            }

            // &:first-child {
            //     color: #909ea0;
            // }
            // &:nth-child(2) {
            //     color: #909ea0;
            // }
            // &:nth-child(3) {
            //     color: rgb(56 189 248);
            // }
            // &:nth-child(5) {
            //     color: rgb(56 189 248);
            // }
            // &:nth-child(7) {
            //     color: rgb(56 189 248);
            // }
        }
        td {
            padding: 15px 10px;
            text-align: start;
            @media screen and (max-width: 768px) {
                padding: 5px 8px;
                font-size: 7px !important;
            }
            // &:first-child {
            //     color: #909ea0;
            // }
            // &:nth-child(2) {
            //     color: #909ea0;
            //     font-size: 0.675rem;
            // }
            // &:nth-child(3) {
            //     color: rgb(56 189 248);
            // }
            // &:nth-child(5) {
            //     color: rgb(56 189 248);
            // }
            // &:nth-child(7) {
            //     color: rgb(56 189 248);
            // }
        }
    }
}
</style>