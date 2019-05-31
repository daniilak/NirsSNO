function getNewsEditor() {
    response = $.xResponse({ type: 'news', 'get_list': true });
    listNews = document.getElementById('list-news');
    for (var element of response) {
        div = document.createElement('div');
        div.className = 'row'
        div.innerHTML = '<div class="col-md-8"><div class="form-group">\
        <textarea class="form-control" rows="3" placeholder="Введите новость...">' + element.text + '</textarea>\
           </div></div><div class="col-md-4"><button type="button" class="btn btn-danger" id="del-news" data-id="' + element.ID + '" ><strong>Удалить новость</strong></button></div>';
        listNews.appendChild(div);
    }
}
getNewsEditor()
setMenu();


$(document).on("click", "#add-news", function() {
    response = $.xResponse({ type: 'news', 'add': true });
});
$(document).on("click", "#add-type-event", function() {
    response = $.xResponse({ type: 'type-event', 'add': true });
});
$(document).on("click", "#add-level-event", function() {
    response = $.xResponse({ type: 'level-event', 'add': true });
});
$(document).on("click", "#add-chair", function() {
    response = $.xResponse({ type: 'chair', 'add': true });
});
$(document).on("click", "#add-award", function() {
    response = $.xResponse({ type: 'award', 'add': true });
});
$(document).on("click", "#add-chair", function() {
    response = $.xResponse({ type: 'chair', 'add': true });
});
// events();
// event_levels();
// event_types();