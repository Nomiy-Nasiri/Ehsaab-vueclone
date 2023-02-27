<template>
    <div class="container">
        <div class="banner-logo">
            <img src="../assets/images/Bussiness logo.png" alt="">
        </div>
        <div class="business-info">
            <h1>Pine Technologies</h1>
            <P>It is a long established fact that a reader will be distracted by the readable content of a page when
                looking a page when looking at its layout. The point of using 
                Lorem Ipsum is that it has a
                <br/><br/>
           Naveed shaheed road, jutail Gilgit 
           <br/>
           03402042304
        </P>
        </div>

    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    height: 260px;
    align-items: center;
}

.business-info {
    width: 730px;
}

.business-info h1 {
    width: 399px;
    height: 47px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    color: #000000;
}

.business-info p {
    width: 728px;
    height: 90px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;    
    color: #000000;
}
</style>