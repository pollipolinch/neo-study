import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      headphones: [
        {
          id: 1,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-1.webp",
          title: "Apple BYZ S852I",
          price: 2927,
          oldprice: 3527,
          rate: 4.7,
          activeBuy: false,
          count: 1,
          like: false
        },
        {
          id: 2,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-2.webp",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
          activeBuy: false,
          count: 1,
          like: false
        },
        {
          id: 3,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-3.webp",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
          activeBuy: false,
          count: 1,
          like: false
        },
        {
          id: 4,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-1.webp",
          title: "Apple BYZ S852I",
          price: 2927,
          rate: 4.7,
          activeBuy: false,
          count: 1,
          like: false
        },
        {
          id: 5,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-2.webp",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
          activeBuy: false,
          count: 1,
          like: false
        },
        {
          id: 6,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-3.webp",
          title: "Apple EarPods",
          price: 2327,
          rate: 4.5,
          activeBuy: false,
          count: 1,
          like: false
        },
        {
          id: 7,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-6.webp",
          title: "Apple AirPods",
          price: 9527,
          rate: 4.7,
          activeBuy: false,
          count: 1,
          like: false
        },
        {
          id: 8,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-5.webp",
          title: "GERLAX GH-04",
          price: 6527,
          rate: 4.7,
          activeBuy: false,
          count: 1,
          like: false
        },
        {
          id: 9,
          img: "https://raw.githubusercontent.com/pollipolinch/images/main/img/img-4.webp",
          title: "BOROFONE BO4",
          price: 7527,
          rate: 4.7,
          activeBuy: false,
          count: 1,
          like: false
        }
      ],
      products_in_cart: JSON.parse(sessionStorage.getItem('cart')) || [],
      buy_products: [],
      liked_product: JSON.parse(sessionStorage.getItem('like')) || [],
    }
  },
  mutations: {
    ADD_LIKE(state, payload){
      console.log(payload)
      let like = sessionStorage.getItem('like')
      if (payload.like == true) {
        if (like) {
          state.liked_product = JSON.parse(sessionStorage.getItem('like'))
          state.liked_product.push(payload)
          sessionStorage.setItem('like', JSON.stringify(state.liked_product))
        } else {
          sessionStorage.setItem('like', JSON.stringify([payload]))
        }
      } else {
        state.liked_product = JSON.parse(sessionStorage.getItem('like'))
        let product = state.liked_product.findIndex((ell) => ell.id == payload.id)
        state.liked_product.splice(product, 1)
        sessionStorage.setItem('like', JSON.stringify(state.liked_product))
      }
    },
    ADD_TO_CART(state, payload) {
      console.log(payload.activeBuy)
      let cart = sessionStorage.getItem('cart')
      if (payload.activeBuy == true) {
        if (cart) {
          state.products_in_cart = JSON.parse(sessionStorage.getItem('cart'))
          state.products_in_cart.push(payload)
          sessionStorage.setItem('cart', JSON.stringify(state.products_in_cart))
        } else {
          sessionStorage.setItem('cart', JSON.stringify([payload]))
        }
      } else {
        state.products_in_cart = JSON.parse(sessionStorage.getItem('cart'))
        let prod = state.products_in_cart.findIndex((ell) => ell.id == payload.id)
        state.products_in_cart.splice(prod, 1)
        sessionStorage.setItem('cart', JSON.stringify(state.products_in_cart))
      }
    },
    UPDATE_CART(state) {
      state.headphones.map((ell) => ell.activeBuy = false)
      state.headphones.map((ell) => ell.like = false)
      let cart = JSON.parse(sessionStorage.getItem('cart'))
      let like =JSON.parse(sessionStorage.getItem('like'))
      if (cart) {
        for (let i = 0; i < cart.length; i++) {
          for (let j = 0; j < state.headphones.length; j++) {
            if (cart[i].id == state.headphones[j].id) {
              state.headphones[j].activeBuy = true

            }
          }
        }
      }
      if (like) {
        for (let i = 0; i < like.length; i++) {
          for (let j = 0; j < state.headphones.length; j++) {
            if (like[i].id == state.headphones[j].id) {
              state.headphones[j].like = true

            }
          }
        }
      }
    },
    BUY_PRODUCTS(state, payload) {
      let cart = JSON.parse(sessionStorage.getItem('cart'))
      let newArr = []
      if (payload) {
        for (let j = 0; j < cart.length; j++) {
          if (cart[j].id == payload.id) {
            cart[j].count = payload.count
          }
        }
        sessionStorage.setItem('cart', JSON.stringify(cart))
      }
      if (cart) {
        for (let i = 0; i < cart.length; i++) {
          for (let j = 0; j < state.headphones.length; j++) {
            if (cart[i].id == state.headphones[j].id) {
              state.headphones[j].count = cart[i].count
              newArr.push(state.headphones[j])
            }
          }
        }
      }
      newArr.map((ell) => ell.sum = ell.count * ell.price)
      state.buy_products = newArr
    },
    DELETE_PRODUCT(state, payload) {
      let product = state.products_in_cart.findIndex((ell) => ell.id == payload)
      state.products_in_cart[product].count = 1
      state.products_in_cart.splice(product, 1)
      sessionStorage.setItem('cart', JSON.stringify(state.products_in_cart))
    }
  },
  actions: {

  },
  getters: {
    headphones: (state) => state.headphones,
    cart: (state) => state.products_in_cart,
    like:(state)=>state.liked_product,
    buy_products: (state) => state.buy_products,
    grandTotal(state) {
      let result = state.buy_products.reduce(function (acc, obj) {
        return acc + obj.price * obj.count;
      }, 0);
      return result
    },
  },
})

export default store