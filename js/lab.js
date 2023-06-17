$(document).ready(function(){
    $('#bar').click(function(){
       // $('.left_bar').show(1000);
       $('#absolute').css('display','block');
    //    $('body').css('overflow','hidden')
      
    })


    $('#iqs').click(function(){
        $('#absolute').css('display','none')
      
        
    })


    $('#a_abs').click(function(){
        $('#absolute').css('display','none')
    })

    $('.g_li_1').click(function(){
      $('.gl')
      $('.gl_a2').css('color','#CCCCCC');
      $('.gl_a3').css('color','#CCCCCC');
      $('.gl_a4').css('color','#CCCCCC');
      $('.gl_a5').css('color','#CCCCCC');
    })
    

    $('.g_li_2').click(function(){
      $('.gl_a1').css('color','#CCCCCC');
      $('.gl_a2').css( 'color', 'purple')
      $('.gl_a3').css('color','#CCCCCC');
      $('.gl_a4').css('color','#CCCCCC');
      $('.gl_a5').css('color','#CCCCCC');
    })



    $('.g_li_3').click(function(){
      $('.gl_a1').css('color','#CCCCCC')
      $('.gl_a2').css('color','#CCCCCC');
      $('.gl_a3').css('color','purple');
      $('.gl_a4').css('color','#CCCCCC');
      $('.gl_a5').css('color','#CCCCCC');
    })



    $('.g_li_4').click(function(){
      $('.gl_a1').css('color','#CCCCCC')
      $('.gl_a2').css('color','#CCCCCC');
      $('.gl_a3').css('color','#CCCCCC');
      $('.gl_a4').css('color','purple');
      $('.gl_a5').css('color','#CCCCCC');
    })



    $('.g_li_5').click(function(){
      $('.gl_a1').css('color','#CCCCCC')
      $('.gl_a2').css('color','#CCCCCC');
      $('.gl_a3').css('color','#CCCCCC');
      $('.gl_a4').css('color','#CCCCCC');
      $('.gl_a5').css('color','purple');
    })


    $('.show_more').click(function(){
      $('.show_div_groups').css('display','block')
      $('.sss').css('display','none');
    })
   

    $('.but_foot_1').click(function(){
      $('.span_foot_1').css('display','inline');
      $('.but_foot_1').css('display','none')
    })

    $('.but_foot_2').click(function(){
      $('.span_foot_1').css('display','none')
      $('.but_foot_1').css('display','inline')
    })


    $('.li_next_1').click(function(){
      $('.down').toggle(100);
      // $('.icon').css('transform','rotate(180deg)')
      // $('.icon').css('transiton','5s')
    })


    $('.li_next_2').click(function(){
      $('.down_2').toggle(100);
      // $('.icon').css('transform','rotate(180deg)')
      // $('.icon').css('transiton','5s')
    })


    $('.li_next_3').click(function(){
      $('.down_3').toggle(100);
      // $('.icon').css('transform','rotate(180deg)')
      // $('.icon').css('transiton','5s')
    })


    $('.li_next_4').click(function(){
      $('.down_4').toggle(100);
      // $('.icon').css('transform','rotate(180deg)')
      // $('.icon').css('transiton','5s')
    })


    $('.li_next_5').click(function(){
      $('.down_5').toggle(100);
      // $('.icon').css('transform','rotate(180deg)')
      // $('.icon').css('transiton','5s')
    })


    $('.b_search').click(function(){
      $('.absolute_2').css('display','block')
    })
    
    $('.otmena').click(function(){
      $('.absolute_2').css('display','none')
    })
    
    
    

    
    

  
})




function clickInput(){
 let search = document.getElementById('inp_search');
 let but = document.getElementById('but_search');
 let camera = document.getElementById('camera_search')
 search.style.backgroundColor = 'white'
 search.style.color = 'black'
 but.style.color = 'black';
 camera.style.color = 'black'
 //but.style.transition = '1s'

}








function over(){
    let drop = document.getElementById('drop_down');
    let iqs = document.getElementById('iqs');
    let a = document.getElementById('a_abs');
    let ul2 = document.getElementById('ul_2');
    let ul1 = document.getElementById('ul_1');
    let ul3 = document.getElementById('ul_3');
    let ul4 = document.getElementById('ul_4');
    let ul5 = document.getElementById('ul_5');
    let ul6 = document.getElementById('ul_6');
    let ul7 = document.getElementById('ul_7')
    let h2_1 = document.getElementById('h2_1');
    let h2_2 = document.getElementById('h2_2');
    let h2_3 = document.getElementById('h2_3');
    let h2_4 = document.getElementById('h2_4');
    let h2_5 = document.getElementById('h2_5');
    let h2_6 = document.getElementById('h2_6');
    let h2_7 = document.getElementById('h2_7')

    // let reklam = document.getElementById('reklam');
    // let h2 = document.getElementById('h2rek');
    drop.style.display = 'flex'
    iqs.style.display = 'inline-block'
    a.style.display = 'none'
     ul2.style.display = 'none';
     ul1.style.display = 'block'
     ul3.style.display = 'none'
     ul4.style.display = 'none';
     ul5.style.display = 'none'
     ul6.style.display = 'none'
     ul7.style.display = 'none'
     h2_1.style.display = 'block'
     h2_2.style.display = 'none'
     h2_3.style.display = 'none'
     h2_4.style.display = 'none';
     h2_5.style.display = 'none'
     h2_6.style.display = 'none'
     h2_7.style.display = 'none'


   //  h2rek.innerHTML = 'Джинсы'
     

}



function over2(){

    
    let drop = document.getElementById('drop_down');
    let iqs = document.getElementById('iqs');
    let a = document.getElementById('a_abs');
   let ul1 = document.getElementById('ul_1');
   let ul2 = document.getElementById('ul_2');
   let ul3 = document.getElementById('ul_3');
   let ul4 = document.getElementById('ul_4');
   let ul5 = document.getElementById('ul_5');
   let ul6 = document.getElementById('ul_6')
   let ul7 = document.getElementById('ul_7');
//    let reklam = document.getElementById('reklam');
//      let h2 = document.getElementById('h2rek');
let h2_1 = document.getElementById('h2_1');
let h2_2 = document.getElementById('h2_2');
let h2_3 = document.getElementById('h2_3');
let h2_4 = document.getElementById('h2_4');
let h2_5 = document.getElementById('h2_5');
let h2_6 = document.getElementById('h2_6')
let h2_7 = document.getElementById('h2_7')


    drop.style.display = 'flex'
    iqs.style.display = 'inline-block'
    a.style.display = 'none'


  
   ul1.style.display = 'none'
   ul2.style.display = 'block'
   ul3.style.display = 'none';
   ul4.style.display = 'none';
   ul5.style.display = 'none'
   ul6.style.display = 'none'
   ul7.style.display = 'none'
//    reklam.src = "./images/vypadashka_puhovik4995.jpg"
//    h2rek.innerHTML = 'Пуховики Женские'
h2_1.style.display = 'none'
h2_2.style.display = 'block'
h2_3.style.display = 'none'
h2_4.style.display = 'none'
h2_5.style.display = 'none'
h2_6.stylle.display = 'none'
h2_7.style.display = 'none'


}


// let l_1 = 5;
// console.log(l_1);



function over3(){
  let ul1 = document.getElementById('ul_1');
  let ul2 = document.getElementById('ul_2');
  let ul3 = document.getElementById('ul_3');
  let ul4 = document.getElementById('ul_4');
  let ul5 = document.getElementById('ul_5');
  let ul6 = document.getElementById('ul_6');
  let ul7 = document.getElementById('ul_7')
  let h1 = document.getElementById('h2_1')
  let h2 = document.getElementById('h2_2')
  let h3 = document.getElementById('h2_3')
  let h4 = document.getElementById('h2_4');
  let h5 = document.getElementById('h2_5')
  let h6 = document.getElementById('h2_6')
  let h7 = document.getElementById('h2_7')

  ul1.style.display = 'none'
  ul2.style.display = 'none'
  ul3.style.display = 'block'
  ul4.style.display = 'none'
  ul5.style.display = 'none'
  ul6.style.display = 'none'
  ul7.style.display = 'none'
  h1.style.display = 'none'
  h2.style.display = 'none'
  h3.style.display = 'block'
 h4.style.display = 'none'
 h5.style.display = 'none'
 h6.style.display = 'none'
 h7.style.display = 'none'
  




}




function over4(){

  let ul1 = document.getElementById('ul_1');
  let ul2 = document.getElementById('ul_2');
  let ul3 = document.getElementById('ul_3');
  let ul4 = document.getElementById('ul_4');
  let ul5 = document.getElementById('ul_5');
  let ul6 = document.getElementById('ul_6')
  let ul7 = document.getElementById('ul_7')
  let h1 = document.getElementById('h2_1')
  let h2 = document.getElementById('h2_2')
  let h3 = document.getElementById('h2_3')
  let h4 = document.getElementById('h2_4');
  let h5 = document.getElementById('h2_5')
  let h6 = document.getElementById('h2_6')
  let h7 = document.getElementById('h2_7')


  ul1.style.display = 'none'
  ul2.style.display = 'none'
  ul3.style.display = 'none'
  ul4.style.display = 'block'
  ul5.style.display = 'none'
  ul6.style.display = 'none'
  ul7.style.display = 'none'
  h1.style.display = 'none'
  h2.style.display = 'none'
  h3.style.display = 'none'
 h4.style.display = 'block'
 h5.style.display = 'none'
 h6.style.display = 'none'
 h7.style.display = 'none'



}



function over5(){
  let ul1 = document.getElementById('ul_1');
  let ul2 = document.getElementById('ul_2');
  let ul3 = document.getElementById('ul_3');
  let ul4 = document.getElementById('ul_4');
  let ul5 = document.getElementById('ul_5');
  let ul6 = document.getElementById('ul_6')
  let ul7 = document.getElementById('ul_7')
  let h1 = document.getElementById('h2_1')
  let h2 = document.getElementById('h2_2')
  let h3 = document.getElementById('h2_3')
  let h4 = document.getElementById('h2_4');
  let h5 = document.getElementById('h2_5');
  let h6 = document.getElementById('h2_6');
  let h7 = document.getElementById('h2_7')

  ul1.style.display = 'none'
  ul2.style.display = 'none'
  ul3.style.display = 'none'
  ul4.style.display = 'none'
  ul5.style.display = 'block'
  ul6.style.display = 'none'
  ul7.style.display = 'none'
  h1.style.display = 'none'
  h2.style.display = 'none'
  h3.style.display = 'none'
 h4.style.display = 'none'
 h5.style.display = 'block'
 h6.style.display = 'none'
 h7.style.display = 'none'



}



function over6(){

  let ul1 = document.getElementById('ul_1');
  let ul2 = document.getElementById('ul_2');
  let ul3 = document.getElementById('ul_3');
  let ul4 = document.getElementById('ul_4');
  let ul5 = document.getElementById('ul_5');
  let ul6 = document.getElementById('ul_6')
  let ul7 = document.getElementById('ul_7');
  let h1 = document.getElementById('h2_1')
  let h2 = document.getElementById('h2_2')
  let h3 = document.getElementById('h2_3')
  let h4 = document.getElementById('h2_4');
  let h5 = document.getElementById('h2_5');
  let h6  = document.getElementById('h2_6');
  let h7 = document.getElementById('h2_7');


  ul1.style.display = 'none'
  ul2.style.display = 'none'
  ul3.style.display = 'none'
  ul4.style.display = 'none'
  ul5.style.display = 'none'
  ul6.style.display = 'block'
  ul7.style.display = 'none'
  h1.style.display = 'none'
  h2.style.display = 'none'
  h3.style.display = 'none'
 h4.style.display = 'none'
 h5.style.display = 'none'
 h6.style.display = 'block'
 h7.style.display = 'none'
 




}



function over7(){


  let ul1 = document.getElementById('ul_1');
  let ul2 = document.getElementById('ul_2');
  let ul3 = document.getElementById('ul_3');
  let ul4 = document.getElementById('ul_4');
  let ul5 = document.getElementById('ul_5');
  let ul6 = document.getElementById('ul_6')
  let ul7 = document.getElementById('ul_7');
  let h1 = document.getElementById('h2_1')
  let h2 = document.getElementById('h2_2')
  let h3 = document.getElementById('h2_3')
  let h4 = document.getElementById('h2_4');
  let h5 = document.getElementById('h2_5');
  let h6  = document.getElementById('h2_6');
  let h7 = document.getElementById('h2_7')


  ul1.style.display = 'none'
  ul2.style.display = 'none'
  ul3.style.display = 'none'
  ul4.style.display = 'none'
  ul5.style.display = 'none'
  ul6.style.display = 'none'
  ul7.style.display = 'block'
  h1.style.display = 'none'
  h2.style.display = 'none'
  h3.style.display = 'none'
 h4.style.display = 'none'
 h5.style.display = 'none'
 h6.style.display = 'none'
 h7.style.display = 'block'
 




}

































//-------------------- Slider START -----------------------



nkanunner = ['boom','default2','default3','default4'];
d = document;
i=0
function skizb(){
  d.getElementById('nkar').src = "./images/boom.jpg"

}

function next(){
  i++
  if(i==4){
    i=0
  }
 
  document.getElementById('nkar').src = './images/' + nkanunner[i] + '.jpg';
 

  

}


function prev (){
  i--;
  if(i==-1){
    i = 3
  }
  document.getElementById('nkar').src = './images/' + nkanunner[i] + '.jpg';
  

  

}





sti = 0;

function play(){
  sti = setInterval(next,3000)

}

setTimeout(play,2000)




//------------------ SLider EnD ------------------------