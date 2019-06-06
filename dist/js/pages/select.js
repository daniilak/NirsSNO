/**
 * xResponse function
 *
 * xResponse method is made to return jQuery ajax response
 *
 * @param  {object} your ajax param
 * @return {mix}       [ajax response]
 */
$.extend({
    xResponse: function(data) {
        var theResponse = null;
        $.ajax({
            url: '../api',
            type: 'POST',
            data: data,
            dataType: 'json',
            async: false,
            success: function(respText) {
                theResponse = respText.response;
            }
        });
        return theResponse;
    }
});

/**
 * Загрузка меню
 */
function setMenu() {
    var controller = window.location.href.split('/');
    var response = $.xResponse({ type: 'menu', get_list: true });

    var select = document.getElementById('block-menu');
    for (var element of response.controllers) {
        var opt = document.createElement('li');
        opt.innerHTML = '<a href="/' + element.url + '">' + ((element.icon) ? element.icon : element.name) + '</a>';
        if (controller[3] == element.url) {
            opt.className = "active";
        }
        select.appendChild(opt);
    }
    var opt = document.createElement('li');
    opt.innerHTML = '<a href="/starter?logout">Выйти</a>';
    select.appendChild(opt);
};

/**
 * Загрузка списка годов
 */
function years() {
    var response = $.xResponse({ type: 'year', get_list: true });

    var select = document.getElementsByClassName('year-list');
    for (var s of select)
        for (var element of response.years) {
            var opt = document.createElement('option');
            opt.value = element;
            opt.innerHTML = element;

            s.appendChild(opt);
        }
};

/**
 * Загрузка списка факультетов
 */
function facs() {
    var response = $.xResponse({ type: 'fac', get_list: true });
    var select = document.getElementById('fac-list');

    for (var element of response) {
        var opt = document.createElement('option');
        opt.value = element.ID;
        opt.innerHTML = element.name;

        select.appendChild(opt);
    }
};

/**
 * Загрузка списка новостей
 */
function news() {
    var response = $.xResponse({ type: 'news', get_list: true });
    var newsList = document.getElementById('news-list');

    for (var element of response) {
        var div = document.createElement('div');
        div.className = 'callout';
        div.innerHTML = element.text;

        newsList.appendChild(div);
    }
};

/**
 * Загрузка списка уровний мероприятия
 */
function event_levels(all) {
    var response = $.xResponse({ type: 'event_level', get_list: true });

    var select = document.getElementsByClassName('event-levels-list');
    var index = 1;
    for (var s of select) {
        if (all == 1 && index == 1) {
            index++;
            var opt = document.createElement('option');
            opt.value = 0;
            opt.innerHTML = "Все";
            s.appendChild(opt);
        }
        for (var element of response) {
            var opt = document.createElement('option');
            opt.value = element.ID;
            opt.innerHTML = element.level;

            s.appendChild(opt);
        }
    }
};

/**
 * Загрузка списка типов мероприятий
 */
function event_types(all) {
    var response = $.xResponse({ type: 'event_type', get_list: true });

    var select = document.getElementsByClassName('event-types-list');
    var index = 1;
    for (var s of select) {
        if (all == 1 && index == 1) {
            index++;
            var opt = document.createElement('option');
            opt.value = 0;
            opt.innerHTML = "Все";
            s.appendChild(opt);
        }
        for (var element of response) {
            var opt = document.createElement('option');
            opt.value = element.ID;
            opt.innerHTML = element.type;

            s.appendChild(opt);
        }
    }
};

function addDivEvent(element) {
    var div = document.createElement('div');

    div.className = 'col-md-4';
    div.innerHTML = '<div class="box box-widget widget-user">\
      <div class="widget-user-header bg-black">\
        <h5 class="widget-user-username">' +
        element.name + '</h5>\
      </div>\
      <div class="box-footer">\
        <div class="row">\
          <div class="col-sm-4 border-right">\
            <div class="description-block">\
              <h5 class="description-header">3,200</h5>\
              <span class="description-text">SALES</span>\
            </div>\
          </div>\
          <div class="col-sm-4 border-right">\
            <div class="description-block">\
              <a class="btn btn-primary"\
                href="/events/' +
        element.ID + '" role="button">Подробнее</a>\
            </div>\
          </div>\
          <div class="col-sm-4">\
            <div class="description-block">\
              <h5 class="description-header">3,200</h5>\
              <span class="description-text">SALES</span>\
            </div>\
          </div>\
        </div>\
      </div>\
  </div>';

    document.getElementById('events').appendChild(div);
}


/**
 * Загрузка списка мероприятий
 */
function events() {
    $("#events").html("")

    var response = $.xResponse({
        type: 'event',
        get_list: true,
        year: $(".year-list[data-sorted]").val(),
        level: $(".event-levels-list[data-sorted]").val(),
        types: $(".event-types-list[data-sorted]").val(),
    });
    for (var element of response) {
        addDivEvent(element)
    }
}