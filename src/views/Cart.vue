<template>
  <div class="project">
    <Navbar></Navbar>
    <main>
      <section class="section-cart">
        <h3 class="cart-title">{{ $t("footer.item-two") }}</h3>
        <div class="buy-product-container">
          <div class="products-container">
            <div
              v-for="(product, index) of buy_products"
              :key="index"
              class="product-card"
            >
              <div class="product-card-first-container">
                <img class="product-card-img" :src="product.img" alt="" />
                <div>
                  <h4 class="product-card-title">{{ product.title }}</h4>
                  <h4 class="product-card-price">{{ product.price }} ₽</h4>
                </div>
                <img
                  @click="deleteProduct(product)"
                  class="product-card-icon-delete"
                  src="../assets/delete-icon.png"
                  alt=""
                />
              </div>
              <div class="product-card-second-container">
                <div class="product-card-count">
                  <div
                    @click="changeCount('-', product)"
                    class="product-card-count-sign"
                  >
                    -
                  </div>
                  <div class="product-card-count-num">{{ product.count }}</div>
                  <div
                    @click="changeCount('+', product)"
                    class="product-card-count-sign"
                  >
                    +
                  </div>
                </div>
                <h4 class="product-card-second-container-sum">
                  {{ product.sum }} ₽
                </h4>
              </div>
            </div>
          </div>
          <div class="total-sum">
            <div class="total-sum-container">
              <h4 class="total-sum-title">{{ $t("cart.sum") }}</h4>
              <h4 class="total-sum-price">₽ {{ grandTotal }}</h4>
            </div>
            <div class="total-sum-decor">{{ $t("cart.delivery") }}</div>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    ...mapMutations(["BUY_PRODUCTS", "DELETE_PRODUCT"]),
    changeCount(ell, product) {
      console.log(product.count);
      if (ell == "-" && product.count > 1) {
        product.count--;
        this.BUY_PRODUCTS({
          id: product.id,
          count: product.count,
        });
      } else if (ell == "+") {
        product.count++;
        this.BUY_PRODUCTS({
          id: product.id,
          count: product.count,
        });
      }
    },
    deleteProduct(ell) {
      this.DELETE_PRODUCT(ell.id);
      this.BUY_PRODUCTS();
    },
  },
  computed: {
    ...mapGetters(["buy_products", "grandTotal"]),
  },
  mounted() {
    this.BUY_PRODUCTS();
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
.section-cart {
  min-height: 80vh;
}
.buy-product-container {
  display: flex;
  justify-content: space-around;
}
.cart-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #1c1c27;
  margin-left: 11.5%;
  margin-top: 45px;
}
.product-card {
  width: 633px;
  height: 230px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-top: 11px;
}
.total-sum {
  width: 349px;
  height: 114px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  position: relative;
  margin-top: 20px;
  margin-left: -200px;
}
.total-sum-decor {
  width: 349px;
  height: 65px;
  background: #101010;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  position: absolute;
  bottom: -5px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s;
}
.total-sum-decor:hover {
  background: white;
  color: #101010;
}
.product-card-first-container {
  display: flex;
  justify-content: center;
}
.product-card-img {
  width: 147px;
  margin-top: 10px;
  margin-right: 12px;
  margin-left: -20px;
}
.product-card-icon-delete {
  display: block;
  width: 20px;
  height: 17px;
  margin-top: 20px;
  margin-left: 120px;
  cursor: pointer;
}
.product-card-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  color: #1c1c27;
  margin-top: 78px;
  margin-left: 10px;
  margin-right: 130px;
}
.product-card-price {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #aaaaaa;
  margin-top: 10px;
  margin-left: 10px;
}
.total-sum-container {
  display: flex;
  justify-content: space-between;
}
.total-sum-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #000000;
  margin-top: 20px;
  margin-left: 20px;
}
.total-sum-price {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  margin-top: 20px;
  margin-right: 20px;
}
.product-card-second-container {
  display: flex;
}
.product-card-count {
  display: flex;
  margin-top: 5px;
  margin-left: 30px;
  align-items: center;
}
.product-card-count-sign {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  background: #ffce7f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.product-card-count-sign:hover {
  scale: 1.1;
}
.product-card-count-num {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #000000;
  margin-left: 24px;
  margin-right: 24px;
}
.product-card-second-container-sum {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #1c1c27;
  margin-left: 410px;
  margin-top: 10px;
}
@media screen and (max-width: 1200px) {
  .buy-product-container {
    flex-wrap: wrap;
    justify-content: center;
  }
  .total-sum {
    margin-left: 0px;
  }
}
@media screen and (max-width: 750px) {
  .product-card {
    width: 90%;
  }
  .product-card-second-container-sum {
    margin-left: 60%;
  }
  .product-card-img {
    width: 22%;
  }
  .product-card-icon-delete{
    margin-left: 20%;
  }
  .products-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
@media screen and (max-width: 690px) {
  .product-card-icon-delete{
    margin-left: 10%;
  }
  .product-card-second-container-sum{
    margin-left: 0%;
  }
  .product-card-second-container{
    justify-content: space-around;
  }
  .product-card-count{
    margin-left: 0px;
  }
  .product-card-title{
    margin-right: 0px;
  }
  .product-card-img{
    width: 25%;
  }
  }
  @media screen and (max-width: 400px) {
    .product-card-img{
    width: 27%;
  }
  }
</style>