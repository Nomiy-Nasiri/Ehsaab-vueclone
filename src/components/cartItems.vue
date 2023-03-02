<template>
    <div class="form-cart">
        <div class="cart">
            <h2>packege 1</h2>
            <p>Store Name</p>
            <div class="cartitems">
                <div class="cartitem" v-for="(product, index) in $store.state.cart" :key="index">
                    <div class="imge-side">
                        <div class="imgqunt">
                            <img :src="product.thumbnail" alt="#">
                            <h3>product 1
                                <span>
                                    <p>{{ product.title }}</p>
                                </span>
                                <span>
                                    <p class="pricing">{{ product.price }} Rs {{ product.quantity }} = {{ product.totalprice
                                    }}</p>
                                </span>
                            </h3>
                        </div>
                    </div>
                    <div class="edit-side">
                        <cartButton :product="product" />
                        <img v-on:click="removeProduct(product)" src="../assets/icons/delete 24px.svg" alt="#">
                    </div>
                </div>
            </div>
        </div>
        <div class="crtfrm">
            <cartForm />
        </div>
    </div>
</template>
<script >
import cartButton from "./cartbtn.vue"
import cartForm from './cartForm.vue';
export default {
    components: {
        cartForm,
        cartButton,
    },
    methods:{

        removeProduct: function (product) {
            this.$store.dispatch("deleteProduct",product )
   

        }
    }
}
</script>
<style scoped>
.form-cart {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.cartitems {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 15px 20px;
    width: 760px;
    margin-top: 10px;
    min-height: 100px;
    background: #FBFBFB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

}

.cartitem {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    margin: 5px 0px;
    height: 100px;


}

.imge-side {
    width: 500px;

    height: fit-content;
}

.imge-side img {
    margin-right: 15px;
}

.imge-side h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
}

.pricing {
    padding: 5px 0px;
}

.imge-side p {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #000000;
}

.imgqunt {
    width: 330px;
    display: flex;

}

.imgqunt img {
    width: 80px;
    height: 80px;
}

.button {
    display: flex;
    justify-content: space-evenly;
    width: 70px;
    margin-top: 10px;
}
.edit-side img{
 cursor: pointer;
}
</style>