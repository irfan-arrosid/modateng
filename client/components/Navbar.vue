<template>
    <section class="px-2.5 sm:px-5 lg:px-10">
        <div class="container mx-auto relative">
            <div class="flex items-center h-[70px]">
                <NuxtLink class="logo text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
                <ul class="flex ml-auto items-center gap-6">
                    <li>
                        <NuxtLink class="btn btn-ghost text-black font-medium normal-case text-base" to="/login">Log In
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="btn btn-secondary text-base-100 font-medium normal-case text-base" to="/register">
                            Sign
                            Up
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>