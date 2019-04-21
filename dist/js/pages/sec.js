function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
function disableInputs(bool) {
  if (bool) {
    $(".name_organization")
      .val("ФГБОУ ВО «ЧГУ им. И.Н. Ульянова»")
      .prop("disabled", true);
  } else {
    $(".name_organization")
      .val("")
      .prop("disabled", bool);
  }
  $(".first_name").prop("disabled", bool);
  $(".middle_name").prop("disabled", bool);
  $(".city").prop("disabled", bool);
  $(".num_student").focus();
}
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
function getManagers(id) {
  return (
    '<div class="managers_' +
    id +
    '">	<h4>Другие члены жюри</h4><div class="form-group row"><div class="col-sm-5">' +
    '<div class="btn-group btn-group-justified d-menu-group" data-mng_id><input class="form-control dropdown-form mngs-dropdown-form manager_input"' +
    'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-mng_id="' +
    id +
    '" data-is_close="0"  data-id="' +
    id +
    '"  data-manager="naming">' +
    '<ul class="dropdown-menu col-xs-12 menu-managers-' +
    id +
    '" role="menu" aria-labelledby="dLabel"><li class="dropdown-item col-xs-12">Выберите вариант или продолжите ввод...</li></ul></div></div>' +
    '<div class="col-sm-4"><select class="form-control manager_input" data-manager="id_position" data-id="' +
    id +
    '">' +
    getPositions() +
    '</select></div><div class="col-sm-3"><button type="button" class="btn btn-danger delete-managers" data-id="' +
    id +
    '"><span class="fa fa-trash"></span> Убрать</button>' +
    "</div></div><hr></div>"
  );
}
function getGuests(id) {
  return (
    '<div class="guest_' +
    id +
    '"><div class="form-group row"><div class="col-sm-3"><select class="form-control guest_input" data-guest="id_position" data-id="' +
    id +
    '">' +
    getPositions() +
    '</select></div><div class="col-sm-3"><select class="form-control guest_input" data-guest="id_user_types_inst" data-id="' +
    id +
    '"><option value="1" selected="">Вуз</option><option value="2">Техникум</option><option value="3">Колледж</option><option value="4">ПТУ</option><option value="5">Школа</option><option value="6">Гимназия</option><option value="7">Лицей</option><option value="8">Компания</option><option value="9">НИИ</option><option value="10">Иное</option>' +
    '</select></div><div class="col-sm-3"><input type="number" class="form-control guest_input" data-guest="count" data-id="' +
    id +
    '" value="0" placeholder="Количество"></div><div class="col-sm-3">' +
    '<button type="button" class="btn btn-danger delete-guest" data-id="' +
    id +
    '"><span class="fa fa-trash"></span> Убрать</button></div></div><div class="form-group"><input type="text" class="form-control guest_input" data-guest="name_organization" data-id="' +
    id +
    '" value="" placeholder="Организация"></div><hr></div>'
  );
}
function getRecomend(id) {
	str = '';
	$.ajax({
    url: "/sec",
    data: { getRecomend: "rec" },
    type: "POST",
    dataType: "json",
    success: function(data) {

    	
    		str = '';
    	for (i = 0; i<data.data.length; i++) {
    		
    		str += '<div class="checkbox"><label><input type="checkbox" value="0" class="recommendations" data-id="'+data.data[i].ID+'" data-request="' + id + '">'+data.data[i].recommendation+'</label></div>'
    	}

		$(".recommend_"+id).html('<h4>Рекомендации:</h4>'+str);

		console.log(str)
    	return str;
    }
  });
  
  return str;
}
function getRequests(id) {
  return (
    '<div class="panel box box-primary request_' +
    id +
    '"><div class="box-header with-border"><h4 class="box-title "><a data-toggle="collapse" data-parent="#accordion" href="#request_' +
    id +
    '" class="collapsed_' +
    id +
    '">Работа: Новая</a></h4></div><div id="request_' +
    id +
    '" class="panel-collapse collapse"><div class="box-body"><button type="button" class="btn btn-danger delete-request pull-right" data-id="' +
    id +
    '" ><i class="fa fa-times"></i> Удалить работу</button><div class="form-group row"><div class="col-sm-12"><input type="text" class="form-control request_input request_input_name_project" data-request="name_project" data-id="' +
    id +
    '" maxlength="255" placeholder="Наименование"></div></div><div class="form-group row"><label class="col-sm-3 control-label">Место:</label><div class="col-sm-3"><select class="form-control request_input request_input_place" data-request="request_place" data-id="' +
    id +
    '"><option value="4" selected="">Без места</option><option value="3">3</option><option value="2">2</option><option value="1">1</option></select></div><div class="col-sm-3"><div class="checkbox"><label><input type="checkbox" value="0" class="out_plan" data-id="' +
    id +
    '">Вне плана</label></div></div></div><div class="form-group recommend_' +
    id +
    '" ><h4>Рекомендации:</h4>' + getRecomend(id)+
    '</div></div><div class="form-group row"><div class="col-sm-3"><h4>Руководители:</h4></div><div class="col-sm-3"><button type="button" class="btn btn-warning add-leader" data-id="' +
    id +
    '"> Добавить руководителя</button></div></div><div class="form-group leader_block_' +
    id +
    '"></div><div class="form-group row"><div class="col-sm-3"><h4>Докладчики:</h4></div><div class="col-sm-3"><button type="button" class="btn btn-warning add-user-section" data-id="' +
    id +
    '"> Добавить докладчика</button></div></div><div class="user_block_' +
    id +
    '"></div></div></div></div>'
  );
}

function getLeaders(id) {
  return (
    '<div class="leaders_' +
    id +
    '"><div class="form-group row"><div class="col-sm-5"><div class="btn-group btn-group-justified d-menu-group "><input class="form-control dropdown-form leader_input" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-ldr_id="' +
    id +
    '"  data-is_close data-id="' +
    id +
    '" value="  " data-leader="naming"> <ul class="dropdown-menu col-xs-12 menu-leaders-' +
    id +
    '" role="menu" aria-labelledby="dLabel"> <li class="dropdown-item col-xs-12">Выберите вариант или продолжите ввод...</li></ul></div></div><div class="col-sm-4"><select class="form-control leader_input"data-leader="id_position" data-id="' +
    id +
    '">' +
    getPositions() +
    '</select></div><div class="col-sm-3"><button type="button" class="btn btn-danger delete-leader" data-id="' +
    id +
    '"><span class="fa fa-trash"></span> Убрать</button></div></div><hr></div>'
  );
}
function getUsers(id) {
  return ('<div class="user_'+
  id +'"><div class="list-group list-group-flush"><a class="list-group-item clearfix"><h5 class="mb-1 fio_'+
  id +'">Фамилия Имя Отчество</h5><h5 class="mb-1 info_'+
  id +'">Данные</h5><span class="pull-right"><button type="button"class="btn btn-info edit-user" data-toggle="modal" data-target="#userModal" data-id="'+
  id +'><span class="fa fa-pencil-square-o"></span>Редактировать</button><button type="button" class="btn btn-danger delete-user" data-id="'+
  id + '"><span class="fa fa-trash"></span>Убрать</button></a></div></div>');
}
function sending(sendingData) {
  $.ajax({
    url: "/sec",
    data: sendingData,
    type: "POST",
    dataType: "json",
    success: function(data) {}
  });
}
function getCookie(name) {
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0,
    end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset);
      if (end == -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return setStr;
}

$(document).ready(function() {
  /*
	*  Добавление секции ???
	*/
  $(".formaddModal")
    .unbind("submit")
    .submit(function(e) {
      e.preventDefault();
      if ($("#user_types_inst_reg option:selected").val() == "0") {
        alert("Выберите, пожалуйста, своё учебное заведение");
        return;
      }
      $("#spinner")
        .removeClass()
        .addClass("fa fa-spinner fa-spin");
      data = sending($("form").serializeArray());
      if (data !== false) {
        $("#spinner")
          .removeClass()
          .addClass("fa fa-paper-plane");
        $("#addModal").modal("hide");
        getSections();
        alert("Данные обновлены");
        $(".form-control.boxed").each(function(i, elem) {
          $(elem).val("");
        });
      } else {
        alert();
      }
    });

  /*
	* Работа с комиссией секции
	*/
  $(document).on("input", ".dropdown-form[data-mng_id]", function() {
    const mng_id = $(this).data("mng_id");
    let tmp_typeahead = this.value.trim();
    tmp_typeahead = tmp_typeahead.replace(/\s+/g, " ").split(" ");
    console.log(tmp_typeahead)
    $.ajax({
      url: "/sec",
      data: { tmp_typeahead: tmp_typeahead },
      type: "POST",
      dataType: "json",
      success: function(data) {
        str =
          '<li class="dropdown-item col-xs-12" data-disabled >Выберите вариант или продолжите ввод</li>';
        for (var name of data[0]) {
          $(".dropdown-form[data-mng_id='" + mng_id + "']")
            .data("isClose", 0)
            .attr("data-is_close", 0);
          switch (tmp_typeahead.length) {
            case 1:
              name = ucFirst(name);
              break;
            case 2:
              name = ucFirst(tmp_typeahead[0]) + " " + ucFirst(name);
              break;
            case 3:
              $(".dropdown-form[data-mng_id='" + mng_id + "']")
                .data("isClose", 1)
                .attr("data-is_close", 1);
              name =
                ucFirst(tmp_typeahead[0]) +
                " " +
                ucFirst(tmp_typeahead[1]) +
                " " +
                ucFirst(name);
              break;
          }
          str +=
            '<li class="dropdown-item item-menu col-xs-12" data-mng data-item="' +
            mng_id +
            '"  data-typeItem="' +
            data[1] +
            '"><a href="javascript:void(null);">' +
            name +
            "</a></li>";
        }
        $(".menu-managers-" + mng_id).html(str);
      }
    });
  });

  $(document).on("hide.bs.dropdown", ".d-menu-group[data-mng_id]", function(
    event
  ) {
    return event.target.querySelector("input").getAttribute("data-is_close") ==
      1
      ? true
      : false;
  });

  $(document).on("click", ".item-menu[data-mng]", function(event) {
    $(
      ".dropdown-form[data-mng_id='" + this.getAttribute("data-item") + "']"
    ).val(event.target.text + " ");
  });

  $(document).on("click", ".add-managers", function() {
    let sendingData = { id_manager: $(this).data("id"), type: "add" };
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        $(".managers").append(getManagers(data.ID));
      }
    });
  });

  $(document).on("click", ".delete-managers", function() {
    if (!confirm("Вы действительно хотите убрать данного члена жюри?")) {
      return;
    }
    let sendingData = { id_manager: $(this).data("id"), type: "erase" };
    sending(sendingData);
    $(".managers_" + sendingData.id_manager).remove();
  });

  /*
	* Работа с руководителями докладов
	*/
  $(document).on("input", ".dropdown-form[data-ldr_id]", function() {
    const ldr_id = parseInt($(this).data("ldr_id"));
    const id_request = $(this).data("id_request");
    let tmp_leaders = this.value.trim();
    tmp_leaders = tmp_leaders.replace(/\s+/g, " ").split(" ");

    $.ajax({
      url: "/sec",
      data: { tmp_typeahead: tmp_leaders },
      type: "POST",
      dataType: "json",
      success: function(data) {
        str =
          '<li class="dropdown-item col-xs-12" data-disabled >Выберите вариант или продолжите ввод</li>';
        for (var name of data[0]) {
          $(".dropdown-form[data-ldr_id='" + ldr_id + "']")
            .data("isClose", 0)
            .attr("data-is_close", 0);
          switch (tmp_leaders.length) {
            case 1:
              name = ucFirst(name);
              break;
            case 2:
              name = ucFirst(tmp_leaders[0]) + " " + ucFirst(name);
              break;
            case 3:
              $(".dropdown-form[data-ldr_id='" + ldr_id + "']")
                .data("isClose", 1)
                .attr("data-is_close", 1);
              name =
                ucFirst(tmp_leaders[0]) +
                " " +
                ucFirst(tmp_leaders[1]) +
                " " +
                ucFirst(name);
              break;
          }
          str +=
            '<li class="dropdown-item item-menu col-xs-12" data-ldr data-item="' +
            ldr_id +
            '"  data-typeItem="' +
            data[1] +
            '"><a href="javascript:void(null);">' +
            name +
            "</a></li>";
        }
        $(".menu-leaders-" + ldr_id).html(str);
      }
    });
  });

  $(document).on("hide.bs.dropdown", ".d-menu-group[data-ldr_id]", function(
    event
  ) {
    return event.target.querySelector("input").getAttribute("data-is_close") ==
      1
      ? true
      : false;
  });

  $(document).on("click", ".item-menu[data-ldr]", function(event) {
    $(
      ".leader_input[data-ldr_id='" + this.getAttribute("data-item") + "']"
    ).val(event.target.text + " ");
  });

  $(document).on("click", ".add-leader", function() {
    let sendingData = { id_leader: $(this).data("id"), type: "add" };
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        $(".leader_block_" + sendingData.id_leader).append(
          getLeaders(data.ID)
        );
      }
    });
  });

  $(document).on("click", ".delete-leader", function() {
    if (
      !confirm("Вы действительно хотите убрать данного научного руководителя?")
    ) {
      return;
    }
    let sendingData = { id_leader: $(this).data("id"), type: "erase" };
    sending(sendingData);
    $(".leaders_" + sendingData.id_leader).remove();
  });

  /*
	* Загрузка списка секций
	*/
  function getSections() {
    var data = {
      faculties_sort: getCookie("faculties_sort") || 1,
      section_types_btn: getCookie("section_types_btn") || 0
    };

    $(".overlay").fadeIn(300);
    $.ajax({
      url: "/sec",
      data: data,
      type: "POST",
      dataType: "json",
      success: function(data) {
        $(".sections").text("");
        if (data.sections.length == 0) {
          $(".sections").append(
            '<p class="text-center">Похоже, ничего нет :( <br>Попробуйте выбрать другие варианты</p>'
          );
        }
        for (var i = 0; i < data.sections.length; i++) {
          $(".sections").append(
            '<div class="col-md-4 ' +
              data.sections[i].ID +
              '"><div class="box box-widget widget-user">' +
              '<div class="widget-user-header bg-black"><h5 class="widget-user-username">' +
              data.sections[i].name +
              ' <a href="/sec/' +
              data.sections[i].ID +
              '"></a></h5>' +
              '<h5 class="widget-user-desc">' +
              data.sections[i].datetime +
              '</h5></div><div class="widget-user-image"><img class="img-circle" src="../dist/img/facs/' +
              data.sections[i].idfaculty +
              '.jpg" alt="User Avatar">' +
              '</div><div class="box-footer"><div class="row"><div class="col-sm-12 border-right"><div class="description-block">' +
              '<a class="btn btn-primary" href="/sec/' +
              data.sections[i].ID +
              '" role="button">Подробнее</a></div></div></div></div></div></div>'
          );
        }
        $(".overlay").fadeOut(300);
      }
    });
  }
  getSections();
  $(".type-group > .btn").on("click", function() {
    section_types_btn = $(this).data("id");
    document.cookie =
      "section_types_btn=" +
      $(this).data("id") +
      ";expires=15/02/2020 00:00:00";
    $(this)
      .addClass("btn-info active")
      .siblings()
      .removeClass("btn-info active");
    getSections();
  });
  $(".faculties_sort").on("change", function() {
    document.cookie =
      "faculties_sort=" +
      $(".faculties_sort option:selected").val() +
      ";expires=15/02/2020 00:00:00";
    getSections();
  });

  /*
	* Работа с гостями
	*/
  $(".add-guest").on("click", function() {
    let sendingData = { id_guest: $(this).data("id"), type: "add" };
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        $(".guests").append(getGuests(data.ID));
      }
    });
  });

  $(".delete-guest").on("click", function() {
    if (!confirm("Вы действительно хотите убрать поле?")) {
      return;
    }
    let sendingData = { id_guest: $(this).data("id"), type: "erase" };
    sending(sendingData);
    $(".guest_" + sendingData.id_guest).remove();
  });

  /*
	* Работа с файлами
	*/
  $(".download_file").on("click", function() {
  	let sendingData = {
      download_file_id: $(this).data("id"),
      type: $(this).data("typeFile")
    };
  
    if (sendingData.type == 'certificat') {
    	alert('Пока не готов шаблон');
    	return;
    }
    const text = $('.download_file[data-type-file="'+sendingData.type+'"]').text();
    
    
    $('.download_file[data-type-file="'+sendingData.type+'"]').html(
      '<i class="fa fa-spinner fa-spin"></i> Идет обработка документа'
    );
    $.ajax({
      //url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
      	console.log(data.url);
        window.location = "https://ais.snochuvsu.ru/" + data.url;
      }
    });
    $('.download_file[data-type-file="'+sendingData.type+'"]').html('<i class="fa fa-save"></i>' + text);
  });

  /*
	* Редактирование дизайна страницы
	*/
  $(document).on("input", ".name_section", function() {
    $(".name_section_h").text("Работа с секцией: " + $(this).val());
  });
  $(document).on("input", ".request_input_name_project", function() {
    id = $(this).data("id");
    val = $(this).val();
    place_num = $('.request_input_place[data-id="' + id + '"]').val();
    if (place_num < 4)
      $(".collapsed_" + id).text(
        "(" +
          $('.request_input_place[data-id="' + id + '"]').val() +
          "место) Работа: " +
          val
      );
    else $(".collapsed_" + id).text("Работа:  " + val);
  });
  /*
	* Редактирование места доклада
	*/
  $(document).on("change", ".request_input_place", function() {
    id = $(this).data("id");
    val = parseInt($(this).val());

    $.ajax({
      url: "/sec",
      data: {
        request_input_place: id,
        place: val,
        dataSection: $(".loadDataSection").data("id")
      },
      type: "POST",
      dataType: "json",
      success: function(data) {
        if (data.code == "0") {
          if (val < 4)
            $(".collapsed_" + id).text(
              "(" +
                val +
                "место) Работа: " +
                $('.request_input_name_project[data-id="' + id + '"]').val()
            );
          else
            $(".collapsed_" + id).text(
              "Работа: " +
                $('.request_input_name_project[data-id="' + id + '"]').val()
            );
        } else {
          $('.request_input_place[data-id="' + id + '"]').val(4);
          alert(data.msg);
        }
      }
    });
    if (val == 4) {
      $('.recommendations[data-request="' + id + '"]').prop("checked", false);
      let sendingData = { recommend_hide_all: id };
      sending(sendingData);
    }
  });
  /*
	* Добавление доклада
	*/
  $(document).on("click", ".add-request", function() {
    let sendingData = { id_request: $(".add-request").data("id"), type: "add" };
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        $(".requests").append(getRequests(data.ID));
      }
    });
  });
  /*
	* Удаление доклада
	*/
  $(document).on("click", ".delete-request", function() {
    if (!confirm("Вы действительно хотите удалить данную работу?")) {
      return;
    }
    let sendingData = { id_request: $(this).data("id"), type: "erase" };
    sending(sendingData);
    $(".request_" + sendingData.id_request).remove();
  });

  /*
	* Рекомендации
	*/
  $(document).on("click", ".recommendations", function() {
    $(this).val($(this).val() == 0 ? "1" : "0");
    let sendingData = {
      recommendation_id: $(this).data("id"),
      recommendation_request: $(this).data("request"),
      click: $(this).val()
    };
    sending(sendingData);
  });

  /*
	* Добавление докладчика
	*/
  $(document).on("click", ".add-user-section", function() {
    let sendingData = { id_user_section: $(this).data("id"), type: "add" };
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        $(".user_block_" + sendingData.id_user_section).append(getUsers(data.ID));
        $(".last_name_" + data.ID).focus();
      }
    });
  });

  /*
	* Удаление докладчика
	*/
  $(document).on("click", ".delete-user", function() {
    if (!confirm("Вы действительно хотите удалить данного участника?")) {
      return;
    }
    let sendingData = { id_user_section: $(this).data("id"), type: "erase" };
    sending(sendingData);
    $(".user_" + sendingData.id_user_section).remove();
  });
  
  /*
	* Удаление секции
	*/
  $(document).on("click", ".delete-section", function() {
    if (!confirm("Вы действительно хотите удалить секцию?")) {
    	
      return;
    }
    if (!confirm("Точно?")) {
    	return;
    }
    let sendingData = { delete_section: $(this).data("id") };
    
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
      	if (data.code == 1) {
      		alert("У вас нет доступа к удалению секции")
      	} else {
        	document.location.href = "https://ais.snochuvsu.ru/sec/";
      	}
      }
    });
    

  });

  /*
	* Убрать ограничение на количество мест
	*/
  $(document).on("change", ".id_disabled_place", function() {
    let sendingData = {
      id_disabled_place: (this.checked) ? 1 : 0,
      id_section: $(this).data("id")
    };
    if (this.checked) {
      $(".input_disabled_place").show();
    } else {
      $(".input_disabled_place").hide();
    }
    $(".input_disabled_place").val("");
    
     $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        if (data.code == 1) {
        	$(".input_disabled_place").hide()
        	$(".id_disabled_place").prop('checked', false);
        	alert('У вас нет оснований для этой функции')
        }
      }
    });
  });

  /*
	* Изменение "Откуда участник"
	*/
  $(document).on("change", "#user_types_inst", function() {
    if ($(this).val() == 1) {
      $(".chuvsu_div").show();
      $("#chuvsu_checkbox").prop("checked", false);
    } else {
      $(".chuvsu_div").hide();
      $("#chuvsu_checkbox").prop("checked", false);
      $(".types_block").show();
      $(".student_chuvsu_div_data").hide();
      $(".firstAndLastName").show();
      $(".not_chuvsu").show();
    }
  });

  /*
	* Если кликнули по Студент ЧувГУ
	*/
  $(document).on("change", "#chuvsu_checkbox", function() {
    if (this.checked) {
      $(".types_block").hide();
      $(".name_organization").val('ФГБОУ ВО «ЧГУ им. И.Н. Ульянова»');
      $(".city_organization").val("Чебоксары");
      $(".not_chuvsu").hide();
      $(".student_chuvsu_div_data").show();
    } else {
      $(".student_chuvsu_div_data").hide();
      $(".name_organization").val("");
      $(".city_organization").val("");
      $(".types_block").show();
      $(".not_chuvsu").show();
    }
  });

  /*
	* Подтверждения
	*/
  $(document).on("change", ".confirm", function() {
    const sendingData = {
      confirm: this.checked ? 1 : 0,
      type: $(this).data("typeConfirm"),
      id_section: $(this).data("id")
    };
    sending(sendingData);
  });

  /*
	* Доклад вне плана
	*/
  $(document).on("change", ".out_plan", function() {
    let sendingData = {
      out_plan: this.checked ? 1 : 0,
      id: $(this).data("id")
    };
    sending(sendingData);
  });

  /*
	* Работа с ФИО докладчика
	*/
  $(document).on("input", ".dropdown-form[data-usr_id]", function() {
    console.log(this.value);
    const tmp_typeahead = this.value.replace(/\s+/g, " ").split(" ");
    $.ajax({
      url: "/sec",
      data: { tmp_typeahead: tmp_typeahead },
      type: "POST",
      dataType: "json",
      success: function(data) {
        str =
          '<li class="dropdown-item col-xs-12" data-disabled >Выберите вариант или продолжите ввод</li>';
        for (var name of data[0]) {
          $(".dropdown-form[data-usr_id]")
            .data("isClose", 0)
            .attr("data-is_close", 0);
          switch (tmp_typeahead.length) {
            case 1:
              name = ucFirst(name);
              break;
            case 2:
              name = ucFirst(tmp_typeahead[0]) + " " + ucFirst(name);
              break;
            case 3:
              $(".dropdown-form[data-usr_id]")
                .data("isClose", 1)
                .attr("data-is_close", 1);
              name =
                ucFirst(tmp_typeahead[0]) +
                " " +
                ucFirst(tmp_typeahead[1]) +
                " " +
                ucFirst(name);
              break;
          }
          str +=
            '<li class="dropdown-item item-menu col-xs-12" data-usr_id data-typeItem="' +
            data[1] +
            '"><a href="javascript:void(null);">' +
            name +
            "</a></li>";
        }
        $(".menu-usr").html(str);
      }
    });
  });

  $(document).on("hide.bs.dropdown", ".d-menu-group[data-usr_id]", function(
    event
  ) {
    return event.target.querySelector("input").getAttribute("data-is_close") ==
      1
      ? true
      : false;
  });

  $(document).on("click", ".item-menu[data-usr_id]", function(event) {
    $(".dropdown-form[data-usr_id]").val(event.target.text + " ");
  });
 
  $(document).on("click", ".moder-request", function() {
    const sendingData = {
        moder_request: $(this).data('id'),
     };
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        $( '.moder-request[data-id="'+sendingData.moder_request+'"]').remove()
      }
    });
  });
  /*
	* загрузкаadd_user_by_modal
	*/
  $(document).on("click", ".add_user_by_modal", function() {
    if ($(".num_student").val() != "") {
      const sendingData = {
        lName: $(".lName").val(),
        num_student: $(".num_student").val()
      };
    } else {
      const sendingData = {
        lName: $(".lName").val(),
        num_student: $(".num_student").val()
      };
    }
    sending(sendingData);
  });
  /*
	* загрузка данных студента чгу
	*/
  $(document).on("click", ".load_data", function() {
    const data = {
      lName: $(".lName").val(),
      num_student: $(".num_student").val()
    };

    if (data.lName.length == 0) {
      return;
    }

    if (data.num_student.length == 0) {
      return;
    }

    $.ajax({
      url: "/sec",
      data: data,
      type: "POST",
      dataType: "json",
      success: function(data) {
        if (data.code == 0) {
          alert("Загружено");
        }
        if (data.code == 1) {
          alert("Студента нет в базе lk.chuvsu.ru");
        }
      }
    });
  });
  
  $(document).on("click", ".success_user_by_modal", function() {
    b = $('input[name=budjet_info]:checked').val()
    if (b == null) {
      b = 0;
    }
    const sendingData = { 
      s_userIDEdit: $('#id_user_hidden').val(),
      s_user_types_inst: $('#user_types_inst').val(),
      s_chuvsu_checkbox:  ($('#chuvsu_checkbox').is(":checked")) ? 1 : 0,
      s_name_organization: $('.name_organization').val(),
      s_city_organization: $('.city_organization').val(),
      s_lName: $('.lName').val(),
      s_fName: $('.fName').val(),
      s_mName: $('.mName').val(),
      s_num_student: $('.num_student').val(),
      s_phone: $('.phone').val(),
      s_b: b,
    };
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        if (data.code == 0) {
          $(".fio_" + sendingData.s_userIDEdit).text(sendingData.s_lName + ' ' + sendingData.s_fName + ' ' + sendingData.s_mName);
          $(".fio_" + sendingData.s_userIDEdit).text(data.name)
          $(".info_" + sendingData.s_userIDEdit).text(data.information)
          $("#userModal").modal('hide');
        }
        if (data.code == 1) {
          alert(data.msg)
          $(".fio_" + sendingData.s_userIDEdit).text(sendingData.s_lName)
          $(".info_" + sendingData.s_userIDEdit).text('Студента нет в базе lk.chuvsu или данные неправильно введены')
          $("#userModal").modal('hide');
        }
      }
    });
  });

  $(document).on("click", ".edit-user", function() {
    const sendingData = { userID: $(this).data('id') };
    $.ajax({
      url: "/sec",
      data: sendingData,
      type: "POST",
      dataType: "json",
      success: function(data) {
        if (data.code == 0) {
          data = data.data[0];
          $('#chuvsu_checkbox').prop('checked', false);
          $('#id_user_hidden').val(data.ID)
          $('.city_organization').val(data.city)
          $('.name_organization').val(data.name_organization)
          $('.lName').val(data.last_name)
          $('.fName').val(data.first_name)
          $('.mName').val(data.middle_name)
          $('.phone').val(data.phone)
          $('#user_types_inst').val(data.id_type_inst)
          if (data.id_type_inst == 1) {
            $(".chuvsu_div").show();
            if (data.is_chuvsu == 1) {
              $(".types_block").hide();
              $(".not_chuvsu").hide();
              $(".student_chuvsu_div_data").show();
              $('#chuvsu_checkbox').prop('checked', true);
              $('.num_student').val(data.num_student)
              if (data.stip == 1) {
                $('#b_1').attr( 'checked', true )
              } 
              if (data.stip == 2) {
                $('#b_2').attr( 'checked', true )
              }
            }
            else  {
              $('.num_student').val("")
              $(".student_chuvsu_div_data").hide();
              $(".types_block").show();
              $(".not_chuvsu").show();
            }
          } else {
            $(".chuvsu_div").hide();
            $('.num_student').val("")
            $(".student_chuvsu_div_data").hide();
            $(".types_block").show();
            $(".not_chuvsu").show();
          }
          $("#userModal").modal('show');
        }
      }
    });
  });
  
  /*
	* Сохрнение введенных данных
	*/
  $(document).on("click", ".loadDataSection", function() {
    var loadDataSection = $(this).data("id");
    $("#spinner")
      .removeClass()
      .addClass("fa fa-spinner fa-spin");
    managers = {};
    $(".manager_input").each(function(i, elem) {
      id = $(elem).data("id");
      if (managers[id]) {
        managers[id][$(elem).data("manager")] = $(elem).val();
      } else {
        managers[id] = {};
        managers[id][$(elem).data("manager")] = $(elem).val();
      }
    });
    leaders = {};
    $(".leader_input").each(function(i, elem) {
      id = $(elem).data("id");
      if (leaders[id]) {
        leaders[id][$(elem).data("leader")] = $(elem).val();
      } else {
        leaders[id] = {};
        leaders[id][$(elem).data("leader")] = $(elem).val();
      }
    });
    requests = {};
    $(".request_input_name_project").each(function(i, elem) {
      requests[$(elem).data("id")] = $(elem).val();
    });
    guests = {};
    $(".guest_input").each(function(i, elem) {
      id = $(elem).data("id");
      if (guests[id]) {
        guests[id][$(elem).data("guest")] = $(elem).val();
      } else {
        guests[id] = {};
        guests[id][$(elem).data("guest")] = $(elem).val();
      }
    });
    var data = {
      managers: JSON.stringify(managers),
      requests: JSON.stringify(requests),
      leaders: JSON.stringify(leaders),
      guests: JSON.stringify(guests),
      id_section: loadDataSection,
      location: $(".location").val(),
      time: $(".time_section").val(),
      date: $(".date_section").val(),
      name_section: $(".name_section").val(),
      input_disabled_place: $(".input_disabled_place").val()
    };
    $.ajax({
      url: "/sec",
      data: data,
      type: "POST",
      dataType: "json",
      success: function(data) {
        alert("Успешно сохранено");
        $("#spinner")
          .removeClass()
          .addClass("fa fa-paper-plane");
      }
    });
  });
});
