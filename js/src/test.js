

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
      navigator.serviceWorker.register('/js/src/sw.js', {scope: '/js/src/sw.js'})
          .then(function (registration) {
              // 注册成功
            //   console.log('ServiceWorker registration successful with scope: ', registration.scope);
            // console.log('注册serviceWorker成功')
          })
          .catch(function (err) {
              // 注册失败:(
              console.log('ServiceWorker registration failed: ', err);
          });
  });
}