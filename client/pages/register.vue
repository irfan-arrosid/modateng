<template>
    <div class="h-screen flex justify-center">
        <div class="bg-black w-1/3 hidden md:block"></div>
        <div class="w-auto lg:w-2/3 flex justify-center items-center">
            <div class="max-w-sm">
                <NuxtLink class="logo text-primary font-bold text-2xl" to="/">Modateng</NuxtLink>
                <div class="text-black font-bold text-5xl mt-10">Create an account</div>
                <div class="email-field mt-6">
                    <label for="">Email</label>
                    <input type="text" class="border border-light-gray mt-4 block w-full rounded-lg px-6 py-3">
                </div>
                <div class="password-field mt-6">
                    <label for="">Password</label>
                    <input type="password" class="border border-light-gray mt-4 block w-full rounded-lg px-6 py-3">
                </div>
                <div class="button block mt-6 text-center">
                    <NuxtLink
                        class="bg-secondary hover:bg-secondary-hover rounded-lg px-5 py-3 block w-full text-white font-medium"
                        to="#">
                        Create account
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>