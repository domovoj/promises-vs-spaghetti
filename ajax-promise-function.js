function ajaxPromise(url) {
  let xhr = new XMLHttpRequest();

  // 
  xhr.open('GET', url, false);
  xhr.send();

  if (xhr.status != 200) {
    return Promise.reject(`Помилка ${xhr.status} ${xhr.statusText}`);
  }
  return Promise.resolve(JSON.parse(xhr.response));
}