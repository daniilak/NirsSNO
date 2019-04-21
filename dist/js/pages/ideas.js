$( document ).ready(function() {
	$(".ajax").on('click', function() {
		if ($('#idea').val().length > 0 ) 
		{
			$('#addIdeas').modal('hide');
			var data = {
				'idea': $('#idea').val(),
			};
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
		}
	});
	$(".like").on('click', function() {
		var like_id = $(this).data("id");
		var like_off = $(this).data("off");
		like_off = parseInt(like_off);
		if (like_off == 1)
		{
			$("#"+ like_id +"_i").css("color","");
			$("#"+ like_id +"_i").removeClass().addClass('fa fa-heart-o');
			var data = {
				'like_id_down': like_id,
			};
			$.ajax({
				url:"/ideas", 
				data:data, 
				type:'POST', 
				dataType: 'json',
				success:function(data){
					if( data.code == 0 )  
					{
						like_off = (like_off == 1) ? 0:1;
						$('#'+like_id +"_c").text(" " + data.count );
						$('#'+like_id +"_l").data("off",like_off );
					}
					else 
					{
						$("#"+ like_id +"_i").css("color","red");
						$("#"+ like_id +"_i").removeClass().addClass('fa fa-heart');
					}	
				}
			});	
		}
		else 
		{
			$("#"+ like_id +"_i").removeClass().addClass('fa fa-heart');
			$("#"+ like_id +"_i").css("color","red");
			var data = {
				'like_id_up': like_id,
			};
			$.ajax({
				url:"/ideas", 
				data:data, 
				type:'POST', 
				dataType: 'json',
				success:function(data){
					if( data.code == 0 )  
					{
						like_off = (like_off == 1) ? 0:1;
						$('#'+like_id +"_c").text(" " + data.count );
						$('#'+like_id +"_l").data("off",like_off );
					}
					else 
					{
						$("#"+ like_id +"_i").css("color","");
						$("#"+ like_id +"_i").removeClass().addClass('fa fa-heart-o');
					}		
				}
			});	
		}
	});
});