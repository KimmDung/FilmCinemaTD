<template>
  <div class="modalForm"
      @click.self="onCloseFormChooseSeat">
      <div class="formChooseSeat">
          <div class="headerForm">
              <div class="logo">
                  <img src="../assets/logo.png" alt="">
              </div>
              <div class="home">
                  <p @click="gotoHome"><i class="fa-solid fa-house"></i></p>
              </div>
          </div>

          <div class="formMain">
              <div class="titleForm">
                  <h2>
                      MÀN HÌNH
                  </h2>
                  <!-- <p>
                      Bạn có muốn đăng nhập?
                      <span class="Login" @click.self="gotoLogin">  Login </span>
                  </p> -->
              </div>

              <div class="contentForm">
                  <form class="formContentLogin"
                        @submit.prevent="register"
                      >
                      <div class="seats">
                        <div class="row">
                          <div class="empty">A1</div>
                          <div class="seat">A2</div>
                          <div class="seat">A3</div>
                          <div class="empty">A4</div>
                          <div class="empty">A5</div>
                          <div class="seat">A6</div>
                          <div class="seat">A7</div>
                          <div class="seat">A8</div>
                        </div>
                        <div class="row">
                            <div class="seat">B1</div>
                            <div class="empty">B2</div>
                            <div class="seat">B3</div>
                            <div class="seat">B4</div>
                            <div class="empty">B5</div>
                            <div class="seat">B6</div>
                            <div class="seat">B7</div>
                            <div class="seat">B8</div>
                        </div>
                        <div class="row">
                            <div class="seat">C1</div>
                            <div class="seat">C2</div>
                            <div class="seat">C3</div>
                            <div class="empty">C4</div>
                            <div class="seat">C5</div>
                            <div class="empty">C6</div>
                            <div class="seat">C7</div>
                            <div class="seat">C8</div>
                        </div>
                        <div class="row">
                            <div class="empty">D1</div>
                            <div class="seat">D2</div>
                            <div class="seat">D3</div>
                            <div class="seat">D4</div>
                            <div class="seat">D5</div>
                            <div class="empty">D6</div>
                            <div class="seat">D7</div>
                            <div class="seat">D8</div>
                        </div>
                        <div class="row">
                            <div class="seat">E1</div>
                            <div class="seat">E2</div>
                            <div class="empty">E3</div>
                            <div class="seat">E4</div>
                            <div class="seat">E5</div>
                            <div class="seat">E6</div>
                            <div class="empty">E7</div>
                            <div class="seat">E8</div>
                        </div>    
                    </div>
                  </form>
              </div>
              <div class="content_form">
                <div class="booking-info">
                    <h2>Thông tin đặt chỗ</h2>
                    <p>Chỗ ngồi đã chọn: <span id="selected-seat"></span></p>
                    <button @click="this.$router.push({ name: 'purchase'});">Đặt chỗ</button>
                </div>
      </div>
          </div> 

      </div>
  </div>
</template>
<script>
 export default {
  props: [
      "handleRegister"
  ],
  data() {
      return {
          username: "",
          psw: "",
          email: "",
      }
  },
  methods: {
      onCloseFormChooseSeat(){
          this.$emit("cancelFormChooseSeat");
      },
      gotoHome(){
          this.$router.push({ name: 'home'});
      },
      gotoLogin(){
          this.$emit("gotoLogin");
      },

      register(){
          this.handleRegister(this.username,this.psw,this.email);
      }
  },
 }
</script>

<style scoped>
  p{
      margin:0px;
      padding:0px;
  }
  .modalForm{
      background-color: rgba(0, 0, 0, 0.475);
      position: fixed;
      top:0;
      left:0;
      right:0;
      bottom: 0;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 3;
      color: #B0E3C7;
  }
  .formChooseSeat{
      background-color: #3d5356;
      height: 600px;
      width: 600px;
      /* z-index: 9; */
      box-shadow: 7px 7px 5px 0px rgba(255, 255, 255, 0.194);
  }
  .headerForm{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top:10px;
  }
  .headerForm .home{
      font-weight: bold;
  }
  .logo > img{
      height: 70px;
      width: 150%;
      transform: scale(2);
      margin-left: 30px;
  }
  .home{
      margin-right:20px;
      cursor:pointer;
      height:30px;
  }

  .formMain{
      padding: 30px;
  }
  .titleForm > h2{
      font-weight: bold;
      text-align: center;
      background-color: #020505;
      margin-top: 0px;
  }
  .seats {
  display: flex;
  flex-direction: column;
  }
  .row {
  width: 600px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;

  }
  .seat {
  width: 40px;
  height: 30px;
  border: 1px solid #ccc;
  margin-right: 20px;
  cursor: pointer;
  text-align: center;
  }
  .seat:hover{
    background-color: #4CAF50;
    box-shadow: 2px solid #020505;
  }
  .empty {
  background-color: #eee;
  width: 40px;
  height: 30px;
  border: 1px solid #ccc;
  margin-right: 20px;
  text-align: center;
  color: #020505;
  }  
    

  .content_form{
    padding: 5px 0px;

}
  
  .booking-info {
  text-align: center;
  }

  button {
    margin-top: 15px;
  padding: 10px 20px;
  background-color: #4CAF50;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 15px 2px;
  cursor: pointer;
  }


</style>