<template>
    <div class="container">
        <div class="categories">
            <input v-model="searchvalue" type="search " placeholder="Categories">
            <button @click="searchcategory">
                <img src="../assets/icons/search 24px.svg" alt="seach">
            </button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            searchvalue: ''
        }
    },
    methods: {
        searchcategory: function () {
            this.$store.dispatch('getCategory' , this.searchvalue);
          
         

            }
        }
    }
</script>
<style scoped>
.categories {
    width: 289px;
    height: 40px;
    background: #F9F9F9;
    border: 1px solid #D1D1D1;
}

.categories input {
    width: 270px;
    height: 38px;
    border: none;
    background-color: #F9F9F9;
    outline: none;
}

.categories img {
    Width: 13px;
    Height: 14px;
}

.categories button {
    background-color: none;
    width: 14px;
    height: 14px;
    border: none;
    cursor: pointer;
}
</style>
