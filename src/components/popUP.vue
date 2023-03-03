<template>
    <div v-if="$store.state.popupShow" class="popup-container">
        <div v-on:click="hidePopup()" class="popup-bg"></div>

        <div class="popup-content">
            <div class="pic-box">
                <img :src="product.thumbnail" alt="#">
            </div>
            <div class="text-area">
                <img src="../assets/images/Bussiness logo.png"/>
                <h1>store name</h1>
                <br />
                <p>naveed shahed road jutail Gilgit</p>
                <hr />
                <h2>{{product.title}}</h2>
                <br />
                
                <P>Rs : {{ product.price }} </P>
                <br />
                <p>{{product.description}}</p>
                <br />
                
            </div>

        </div>

    </div>
</template>
<script>
export default {
    methods: {
        hidePopup: function () {
            this.$store.state.popupShow = !this.$store.state.popupShow
        }
    },
    props:{
        product:{
            type: Object
        }
    }
  
  

}
</script>
<style scoped>
.popup-bg {
    top: 0px;
    left: 0px;
    position: fixed;
    width: 100%;
    height: 100%;
    background: #00000079;

}

.popup-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1000px;
    height: 600px;
    background: #fff;
    display: flex;
}

.pic-box {
    width: 600px;
    height: 600px;
    background-color: #514f4f57;
}
.pic-box img{
width: 100%;
height: 100%;
}

.text-area {
   width: 350px;

}

.text-area h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
   
}

.text-area h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
}

.text-area p {
    width: 325px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.text-area button {
    margin-left: 30px;
}
</style>