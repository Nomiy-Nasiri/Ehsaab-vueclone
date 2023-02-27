<template>
    <footer class="container">
        <div class="footer-logos">
            <img src="../assets/icons/ehisaab logo.svg" alt="logo">
            <img src="../assets/icons/pine logo.svg" alt="vector">
        </div>
        <div class="search-icon">
            <img src="../assets/icons/search 24px.svg" alt="search">
            <img src="../assets/icons/search 24px.svg" alt="search">
            <img src="../assets/icons/search 24px.svg" alt="search">
        </div>
    </footer>
</template>
<script>
export default{

}
</script>
<style scoped>
.container{
    display:flex;
    justify-content: space-around;
    align-items: center;
   background-color: #E7E7E7;
}
.footer-logos{
    display: flex;
    justify-content: space-between;
    width: 320px;
}
.footer-logos img{
    width: 122px;
    height: 46px;
}
.search-icon{
    display:flex;
    justify-content: space-between;
    width: 200px;
}
.search-icon img{
    width: 22px;
    height: 22px;
}
</style>