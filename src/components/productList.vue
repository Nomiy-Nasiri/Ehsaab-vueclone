<template>
    <div class="cards">
        <div v-for="(product, index) in products " :key="index" class="single-card">
            <div class="pic-box">
                <img v-on:click="showPopup(product.id)" :src="product.thumbnail" alt="#">
            </div>
            <h2>{{ product.title }}</h2>
            <div class="price-text">
                <P>{{ product.price }} Rs</P>
                <button v-on:click="addToCart(product)">ADD TO CART</button>
            </div>
        </div>

        <popUp :product="this.$store.state.product" />

    </div>
</template>
<script>
import popUp from './popUP.vue'
export default {
    components: {
        popUp
    },
    props: {
        products: {
            type: Array,


        },
    },
    methods: {
        showPopup: function (id) {
            this.$store.state.popupShow = true
            this.$store.dispatch('getProduct', id)
        },
        addToCart: function (product) {
            let productDetails = {
                id: product.id,
                title: product.title,
                price: product.price,
                totalprice: product.price,
                quantity: 1,
                thumbnail: product.thumbnail
            }
            this.$store.dispatch("addProductToCart", productDetails)
        }
    },
  
}



</script>
<style scoped>
.cards {
    margin: 40px auto;
    width: 1120px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 30px;
    row-gap: 40px;
}

.single-card {
    width: fit-content;
}

.pic-box {
    height: 291px;
    width: 288px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    border: 1px solid #c5c5c5;

}

.pic-box img {
    height: 100%;
    cursor: pointer;
}

.single-card h2 {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    margin-top: 17px;
}

.price-text {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.price-text p {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    margin-top: 8px;
}

.price-text button {
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    /* identical to box height */
    border: none;
    text-transform: uppercase;
    color: #3E8AAD;
    height: 30px;
    background: none;
    margin-top: 8px;
    cursor: pointer;
}
</style>