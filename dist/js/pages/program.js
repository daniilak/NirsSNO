var ID = 1;
function getPositions() {
  return (
    '<option value="1">Аспирант</option><option value="2">Ассистент</option><option value="5">Ведущий научный сотрудник</option>' +
    '<option value="8">Главный научный сотрудник</option><option value="22">Декан факультета</option><option value="9">Докторант</option>' +
    '<option value="10">Доцент</option><option value="23">Заведующий кафедрой</option><option value="17">Интерн</option>' +
    '<option value="18">Магистрант</option><option value="13">Младший научный сотрудник</option><option value="3">Научный сотрудник</option>' +
    '<option value="16">Ординатор</option><option value="25">Представитель организации-партнера</option><option value="4">Преподаватель</option><option value="20">Приглашённый врач</option>' +
    '<option value="21">Приглашённый преподаватель</option><option value="6">Профессор</option><option value="11">Стажер</option>' +
    '<option value="12">Старший научный сотрудник</option><option value="7">Старший преподаватель</option><option value="14">Студент</option>' +
    '<option value="15">Студент другого вуза</option><option value="24">Учитель</option><option value="19">Школьник</option>'
  );
}

function getLeaders() {
	ID = ID + 1
  return (
  	'<div class="leaders_'+
  	ID + 
  	'"><div class="form-group row"><div class="col-sm-5"><input type="text" class="form-control leader_input" data-id="' + ID + '" data-leader="lName" placeholder="Фамилия"><input type="text"  data-id="' + ID + '" class="form-control leader_input" data-leader="fName" placeholder="Имя"><input type="text"  data-id="' + ID + '" class="form-control leader_input" data-leader="mName" placeholder="Отчество"></div><div class="col-sm-4"><select  data-id="' + ID + '"  class="form-control leader_input" data-leader="id_position">' +
  	 getPositions() +
	'</select></div><div class="col-sm-3"><button type="button" class="btn btn-danger delete-leader" data-id="' + 
	ID +
	'"><span class="fa fa-trash"></span> Убрать</button></div></div><hr></div>'
  );
}

function getUsers() {
	ID = ID + 1
  return ('<div class="user_sections_' + ID + '"><div class="form-group"><label class="control-label">Откуда:</label><select class="form-control boxed user_input" data-id="' + ID + '"  data-usersection="user_types_inst">'+
			'<option value="1">Вуз</option><option value="2">Техникум</option><option value="3">Колледж</option><option value="5">Школа</option><option value="6">Гимназия</option><option value="7">Лицей</option><option value="8">Компания</option><option value="9">НИИ</option><option value="10">Иное</option></select>'+
			'</div><div class="form-group chuvsu_div_'+ID+'"><div class="checkbox"><label><input type="checkbox" class="user_input"  data-id="' + ID + '"   data-usersection="chuvsu_checkbox">Студент ЧувГУ</label></div></div>'+
			'<div class="form-group row types_block_'+ID+'"><div class="col-sm-6"><div class="checkbox"><input type="text" data-id="' + ID + '"  data-usersection="name_organization" class="form-control user_input" placeholder="Название учреждения">'+
			'</div></div><div class="col-sm-6"><div class="checkbox"><input type="text" class="form-control user_input"  data-id="' + ID + '"  data-usersection="city_organization" placeholder="Город учреждения"></div></div></div>'+
			'<div class="form-group row"><div class="col-sm-4"><input type="text" class="form-control user_input" data-id="' + ID + '"  data-usersection="lName" placeholder="Фамилия"></div>'+
			'<div class="col-sm-4 not_chuvsu_'+ID+'"><input type="text" class="form-control user_input" data-id="' + ID + '"  data-usersection="fName"  placeholder="Имя"></div>'+
			'<div class="col-sm-4 not_chuvsu_'+ID+'" ><input type="text" class="form-control user_input"  data-id="' + ID + '"  data-usersection="mName"  placeholder="Отчество">'+
			'</div></div><div class="student_chuvsu_div_data_'+ID+'" style="display:none;"><div class="form-group row"><div class="col-sm-4"><input type="text" class="form-control user_input" data-id="' + ID + '"  data-usersection="num_student"  placeholder="Номер зачетки">'+
			'</div><div class="col-sm-6"><label><input type="radio" class="user_input" data-id="' + ID + '"  data-usersection="budjet_info" name="budjet_info_' + ID + '" value="1" checked="checked"> Бюджет</label><label>'+
			'<input type="radio" class="user_input" data-id="' + ID + '"  data-usersection="budjet_info" name="budjet_info_' + ID + '" value="2"> Контракт</label></div>'+
			'</div></div><div class="form-group row "><div class="col-sm-12"><input type="text" class="form-control user_input" data-id="' + ID + '"  data-usersection="phone"  placeholder="Телефон"></div></div><button type="button" class="btn btn-danger delete-user" data-id="' + 
		ID +
	'"><span class="fa fa-trash"></span> Убрать</button></div>');
}
$(document).ready(function () {

	$(document).on('change', '#events', function() {
    	window.location.replace("https://ais.snochuvsu.ru/program?id=" + $('#events :selected').val());
    })
    
    $(document).on("click", "#openModal", function() {
    	index = $(this).data('idsec');
     	$("#sendtoval").val(index);
	});
    
	$(document).on("click", ".add-leader", function() {
    	$(".leader_block").append(getLeaders());
	});

	$(document).on("click", ".delete-leader", function() {
  		index = $(this).data('id');
    	$(".leaders_" + index).remove();
	});
	
	$(document).on("click", ".add-user-section", function() {
    	$(".user_block").append(getUsers());
	});
	
	$(document).on("click", ".delete-user", function() {
    	index = $(this).data('id');
    	$(".user_sections_" + index).remove();
	});
	
	$(document).on("change", '.user_input[data-usersection="user_types_inst"]', function() {
		index = $(this).data('id');
    	if ($(this).val() == 1) {
    		$(".chuvsu_div_"+index).show();
    		$('.user_input[data-usersection="chuvsu_checkbox"][data-id="'+index+'"]').prop("checked", false);
    	} else {
    		$(".chuvsu_div_"+index).hide();
    		$('.user_input[data-usersection="chuvsu_checkbox"][data-id="'+index+'"]').prop("checked", false);
    		$(".types_block_"+index).show();
    		$(".student_chuvsu_div_data_"+index).hide();
    		$(".firstAndLastName_"+index).show();
    		$(".not_chuvsu_"+index).show();
    	}
	});
	
	$(document).on("change", '.user_input[data-usersection="chuvsu_checkbox"]', function() {
  		index = $(this).data('id');
	    if (this.checked) {
	    	$(".types_block_"+index).hide();
	    	$('.user_input[data-usersection="name_organization"][data-id="'+index+'"]').val('ФГБОУ ВО «ЧГУ им. И.Н. Ульянова»');
	    	$('.user_input[data-usersection="city_organization"][data-id="'+index+'"]').val("Чебоксары");
	    	$(".not_chuvsu_"+index).hide();
	    	$(".student_chuvsu_div_data_"+index).show();
	    } else {
	    	$(".student_chuvsu_div_data_"+index).hide();
	    	$('.user_input[data-usersection="name_organization"][data-id="'+index+'"]').val("");
	    	$('.user_input[data-usersection="city_organization"][data-id="'+index+'"]').val("");
	    	$(".types_block_"+index).show();
	    	$(".not_chuvsu_"+index).show();
	    }
	});
	$(document).on("click", "#sendto", function() {
		if ($(".name_project").val().length  == 0) {
	      	alert("Введите название работы!");
	      	return;
	    }
	      
		lead = {};
		isStop = 0
	    $(".leader_input").each(function(i, elem) {
	      id = $(elem).data("id");
	      val = $(elem).val();
	      if (val.length == 0 && isStop == 0) {
	      	isStop = 1
	      	alert("Введены не все поля у руководителя");
	      	return;
	      }
	      if (lead[id]) {
	        lead[id][$(elem).data("leader")] = val;
	      } else {
	        lead[id] = {};
	        lead[id][$(elem).data("leader")] = val;
	      }
	    });
	    if (isStop == 1) {
	    	return
	    }
		users = {};
		isUser = 0;
	    $(".user_input").each(function(i, elem) {
	      id = $(elem).data("id");
	      isUser = 1
	      if (users[id]) {
	        users[id][$(elem).data("usersection")] = $(elem).val();
	      } else {
	        users[id] = {};
	        users[id][$(elem).data("usersection")] = $(elem).val();
	        b = $('input[name=budjet_info_'+id+']:checked').val()
	        users[id]['b'] = b;
	      }
	    });
	    isStop = 0;
	    $(".user_input").each(function(i, elem) {
	      id = $(elem).data("id");
	      da = $(elem).data("usersection")
	      val =  $(elem).val();
	      if (da == 'phone' && val.length == 0 && isStop == 0) {
	      	isStop = 1
	      	alert("Введите номер телефона!");
	      	return;
	      }
	      if (da == 'lName' && val.length == 0 && isStop == 0) {
	      	isStop = 1
	      	alert("Введите фамилию!");
	      	return;
	      }
	    });
	    if (isStop == 1) {
	    	return
	    }
	    if (isUser == 0) {
	    	alert("Должен быть хотя бы 1 участник");
	      	return;
	    }
     	let sendingData = { 
    		id_section : $("#sendtoval").val(),
    		name_project: $(".name_project").val(),
    		lead: JSON.stringify(lead),
    		user_input: JSON.stringify(users),
		};
    	$.ajax({
		    data: sendingData,
		    type: "POST",
		    dataType: "json",
		    success: function(data) {
		    	if (data.code == 2) {
		    		alert("К сожалению, уже нельзя подавать заявки");
		    		return;
		    	}
		    	if (data.code == 1) {
		    		alert("Участник не зарегистрирован в lk.chuvsu! К сожалению, подать заявку на участие нельзя")
		    		return;
		    	} 
		    	$('#openSend').modal('hide')
		    	alert("Заявка успешно отправлена! Секретарь скоро её промодерирует")
		    	$(".name_project").val('')
		    	$(".user_block").empty();
		    	$(".leader_block").empty();
		    	
		    }
		});
	});
	
});