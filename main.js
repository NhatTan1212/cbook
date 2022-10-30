var navMainMenu = document.querySelector(".nav-main-menu")
            window.onscroll = ()=>{
                this.scrollY > 20 ? navMainMenu.classList.add("stricky"):
                navMainMenu.classList.remove("stricky")
            }


            // var sliderImg = document.querySelector('.slider-img');
            // var images = ['banner2.png', 'banner3.png'];
            // var i = 0;

            // function  prev() {
               
            //     if(i<=0) i = images.length;
            //     i--;

            //     return setImg();
            // }

            // function next() {
            //     if(i>=images.length-1) i = -1;
            //     i++;
            //     return setImg();
            // }

            // function setImg() {
                
            //     return sliderImg.setAttribute('src', 'images/' + images[i]);
                

            // }

            


            window.addEventListener("load", function() {
                const banner = document.querySelector(".banner");
                const banner_slider = document.querySelector(".banner-slider");
                const prebtn = document.querySelector(".banner-pre");
                const nextbtn = document.querySelector(".banner-after");
                const banner_slider_items = document.querySelectorAll(".banner-slider-item");
                const slider_item_width = banner_slider_items[0].offsetWidth;
                const slider_length = banner_slider_items.length;


                let positionX = 0;
                let index = 0;
                nextbtn.addEventListener("click", function() {
                    changeSlide(1);
                });
               
                prebtn.addEventListener("click", function() {
                    changeSlide(-1);
                });
                
                function changeSlide (direction) {
                    if (direction ==1) {
                        if (index >= slider_length-1) {
                            positionX = positionX + slider_item_width*index;
                            banner_slider.style = 'transform: translateX('+positionX+'px)' ;
                            index -= 3;
                        } else {
                            
                            index++;
                            positionX = positionX - slider_item_width;
                            banner_slider.style = 'transform: translateX('+positionX+'px);' ;
                        }
                    
                    }   else if (direction == -1) {
                        if (index <= 0) {
                    
                            positionX = positionX - slider_item_width*(slider_length-1);

                            banner_slider.style = 'transform: translateX('+positionX+'px)' ;
                            index += 3;
                            
                        } else {
                            
                            index--;
                            positionX = positionX + slider_item_width;
    
                            banner_slider.style = 'transform: translateX('+positionX+'px);' ;
                        }
                    }

                }

                var count = 1;
            //    setInterval(function(){
            //     changeSlide(1);
            //    }, 10000);
                

            });