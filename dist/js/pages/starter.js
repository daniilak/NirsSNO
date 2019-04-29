/**
 * Загрузка списка годов
 */
var years = $.xResponse({type: 'year', 'get_list': true});
select = document.getElementById('year-list');

for (let index = 0; index < years.response.length; index++) {
  const element = years.response[index];

  var opt = document.createElement('option');
  opt.value = element.ID;
  opt.innerHTML = element.name;

  select.appendChild(opt);
}
