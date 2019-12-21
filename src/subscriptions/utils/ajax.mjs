export const makeRequest = (method, url, data, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = result => {
    if (xhr.response) {
      callback(xhr);
    }
  };
  xhr.send(JSON.stringify(data))
}
