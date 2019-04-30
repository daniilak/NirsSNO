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
      url: 'api',
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
 * Загрузка списка годов
 */
function years() {
  var response = $.xResponse({type: 'year', 'get_list': true});

  var select = document.getElementById('year-list');
  for (var element of response.years) {
    var opt = document.createElement('option');
    opt.value = element;
    opt.innerHTML = element;

    select.appendChild(opt);
  }
};

/**
 * Загрузка списка факультетов
 */
function facs() {
  var response = $.xResponse({type: 'fac', 'get_list': true});
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
  var response = $.xResponse({type: 'news', 'get_list': true});
  var newsList = document.getElementById('news-list');

  for (var element of response) {
    var div = document.createElement('div');
    div.className = 'callout';
    div.innerHTML = element.text;

    newsList.appendChild(div);
  }
};

/**
 * Загрузка списка новостей
 */
function news() {
  var response = $.xResponse({type: 'news', 'get_list': true});

  var newsList = document.getElementById('news-list');
    for (var element of response) {
      var div = document.createElement('div');
      div.className = 'callout';
      div.innerHTML = element.text;

      newsList.appendChild(div);
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
var events = (function() {
  var response = $.xResponse({type: 'event', year: '2018', 'get_list': true});

  return function() {
    for (var element of response) {
      addDivEvent(element)
    }
  }
})();
