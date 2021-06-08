## 請以自己的話解釋 API 是什麼

API 的全名是 Appication Programming Interface ，用中文來說就是應用程式介面，可以把他當作應用程式之間溝通的橋樑。以老師舉的例子跟網路上的例子來看，API 就像餐廳中的服務生或拉麵店的點餐機，可以把我們的請求(菜單)傳達給廚房，廚房再經由服務生傳回我們要的回應(食物)。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

1. 401 需要授權以回應，與403相似但授權是可以辦到
2. 403 用戶端並無訪問權限，所以伺服器拒絕給予應有的回應
3. 102 伺服器收到並處理要求中，但並沒有回應

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

BASE URL: https://bluenetsrestaurantslist.com

 |說明|Method|Path|參數|範例|
 |---|---|---|---|---|
 |回傳所有餐廳資料|GET|/restaurants|_limit:限制回傳資料數量|/restaurants?_limit=10|
 |回傳單一餐廳資料|GET|/restaurants/:id|None|/restaurants/3|
 |刪除餐廳資料|DELETE|/restaurants/:id|None|None|
 |新增餐廳資料|POST|/restaurants|name: 餐廳名|None|
 |更改餐廳資料|PATCH|/restaurants/:id|name: 餐廳名|None|
