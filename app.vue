<script setup>
const cardsData = [
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundUrl: '../images/cardBacks/witch-on-beach.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundUrl: '../images/cardBacks/poe-2.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundUrl: '../images/cardBacks/poe-3.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundUrl: '../images/cardBacks/poe-1.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundUrl: '../images/cardBacks/poe-5.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundUrl: '../images/cardBacks/poe-6.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundUrl: '../images/cardBacks/poe-7.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
    {
        logoUrl: '../images/logos/Poe2Logo.png',
        backgroundUrl: '../images/cardBacks/poe-8.webp',
        frontImageUrl: '../images/cardFronts/witch.webp',
    },
];
</script>

<template>
    <div
        class="scrollbar-styled flex min-h-screen snap-x items-center gap-16 overflow-auto bg-slate-800 px-[30vw] py-16 [perspective:500px] sm:px-[50vw]"
    >
        <DisplayCard v-for="cardData in cardsData" :cardData="cardData" />
    </div>
</template>
