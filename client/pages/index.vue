<template>
    <Navbar />
    <section class="hero bg-neutral px-2.5 sm:px-5 lg:px-10">
        <div class="container mx-auto relative">
            <div class="flex flex-col justify-center h-[375px] sm:h-[300px] lg:h-[575px]">
                <h1 class="text-base-100 font-bold text-4xl lg:text-5xl">Your Gateway to<br />Eventful Adventures</h1>
                <div class="form-control w-full sm:w-80 mt-8">
                    <div class="relative">
                        <input type="text" placeholder="Type your city here" class="input input-bordered w-full pr-16" />
                        <NuxtLink
                            class="btn btn-primary absolute top-0 right-0 rounded-l-none normal-case font-medium text-base"
                            to="#">
                            Find now</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="browse-section px-2.5 sm:px-5 lg:px-10 mt-8 lg:pt-10">
        <div class="container mx-auto relative">
            <div class="flex gap-2">
                <div class="browse-title text-neutral font-bold text-2xl lg:text-3xl">Find events in</div>
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        class="w-6 h-6 lg:w-7 lg:h-7 stroke-secondary fill-none stroke-[3.5px]">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    <div class="text-secondary font-bold text-2xl lg:text-3xl">Tangerang</div>
                </div>
            </div>
            <Tabs-category />
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
                <Card-event v-for="card in 8" :key="card" />
            </div>
            <Button-see-more />
        </div>
    </section>
    <section class="upcoming-event px-2.5 sm:px-5 lg:px-10 mt-8 lg:pt-10">
        <div class="container mx-auto relative">
            <div class="text-neutral font-bold text-2xl lg:text-3xl">Upcoming events</div>
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
                <Card-event v-for="card in 4" :key="card" />
            </div>
            <Button-see-more />
        </div>
    </section>
    <Footer />
</template>