
<template>
    <ul class="header">
        <li class="searchBox">
            <div class="searchOnHeader">
                <input  type="text" 
                        id="search" 
                        name="search" 
                        placeholder="Nhập thông tin tìm kiếm"
                        >
                <div class="searchIcon">
                    <label for="search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    </label>
                </div>
            </div>
<!-- result search -->
        <div class="Search">

            <!-- <div class="resultSearch"
                 
                 >
                 <div class="bodySearch"
                      v-for="(product,i) in filteredList"
                      :key="i"
                      @click="checkProduct(product._id)"    
                    >
                    <div class="contentSearch">
                        <div class="nameProduct">
                            <p>{{product.name}}</p>
                        </div>    
                        <div class="bodyProduct">
                            <div class="typeProduct">
                                {{product.habitat}}
                            </div>
                            <div class="quantity">
                                <p>còn lại {{product.quantity}}</p>
                            </div>
                        </div>  
                        
                    </div>
                    <div class="imgSearch">
                        <img :src="product.img" alt="">
                    </div>
                 </div>
                    
            </div> -->
            
        </div>    
           
           

<!-- ----------------------------------------- -->
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Phim
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Phim đang chiếu</a></li>
            <li><a class="dropdown-item" href="#">Phim sắp chiếu</a></li>
            <li><a class="dropdown-item" href="#">Suất chiếu đặc biệt</a></li>
          </ul>
        </li>
       
        <li class="login" 

            >
            <p>
                <i class="fa-regular fa-user"></i>
                Đăng nhập
            </p>
        </li>
        <li class="register" 

            >
            <p>
                <i class="fa-regular fa-address-card"></i>
                Đăng ký
            </p>
        </li>
        <li class="cart"
            >
            <p>
                <i class="fa-solid fa-cart-shopping"></i>
                Vé của bạn
            </p>
        </li>
        <li class="logout"
            >
            <p>
                <i class="fa-solid fa-right-from-bracket"></i>
                Đăng xuất
            </p>
        </li>
        <li class="infoUser"
            >
                <div class="imgUser">
                    <!-- <div class="dotState"></div> -->
                </div>
                <div class="infoUsers">
                </div>
         
        </li>
        <li class="iconContact">
            <i class="fa-brands fa-square-facebook"></i>
            <i class="fa-brands fa-youtube"></i>
        </li>
    </ul>
    <div class="posterDiv">
        <img class="posterImg" src="https://cinestar.com.vn/pictures/1920-x-340-2.jpg"/>
    </div>
    <Bookstick/>
    
</template>
  
<script>
import Bookstick from './Bookstick.vue';
  export default {
    name: 'Nav',
    components:{
        Bookstick
    }
  }
</script>
  
  

<style scoped>
h5,p {
        margin: 0px;
    }
    .posterImg{
        width: 100%;
    }
    .optionDiv{
        display: flex;
    }
    .posterDiv{
        width: 100%;
        margin-top:40px;
    }
    .header {
        color : #fff;
        /* height: 38px; */
        width: 100%;
        background-color:#3d5356 ;
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: space-evenly;
        text-align: center;
        font-size: 11px;
        position:fixed;
        top:0;
        z-index:10;
    }
    .searchOnHeader{
        display:flex;
        align-items: center;
        height: 100%;

    }
    .searchBox{
        /* display: flex; */
        /* position:relative; */
        height: 100%;
        align-items: center;
    }
    .searchBox input{
        width: 300px;
        height:25px;
        
        text-align: center;
    }
    .searchIcon i{
        padding :0 7px;
        /* color:darkcyan; */
        font-weight: bold;
    }
    /* .logout{
        display:none;
    } */

  
    .dotState{
        background-color: #15a85f;
        height:12px;
        width: 12px;
        border-radius:12px;
        box-shadow: 0px 0px 10px 4px rgba(255, 255, 255, 0.812);
    }
    /* .infoUser{
        height:20px;
    } */
    .cart,
    .login,
    .register,
    .logout {
        align-items: center;

        display:flex;
        font-size: 13px;
        padding:12px 10px;
        height:100%;
        /* overflow: ; */
        /* display: flex;
        align-items: center; */
    }
    .infoUser{
        align-items: center;

        display:flex;
        font-size: 13px;
        padding:7px;
        height:100%;
    }
    .cart:hover,
    .login:hover,
    .register:hover,
    .infoUser:hover,
    .logout:hover{
        /* color:chocolate; */
        border-radius: 14px  14px;
        background-color: #345da7;
        color:#e5efc1;
        /* font-size:15px; */
        font-weight: bold;
    }
    .cart>p{
        position: relative;
    }
    .quantityItem{
        z-index: 1;
        position: absolute;
        height: 20px;
        width: 20px;
        top: -9px;
        left: -15px;
        border-radius: 20px;
        display: flex;
        color: #fff;
        background-color: #ffc107;
        align-items: center;
        justify-content: center;
    }
    .iconContact{
        font-size: 25px;
    }
    .iconContact > i{
        padding:0 5px;
    }


    .Search{
        max-height: 500px;
        overflow-y: scroll;
        position: absolute;
    }
    .resultSearch{
      height:100%;
    }
    .bodySearch{
        /* top: 33px; */
        background-color: #fff;
        /* position: absolute; */
        /* left: 1px; */
        display:flex;
        color:black;
        width:92%;
        border:2px solid #345da7;
        border-radius: 10px;
        /* height:60px; */
        justify-content: space-between;
        width:500px;

    }
    .bodySearch:hover{
        box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.812);
        background-color: rgba(255, 255, 255, 0.747);

    }
    .bodyProduct{
        display:flex;
        margin-bottom: 10px;
        /* padding-bottom: 10px; */
    }
    .contentSearch{
        padding:2px 10px 10px 10px;
        text-align: start;
    }
    .nameProduct{
        /* height:100%; */
        font-size:18px;
    }
    
    .quantity{

    }
    /* .bodySearch{
        height:100px;
    } */
    .imgSearch{
        padding:3px 10px 3px 0;

        /* height:100%;
        width:100%; */
    }
    .imgSearch>img{
        height:100%;
        width: 70px;
        /* width: 100%; */
    }
    .imgUser{
        position:relative;
    }
    .dotState{
        position:absolute;
        bottom:-3px;
    }
    .imgUser>img{
        height:30px;
    }
</style>