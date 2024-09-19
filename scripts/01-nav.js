$('i.hb-menu').on('click', ()=>{
   let togglerDiv = $('div.right-section-collapse');
   if(togglerDiv.hasClass('display-none')){
  
   
    togglerDiv.removeClass('display-none');
 
    
       
   }
   else if(togglerDiv.hasClass('display-none')==false){
    togglerDiv.addClass('display-none');
     
   }
})