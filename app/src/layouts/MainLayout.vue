<template>
    <q-layout view="lHh Lpr lFf">
        <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-1"
        >
            <q-list>
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
    {
        title: 'Welcome',
        icon: 'home',
        link: 'welcome'
    },
    {
        title: 'Step1: Package',
        icon: 'aspect_ratio',
        link: 'select_package'
    },
    {
        title: 'Step2: Plants',
        icon: 'local_florist',
        link: 'select_plants'
    },
    {
        title: 'Step3: Place',
        icon: 'place',
        link: 'select_place'
    },
    {
        title: 'Save Entry',
        icon: 'save_alt',
        link: 'save_entry'
    },
    {
        title: 'Dev',
        icon: 'code',
        link: 'dev'
    },
    {
        title: 'About',
        icon: 'help',
        link: 'about'
    }
]

export default {
    name: 'MainLayout',
    components: { EssentialLink },
    data () {
        return {
            leftDrawerOpen: false,
            essentialLinks: linksData
        }
    }
}
</script>
