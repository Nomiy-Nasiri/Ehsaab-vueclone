<template>
    <div class="container">
        <div class="action-first">
            <button @click="searchItems">
                <img src="../assets/icons/search 24px.svg" alt="search">

            </button>
            <!-- <i src="./assets/icons/search 24px.svg"></i> -->
            <input v-model="searchValue" type="search" placeholder="search">
        </div>
        <slot></slot>
        <div class="action-second">
            <button>max Price</button>
            -
            <button>min Price</button>
        </div>
    </div>
</template>
<script>


export default {
    data() {
        return {
            searchValue: ''

        }
    },

    methods: {
        searchItems: function () {

            this.$store.dispatch('findProducts', this.searchValue)
        },

        // maxPriceProducts: function () {
        // for (let i = 0; i < newarr.length; i++) {
        //     for (let j = i + 1; j < newarr.length; i++) {
        //         if (newarr[i] > newarr[j]) {
        //             let temp = newarr[i]
        //             newarr[i] = newarr[j]
        //             arr[j] = temp
        //         }
        //     }
        // }
        // },
        // manPriceProducts: function () {

        // },
    }

}
</script>
<style scoped>
.container {
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.action-first {
    width: 289px;
    height: 41px;
    border: 1px solid #D1D1D1;
    background: #F9F9F9;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.action-first input {
    background: #F9F9F9;
    border: none;
    width: 270px;
    height: 41px;
    outline: none;

}

.action-first img {
    Width: 13px;
    Height: 14px;

}

.action-first button {
    background-color: none;
    width: 14px;
    height: 14px;
    border: none;
    cursor: pointer;
}

.action-second {
    width: 289px;
    height: 41px;
    border: 1px solid #D1D1D1;
    background: #F9F9F9;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.action-second button {
    cursor: pointer;
    width: 85px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    border: none;
    color: #606060;
    background: #F9F9F9;
}
</style>


<!-- <button @click="searchItems"></button> -->
<!-- <input v-model="searchvalue" type="search" placeholder="search"> -->