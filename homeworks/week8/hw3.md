## 什麼是 Ajax？

AJAX是(Asynchronous Javascript and XML)非同步的 Javascript 和 XML 的縮寫，簡言之就是使用瀏覽器使用瀏覽器內建 XMLHttpRequest object 和 DOM 操控 Javascript，來達成非同步交換資料， Web Client 便能快速且即時更新介面及內容，不需重新讀取整個網頁，讓程式更快回應使用者的操作。

## 用 Ajax 與我們用表單送出資料的差別在哪？

1. form 表單會用 action 和 method 來決定提交目的地和提交方式，需要跳轉頁面。
2. AJAX 用 JS 來傳送資料，不需要跳轉頁面，瀏覽器發送 request 給伺服器。伺服器回傳 response 給頁面上的 JS 。

## JSONP 是什麼？

即利用 script 或 img 這兩個標籤沒有跨網域的限制，透過標籤讀取網頁的 JS 資訊，再透過指定的 function 進行輸出，就能夠拿到想要的資料。

## 要如何存取跨網域的 API？

後端必須在 Response header 中加上相符的 Acess-Control-Allow-Origin ，允許特定來源（Origin）或以星號（＊）代表允許所有來源，之後任何網域的 api 連接到伺服器時，都會預設允許該跨網域呼叫。


## 為什麼我們在第四週時沒碰到跨網域的問題，這週卻碰到了？

1. Node.js 程式直接發 request 給 server 後，可以直接拿到 server 回傳的 response ， 中間沒有經過瀏覽器，所以回傳的資料不會被更改，也沒有任何的限制。

2. 瀏覽器上的 js 會先透過瀏覽器，經由瀏覽器發 request 給 server 後， server 再發 response 給瀏覽器，瀏覽器再把資料給 js 兒在資料傳輸的過程中有油瀏覽器，必須按照瀏覽器的規則拿資料，也就是須遵守同源政策。


 