<template>
    <section class="header border border-black px-2.5 sm:px-5 lg:px-10">
        <div class="container mx-auto relative">
            <Navbar />
        </div>
    </section>
    <section class="hero bg-black px-2.5 sm:px-5 lg:px-10">
        <div class="container mx-auto relative">
            <div class="flex flex-col justify-center h-[375px] sm:h-[300px] lg:h-[575px]">
                <h1 class="text-white font-bold text-4xl lg:text-5xl">Your Gateway to<br />Eventful Adventures</h1>
                <div class="button mt-10">
                    <NuxtLink class="rounded-lg bg-primary hover:bg-primary-hover font-medium text-white px-5 py-3" to="#">
                        Start Explore
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
    <section class="browse-section border border-black px-2.5 sm:px-5 lg:px-10 pt-8 lg:pt-10">
        <div class="container mx-auto relative">
            <div class="flex gap-2">
                <div class="browse-title text-black font-bold text-2xl lg:text-3xl">Find events in</div>
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        class="w-6 h-6 lg:w-7 lg:h-7 stroke-secondary fill-none stroke-[3.5px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <div class="text-secondary font-bold text-2xl lg:text-3xl">Tangerang</div>
                </div>
            </div>
            <div class="browse-categories mt-6">
                <ul class="flex gap-14 font-bold">
                    <li>
                        <NuxtLink class="text-light-gray hover:text-black active:text-secondary hover:underline" to="#">All
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-light-gray hover:text-black hover:underline" to="#">Music</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-light-gray hover:text-black hover:underline" to="#">Business</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-light-gray hover:text-black hover:underline" to="#">Hobbies</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-light-gray hover:text-black hover:underline" to="#">Sport</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="text-light-gray hover:text-black hover:underline" to="#">Health</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>