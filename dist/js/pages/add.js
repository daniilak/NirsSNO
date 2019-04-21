$(document).ready(function () {
	
	$(".send").click(function() {
		var data = {
			u : $("#description").val()
		}
		$.ajax({
			url:"/add", 
			data: data, 
			type:'POST', 
			dataType: 'json',
			success:function(data){
				$("#spinner").removeClass().addClass('fa fa-paper-plane');
				if (data.code == "1")
				{
					alert("Данный человек уже имеет приглашение");
				}
				if (data.code == "0")
				{
					$(".accounts").append('<tr class="'+data.ID+'"><td><img src="'+data.photo+'" class="img-circle" alt=""></td>'+
					'<td><a target="_blank" href="https://vk.com/id'+data.id_vk+'">'+data.name+'</a></td>'+
					'<td><button type="button" class="btn btn-warning deleteAccount pull-right" data-id="'+data.ID+'"><span class="fa fa-trash"></span></button></td></tr>');
				}
			}
		});
		
	});
	$(".deleteAccount").click(function() {
		if (!confirm('Вы действительно хотите удалить приглашение?')) 
		{
			return;
		}
		deleteAccount =  $(this).data('id');
		var data = {
			deleteAccount : deleteAccount
		}
		$.ajax({
			url:"/add", 
			data: data, 
			type:'POST', 
			dataType: 'json',
			success:function(data){
				$("."+deleteAccount).remove();
			}
		});
		
	});
});