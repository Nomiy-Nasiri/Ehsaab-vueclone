<template>
    <div class="Header-container">
        <div class="top-bar">
            <img src="../assets/icons/ehisaab logo.svg" />
            <p>Downlaod eHisaab now to maintain your business
                accounts and get online sale orders.</p>
        </div>
        <div class="nav-container">
            <div class="logo">

                <img src="../assets/icons/logo.svg" alt="logo">
            </div>
            <div class="nav-list">
                <ul>
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="#">products</router-link></li>
                    <li><router-link to="/store">Store</router-link></li>
                </ul>
               <router-link to="/cart"><headerCart/></router-link>
            </div>
        </div>
    </div>
</template>
<script>
import headerCart from './headerCart.vue';
export default {
components:{
    headerCart,
}
}
</script>
<style scoped>
.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    background: #3D3D3D;
}

.top-bar img {
    width: 120px;
    height: 20px;

}

.top-bar p {
    width: 630px;
    height: 16px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    color: #F9F9F9;
}

.nav-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    background: #E7E7E7;
    box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.25);
}

.logo {
    width: 60px;
    height: 57px;
}

.nav-list {
    width: 570px;
    display: flex;
    justify-content: space-evenly;
}

.nav-list ul {
    display: flex;
    justify-content: space-around;
    width: 550px;

}

li {
    list-style-type: none;
}

a {
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #3E8AAD;
    text-decoration: none;
}
</style>