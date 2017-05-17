/* You can use fetch function (returns promise)
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
forgot to say in the presentation */

function ajaxPromise(url) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, false);
  xhr.send();

  if (xhr.status != 200) {
    return Promise.reject(`Помилка ${xhr.status} ${xhr.statusText}`);
  }
  return Promise.resolve(JSON.parse(xhr.response));
}
