<template>
    <div class="flex items-center h-[70px]">
        <NuxtLink class="logo text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
        <ul class="flex ml-auto items-center gap-5">
            <li>
                <NuxtLink class="font-medium text-black hover:text-primary" to="/login">Log In</NuxtLink>
            </li>
            <li>
                <NuxtLink class="rounded-lg bg-secondary hover:bg-secondary-hover font-medium text-white px-5 py-3"
                    to="/register">Sign
                    Up
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>