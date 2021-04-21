## 交作業流程

1.到 github classroom 連結到自己的倉庫，把 code 連結複製下來  
2.到終端機輸入 git clone 貼上剛剛的網址  
3.輸入 git branch week1 ，寫作業前新開一個 branch week1  
4.輸入 git checkout week1 切換分支 week1 開始寫作業  
5.用 git status 查看自己寫完作業後的版本狀態  
6.輸入 git commit -am"finished week1"，將作業add、commit  
7.輸入 git push origin week1，把作業推上 github.  
8.點選 compare & pull request、打上標題之後再按 create pull request  
9.把 PR 的連結複製起來，貼在學習系統上繳交作業  

等作業被批改完並 merge 後  
1.輸入 git checkout master 切換到 master  
2.輸入 git pull origin master 把最新的版本改動拉下來  
3.輸入 git branch -d week1 刪除已經 merge 的 week1 這個 branch



 