<script setup>
const route = useRoute()

const lastPath = ref('')
const buttonBar = ref([
    {
        label: '首頁',
        icon: 'ic:baseline-home',
        link: '/home'
    },
    {
        label: '搜尋',
        icon: 'ic:round-search',
        link: '/search'
    },
    {
        label: '設定',
        icon: 'ic:baseline-settings',
        link: '/setting'
    }
])

onMounted(() => {
    lastPath.value = '/' + route.path.split('/').filter(Boolean)
})
</script>

<template>
    <div class="relative min-w-screen min-h-screen">
        <div class="relative top-0 inset-x-0 flex justify-center items-center w-full min-h-[8vh] bg-primary">
            上標題
        </div>
        <slot />
        <div class="fixed bottom-0 inset-x-0 w-full min-h-[10vh]">
            <UButtonGroup class="flex w-full justify-between h-full">
                <UButton v-for="item in buttonBar" :to="item.link" class="flex flex-col justify-center w-full h-full items-center" @click="lastPath=item.link">
                    <UIcon :name="item.icon" class="size-12 mt-6"/>
                    <p class="text-[1.5rem] mb-3" :class="{'visible':lastPath===item.link,'invisible':lastPath!==item.link}" >{{ item.label }}</p>
                </UButton>
            </UButtonGroup>
        </div>
    </div>    
</template>