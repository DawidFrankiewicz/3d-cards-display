<script setup>
import { twMerge } from 'tailwind-merge';

const props = defineProps({
    cardData: Object,
    containersScrollLeft: Number,
});

const card = ref(null);

const isActive = computed(() => {
    if (!props.containersScrollLeft || !card) return false;
    return props.containersScrollLeft -
        card.value.offsetLeft -
        card.value.clientWidth / 2 +
        window.innerWidth / 2 >=
        -card.value.clientWidth / 2 &&
        props.containersScrollLeft -
            card.value.offsetLeft -
            card.value.clientWidth / 2 +
            window.innerWidth / 2 <=
            card.value.clientWidth / 2
        ? true
        : false;
});
</script>

<template>
    <div
        ref="card"
        class="group relative aspect-[9/16] w-64 flex-shrink-0 snap-center overflow-visible"
    >
        <!-- Card Background -->
        <div
            v-if="cardData.backgroundImageUrl"
            :class="
                twMerge(
                    'z-1 bg-slate-7 absolute left-0 top-0 h-full w-full transform object-cover transition-transform duration-500 after:absolute after:top-0 after:h-full after:w-full after:opacity-0 after:transition-all after:duration-500 after:content-[\'\'] after:[background-image:radial-gradient(circle,rgba(255,255,255,0)25%,rgba(4,4,4,0.5)89%)] group-hover:[transform:rotateX(30deg)] after:group-hover:opacity-100',
                    isActive ? 'scale-110' : ''
                )
            "
        >
            <!-- Card Backgorund Image -->
            <img
                :class="
                    twMerge(
                        'h-full w-full object-cover transition-transform',
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
            :class="
                twMerge(
                    'absolute left-1/2 top-24 -z-10 h-5/6 w-60 -translate-x-1/2 bg-black opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-100',
                    isActive ? 'scale-110' : ''
                )
            "
        ></div>
        <!-- Card Logo -->
        <img
            v-if="cardData.logoUrl && cardData.backgroundImageUrl"
            :class="
                twMerge(
                    'absolute bottom-5 left-1/2 z-20 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-8',
                    cardData.logoClasses,
                    isActive ? 'scale-125' : ''
                )
            "
            :src="cardData.logoUrl"
            width="180"
            height="60"
            :alt="cardData.logoAlt"
        />
        <!-- Card Front Image -->
        <img
            v-if="cardData.frontImageUrl && cardData.backgroundImageUrl"
            :class="
                twMerge(
                    'pointer-events-none absolute bottom-0 left-1/2 z-10 h-full w-full max-w-lg -translate-x-1/2 translate-y-10 object-contain opacity-0 transition-all duration-500 [mask-image:linear-gradient(to_top,transparent_25%,black_35%)] group-hover:-translate-y-10 group-hover:opacity-100',
                    cardData.frontImageClasses,
                    isActive ? 'scale-110' : ''
                )
            "
            :src="cardData.frontImageUrl"
            width="180"
            height="250"
            :alt="cardData.frontImageAlt"
        />
    </div>
</template>
