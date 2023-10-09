<script setup>
const props = defineProps(['cardData']);
</script>

<template>
    <div class="group relative aspect-[9/16] w-64 flex-shrink-0 snap-center">
        <div
            v-if="props.cardData.backgroundUrl"
            class="z-1 absolute left-0 top-0 h-full w-full transform bg-slate-400 object-cover transition-transform duration-500 after:absolute after:top-0 after:h-full after:w-full after:opacity-0 after:transition-all after:duration-500 after:content-[''] after:[background-image:radial-gradient(circle,rgba(255,255,255,0)25%,rgba(4,4,4,0.5)89%)] group-hover:[transform:rotateX(30deg)] after:group-hover:opacity-100"
        >
            <img
                class="h-full w-full object-cover"
                :src="props.cardData.backgroundUrl"
            />
        </div>
        <div
            v-if="props.cardData.backgroundUrl"
            class="absolute left-1/2 top-24 -z-10 h-5/6 w-60 -translate-x-1/2 bg-black opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        ></div>
        <img
            v-if="props.cardData.logoUrl && props.cardData.backgroundUrl"
            class="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-8"
            :src="props.cardData.logoUrl"
            width="180"
            height="60"
            alt="Path of Exile 2"
        />
        <!-- -->
        <img
            v-if="props.cardData.frontImageUrl && props.cardData.backgroundUrl"
            class="absolute left-1/2 top-0 z-10 h-full w-full -translate-x-1/2 translate-y-10 object-contain opacity-0 transition-all duration-500 [mask-image:linear-gradient(to_top,transparent_25%,black_35%)] group-hover:-translate-y-10 group-hover:opacity-100"
            :src="props.cardData.frontImageUrl"
            width="180"
            height="250"
            alt="Path of Exile 2"
        />
    </div>
</template>
