
$(function(){
    $(".add-btn").click(function(){ 
    	var t= $(this).parent().find('input[class*=number-text]');  
        t.val(parseInt(t.val())+1)  
        setTotal(); 
    })  
    $(".reduce").click(function(){  
    	var t= $(this).parent().find('input[class*=number-text]');  
    	if(t.val()>1){
    		t.val(parseInt(t.val())-1)             
    	}
    	else{
    		t.val()==1;
    		$(this).parent().parent().parent().remove();
    	}
        setTotal();  
    })  
    
  function setTotal(){  
  	var s=0;
  	$(".tab li").each(function(){
  		var aa = parseInt($(this).find('input[class*=number-text]').val());
  		var bb = parseFloat($(this).find('span[class*=price]').text());
	    s+= aa * bb;  
  	}); 
  	$("#total").html(s.toFixed(2));  
  };  
   setTotal();  
});
//清空页面
$(function(){
	$(".head-item").click(function(){
		$(".cart-cnt").remove();
	})
})
//刷新页面
$(function(){
	$(".head-sx").click(function(){
		window.location.reload();
	})
})
