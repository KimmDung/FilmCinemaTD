<template>
    <div class="container">
        <header>MUA VÉ ONLINE</header>

        <form action="#" class="select">
            <div class="selectmot">
                <select class="select_group" id="phim">
                    <option class="optionDiv" hidden value="">Chọn phim</option>
                </select>
                <select class="select_group" id="rap">
                    <option class="optionDiv" hidden value="">Chọn rạp</option>
                </select>
            </div>  
            <div class="selectmot">
                <select class="select_group" id="ngay">
                    <option class="optionDiv" hidden value="">Chọn ngày</option>
                </select>
                <select class="select_group" id="suatchieu">
                    <option class="optionDiv" hidden value="">Chọn suất chiếu</option>
                </select>
            </div>
            <button @click="this.$router.push({ name: 'chooseseat'});">Chọn</button>
           
        </form>
        </div>
</template>
<script>
var datve = {
    "Người vợ cuối cùng": {
        "Rạp một": {
            "11/11": ["9:00", "12:15", "15:15"],
            "12/11": ["8:00", "22:10"]
        },
        "Rạp hai": {
            "10/11": ["8:10", "12:55"],
            "11/11": ["7:55", "19:30"],
            "12/11": ["8:25", "12:55"]
        }
    },
    "Yêu lại vợ ngầu": {
        "Rạp Trà Vinh": {
            "9/11": ["15:00", "20:15", "22:00"],
            "12/11": ["8:20", "21:30", "22:00"]
        },
        "Rạp Cần Thơ": {
            "10/11": ["8:00", "12:00", "21:05"],
            "13/11": ["8:25", "12:55"]
        }
    },

    "Oán hồn tử địa": {
       "Rạp Vincom": {
            "9/11": ["15:00", "20:15", "22:00"],
            "12/11": ["8:20", "21:30", "22:00"]
        },
        "Rạp Sheraton": {
            "15/11": ["9:00", "12:15", "15:15"],
            "16/11": ["7:55", "19:30"]
        }
    },

    "Đất rừng phương Nam": {
       "Rạp Châu Thành": {
            "20/11": ["15:00", "20:15", "22:00"],
            "22/11": ["8:20", "21:30", "22:00"]
        },
        "Rạp An Phú": {
            "11/11": ["9:00", "12:15", "15:15"],
            "12/11": ["7:55", "19:30"]
        }
    }
    
}

window.onload = function(){
    const selectPhim = document.getElementById('phim'),
        selectRap = document.getElementById('rap'),
        selectNgay = document.getElementById('ngay'),
        selectSuatchieu = document.getElementById('suatchieu'),
        selects = document.querySelectorAll('select')

        selectRap.disabled = true
        selectNgay.disabled = true
        selectSuatchieu.disabled = true

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let phim in datve){
            // console.log(phim);
            selectPhim.options[selectPhim.options.length] = new Option(phim, phim)
        }


        // phim change
        selectPhim.onchange = (e) =>{
            
            selectRap.disabled = false
            selectNgay.disabled = true
            selectSuatchieu.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectRap.length = 1
            selectNgay.length = 1
            selectSuatchieu.length = 1

            for(let rap in datve[e.target.value]){
                // console.log(rap);
                selectRap.options[selectRap.options.length] = new Option(rap, rap)
            }
        }

        // rap change
        selectRap.onchange = (e) =>{
            selectNgay.disabled = false
            selectSuatchieu.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectNgay.length = 1
            selectSuatchieu.length = 1

            for(let ngay in datve[selectPhim.value][e.target.value]){
                // console.log(ngay);
                selectNgay.options[selectNgay.options.length] = new Option(ngay, ngay)
            }
        }

        // change ngay
        selectNgay.onchange = (e) =>{
            selectSuatchieu.disabled = false

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })
            
            selectSuatchieu.length = 1

            let suatchieu = datve[selectPhim.value][selectRap.value][e.target.value]
            
            for(let i=0; i<suatchieu.length; i++){
                selectSuatchieu.options[selectSuatchieu.options.length] = new Option(suatchieu[i], suatchieu[i])
            }
        }
}

</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Roboto&display=swap');
.container{
    text-align: center;
    min-height: 200px;
    background-color: #3d5356;
    width: 100%;
    display: flex;
    justify-content: center; 
    align-items: center; 
    font-family: 'Roboto', sans-serif;
}
.optionDiv{
 background-color: aqua ;   
}
.container header{
    padding-top: 30px;   
    font-size: 3vw;
    margin-bottom: 40px;
    letter-spacing: 1.2px;
    color: #EEEEEE;
}
#phim, #rap, #ngay, #suatchieu, #selects option {
    display: block;
    padding: 5px;
    border-radius: 5px;
    border-color: yellow 2px solid;
    background-color: rgb(241, 238, 238);
    color: rgb(10, 10, 11);
    width: 50%;
    margin: 0 1rem;
}

form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
}

form select{
    width: 450px;
    padding: 15px;
    padding-left: 10px;
    /* background-color: red; */
    border-radius: 10px;
    border: none;
    outline: none;
    font-size: 1.2rem;
    box-shadow: 0 5px 10px 0 rgb(0,0,0,0.25);
    cursor: pointer;
}
.selectmot{
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 1rem;

}
.select_group{
    width: 50%;
    padding: 0.3rem;
}

button {
    font-size: 1.2rem;
    background-color: rgb(246, 246, 243);
    padding: 8px 15px;
    border-radius: 8px;
}

</style>