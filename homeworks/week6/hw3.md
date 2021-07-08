## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1. <hr>: 水平分隔線，可用來區分段落。
 
2. <progress>: progress 是一個顯示進度條的標籤， 用法為<progress value="32" max="100"> 32% </progress>

3. del:用來標示被刪除的文字內容，文字上會多一條刪除線。

## 請問什麼是盒模型（box modal）
 在 CSS 裡，每個物件是由許多大大小小的盒子組成，盒子裡會有 margin, border, padding, content。 
 Margin 外邊距，在最外層的空間，是物體與物體之間的距離。
 Border 包覆內容的框線。
 Padding 內邊距，區別邊框跟內容兩者之間的差距。
 Content 指的是物件本身的內容。

 這是 CSS 裡最基礎也很重要的概念，因為所有的元素都是盒模型組成的。為了方便計算盒子的大小，我們習慣在 CSS 裡面設置以下的方式，這樣寬度就會自行調整。

  box-sizing: border-box;
 

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
 1. inline: 是一種行內元素，常見的有 <span>, <a>, <input>, <img>。元素可在同一行呈現，設定 margin 與 padding 看起來不會有效果，排版不會隨之改變。

 2. block: 是一種區塊元素，常見的有 <div>, <ul>, <p>, <h> 系列。它自己佔滿一整行，不會跟其他元素並列，可以設定 margin, padding。

 3. inline-block: 是一種行內區塊，它有著上述兩者的優點，可以調整寬高，也可以跟其他元素並排。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

 1. **static:** 預設的定位方式，例如 block 由上往下排、inline 左往右排。
 2. **relative:** 以預設的定位為原點去移動，不會動到其他元素的位置。
 3. **absolute:** 往上找到 position 不是 static 的元素，以他為定位點移動。position 為 absolute 的元素會脫離排版，底下的元素會遞補上來。
 4. **fixed:** 以 viewport 作定位，不管網頁滑到哪裡，都會一直在同一個位置上。



