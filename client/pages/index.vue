<template>
    <section class="header border border-black px-2.5 sm:px-5 lg:px-10">
        <div class="container mx-auto relative">
            <Navbar />
        </div>
    </section>
    <section class="hero bg-primary px-2.5 sm:px-5 lg:px-10">
        <div class="container mx-auto relative">
            <div class="flex flex-col justify-center h-[375px] sm:h-[300px] lg:h-[575px]">
                <h1 class="text-white font-bold text-4xl lg:text-5xl">Your Gateway to<br />Eventful Adventures</h1>
                <div class="button mt-10">
                    <NuxtLink class="rounded-lg bg-secondary hover:bg-secondary-hover font-medium text-white px-5 py-3"
                        to="#">
                        Start Explore
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>