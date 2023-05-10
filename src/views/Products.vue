<template>
  <div class="project">
    <Navbar></Navbar>
    <main>
      <section class="products">
        <h3 class="title">{{ $t("main.products-one") }}</h3>
        <div class="container-products">
          <div v-for="(product, index) of headphones" :key="index">
            <div v-if="index < 6" class="product">
              <div @click="add_like_product(product)">
                <img
                  v-if="product.like"
                  class="heart-active"
                  src="../assets/active-like.png"
                  alt=""
                />
                <img
                  v-else
                  class="heart"
                  src="../assets/unactive-like.png"
                  alt=""
                />
              </div>
              <img
                class="product_img"
                :src="product.img"
                alt="photo-headphones"
              />
              <h4 class="price-container_title">{{ product.title }}</h4>
              <h4 class="price-container_price">{{ product.price }} ₽</h4>
              <h5 v-if="product.oldprice" class="price-container_old-price">
                {{ product.oldprice }} ₽
              </h5>
              <img
                class="price-container-rate_img"
                src="../assets/star.png"
                alt=""
              />
              <span class="price-container-rate_num">{{ product.rate }}</span>
              <div @click="addToCart(product)">
                <img
                  v-if="product.activeBuy"
                  class="price-container-simbol"
                  src="../assets/check-mark.png"
                  alt=""
                />
                <h4
                  v-else
                  class="price-container_title price-container_title-buy"
                >
                  {{ $t("main.buy") }}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <h3 class="title title-two">{{ $t("main.products-two") }}</h3>
        <div class="container-products">
          <div v-for="(product, index) of headphones" :key="index">
            <div v-if="index >= 6" class="product">
              <div @click="add_like_product(product)">
                <img
                  v-if="product.like"
                  class="heart-active"
                  src="../assets/active-like.png"
                  alt=""
                />
                <img
                  v-else
                  class="heart"
                  src="../assets/unactive-like.png"
                  alt=""
                />
              </div>
              <img
                class="product_img"
                :src="product.img"
                alt="photo-headphones"
              />
              <h4 class="price-container_title">{{ product.title }}</h4>
              <h4 class="price-container_price">{{ product.price }} ₽</h4>
              <img
                class="price-container-rate_img"
                src="../assets/star.png"
                alt=""
              />
              <span class="price-container-rate_num">{{ product.rate }}</span>
              <div @click="addToCart(product)">
                <img
                  v-if="product.activeBuy"
                  class="price-container-simbol"
                  src="https://profsvarka.msk.ru/wp-content/uploads/2022/04/%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%B0%D1%8F-%D0%B3%D0%B0%D0%BB%D0%BE%D1%87%D0%BA%D0%B0.png"
                  alt=""
                />
                <h4
                  v-else
                  class="price-container_title price-container_title-buy"
                >
                  {{ $t("main.buy") }}
                </h4>
              </div>
            </div>
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
    ...mapMutations(["ADD_TO_CART", "UPDATE_CART", "ADD_LIKE"]),
    addToCart(product) {
      if (product.activeBuy == false) {
        product.activeBuy = true;
        this.ADD_TO_CART({
          id: product.id,
          count: 1,
          activeBuy: true,
        });
      } else {
        product.activeBuy = false;
        this.ADD_TO_CART({
          id: product.id,
          count: 1,
          activeBuy: false,
        });
      }
    },
    add_like_product(product) {
      console.log(product);
      if (product.like == false) {
        product.like = true;
        this.ADD_LIKE({
          id: product.id,
          like: true,
        });
      } else {
        product.like = false;
        this.ADD_LIKE({
          id: product.id,
          like: false,
        });
      }
    },
  },
  computed: {
    ...mapGetters(["headphones"]),
  },
  mounted() {
    this.UPDATE_CART();
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
.navbar_container {
  display: flex;
  justify-content: space-between;
}
.icons-container {
  margin-right: 12%;
}
.img-cart {
  cursor: pointer;
}
.img-like {
  margin-right: 45px;
  cursor: pointer;
}
.title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #838383;
  margin-top: 43px;
  margin-left: 12.6%;
}
.title-two {
  margin-top: 18px;
}
.container-products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.product {
  position: relative;
  width: 350px;
  height: 407px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 10px;
}
.product_img {
  width: 200px;
  display: block;
  margin: auto;
  margin-top: 20px;
}
.price-container_title {
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #1c1c27;
  top: 300px;
  left: 22px;
}
.price-container_title-buy {
  cursor: pointer;
  transition: 0.5s;
  top: 352px;
  left: 263px;
}
.price-container_title-buy:hover {
  color: #ffa542;
}
.price-container_price {
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #ffa542;
  top: 300px;
  right: 22px;
}
.price-container_old-price {
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-decoration-line: line-through;
  color: #ffce7f;
  top: 320px;
  right: 30px;
}
.price-container-rate_img {
  position: absolute;
  width: 23px;
  height: 22px;
  top: 352px;
  left: 22px;
}
.price-container-rate_num {
  position: absolute;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  color: #838383;
  top: 352px;
  left: 55px;
}
.price-container-simbol {
  width: 30px;
  position: absolute;
  top: 352px;
  right: 50px;
  cursor: pointer;
}
.heart {
  margin-top: 10px;
  margin-left: 10px;
  width: 35px;
  cursor: pointer;
}
.heart-active {
  margin-top: 10px;
  margin-left: 8px;
  width: 40px;
  cursor: pointer;
}
</style>