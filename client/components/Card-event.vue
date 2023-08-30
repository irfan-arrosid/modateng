<template>
    <div class="card flex flex-wrap flex-row gap-9 mt-4">
        <NuxtLink v-for="card in 8" :key="card" class="shadow-lg hover:shadow-2xl w-[340px]" to="#">
            <div class="card-image bg-black min-h-[170px]"></div>
            <div class="card-detail px-5 py-5">
                <div class="card-title text-black font-bold text-2xl">Indonesia 4.0 Conference & Expo</div>
                <div class="card-time text-secondary font-bold text-base">Sun, Aug 23, 9:00 AM</div>
                <div class="card-place text-light-gray text-base mt-4">JIEXPO Kemayoran - Central Jakarta, Jakarta
                </div>
                <div class="card-price text-light-gray text-base">Free</div>
                <div class="card-organizer text-black font-medium text-base mt-4">Naganaya in collaboration with
                    Ministry of Industry
                    and WANTRII</div>
                <div class="card-follower flex gap-2 items-center">
                    <div class="follower-icon bg-light-gray w-4 h-4 rounded-full"></div>
                    <div class="follower-status text-light-gray text-base">75 followers</div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>