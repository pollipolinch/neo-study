<template>
  <header>
    <nav class="navbar">
      <div class="navbar_container">
        <h3 @click="goToHomePage" class="logo">QPICK</h3>
        <div class="icons-container">
          <div class="cart-container">
            <div v-if="like" class="cart-number">
              {{ like.length }}
            </div>
            <img class="img-like" src="../assets/like.png" alt="" />
          </div>
          <div class="cart-container">
            <div v-if="cart" class="cart-number">
              {{ cart.length }}
            </div>
            <img
              @click="goToCart"
              class="img-cart"
              src="../assets/cart.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapGetters,mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["UPDATE_CART"]),
    goToHomePage() {
      this.$router.push("/");
this.UPDATE_CART()
    },
    goToCart() {
      this.$router.push("/cart");
    },
  },
  computed: {
    ...mapGetters(["cart","like"]),
  },
};
</script>
<style>
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  border: 0;
}
li {
  list-style-type: none;
}
.project {
  background: #eaeaea;
}
.navbar {
  padding-top: 15px;
}
.logo {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #101010;
  margin-left: 11.5%;
  cursor: pointer;
}
.icons-container {
  display: flex;
}
.cart-container{
  position: relative;
}
.cart-number {
  position: absolute;
  top: -6px;
  left: 15px;
  width: 18px;
  height: 18px;
  background: #ffa542;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
  border-radius: 50%;
}
</style>