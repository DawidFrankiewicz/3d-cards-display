<script setup>
import { twMerge } from 'tailwind-merge';

const cardsData = [
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundImageUrl: '../images/cardBacks/witch-on-beach.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundImageUrl: '../images/cardBacks/poe-6.webp',
        frontImageUrl: '../images/cardFronts/archer.webp',
        backgroundImageClasses: '[object-position:38%_center]',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundImageUrl: '../images/cardBacks/poe-7.webp',
        frontImageUrl: '../images/cardFronts/gladiator.webp',
        frontImageClasses:
            '[height:calc(100%+120px)] -bottom-10 object-cover w-auto -translate-x-[calc(50%+40px)]',
    },
    // {
    //     logoUrl: '../images/logos/Poe2Logo.png',
    //     backgroundImageUrl: '../images/cardBacks/poe-5.webp',
    //     frontImageUrl: '../images/cardFronts/cassia.webp',
    //     backgroundImageClasses: '[object-position:44%_center]',
    // },
    // {
    //     logoUrl: '../images/logos/Poe2Logo.png',
    //     backgroundImageUrl: '../images/cardBacks/poe-2.webp',
    //     frontImageUrl: '../images/cardFronts/witch.webp',
    // },
    // {
    //     logoUrl: '../images/logos/Poe2Logo.png',
    //     backgroundImageUrl: '../images/cardBacks/poe-3.webp',
    //     frontImageUrl: '../images/cardFronts/witch.webp',
    // },
    // {
    //     logoUrl: '../images/logos/Poe2Logo.png',
    //     backgroundImageUrl: '../images/cardBacks/poe-1.webp',
    //     frontImageUrl: '../images/cardFronts/witch.webp',
    // },
    // {
    //     logoUrl: '../images/logos/Poe2Logo.png',
    //     backgroundImageUrl: '../images/cardBacks/poe-8.webp',
    //     frontImageUrl: '../images/cardFronts/witch.webp',
    // },
];

//// Scroll Controlls
// Constants
// 1 gap width + 1 card width
const distanceBetweenCards = 352;

// Refs
const cardsContainer = ref(null);

// Reactive
const containersScrollLeft = ref(0);
const containersScrollMax = ref(0);

onMounted(() => {
    // Get initial scroll position
    containersScrollLeft.value = cardsContainer.value.scrollLeft;
    // Get max scroll position
    containersScrollMax.value =
        cardsContainer.value.scrollWidth - cardsContainer.value.clientWidth;
});

// Methods
const scrollToNextCard = () => {
    if (
        containersScrollLeft.value >=
        containersScrollMax.value - distanceBetweenCards / 2
    )
        return;
    cardsContainer.value.scrollBy({
        left: distanceBetweenCards,
        behavior: 'smooth',
    });
};

const scrollToPrevCard = () => {
    if (containersScrollLeft.value <= 0 + distanceBetweenCards / 2) return;
    cardsContainer.value.scrollBy({
        left: -distanceBetweenCards,
        behavior: 'smooth',
    });
};
</script>

<template>
    <div class="relative bg-slate-800">
        <!-- Cards Container -->
        <div
            @scroll="containersScrollLeft = cardsContainer.scrollLeft"
            ref="cardsContainer"
            class="scrollbar-styled relative flex min-h-screen snap-x items-center gap-24 overflow-x-auto px-[30vw] py-16 [perspective:500px] sm:px-[50vw]"
        >
            <DisplayCard v-for="cardData in cardsData" :cardData="cardData" />
        </div>
        <!-- Scroll Controlls (Desktop Only) -->
        <button
            @click="scrollToPrevCard()"
            :class="
                twMerge(
                    'absolute bottom-1 left-0 top-0 z-40 hidden w-28 items-center justify-center opacity-0 transition-opacity duration-500 [background-image:linear-gradient(270deg,rgba(255,255,255,0)0%,rgba(4,4,4,0.6)70%)] hover:opacity-100 md:flex',
                    containersScrollLeft >= distanceBetweenCards / 2
                        ? ''
                        : 'pointer-events-none hover:opacity-0'
                )
            "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="animate-bounce-left w-11 fill-slate-400"
                viewBox="0 0 512 512"
            >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"
                />
            </svg>
        </button>
        <button
            @click="scrollToNextCard()"
            :class="
                twMerge(
                    'absolute bottom-1 right-0 top-0 z-40 hidden w-28 items-center justify-center opacity-0 transition-opacity duration-500 [background-image:linear-gradient(90deg,rgba(255,255,255,0)0%,rgba(4,4,4,0.6)70%)] hover:opacity-100 md:flex',
                    containersScrollLeft <=
                        containersScrollMax - distanceBetweenCards / 2
                        ? ''
                        : 'pointer-events-none hover:opacity-0'
                )
            "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="animate-bounce-right dur w-11 fill-slate-400"
                viewBox="0 0 512 512"
            >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                    d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"
                />
            </svg>
        </button>
    </div>
</template>
