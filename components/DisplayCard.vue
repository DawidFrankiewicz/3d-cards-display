<script setup>
import { twMerge } from 'tailwind-merge';

defineProps({
    cardData: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="group relative aspect-[9/16] w-64 flex-shrink-0 snap-center">
        <!-- Card Background -->
        <div
            v-if="cardData.backgroundImageUrl"
            class="z-1 bg-slate-7 absolute left-0 top-0 h-full w-full transform object-cover transition-transform duration-500 after:absolute after:top-0 after:h-full after:w-full after:opacity-0 after:transition-all after:duration-500 after:content-[''] after:[background-image:radial-gradient(circle,rgba(255,255,255,0)25%,rgba(4,4,4,0.5)89%)] group-hover:[transform:rotateX(30deg)] after:group-hover:opacity-100"
        >
            <!-- Card Backgorund Image -->
            <img
                :class="
                    twMerge(
                        'h-full w-full object-cover',
                        cardData.backgroundImageClasses
                    )
                "
                :src="cardData.backgroundImageUrl"
                :alt="cardData.backgroundImageAlt"
            />
        </div>
        <!-- Card Shadow -->
        <div
            v-if="cardData.backgroundImageUrl"
            class="absolute left-1/2 top-24 -z-10 h-5/6 w-60 -translate-x-1/2 bg-black opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        <!-- Card Logo -->
        <img
            v-if="cardData.logoUrl && cardData.backgroundImageUrl"
            class="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-8"
            :src="cardData.logoUrl"
            width="180"
            height="60"
            :alt="cardData.logoAlt"
        />
        <!-- Card Front Image -->
        <img
            v-if="cardData.frontImageUrl && cardData.backgroundImageUrl"
            class="absolute left-1/2 top-0 z-10 h-full w-full -translate-x-1/2 translate-y-10 object-contain opacity-0 transition-all duration-500 [mask-image:linear-gradient(to_top,transparent_25%,black_35%)] group-hover:-translate-y-10 group-hover:opacity-100"
            :src="cardData.frontImageUrl"
            width="180"
            height="250"
            :alt="cardData.frontImageAlt"
        />
    </div>
</template>
