## 什麼是 DOM？
DOM（Document Object Model，文件物件模型）是「瀏覽器」提供用來和「程式語言」溝通的橋樑，將 HTML 文件中的每個元素，以樹狀的結構來表示。透過 DOM 提供的 API，利用 JavaScript 即可選取 HTML 中的任何元素，並進行改變結構、樣式、內容等操作。

## 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？
 DOM 事件傳遞機制分為 3 個階段：捕獲階段（capture phase）、目標（target）、冒泡階段（bubbling phase）。

 當觸發事件時，會從最上層的根節點 window 向下傳遞事件到 target，此過程為「捕獲階段」。

 當事件傳遞到 target，屬於獨立的狀態，既不屬於捕獲階段，也不屬於冒泡階段。

 事件從 target 一層層向上傳回 window，此過程為「冒泡階段」。

## 什麼是 event delegation，為什麼我們需要它？
 event delegation，中文名為『事件代理』
 一般來說，當我們需要對某子元素監聽時，按照慣例我們會在目標的子元素上放事件監聽
 但是當需要監聽的子元素一旦多起來的時候，需要處理的程序就會變得既多且雜，
 但是透過了解事件傳遞機制的運作方式，我們可以知道所有的事件最後都會冒泡到父元素的位置，
 因此我們就可以直接在父元素的身上設置事件監聽，這就是事件代理
 如此一來，不但可以解決在工作效率上的煩惱，也能解決諸如動態新增等等的問題。

## event.preventDefault() 跟 event.stopPropagation() 差在哪裡，可以舉個範例嗎？
`event.preventDefault() ` 是阻止元素的預設動作，`event.stopPropagation()` 則是停止事件的傳遞。
 ```html
 <div class="outer">
       <a href="#" class="inner">測試</a>
     </div>
 ```

 ```javascript
 // 因為阻止元素的預設動作發生，所以當點擊 inner 時，a 連結預設的跳轉頁面並不會發生
 document.querySelector(".inner").addEventListener("click", (e) => {
   e.preventDefault();
 });
 // 阻止 element 的預設事件並不影響事件傳遞，所以當 click 事件冒泡到 outer 時，會 alert「冒泡到 outer」
 document.querySelector(".outer").addEventListener("click", (e) => {
   alert("冒泡到outer");
 });
 ```

 ```javascript
 //阻止事件傳遞不影響元素的動作本身，所以 a 連結會頁面。因為在 inner 阻止了事件繼續傳遞，所以 click 事件不會向上冒泡到 outer，放在 outer 的 eventListner 也就無法監聽到 click 事件，所以不會出現 alert。
 document.querySelector('.inner').addEventListener('click',(e) => {
 	e.stopPropagation()
 })
 document.querySelector(".outer").addEventListener("click", (e) => {
   alert("冒泡到outer");
 });
 ```