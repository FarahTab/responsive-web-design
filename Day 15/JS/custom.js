$(document).ready(function(){
    
    $('#heading1').click(function(){
        $('#pera1').hide(1000);
    });
    
    $('#heading2').click(function(){
        $('#pera2').show(1000);
    });
    
    $('#heading3').click(function(){
        $('#pera3').click(1000);
    });
    
    $('#heading4').click(function(){
        $('#pera4').toggle(1000);
    });
    
     $('#heading5').click(function(){
        $('#pera5').slideUp(1000);
    });
    
     $('#heading6').click(function(){
        $('#pera6').slideDown(1000);
    });
    
     $('#heading7').click(function(){
        $('#pera7').slideToggle(1000);
    });
    
     $('#heading8').click(function(){
        $('#pera8').fadeIn(1000);
    });
    
     $('#heading9').click(function(){
        $('#pera9').fadeTo(1000, 0.2);
    });
    
     $('#heading10').click(function(){
        $('#pera10').text(1000);
    });
    
     $('#heading11').click(function(){
        $('#pera11').html(1000);
    });
    
     $('#heading12').click(function(){
        $('#pera12').css({color:'green', backgroundColor:'purple', padding:'5px'});
    });
    
    $('#heading13').click(function(){
        $('#pera13').addClass('test');
    });
    $('#heading14').click(function(){
        $('#pera14').empty(1000);
    });
    $('#heading15').click(function(){
        $('#pera15').append('----');
    });
    $('#heading16').click(function(){
        $('#pera16').before('----');
    });
    
    
    
    $('#btn').click(function(){
        $('#btn').text('Request Sent');
    });
    
});

$(window).load(function(){
    
})