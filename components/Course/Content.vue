<script setup>
const articles = [
    {
        title: 'CO',
        fullForm: 'Career Oppurtunities',
        description: 'Completion of MBBS opens up various career Oppurtunities in the field of medicine:'
    },
    {
        title: 'CF',
        fullForm: 'Course Fee',
        description: 'The total cost of the MBBS program varies based upon factors such as institution, location and amenities. Government medical colleges have lower tuition fees compared to private ones.'
    },
]
</script>

<template>
    <div class="course-wrapper">
        <header>
            <div class="title-container">
                <div class="w-[87.5%] ml-[6.25%] px-3">
                    <h1 class="title border-t-2 border-b-2 border-black">MBBS</h1>
                </div>
            </div>
        </header>
        <main>
            <div class="page-builder">
                <article class="page-block">
                    <section class="image-block-wrapper grid-inner">
                        <div class="flex flex-col md:flex-row px-8">
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div>
                                    <h2>MBBS is a professional undergraduate degree awarded to individuals upon completion of medical school.</h2>
                                    <p class="text-center">The program is designed to train students in the theoretical and practical aspects of medicine, preparing them for a career as medical practitioners. It covers wide range of subjects including anatomy, physiology, biochemistry, pathology, pharmacology, microbiology and clinical training.</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div class="image-container">
                                    <img src="/images/courses/mbbs.webp" />
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <article class="page-block">
                    <section class="text-block-wrapper">
                        <div class="flex flex-col md:flex-row px-8">
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div>
                                    <h2 class="title">Duration</h2>
                                    <p>The duration of MBBS course typically spands five and half to six years , including both academic study and clinical rotations. The first few years focus on foundational sciences and pre-clinical studies, followed by clinical rotations in various specialities during later years.</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div>
                                    <h2 class="title">Eligibility Criteria</h2>
                                    <p class="sm-text text-center">Admission requirements generally include completion of 10+2 or equivalent with Physics , Chemistry, Biology and English. Entrance exams like NEET-UG are mandatory in many countries and canditates must meet age criteria, nationality requirements and language proficiency. </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <article class="page-block">
                    <section class="text-block-wrapper">
                        <div class="flex flex-col md:flex-row px-8">
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div>
                                    <h2 class="title">Affiliation/Accreditation</h2>
                                    <p class="sm-text  text-center">Medical colleges offering MBBS programs are affiliated with or accreditated by regulatory bodies such as the Medical Council of India (MCI). Accreditation ensures that graduates meet the standards necessary for medical purposes.</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div>
                                    <h2 class="title">Curriculum</h2>
                                    <p class="sm-text text-center">The MBBS curriculum is structured to provide a comprehensive understanding of medical sciences such as anatomy, physiology, biochemistry, pathology, pharmacology, microbiology, forensic medicine, community medicine and clinical rotations in various specialities such as internal medicine, surgery and more.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <article class="page-block">
                    <section class="text-block-wrapper">
                        <div class="flex flex-col md:flex-row px-8">
                            <div class="w-full flex">
                                <div class="w-[13.5%] px-3">
                                    <div class="order-number-wrapper">
                                        <span class="index">01</span>
                                    </div>
                                </div>
                                <div class="w-[87.5%] px-3">
                                    <div>
                                        <div class="flex gap-5">
                                            <h2 class="title">CO</h2>
                                            <span class="full-form">Career Oppurtunities</span>
                                        </div>
                                        <div class="text-wrap">
                                            <p class="sm-text mb-0">Completion of MBBS opens up various career Oppurtunities in the field of medicine: </p>
                                            <p class="sm-text">- General Physician</p>
                                            <p class="sm-text">- Surgeon</p>
                                            <p class="sm-text">- Medical Researcher</p>
                                            <p class="sm-text">- Public health professional</p>
                                            <p class="sm-text">- Medical education</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex">
                                <div class="w-[13.5%] px-3 ml-0 md:ml-[6.25%]">
                                    <div class="order-number-wrapper">
                                        <span class="index">02</span>
                                    </div>
                                </div>
                                <div class="w-[87.5%] px-3">
                                    <div>
                                        <div class="flex gap-5">
                                            <h2 class="title">CF</h2>
                                            <span class="full-form">Course Fee</span>
                                        </div>
                                        <p class="sm-text">The total cost of the MBBS program varies based upon factors such as institution, location and amenities. Government medical colleges have lower tuition fees compared to private ones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <article class="page-block">
                    <section class="text-block-wrapper">
                        <div class="flex flex-col md:flex-row px-8">
                            <div class="w-full flex">
                                <div class="w-[13.5%] px-3">
                                    <div class="order-number-wrapper">
                                        <span class="index">03</span>
                                    </div>
                                </div>
                                <div class="w-[87.5%] px-3">
                                    <div>
                                        <div class="flex gap-5">
                                            <h2 class="title">AP</h2>
                                            <span class="full-form">Admission Process</span>
                                        </div>
                                        <p class="sm-text">The total cost of the MBBS program varies based upon factors such as institution, location and amenities. Government medical colleges have lower tuition fees compared to private ones.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex">
                                <div class="w-[13.5%] px-3 ml-0 md:ml-[6.25%]">
                                    <div class="order-number-wrapper">
                                        <span class="index">04</span>
                                    </div>
                                </div>
                                <div class="w-[87.5%] px-3">
                                    <div>
                                        <div class="flex gap-5">
                                            <h2 class="title">FI</h2>
                                            <span class="full-form">Faculty Information</span>
                                        </div>
                                        <p class="sm-text">The total cost of the MBBS program varies based upon factors such as institution, location and amenities. Government medical colleges have lower tuition fees compared to private ones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <article class="page-block">
                    <section class="text-block-wrapper">
                        <div class="flex flex-col md:flex-row px-8">
                            <div class="w-full flex">
                                <div class="w-[13.5%] px-3">
                                    <div class="order-number-wrapper">
                                        <span class="index">05</span>
                                    </div>
                                </div>
                                <div class="w-[87.5%] px-3">
                                    <div>
                                        <div class="flex gap-5">
                                            <h2 class="title">IF</h2>
                                            <span class="full-form">Infrastructure & Facilities</span>
                                        </div>
                                        <p class="sm-text">The total cost of the MBBS program varies based upon factors such as institution, location and amenities. Government medical colleges have lower tuition fees compared to private ones.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full flex">
                                <div class="w-[13.5%] px-3 ml-0 md:ml-[6.25%]">
                                    <div class="order-number-wrapper">
                                        <span class="index">06</span>
                                    </div>
                                </div>
                                <div class="w-[87.5%] px-3">
                                    <div>
                                        <div class="flex gap-5">
                                            <h2 class="title">IS-PT</h2>
                                            <span class="full-form">Internship/Practical Training</span>
                                        </div>
                                        <p class="sm-text">The total cost of the MBBS program varies based upon factors such as institution, location and amenities. Government medical colleges have lower tuition fees compared to private ones.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <article class="page-block">
                    <section class="image-block-wrapper grid-inner">
                        <div class="px-8 flex flex-col md:flex-row gap-6">
                            <div class="order-number-wrapper">
                                <span class="index">07</span>
                            </div>
                            <h2>Quality</h2>
                        </div>
                        <div class="flex px-8 flex-col md:flex-row-reverse">
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div>
                                    <p  class="text-center">The program is designed to train students in the theoretical and practical aspects of medicine, preparing them for a career as medical practitioners. It covers wide range of subjects including anatomy, physiology, biochemistry, pathology, pharmacology, microbiology and clinical training.</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div class="image-container">
                                    <img src="/images/courses/mbbs-2.webp" />
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <article class="page-block">
                    <section class="text-block-wrapper">
                        <div class="flex flex-col md:flex-row px-8">
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div>
                                    <h2 class="title text-center">Contact Information</h2>
                                    <p  class="text-center">For specific inquiries or free consultations, students can contact our respective academic counselor or mail us to info@campusentri.com</p>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 my-2 md:my-0 px-3 ml-0 md:ml-[6.25%]">
                                <div>
                                    <h2 class="title text-center">Certification</h2>
                                    <p class="sm-text text-center">Admission requirements generally include completion of 10+2 or equivalent with Physics , Chemistry, Biology and English. Entrance exams like NEET-UG are mandatory in many countries and canditates must meet age criteria, nationality requirements and language proficiency. </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.course-wrapper {
    display: block;
    min-height: calc(100% - 40px);
    left: 20px;
    position: absolute;
    top: 20px;
    width: calc(100% - 40px);
    padding: 3.5rem 0rem;

.order-number-wrapper {
    align-items: center;
    border-radius: 34px;
    display: flex;
    height: 34px;
    justify-content: center;
    position: relative;
    width: 34px;

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

    span {
        color: #2c2c2c;
        font-family: 'Aeonik-Medium';
        font-size: .875rem;
        letter-spacing: .02em;
        line-height: 1em;
        position: relative;
        transition: color .5s cubic-bezier(.19, 1, .22, 1);
    }
}

    header {
        // padding-top: 155px;

        .title {
            color: #2c2c2c;
            font-family: 'Aeonik-Medium';
            font-size: calc(1.5625rem + 2.91667vw);
            letter-spacing: -.02em;
            line-height: 1.1em;
            padding: 1.25rem 0;
            position: relative;
            text-transform: uppercase;
        }
    }

    .page-builder {
        .page-block {
            @media screen and (max-width: 960px) {
                margin: 10px 0;
            }
            .image-block-wrapper {
                padding: calc(1.48438rem + 2.1875vw) 0;
                position: relative;

                h2 {
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    font-size: calc(1.35938rem + 1.02083vw);
                    line-height: 1.1em;
                    margin-bottom: calc(1.28906rem + .36458vw);
                    position: relative;
                }

                p {
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    font-size: 1.125rem;
                    line-height: 1.6em;
                    margin-bottom: calc(1.34375rem + .875vw);
                }
                .image-container {
                    border-radius: 20px;
                    margin-bottom: calc(1.5625rem + 2.91667vw);
                    overflow: hidden;
                    position: relative;
                    width: calc(100% + 10px);
                }
            }

            .text-block-wrapper {
                padding: calc(1.48438rem + 2.1875vw) 0;
                position: relative;

                h2 {
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    font-size: calc(1.5625rem + 2.91667vw);
                    line-height: 1.1em;
                    margin-bottom: calc(1.28906rem + .36458vw);
                    position: relative;
                }

                .full-form {
                    margin-top: calc(1.28906rem + .36458vw);
                    @media screen and (max-width: 960px) {
                        margin-top: 10px;
                    }
                }

                .text-wrap {
                    p {
                        margin-bottom: 0;
                    }
                }

                p {
                    color: #2c2c2c;
                    font-family: 'Aeonik-Regular';
                    font-size: calc(1.32813rem + .12917vw);
                    line-height: 1.1em;
                    margin-bottom: calc(1.34375rem + .875vw);
                }

                .sm-text {
                    font-size: 1.125rem;
                    line-height: 1.6em;
                }
            }
        }
    }
}
</style>