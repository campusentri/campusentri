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
                                <th class="blue">First Year</th>
                                <th >Second Year</th>
                                <th class="blue">Third Year</th>
                                <th >Fourth Year</th>
                                <th class="blue">Fifth Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) of get(courseInfo, 'collegesFees', [])" :key="index">
                                <td class="light">{{ get(item, 'college', '') }}</td>
                                <td class="light min-w-16">{{ get(item, 'information', '') }}</td>
                                <td class="blue">{{ get(item, 'fees.firstYear', '--') }}</td>
                                <td >{{ get(item, 'fees.secondYear', '--') }}</td>
                                <td class="blue">{{ get(item, 'fees.thirdYear', '--') }}</td>
                                <td >{{ get(item, 'fees.fourthYear', '--') }}</td>
                                <td class="blue">{{ get(item, 'fees.fifthYear', '--') }}</td>
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

    tr {
        th {
            padding: 25px 10px;
            text-align: start;

            @media screen and (max-width: 768px) {
                padding: 5px;
                font-size: 8px;
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
                font-size: 7px !important;
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