<template>
    <div class="form-section" >
        <Form>
            <div class="input-bar">
                <img src="../assets/icons/search 24px.svg" />
                <input type="text" placeholder="Name">
            </div>
            <div class="input-bar">
                <img src="../assets/icons/search 24px.svg" />
                <input type="text" placeholder="Phone">
            </div>
            <div class="input-bar">
                <img src="../assets/icons/search 24px.svg" />
                <input type="text" placeholder="City">
            </div>
            <div class="input-bar">
                <img src="../assets/icons/search 24px.svg" />
                <input type="text" placeholder="State">
            </div>
            <div class="input-bar">
                <img src="../assets/icons/search 24px.svg" />
                <input type="text" placeholder="Adress">
            </div>
        </Form>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>

form {
    width: 400px;
    height: 375px;
    background: #FBFBFB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-evenly;
    align-content: space-evenly;
    flex-wrap: wrap;
}

.input-bar {
    background: #F9F9F9;
    border: 1px solid #D1D1D1;
    width: 362px;
    height: 49px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   
}

.input-bar input {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    width: 217px;
    height: 19px;
    border: none;
    background: #FBFBFB;
    outline: none;

}

.input-bar img {
    width: 16px;
    height: 16px;
}
</style>