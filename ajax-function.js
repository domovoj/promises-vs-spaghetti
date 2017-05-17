function ajax(url, callback) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);
  xhr.send();

  if (xhr.status != 200) {
    alert(`Помилка ${xhr.status} ${xhr.statusText}`);
  } else {
    callback(JSON.parse(xhr.response));
  }
}