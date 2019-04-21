$( document ).ready(function() {

    // function get
			$.ajax({
				url:"/ideas", 
				data:data, 
				type:'POST', 
				dataType: 'json',
				success:function(data){
					if( data.code == 0)
					{
						$('#idea').val("")
						alert("Спасибо за идею!");
					}
				}
			});
	});
});