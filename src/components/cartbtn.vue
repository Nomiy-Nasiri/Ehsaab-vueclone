<template>
    <div class="cart-button">
        <img v-on:click="addQuantity" src="../assets/icons/add circle outline 24px.svg" alt="">
        <p>{{ product.quantity }}</p>
        <img v-on:click="subQuantity" src="../assets/icons/remove circle outline 24px.svg" alt="">
    </div>
</template>
<script>
export default {
    props: {
        product: Object
    },
    methods: {
        addQuantity: function () {
            this.$store.dispatch("updatePrice", this.product)
        },
        subQuantity: function () {
            this.$store.dispatch("ReducePrice", this.product)
        }
    }
}
</script>
<style scoped>
.cart-button {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    width: 60px;
    height: 50px;


}

.cart-button img {
    width: 16px;
    height: 16px;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: all 0.2s ease-in-out;

}

.cart-button img:active {
    background-color: rgb(219, 219, 219);
}

.cart-button p {
    width: 18px;
    height: 18px;
    text-align: center;

}
</style>