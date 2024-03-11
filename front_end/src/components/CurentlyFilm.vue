<template>
    <h3 class="title">Phim đang chiếu</h3>
    <div class="inner flex">
        <!-- <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item flex active" data-bs-interval="10000">
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <div class="carousel-item flex" data-bs-interval="2000">
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <div class="carousel-item flex">
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://homepage.momocdn.net/img/momo-upload-api-230802111531-638265717315582931.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> -->
        <div class="cart">
                        <img src="https://i.pinimg.com/564x/ce/79/78/ce797881f9f18cafcd5db1954dda68ce.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://i.pinimg.com/564x/79/bd/eb/79bdeb0c60aa2d61d5e1bb07360485c7.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://i.pinimg.com/564x/07/6f/07/076f075e5c28ab0c580cfdb38e4ceec3.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://i.pinimg.com/564x/51/3e/cd/513ecdfb7379ae915e715bb017b01940.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="cart">
                        <img src="https://i.pinimg.com/564x/1f/d5/ca/1fd5ca40bd674554ffbd30b16effa5d4.jpg" class="d-block w-100" alt="...">
                    </div>
    </div>
</template>
<script>

</script>
<style scoped>
    .cart{
        height: 400px;
        width: 200px;
        border-radius: 5px;
    }
    .cart > img{
        height: 320px;
        width: 100%;
    }
    .title{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
    }
    .flex{
        display: flex;
        gap: 3rem;
        justify-content: center;
        align-items: center;
    }
</style>