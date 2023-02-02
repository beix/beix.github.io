//随机访问文章函数，判断是否重复
function randomPost() {
     fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
         let ls = data.querySelectorAll('url loc');
         location.href = ls[Math.floor(Math.random() * ls.length)].innerHTML
     })
 }