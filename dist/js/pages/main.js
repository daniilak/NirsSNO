facs();

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
  if (listFac.code == 1) {
    alert(listFac.msg);
  } else {
    document.location.href = '/starter';
  }
}
