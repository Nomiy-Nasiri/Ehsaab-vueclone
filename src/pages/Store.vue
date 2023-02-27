<template>
    <div>
        <pineBanner/>
        <actionBar></actionBar>
        <productList :products="$store.state.products"/>
    </div>
</template>
<script>
import actionBar from '@/components/actionBar.vue';
import pineBanner from '../components/pineBanner.vue';
import productList from '../components/productList.vue'
export default {
    name: 'home',
    components: {
        productList,
        pineBanner,
        actionBar,
    },
    created(){
        this.$store.dispatch('getProducts')
    }
}
</script>