<template>
    <div class="modalForm">
        <div class="Purchase">
            <form action="/thanh-toan" method="post">
                <label class="info" for="tenPhim">Tên phim:</label>
                <input type="text" id="tenPhim" name="tenPhim" required>
                <br><br>

                <label class="info" for="ngayChieu">Ngày chiếu:</label>
                <input type="date" id="ngayChieu" name="ngayChieu" required>
                <br><br>

                <label class="info" for="suatChieu">Suất chiếu:</label>
                <select id="suatChieu" name="suatChieu" required>
                    <option value="suat1">Suất 1 - 10:00 AM</option>
                    <option value="suat2">Suất 2 - 2:00 PM</option>
                    <option value="suat3">Suất 3 - 6:00 PM</option>
                </select>
                <br><br>

                <label class="info" for="soVe">Số lượng vé:</label>
                <input type="number" id="soVe" name="soVe" required>
                <br><br>

                <label class="info" for="choNgoi">Chỗ ngồi:</label>
                <input type="text" id="choNgoi" name="choNgoi" required>
                <br><br>

                <input class="button" type="submit" value="Thanh toán">
            </form>
           </div>

        <!-- <div class="successfullyPay">
         v-if="isshowsuccessfullyPay"
        
            <div class="titlesuccessfullPay">
                <img src="https://funtura.in/lko/wp-content/themes/funtura/assets/images/success.svg" alt="">
                <h5 class="colorgreen">Hóa đơn đã được thanh toán</h5>
                <p class="colorGrey">Hóa đơn của bạn đã được xử lý!</p>
                <p class="colorGrey" style="border-bottom:1px solid #aeaeb0; padding-bottom:10px">Vui lòng xem chi tiết bên dưới</p>
            </div>
            <p style="padding:10px 0px 15px 0px">Mã số giao dịch :<span class="colorBlue">{{this.$store.state.idCart}}</span></p>
            <div class="bodysuccessfullPay ">
                <h5 >Tổng số lượng sản phẩm <span class="colorRed" style="text-align: end;">{{this.$store.state.countItemInCart}}</span></h5>
                <h5 >Tổng số tiền hóa đơn <span class="colorRed" style="text-align: end;">{{sumTotalProduct()}}  <small>VND</small></span></h5>
                <h5>Thanh toán bởi <span class="colorRed" style="text-align:end">{{this.$store.state.user.username}}</span></h5>
            </div>
            <button class="confirmPay"
                    @click="onCloseConFirmPay"
                    >
                    Xác Nhận
            </button>
        </div> -->
    </div>              
</template>
<script>
   export default {
    components:{
        },
    data() {
        return {
            countItem:0,
            listOrders: [],
            isshowEmptyItem: true,
            count: 0,
            isshowsuccessfullyPay: false,
        }
    },
    created() {
        this.getOrders();
    },
    methods: {
        changeCounter(num){
            this.count+=+num;
            !isNaN(this.count) && this.count > 0 ? this.count : this.count = 0;
        },
        async getOrders(){
            try {
                const result = await axios.get('https://web-ocean-business-mevn.vercel.app/api/cart/get/product',{
                    params: {
                        idCart : this.$store.state.idCart
                    }
                });
                // console.log(result.data);
                this.listOrders = result.data;
                // console.log(this.listOrders);
            } catch (error) {
                console.log(error);
            }
        },
        sumTotalProduct(){
            var sum = 0;
            this.listOrders.forEach(item => {
                sum+=(item.quantity*item.price);
            })
            // console.log(sum);
            return sum;
        },


        async deleteItem(id){
            try {
                const resultDelete = await axios.delete('https://web-ocean-business-mevn.vercel.app/api/cart/delete/product',{
                    params: {
                        idProduct: id,
                    }
                });
                if (resultDelete){
                    location.reload();
                }
            } catch (error) {
                console.log(error);
            }
        },

        countItemInCart(){
            var count=0;
            this.listOrders.forEach(item => {
                count++;
            })
            if (count==0) {this.isshowEmptyItem = true;} else {this.isshowEmptyItem = false;}
            this.countItem = count;
            return count;
        },

        async handlePay(){
            try {
                if (this.$store.state.countItemInCart==0) {
                    alert("Chọn sản phẩm để thanh toán");
                } else {
                    const result = await axios.delete('http://localhost:4000/api/cart/pay/product',{
                    params:{
                        idCart : this.$store.state.idCart,
                    }
                    });
                    this.isshowsuccessfullyPay = true;
                }
                
            } catch (error) {
                console.log(error);
            }
        },
        onCloseConFirmPay(){
            this.isshowsuccessfullyPay = false;
            location.reload();
            this.$router.push({name:'Home'});
        }

    },
   }
</script>
<style scoped>
    p{
        margin:0px;
    }
    .colorRed{
        color:#C92127;
    }
    .colorgreen{
        color:#20be79;
    }
    .colorBlack{
        color:black;
    }
    .colorBlue{
        color:#1564e8;
    }
    .colorGrey{
        color:#aeaeb0;
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
    .Purchase{
        /* position: fixed;
        top:27px;
        right:0px;
        background-color: #02b6ce;
        margin:120px 40px 0 40px;
        flex:1;
        margin:20px 70px 20px 20px; 
        padding:20px;
        border-radius: 20px; */
        background-color: #3d5356;
        height: 600px;
        width: 600px;
        /* z-index: 9; */
        box-shadow: 7px 7px 5px 0px rgba(255, 255, 255, 0.194);

    }
    .imgCard{
        height:110px;
        flex:1;
    }
    .imgCard>img{
        max-width:100%;
        height:100%;
    }
    .Purchase>h4{
        border-bottom: 1px solid #fff;
        margin-bottom: 0;
    }
    
    .btn-pay{
        background-color: #C92127;
        color:#fff;
        border:2px solid #fff;
        border-radius: 10px;
        width:100%;
        padding:15px 0;
        /* font-weight: bold; */
    }
    .btn-pay:hover{
        font-weight: bold;
        background-color:limegreen;
        box-shadow: 2px 2px 5px 0px rgba(255, 255, 255, 0.582);
    }
    .checkAllProduct{
        height: 20px;
        width: 20px;

    }
    .checkbox,
    .imgCard,
    .bodyCard,
    .quantityBuyCard,
    .deleteCard{
        padding:0px 10px;
    }
    label.info{
        color: #000000;
        padding-right: 10px;

    }
    .checkbox{

    }
    .imgCard{

    }
    .bodyCard{
        flex:2;
    }
    .delete>i{
        font-size:30px;
        color:#fff;
    }
    .delete>i:hover{
        color:#C92127;
        font-weight: bold;
        
    }
    .quantityBuyCard{
        flex:1;
        /* border:1px solid #fff; */
        border-radius: 6px;
        background-color: #02b6ce;
    }
    .quantityBuyCard>a{
        color:#fff;
        
    }
    .quantity{
        width:20px;
        border:none;
        background-color: transparent;
        text-align: center;
        color:#C92127;

    }
    .successfullyPay{
        background-color: #fff;
        color:black;
        position:absolute;
        top:150px;
        left:650px;
        padding:20px;
        text-align: center;
        border-radius: 10px;
    }
    .bodysuccessfullPay{
        text-align: start;
    }
    .confirmPay{
        padding:10px;
        border: 1px solid #20be79;
    }
    .confirmPay:hover{
        font-weight: bold;
        background-color: #20be79;
        color:#fff;
    }
</style>
