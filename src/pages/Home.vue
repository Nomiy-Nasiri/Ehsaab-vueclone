<template>
    <div>
        <EhsaabHero/>
        <actionBar>
            <categorySearch/>
        </actionBar>
        <productList :products="$store.state.categories" />
    </div>
</template>
<script>
import actionBar from '@/components/actionBar.vue';
import EhsaabHero from '@/components/ehsaabHero.vue';
import productList from '../components/productList.vue'
import categorySearch from '@/components/categorySearch.vue';
export default {
    name: 'home',
    components: {
    productList,
    EhsaabHero,
    actionBar,
    categorySearch
},
    created(){
        this.$store.dispatch('getCategory' , 'smartphones')

    }
    
    
}
</script>