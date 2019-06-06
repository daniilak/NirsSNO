setMenu();

function workHTML(id) {
    return '<div id="work_div" data-id="' + id + '" class="panel-collapse" aria-expanded="true" style="">\
    <div class="box-body">\
        <div class="form-group row">\
                <div class="col-sm-12">\
                    <input type="text" class="form-control" data-request="name_project" data-id="12634" maxlength="255" value="Проектирование автоматизированной информационной системы «Рекламная фирма»" placeholder="Наименование">\
                </div>\
            </div>\
            <div class="form-group row">\
                <label class="col-sm-3 control-label">Место:</label>\
                <div class="col-sm-3">\
                    <select class="form-control request_input request_input_place" data-request="request_place" data-id="12634">\
                        <option value="4">Без места</option><option value="3">3</option><option value="2">2</option><option value="1" selected="">1</option>\
                    </select>\
                </div>\
                <div class="col-sm-3">\
                    <button type="button" class="btn  replace-request" data-id="12634">Переместить работу в др. секцию</button>\
                </div>\
                <div class="col-sm-3">\
                    <button type="button" class="btn btn-danger delete-request pull-right" data-id="12634"><i class="fa fa-times"></i> Удалить работу</button>\
                </div>\
            </div>\
            <div class="form-group row">\
                <div class="col-sm-3"><h4>Руководители:</h4></div>\
                <div class="col-sm-3">\
                    <button type="button" class="btn btn-warning add-leader" data-id="12634"> Добавить руководителя</button>\
                </div>\
            </div>\
        <hr>\
    </div>\
            </div>\
            <div class="form-group row">\
                <div class="col-sm-3"><h4>Участники:</h4></div>\
                <div class="col-sm-3">\
                    <button type="button" class="btn btn-warning add-user-section" data-id="12634"> Добавить участника</button>\
                </div>\
            </div>\
    </div>\
    </div>';
}

var loc = location.href.split('/');
if (loc[4]) {
    console.log(loc)

} else {
    years();
    events();
    event_levels(1);
    event_types(1);
}

$(document).on("click", ".add-work", function() {
    var id_event = $(this).data('id');
    var response = $.xResponse({
        type: 'work',
        year: $('[data-autosave="year"]').val(),
        add: true,
        id_fac: $('[data-autosave="id_fac"]').val(),
        id_event: id_event,
    });

    $(".works").append(workHTML(response));
});



$(document).on("change", '[data-sorted]', function() {
    events();
});

$(document).on("change", '[data-autosave]', function() {
    var id = $(this).data('id');
    var as = $(this).data('autosave');
    var val = $(this).val();
    $.xResponse({
        type: 'event',
        id: id,
        as: as,
        value: val,
        edit: true,
    });
});

$(".formaddModal")
    .unbind("submit")
    .submit(function(e) {
        e.preventDefault();
        $("#spinner")
            .removeClass()
            .addClass("fa fa-spinner fa-spin");
        var data = $.xResponse({
            type: 'event',
            data: $("form").serializeArray(),
            add: true,
        });
        if (data !== false) {
            $("#spinner")
                .removeClass()
                .addClass("fa fa-paper-plane");
            $("#addModal").modal("hide");
            events();
            alert("Данные обновлены");
        }
    });