
console.log(1231231)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
      navigator.serviceWorker.register('/js/src/sw.js', {scope: '/'})
          .then(function (registration) {
              console.log(1111)
              // 注册成功
              console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch(function (err) {
              console.log(2222)
              // 注册失败:(
              console.log('ServiceWorker registration failed: ', err);
          });
  });
}