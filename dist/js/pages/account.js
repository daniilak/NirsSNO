$(document).ready(function () {
	VK.Widgets.AllowMessagesFromCommunity("vk_allow_messages_from_community", {height: 30}, 7959134);
	VK.Widgets.Group("vk_groups_1", {mode: 3, no_cover: 1}, 47825810);
	VK.Widgets.Group("vk_groups_2", {mode: 3, no_cover: 1}, 7959134);
	var enrolment_region = $(".enrolment_region_hidden").val();
	$("#student_chuvsu_checkbox").change(function() {
		if(this.checked) 
		{
			$("#student_info").show();
			disableInputs(true);
		} else 
		{
			$(".num_student").val('');
			$("#student_info").hide();
			disableInputs(false);
		}
	});
	$(".budjet_info").change(function() {
		var budjet_info = $(this).val();
		if (budjet_info == 1)
		{
			$("#budjet_info").show();
		} else {
			$("#budjet_info").hide();
		}
	});
	function disableInputs(bool) {
		
		if (bool)
		{
			$(".name_organization").val('ФГБОУ ВО "ЧГУ им. И.Н.Ульянова"').prop( "disabled", true );
		} else {
			$(".name_organization").val('').prop( "disabled", bool );
		}
		$(".course").prop( "disabled", bool );
		$(".enrolment_region").prop( "disabled", bool );
		$(".course").prop( "disabled", bool );

	}
	
	$("#user_types_inst").change(function() {
		user_types_inst = parseInt($(this).val());
		if (user_types_inst == 1)
		{
			$(".student_vuz").show();
			$(".student_chuvsu_checkbox").show();
			$("#student_chuvsu_checkbox").prop('checked', false);
			
		} else {
			$(".student_vuz").hide();
			$(".student_chuvsu_checkbox").hide();
			$("#student_chuvsu_checkbox").prop('checked', false);
		}
		if (user_types_inst < 5 )
		{
			$(".course_div").show();
		} else {
			$(".course_div").hide();	
		}
		if (user_types_inst >= 5 && user_types_inst <= 7 )
		{
			$(".school").show();
		} else {
			$(".school").hide();
		}
		

	});
	$("form").unbind('submit').submit(function(e) {
		e.preventDefault();
		
		if ($("#user_types_inst option:selected").val() == "0")
		{
			alert("Выберите, пожалуйста, своё учебное заведение");
			return;
		}
		$("#spinner").removeClass().addClass('fa fa-spinner fa-spin');
		$.ajax({
			url:"/account", 
			data:$( "form" ).serializeArray(), 
			type:'POST', 
			dataType: 'json',
			success:function(data){
				$("#spinner").removeClass().addClass('fa fa-paper-plane');
				$("#alert-warning").remove();
				alert("Данные обновлены");
			}
		});
	});
});