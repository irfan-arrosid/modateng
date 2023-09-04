<template>
    <div class="navbar h-[70px] px-2.5 sm:px-5 lg:px-10">
        <NuxtLink class="logo text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
        <ul class="flex ml-auto items-center gap-2">
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
</template>