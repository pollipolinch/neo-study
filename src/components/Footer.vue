<template>
        <footer>
      <div class="footer-container">
        <div @click="goToHomePage" class="logo footer-logo">QPICK</div>
        <div class="footer-container_group">
          <ul>
            <li><a class="footer-item" href=""> {{ $t('footer.item-one') }}</a></li>
            <li @click="goToCart"><a class="footer-item" href="">{{ $t('footer.item-two') }}</a></li>
            <li><a class="footer-item" href="">{{ $t('footer.item-three') }}</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a class="footer-item footer-item-right" href=""
                >{{ $t('footer.item-four') }}</a
              >
            </li>
          </ul>
          <div class="footer-lang-container">
            <img class="footer-lang-img" src="../assets/Group.png" alt="" />
            <span @click="changeLang('ru')" :class="lang_ru ? 'footer-lang-active':'footer-lang'">Рус</span>
            <span @click="changeLang('eng')" :class="lang_eng ? 'footer-lang-active':'footer-lang'">Eng</span>
          </div>
        </div>
        <div class="footer-icons-container">
          <a href="https://vk.com/" target="_blank"><img class="footer-icons-img" src="../assets/VK.png" alt="icon-vk" /></a>
          <a href="https://telegram.org/" target="_blank"><img class="footer-icons-img" src="../assets/Telegram.png" alt="icon-tg" /></a>
          <a href="https://www.whatsapp.com/?lang=ru" target="_blank"><img class="footer-icons-img" src="../assets/Whatsapp.png" alt="icon-wa" /></a>
        </div>
      </div>
    </footer>
</template>
<script>
import {i18n} from '../main.js'
export default {
  data() {
    return {
     lang_ru:true,
     lang_eng:false
    };
  },
  methods: {
    changeLang(ell){
      if(ell=='ru'){
        this.lang_eng = false
        this.lang_ru = true
        this.$i18n.locale='ru'
      }else{
        this.lang_eng = true
        this.lang_ru = false
        this.$i18n.locale='eng'
      }
    },
    goToCart() {
      this.$router.push("/cart");
    },
    goToHomePage(){
      this.$router.push("/");
    }
  },
  computed: {

  },
  mounted() {},
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
.footer-container {
  width: 1110px;
  height: 149px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px 30px 0px 0px;
  margin: auto;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
.footer-logo {
  margin-left: 3%;
  padding-top: 30px;
}
.footer-item {
  text-decoration: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 21px;
  color: #000000;
  display: inline-block;
  margin-top: 12px;
  margin-left: 70px;
  transition: 0.5s;
}
.footer-item-right {
  margin-top: 35px;
  margin-left: 15px;
}
.footer-item:hover {
  color: #ffa542;
}
.footer-container_group {
  margin-top: 20px;
}
.footer-lang-container {
  margin-top: 30px;
}
.footer-lang-img {
    margin-top: 5px;
    margin-left: 10px;
}
.footer-lang-active {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #ffa542;
  margin-left: 17px;
  cursor: pointer;
}
.footer-lang {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #101010;
  margin-left: 17px;
  cursor: pointer;
}
.footer-icons-container{
    margin-top: 30px;
    margin-right: 25px;
}
.footer-icons-img{
    cursor: pointer;
    margin-left: 18px;
}
</style>