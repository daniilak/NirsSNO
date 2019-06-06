function parseManuals() {
    list = document.getElementById('list-tabs');
    var index = 0;
    for (var tab of['news', 'type-event', 'level-event', 'facs', 'chair', 'award']) {
        div = document.createElement('div');
        div.className = (index == 0) ? "tab-pane active" : "tab-pane";
        div.setAttribute("id", "tab_" + tab);
        index++;
        div.innerHTML = '<div id="list-' + tab + '"></div><div class="form-group">' +
            ((tab != "facs") ? '<button type="button" class="btn btn-success" id="add-' + tab + '" ><strong>Добавить</strong></button>' : '') +
            '</div>';
        list.appendChild(div);
    }
}

function getNewsEditor() {
    response = $.xResponse({ type: 'news', 'get_list': true });
    list = document.getElementById('list-news');
    for (var element of response) {
        div = document.createElement('div');
        div.dataset.news = element.ID;
        div.className = 'row';
        div.innerHTML = '<div class="col-md-8"><div class="form-group">\
        <textarea data-change="news" data-textarea="news" data-id="' + element.ID + '" class="form-control" rows="3" placeholder="Введите новость...">' + element.text + '</textarea>\
           </div></div><div class="col-md-4"><button type="button" data-delete="news" data-id="' + element.ID + '" class="btn btn-danger" id="del-news" data-id="' + element.ID + '" ><strong>Удалить</strong></button></div>';
        list.appendChild(div);
    }
}

function getTypeEvents() {
    response = $.xResponse({ type: 'event_type', 'get_list': true });
    list = document.getElementById('list-type-event');
    for (var element of response) {
        div = document.createElement('div');
        div.dataset.type_event = element.ID;
        div.className = 'row';
        div.innerHTML = '<div class="col-md-8"><div class="form-group">\
        <textarea data-change="type-event" data-textarea="type-event" data-id="' + element.ID + '" class="form-control" rows="3" placeholder="Введите тип мероприятия...">' + element.type + '</textarea>\
           </div></div><div class="col-md-4"><button type="button" data-delete="type-event" data-id="' + element.ID + '" class="btn btn-danger" id="del-type-event" data-id="' + element.ID + '" ><strong>Удалить</strong></button></div>';
        list.appendChild(div);
    }
}

function getLevelEvents() {
    response = $.xResponse({ type: 'event_level', 'get_list': true });
    list = document.getElementById('list-level-event');
    for (var element of response) {
        div = document.createElement('div');
        div.dataset.level_event = element.ID;
        div.className = 'row';
        div.innerHTML = '<div class="col-md-8"><div class="form-group">\
        <textarea data-change="level-event" data-textarea="level-event" data-id="' + element.ID + '" class="form-control" rows="3" placeholder="Введите уровень мероприятия...">' + element.level + '</textarea>\
           </div></div><div class="col-md-4"><button type="button" data-delete="level-event" data-id="' + element.ID + '" class="btn btn-danger" id="del-level-event" data-id="' + element.ID + '" ><strong>Удалить</strong></button></div>';
        list.appendChild(div);
    }
}

function getChairs() {
    response = $.xResponse({ type: 'chair', 'get_list': true });
    list = document.getElementById('list-chair');
    for (var element of response) {
        div = document.createElement('div');
        div.dataset.chair = element.ID;
        div.className = 'row';
        div.innerHTML = '<div class="col-md-8"><div class="form-group">\
        <textarea data-change="chair" data-textarea="chair" data-id="' + element.ID + '" class="form-control" rows="3" placeholder="Введите название кафедры...">' + element.level + '</textarea>\
           </div></div><div class="col-md-4"><button type="button" data-delete="chair" data-id="' + element.ID + '" class="btn btn-danger" id="del-level-event" data-id="' + element.ID + '" ><strong>Удалить</strong></button></div>';
        list.appendChild(div);
    }
}

function getAwards() {
    response = $.xResponse({ type: 'award', 'get_list': true });
    list = document.getElementById('list-award');
    for (var element of response) {
        div = document.createElement('div');
        div.dataset.level_event = element.ID;
        div.className = 'row';
        div.innerHTML = '<div class="col-md-8"><div class="form-group">\
        <textarea data-change="award"  data-textarea="award" data-id="' + element.ID + '" class="form-control" rows="3" placeholder="Введите название награды...">' + element.award + '</textarea>\
           </div></div><div class="col-md-4"><button type="button" data-delete="award" data-id="' + element.ID + '" class="btn btn-danger" id="del-award" data-id="' + element.ID + '" ><strong>Удалить</strong></button></div>';
        list.appendChild(div);
    }
}

function getFacs() {
    response = $.xResponse({ type: 'facs', 'get_list': true });
    list = document.getElementById('list-facs');
    for (var element of response) {
        div = document.createElement('div');
        div.dataset.level_event = element.ID;
        div.className = 'row';
        div.innerHTML = '<div class="col-md-8"><div class="form-group">\
        <textarea  data-textarea="facs" data-id="' + element.ID + '" class="form-control" rows="3" placeholder="Введите факультета...">' + element.name + '</textarea>\
           </div></div><div class="col-md-4"></div>';
        list.appendChild(div);
    }
}

parseManuals();
getNewsEditor();
getTypeEvents();
getLevelEvents();
getChairs();
getAwards()
setMenu();

/**
 * Работа с новостями
 */
$(document).on("change", "[data-textarea]", function() {
    const type = $(this).data("textarea");
    const change = $(this).data("change");
    const id = $(this).data("id");
    const val = $(this).val();
    response = $.xResponse({ type: type, change: change, id: id, value: val, edit: true });
    if (response != 0) {
        alert(response.msg)
    }
});

$(document).on("click", "[data-delete]", function() {
    const del_type = $(this).data("delete");
    const id = $(this).data("id");
    response = $.xResponse({ type: del_type, id: id, remove: true });
    if (response != 0) {
        alert(response.msg)
    } else {
        $("[data-" + del_type + "='" + id + "'").remove();
    }
});

$(document).on("click", "#add-news", function() {
    response = $.xResponse({ type: 'news', 'add': true });
    $("#list-news").html('');
    getNewsEditor()
});

$(document).on("click", "#add-type-event", function() {
    response = $.xResponse({ type: 'type-event', 'add': true });
    $("#list-type-event").html('');
    getTypeEvents()
});


$(document).on("click", "#add-level-event", function() {
    response = $.xResponse({ type: 'level-event', 'add': true });
    $("#list-level-event").html('');
    getLevelEvents()
});

$(document).on("click", "#add-chair", function() {
    response = $.xResponse({ type: 'chair', 'add': true });
    $("#list-chair").html('');
    getChairs()
});

$(document).on("click", "#add-award", function() {
    response = $.xResponse({ type: 'award', 'add': true });
    $("#list-award").html('');
    getAwards()
});