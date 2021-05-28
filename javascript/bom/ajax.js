/*
 * @Author: Hale
 * @Description: AJAX
 * @Date: 2019/01/09
 * @LastEditTime : 2020/02/04
 */

function ajax() {
  let xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest(); // chrome, Mozilla, Safari, IE7+...
  } else if (window.ActiveXObject) {
    xhr = new ActiveXObject("microsoft.XMLHTTP"); // IE 6 或者之前的浏览器
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        document.getElementById("id").innerHTML = xhr.responseText;
      } else {
        console.log("error:", xhr.statusText);
      }
    }
  };

  const url = "";

  // get方法
  xhr.open("GET", url, true); // true 表示异步，默认是异步，false 表示同步
  xhr.send();

  // post
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("name=hale&sex=man");
}

// 使用 Promise 封装 AJAX -> 返回一个 Promise 对象
function ajaxPromise(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); // 这里不考虑兼容性

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.state === 200) {
          resolve(xhr.responseText);
        } else {
          reject(new Error(xhr.stateText));
        }
      }

      xhr.open("GET", url, true);
      xhr.send();

      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send("name=hale");
    };
  });
}
