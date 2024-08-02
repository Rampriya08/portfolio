$(document).ready(function(){
    $('.content').load('education.html');

    
setInterval(function(){
        $('.des1').text("I'm RPA DEVELOPER");
        $('.des1').hide(4000);
        $('.des1').show(4000);
        $('.des1').hide(4000,function(){
            $('.des2').text("I'm  WEB DEVELOPER");
            $('.des2').hide(4000);
            $('.des2').show(4000);
            $('.des2').hide(4000);
        });
});
           

       
    $('#proj').click(function(){
        $('.content').load('project.html'); 
        $('#proj').attr({"class":"active"}) ;
        $('#skill').attr({"class":""}) ;
        $('#edu').attr({"class":""}) ;
        $('#exp').attr({"class":""}) ;
        $('#achiv').attr({"class":""}) ;  

    })
    
    $('#skill').click(function(){
        $('.content').load('skill.html'); 
        $('#proj').attr({"class":""}) ;
        $('#skill').attr({"class":"active"}) ;
        $('#edu').attr({"class":""}) ;
        $('#exp').attr({"class":""}) ;
        $('#achiv').attr({"class":""}) ;    
    })
    $('#edu').click(function(){
        $('.content').load('education.html');
        $('#proj').attr({"class":""}) ;
        $('#skill').attr({"class":""}) ;
        $('#edu').attr({"class":"active"}) ;
        $('#exp').attr({"class":""}) ;
        $('#achiv').attr({"class":""}) ;     
    })
    $('#exp').click(function(){
        $('.content').load('achiev.html');  
        $('#proj').attr({"class":""}) ;
        $('#skill').attr({"class":""}) ;
        $('#edu').attr({"class":""}) ;
        $('#exp').attr({"class":"active"}) ;
        $('#achiv').attr({"class":""}) ;   
    })
    $('#achiv').click(function(){
        $('.content').load('exp.html');
        $('#proj').attr({"class":""}) ;
        $('#skill').attr({"class":""}) ;
        $('#edu').attr({"class":""}) ;
        $('#exp').attr({"class":""}) ;
        $('#achiv').attr({"class":"active"}) ;     
    })
})
