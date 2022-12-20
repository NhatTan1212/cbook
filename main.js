//Scroll Nav
var navMainMenu = document.querySelector(".nav-main-menu")
            window.onscroll = ()=>{
                this.scrollY > 20 ? navMainMenu.classList.add("stricky"):
                navMainMenu.classList.remove("stricky")
            }

// Slider
var sliderImg = document.querySelector('.slider-img');
var pre = document.querySelector('.banner-pre');
console.log(pre);

var next = document.querySelector('.banner-after');

var images = ['banner2.png', 'banner3.png'];
var index = 0;
            
            

          

            
            function Next() {
              
                function waitChange() {
                    if(index>=images.length-1) index = -1;
                    index++;
      
                        // for (var index = 100; index >=0; index--) {
                        //     // sliderImg.style.opacity = index;
                        //     console.log(index);
                        // }
                    // setTimeout(changeSlide, 700);
        
                    // function changeSlide () {
                          
                        sliderImg.style.animation = 'banner 1s linear';
        
                        const myTimeout = setTimeout(setNull, 1000);
                        function setNull() {
                            sliderImg.style.animation = null;
                                
                        }
    
    
    
                            // setTimeout(setImg, 300);
                        return setImg();
                        
                    // }

                }
                setTimeout(waitChange, 1000);
                next.onclick = function() {
            
                }
                function resertNext() {
                    next.onclick =   Next;
                }
                setTimeout(resertNext, 1000)
                

                    // sliderImg.classList.add('opacity');
                    // sliderImg.classList.toggle('change');
                    // sliderImg.style.transition = 'all 1.5s';
    
              
                };
                next.onclick =   Next;
               
               
            

            pre.onclick = function  pre() {
                    if(index<=0) index = images.length;
                    index--;
          
          
                    // for (var index = 100; index >=0; index--) {
                    //     // sliderImg.style.opacity = index;
                    //     console.log(index);
                    // }
                    // setTimeout(changeSlide, 500);
                 
                    // function changeSlide () {
                   
                    //     sliderImg.style.animation = 'slider .5s linear';
    
                    //     const myTimeout = setTimeout(setNull, 500);
                    //     function setNull() {
                    //         sliderImg.style.animation = null;
                    //     }
    
                    //     setTimeout(setImg, 300);
                    // }

                    setTimeout(changeSlide, 700);
    
                    function changeSlide () {
                      
                        sliderImg.style.animation = 'banner 1s linear';
    
                        const myTimeout = setTimeout(setNull, 1000);
                        function setNull() {
                            sliderImg.style.animation = null;
                            
                        }

                        // setTimeout(setImg, 300);
                        return setImg();
                   
                    }
    
                    // sliderImg.classList.add('opacity');
                    // sliderImg.classList.add('change');
                    // sliderImg.style.transition = 'all 1.5s';
                    
              
                };

                
            function setImg() {
    
                return sliderImg.setAttribute('src', 'images/' + images[index]);
                
            }
              
            
// Search      
    var inputSearch = document.querySelector('input[type="text"]');
    var subSearch = document.querySelector('.sub-search');
    var listItems = [];
    var items = document.querySelectorAll('h3');
    var ulSubSearch = document.querySelector('.ul-sub-search')
    
            console.log(subSearch)

    var itemsLength = items.length;
    console.log(itemsLength)

    // Add items to array
    for(var i = 0; i < itemsLength; i++) {
        listItems.push(items[i].innerText);
    }
    
 
                
    var getInput;
    inputSearch.oninput = function(e) {
        getInput = e.target.value;
        if(getInput != '') {
            subSearch.style.display = 'block';

            var listItemsMatch = listItems.filter(function(namesMatch, i) {
                if(getInput != '')
                return namesMatch.toUpperCase().includes(getInput.toUpperCase());
            });

            ulSubSearch.innerHTML = '';

            var lengthListItemsMatch = listItemsMatch.length;
            for(var i = 0; i<lengthListItemsMatch; i++) {
                switch(listItemsMatch[i]) {
                    case 'Nhà giả kim - Paulo Coelho':
                        ulSubSearch.innerHTML += '<li><a href="product-nha-gia-kim.html"><img src="images/Item-nha-gia-kim.jpg" alt=""> </a></li>';
                        break;
                    case 'Đắc nhân tâm - Dale Carnegie':
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/item-dac-nhan-tam.png" alt=""></a></li>'
                        break;
                    case 'Dám bị ghét - Koga Fumitake & Kishimi Ichiro':                        
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/item-dam-bi-ghet.png" alt=""></a></li>'
                        break;
                    case 'Dám hạnh phúc - Koga Fumitake & Kishimi Ichiro':
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/item-dam-hanh-phuc.png" alt=""></a></li>'
                        break;
                    case 'Thiên tài bên trái kẻ điên bên phải - Cao Minh':
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/tall-thien-tai-ben-trai-ke-dien-ben-phai.png" alt=""></a></li>'
                        break;
                    case 'Tuổi trẻ đáng giá bao nhiêu - Rosie Nguyễn':
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/tall-tuoi-tre-dang-gia-bao-nhieu.png" alt=""></a></li>'
                        break;
                    case 'Thao túng tâm lý - Shannon Thomas, LCSW':    
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/tall-thao-tung-tam-ly.png" alt=""></a></li>'
                        break;
                    case 'Khéo ăn nói sẽ có được thiên hạ - Trác Nhã':    
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/tall-kheo-an-noi-se-co-duoc-thien-ha.png" alt=""></a></li>'
                        break;
                    case 'Một thoáng ta rực rỡ ở nhân gian - Ocean Vương':    
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/tall-mot-thoang-ta-ruc-ro-o-nhan-gian.png" alt=""></a></li>'
                        break;
                    case 'Những tù nhân của địa lý - Tim Marshall':    
                        ulSubSearch.innerHTML += '<li><a href=""><img src="images/tall-nhung-tu-nhan-cua-dia-ly.png" alt=""></a></li>'
                        break;
                
                }
                // console.log(listItemsMatch[i])
                
            }
            
            var listASearch = ulSubSearch.querySelectorAll('li a');
            var listImgSearch = ulSubSearch.querySelectorAll('li a img');
            for(var i = 0; i<listImgSearch.length; i++) {
                listImgSearch[i].classList.add('list-items-search');
                listASearch[i].innerHTML += '<div class="div-content-search"></div>'
                
            }


            var divContentSearch = ulSubSearch.querySelectorAll('.div-content-search');
            console.log(divContentSearch)
            for(var i = 0; i<listImgSearch.length; i++) {
                switch(listItemsMatch[i]) {
                    case 'Nhà giả kim - Paulo Coelho':
                        divContentSearch[i].innerHTML += '<h4>Nhà giả kim</h4>'
                        divContentSearch[i].innerHTML += '<h5>Paulo Coelho</h5>'
                        break;
                    case 'Đắc nhân tâm - Dale Carnegie':
                        divContentSearch[i].innerHTML += '<h4>Đắc nhân tâm</h4>'
                        divContentSearch[i].innerHTML += '<h5>Dale Carnegie</h5>'
                        break;
                    case 'Dám bị ghét - Koga Fumitake & Kishimi Ichiro':                        
                        divContentSearch[i].innerHTML += '<h4>Dám bị ghét</h4>'
                        divContentSearch[i].innerHTML += '<h5>Koga Fumitake & Kishimi Ichiro</h5>'
                        break;
                    case 'Dám hạnh phúc - Koga Fumitake & Kishimi Ichiro':
                        divContentSearch[i].innerHTML += '<h4>Dám hạnh phúc</h4>'
                        divContentSearch[i].innerHTML += '<h5>Koga Fumitake & Kishimi Ichiro</h5>'
                        break;
                    case 'Thiên tài bên trái kẻ điên bên phải - Cao Minh':
                        divContentSearch[i].innerHTML += '<h4>Thiên tài bên trái kẻ điên bên phải</h4>'
                        divContentSearch[i].innerHTML += '<h5>Cao Minh</h5>'
                        break;
                    case 'Tuổi trẻ đáng giá bao nhiêu - Rosie Nguyễn':
                        divContentSearch[i].innerHTML += '<h4>Tuổi trẻ đáng giá bao nhiêu</h4>'
                        divContentSearch[i].innerHTML += '<h5>Rosie Nguyễn</h5>'
                        break;
                    case 'Thao túng tâm lý - Shannon Thomas, LCSW':    
                        divContentSearch[i].innerHTML += '<h4>Thao túng tâm lý</h4>'
                        divContentSearch[i].innerHTML += '<h5>Shannon Thomas, LCSW</h5>'
                        break;
                    case 'Khéo ăn nói sẽ có được thiên hạ - Trác Nhã':    
                        divContentSearch[i].innerHTML += '<h4>Khéo ăn nói sẽ có được thiên hạ</h4>'
                        divContentSearch[i].innerHTML += '<h5>Trác Nhã</h5>'
                        break;
                    case 'Một thoáng ta rực rỡ ở nhân gian - Ocean Vương':    
                        divContentSearch[i].innerHTML += '<h4>Một thoáng ta rực rỡ ở nhân gian</h4>'
                        divContentSearch[i].innerHTML += '<h5>Ocean Vương</h5>'
                        break;
                    case 'Những tù nhân của địa lý - Tim Marshall':    
                        divContentSearch[i].innerHTML += '<h4>Những tù nhân của địa lý</h4>'
                        divContentSearch[i].innerHTML += '<h5>Tim Marshall</h5>'
                        break;
                
                }
            }
            // var liSubSearch = ulSubSearch.querySelector('li')
        
        }
        else if(getInput=='') 
            subSearch.style.display = 'none';
    }

    document.onclick = function(){
        subSearch.style.display = 'none';
    }

   
    
    

  

 

    
           


            // window.addEventListener("load", function() {
            //     const banner = document.querySelector(".banner");
            //     const banner_slider = document.querySelector(".banner-slider");
            //     const prebtn = document.querySelector(".banner-pre");
            //     const nextbtn = document.querySelector(".banner-after");
            //     const banner_slider_items = document.querySelectorAll(".banner-slider-item");
            //     const slider_item_width = banner_slider_items[0].offsetWidth;
            //     const slider_length = banner_slider_items.length;


            //     let positionX = 0;
            //     let index = 0;
            //     nextbtn.addEventListener("click", function() {
            //         changeSlide(1);
            //     });
               
            //     prebtn.addEventListener("click", function() {
            //         changeSlide(-1);
            //     });
                
            //     function changeSlide (direction) {
            //         if (direction ==1) {
            //             if (index >= slider_length-1) {
            //                 positionX = positionX + slider_item_width*index;
            //                 banner_slider.style = 'transform: translateX('+0+'px)' ;
            //                 index -= 3;
            //             } else {
                            
            //                 index++;
            //                 positionX = positionX - slider_item_width;
            //                 banner_slider.style = 'transform: translateX('+positionX+'px);' ;
            //             }
                    
            //         }   else if (direction == -1) {
            //             if (index <= 0) {
                    
            //                 positionX = positionX - slider_item_width*(slider_length-1);

            //                 banner_slider.style = 'transform: translateX('+positionX+'px)' ;
            //                 index += 3;
                            
            //             } else {
                            
            //                 index--;
            //                 positionX = positionX + slider_item_width;
    
            //                 banner_slider.style = 'transform: translateX('+positionX+'px);' ;
            //             }
            //         }

            //     }

            //     var count = 1;
            //    setInterval(Next, 7000);
                

            // });
