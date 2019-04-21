$(document).ready(function () {
	$(".btn-flat").click(function() {
		$.ajax({
			url:"/starter", 
			data:{code: $("#description").val()}, 
			type:'POST', 
			dataType: 'json',
			success:function(data){
				if (data.code == 1)
				{
					alert("Вы получили доступ");
					location.reload();
				}
				if (data.code == 2)
				{
					alert("Что-то пошло не так");
				}
			}
		});
	});
});