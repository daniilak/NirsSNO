function getNewsEditor() {
  var response = $.xResponse({type: 'news', 'get_list': true});
  var listNews = document.getElementById('list-news');
  for (var element of response) {
    var div = document.createElement('div');
    div.className = 'row'
    div.innerHTML = '<div class="col-md-8"><div class="form-group">\
        <textarea class="form-control" rows="3" placeholder="Введите новость..."></textarea>\
           </div></div><div class="col-md-4">ыы</div>';
    listNews.appendChild(div);
  }
}
getNewsEditor()
// events();
// event_levels();
setMenu();
// event_types();