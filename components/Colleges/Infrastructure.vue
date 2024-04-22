<template>
    <div class="infrastructure-block-wrapper">
        <div class="flex px-8">
            <div class="w-full md:w-[31.25%] ml-0 md:ml-[6.25%] px-3 mb-8 md:mb-0">
                <h2 class="title">Infrastructure</h2>
            </div>
        </div>
        <div class="history-item item-0">
            <div class="inner">
                <img src="/images/colleges/infrastructure-2.png" />
                <span class="label-title">Clinical Facilities</span>
                <span class="description">LMCP enjoys access to cutting-edge clinical amenities
                    provided by the 750-bed A J Hospital, affiliated with
                    the medical college managed by the Trust. This
                    hospital offers both outpatient and inpatient services.
                    Within our college premises, a fully equipped clinic
                    operates throughout the day, providing services from
                    morning to evening. During their clinical training, all
                    students are stationed at the Advanced Clinic located
                    within the hospital, ensuring excellent exposure and
                    training in utilizing the latest advanced equipment.
                    Faculty members closely monitor and supervise
                    students in the clinical areas.</span>
            </div>
        </div>
        <div class="history-item item-1">
            <div class="inner">
                <span class="label-title">Library</span>
                <span class="description">The college boasts an extensive library housing the
                    latest editions of medical and relevant books,
                    subscriptions to professional and popular periodicals,
                    journals, and internet facilities. With a direct link to the
                    Rajiv Gandhi University Consortium (Helinet) and
                    access to online journals, the library currently holds
                    around 3,000 books for student and teacher use. Open
                    until late in the evening, the library provides a
                    conducive environment for academic pursuits.</span>
            </div>
        </div>
        <div class="history-item item-2">
            <div class="inner">
                <img src="/images/colleges/infrastructure-3.png" />
                <span class="label-title">Audio-Visual Library</span>
                <span class="description">The college boasts an extensive library housing the
                    latest editions of medical and relevant books,
                    subscriptions to professional and popular periodicals,
                    journals, and internet facilities. With a direct link to the
                    Rajiv Gandhi University Consortium (Helinet) and
                    access to online journals, the library currently holds
                    around 3,000 books for student and teacher use. Open
                    until late in the evening, the library provides a
                    conducive environment for academic pursuits.</span>
            </div>
        </div>
        <div class="history-item item-3">
            <div class="inner">
                <img src="/images/colleges/infrastructure-4.png" />
                <span class="label-title">Gymnasium</span>
                <span class="description">The college gymnasium is designed to enhance both
                    the physical and mental well-being of students
                    through sports physiotherapy. Expert trainers provide
                    specialized guidance, with a focus on active sports
                    participation.</span>
            </div>
        </div>
        <div class="history-item item-4">
            <div class="inner">
                <span class="label-title">Conveyance</span>
                <span class="description">The college maintains a fleet of buses, facilitating
                    transport for students to attend classes, clinics,
                    libraries, and return to hostels. The college bus is also
                    available for inter-college sports, cultural events, and
                    academic activities.</span>
            </div>
        </div>
        <div class="history-item item-5">
            <div class="inner">
                <img src="/images/colleges/infrastructure-2.png" />
                <span class="label-title">Medical Care</span>
                <span class="description">In case of illness, students receive treatment at A. J.
                    Hospital and Research Institute under the Medicare
                    scheme. Insurance coverage is provided for accidents
                    calamities, and serious injuries causing physical
                    disabilities. Immunization, particularly Hepatitis B
                    vaccination, is administered, and precautions for
                    controlling cross-infection are emphasized.</span>
            </div>
        </div>
        <div class="history-item item-6">
            <div class="inner">
                <img src="/images/services/pillar-3.png" />
                <span class="label-title">Student Support and Extra-Curricular activity</span>
                <span class="description">Various clubs, including Sports, Cultural, Multimedia
                    and Magazine clubs, are established to promote
                    sports, games, and cultural activities. The Student
                    Welfare Cell addresses the psychological and other
                    needs of students.</span>
            </div>
        </div>
        <div class="history-item item-7">
            <div class="inner">
                <span class="label-title">Cafeteria</span>
                <span class="description">Adjacent to the college campus, a canteen and post
                    office are available, along with essential facilities like
                    banks, ATMs, and shopping centers nearby.</span>
            </div>
        </div>
        <div class="history-item item-8">
            <div class="inner">
                <img src="/images/services/service-7.png" />
                <span class="label-title">Hostels</span>
                <span class="description">Staying in hostels is encouraged, especially for first-
                    year students. From the second year onward, students
                    opting for alternative living arrangements must
                    provide consent from parents. Smoking and alcohol
                    consumption are strictly prohibited in campus and
                    hostels.</span>
            </div>
        </div>
        <div class="history-item item-9">
            <div class="inner">
                <img src="/images/colleges/infrastructure-4.png" />
                <span class="label-title">AJ Hospital</span>
                <span class="description">The 750-bed AJ Hospital, fully affiliated with the
                    institute, offers advanced facilities across various
                    medical specialties. Special rooms, evening clinics,
                    health check-up plans, and tie-ups with insurance
                    agencies for cashless medical services enhance
                    patient care. The hospital provides a comprehensive
                    range of healthcare services, including primary,
                    secondary, and tertiary care, as well as specialized
                    treatments and surgeries at affordable costs.</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.infrastructure-block-wrapper {
    background-color: #2c2c2c;
    padding: calc(2.65625rem + 6.125vw) 0;
    margin-bottom: 50px;
    position: relative;

    .title {
        white-space: normal;
        color: #fff;
        margin-top: 1.25rem;
        font-size: calc(1.60156rem + 3.28125vw);
        font-family: 'Aeonik-Regular';
        letter-spacing: -.01em;
        line-height: 1.2em;
    }

    .history-item {
        margin: calc(1.40625rem + 1.45833vw) calc(1.48438rem + 0.1875vw);
        position: relative;

        .inner {
            position: relative;
            width: 35%;
            @media screen and (max-width: 768px) {
                width: 75%;
            }
        }
    }

    .label-title {
        font-size: calc(1.53125rem + 2.29167vw);
        color: #ff4134;
        display: block;
        font-family: 'Aeonik-Regular';
        letter-spacing: -.02em;
        line-height: 1em;
        position: relative;

        &:before {
            background-color: #ff4134;
            content: "";
            display: block;
            height: 1px;
            width: 100%;
        }
    }

    .description {
        font-size: 1rem;
        color: #909ea0;
        display: inline-block;
        font-family: 'Aeonik-Regular';
        line-height: 1.4em;
        position: relative;
        z-index: 10;
    }

    .item-0 {
        margin-top: 0;

        .inner {
            margin-left: 50%;

            img {
                position: absolute;
                right: -50%;
                top: 0;
                width: 480px;
            }
            @media screen and (max-width: 768px) {
                margin-left: 25%;
                img {
                    right: 0;
                    width: 400px;
                }
            }
        }
    }

    .item-1 {
        .inner {
            margin-left: 12.5%;
        }
    }

    .item-2 {
        .inner {
            margin-left: 60%;

            img {
                left: -70%;
                position: absolute;
                top: -10%;
                width: 21.1764705882vw;
            }
            @media screen and (max-width: 768px) {
                margin-left: 30%;
                img {
                    left: -20%;
                    top: 0;
                }
            }
        }
    }

    .item-3 {
        .inner {
            margin-bottom: calc(1.71875rem + 4.375vw);
            margin-left: 17.5%;
            margin-top: calc(1.71875rem + 4.375vw);

            img {
                left: -5.375vw;
                max-width: none;
                position: absolute;
                top: -40%;
                width: 31.25vw;
            }
            @media screen and (max-width: 768px) {
                margin-left: 12.5%;

                img {
                    top: -20%;
                }
            }
        }
    }

    .item-4 {
        .inner {
            margin-left: 48.75%;
            @media screen and (max-width: 768px) {
                margin-left: 30%;
            }
        }
    }

    .item-5 {
        .inner {
            margin-bottom: calc(1.71875rem + 4.375vw);
            margin-left: 17.5%;
            margin-top: calc(1.71875rem + 4.375vw);

            img {
                left: -5.375vw;
                max-width: none;
                position: absolute;
                top: -10%;
                width: 31.25vw;
            }
            @media screen and (max-width: 768px) {
                margin-left: 12.5%;
            }
        }
    }

    .item-6 {
        margin-top: 0;

        .inner {
            margin-left: 50%;

            img {
                position: absolute;
                right: -50%;
                top: 0;
                width: 480px;
            }
            @media screen and (max-width: 768px) {
                margin-left: 6%;
            }
        }
    }

    .item-7 {
        .inner {
            margin-left: 12.5%;
        }
    }

    .item-8 {
        .inner {
            margin-bottom: calc(1.71875rem + 4.375vw);
            margin-left: 60%;
            margin-top: calc(1.71875rem + 4.375vw);

            img {
                left: -18.375vw;
                max-width: none;
                position: absolute;
                top: -40%;
            }
            @media screen and (max-width: 768px) {
                margin-left: 25%;
                img {
                    top: -10%;
                }
            }
        }
    }
    .item-9 {
        .inner {
            margin-bottom: calc(1.71875rem + 4.375vw);
            margin-left: 17.5%;
            margin-top: calc(1.71875rem + 4.375vw);

            img {
                left: -5.375vw;
                max-width: none;
                position: absolute;
                top: -10%;
                width: 31.25vw;
            }
            @media screen and (max-width: 768px) {
                margin-left: 12.5%;
            }
        }
    }
}
</style>