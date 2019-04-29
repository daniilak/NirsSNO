/**
 * Загрузка списка факультетов
 */
var listFac = $.xResponse({type: 'fac', 'get_list': true});
select = document.getElementById('fac-list');

for (let index = 0; index < listFac.response.length; index++) {
  const element = listFac.response[index];

  var opt = document.createElement('option');
  opt.value = element.ID;
  opt.innerHTML = element.name;

  select.appendChild(opt);
}

/**
 * Авторизация
 *
 */
document.getElementById('auth').onclick = function() {
  var listFac = $.xResponse({
    type: 'auth',
    password: document.getElementById('password').value,
    login: document.getElementById('fac-list').value
  });
  if (listFac.response.code == 1) {
    alert(listFac.response.msg);
  } else {
    document.location.href = '/starter';
  }
}
