var tipuesearch = {"pages": [{'title': 'About me', 'text': 'Hello!!!!!!!我是40823144柯晉瑚。 \n 倉儲: https://github.com/40823144/cad2020 \n \n', 'tags': '', 'url': 'About me.html'}, {'title': 'W1', 'text': 'source from\xa0 https://40823111.github.io/cad2020/content/W1.html \n \n \n \n', 'tags': '', 'url': 'W1.html'}, {'title': 'HW', 'text': 'Inventor \n 雲端圖檔.zip', 'tags': '', 'url': 'HW.html'}, {'title': 'W2流程', 'text': '用github 建立cad2020倉儲。 \n 網址: https://github.com/40823144/cad2020 \n', 'tags': '', 'url': 'W2流程.html'}, {'title': 'W3', 'text': '小組分組 \n cad2020小組表單: http://mde.tw/cad2020/content/W3.html \n 亂數分組參考資料:  http://mde.tw/cp2020/content/%E4%BA%82%E6%95%B8%E5%88%86%E7%B5%84.html \n', 'tags': '', 'url': 'W3.html'}, {'title': 'W4～W6', 'text': '填寫自評與互評表單 \n 表單網址: https://docs.google.com/forms/d/e/1FAIpQLSe_9DoEZOnxBTyMaW0W_W_-jqCk6IaiO7waiLvQUqfFzuU3ig/viewform \n 教學影片：  \n', 'tags': '', 'url': 'W4～W6.html'}, {'title': 'ssh', 'text': '製作鑰匙的指令 \n ssh-keygen -t rsa -b 4096 -C  "使用者學號" \n \n 把製作好的 id_rsa 與 id_rsa.pub 利用 puttygen 轉換成 private key 與 public key \n \n \n \n 修改start.bat的設定 \n \n 將id_sra上的密碼丟到github setting裡的創建new sshkey \n \n 修改Y:\\tmp\\cad2020\\.git裡的config設定 \n \n 到putty.exe的session設定github.com \n \n 設定Proxy (隨身系統可不用 \n 設定SSH裡的Auth讀取鑰匙.ppk的位置 \n \n 之後便可以不輸入帳號密碼進行git push \n \n \n', 'tags': '', 'url': 'ssh.html'}, {'title': 'W7～W9', 'text': '利用 SciTE 編輯器類解譯 ANSI C 程式 \n https://bellard.org/tcc/  是一個小型的 ANSI C 解譯器, 可以與隨身系統中的 SciTE 結合, 讓工程師利用 ANSI C 程式語言進行電腦輔助設計分析. \n 進行步驟: \n \n 下載\xa0 tcc-0.9.27-win64-bin.zip , 解開壓縮檔案後的目錄為 tcc, 其中包含 tcc.exe, 可以用來編譯 ANSI C 程式, 這個目錄必須放在 y:\\ 根目錄中. \n 修改start.bat \n set path_portablegit=%Disk%:\\Portablegit\\bin;\nset path_julia=%Disk%:\\julia-1.5.2\\bin;\nset path_tcc=%Disk%:\\tcc\\;\n \npath=%Disk%:;%path_python%;%path_portablegit%;%path_julia%;%path_tcc%;%path%; \n 將start.bat 重新啟動, 並在命令列(cmd)中輸入 tcc,出現以下圖狀況即表示啟動命令搜尋路徑已經包含 y:\\tcc 目錄. \n Tiny C Compiler 0.9.27 - Copyright (C) 2001-2006 Fabrice Bellard\nUsage: tcc [options...] [-o outfile] [-c] infile(s)...\n       tcc [options...] -run infile [arguments...]\nGeneral options:\n  -c          compile only - generate an object file\n  -o outfile  set output filename\n  -run        run compiled source\n  -fflag      set or reset (with \'no-\' prefix) \'flag\' (see tcc -hh)\n  -Wwarning   set or reset (with \'no-\' prefix) \'warning\' (see tcc -hh)\n  -w          disable all warnings\n  -v -vv      show version, show search paths or loaded files\n  -h -hh      show this, show more help\n  -bench      show compilation statistics\n  -           use stdin pipe as infile\n  @listfile   read arguments from listfile\nPreprocessor options:\n  -Idir       add include path \'dir\'\n  -Dsym[=val] define \'sym\' with value \'val\'\n  -Usym       undefine \'sym\'\n  -E          preprocess only\nLinker options:\n  -Ldir       add library path \'dir\'\n  -llib       link with dynamic or static library \'lib\'\n  -r          generate (relocatable) object file\n  -shared     generate a shared library/dll\n  -rdynamic   export all global symbols to dynamic linker\n  -soname     set name for shared library to be used at runtime\n  -Wl,-opt[=val]  set linker option (see tcc -hh)\nDebugger options:\n  -g          generate runtime debug info\n  -b          compile with built-in memory and bounds checker (implies -g)\n  -bt N       show N callers in stack traces\nMisc. options:\n  -x[c|a|n]   specify type of the next infile\n  -nostdinc   do not use standard system include paths\n  -nostdlib   do not link with standard crt and libraries\n  -Bdir       set tcc\'s private include/library dir\n  -MD         generate dependency file for make\n  -MF file    specify dependency file name\n  -m32/64     defer to i386/x86_64 cross compiler\nTools:\n  create library  : tcc -ar [rcsv] lib.a files\n  create def file : tcc -impdef lib.dll [-v] [-o lib.def] \n \n \n \n 修改 SciTE 編輯器中的 cpp.properties, 讓 Tools -> Go 可以呼叫 tcc.exe 類解譯編輯器中副檔名為 .c 的 ANSI C 程式. \n 作法為開啟 SciTE 功能表 Options 往下點擊 Open cpp.properties 編輯設定檔案, 並且勾選 View -> Line Number 在編輯器中顯示行號, 針對\xa0 476 行之後的設定修改如下: \n ccopts=-pedantic -Os\n#cc=g++ $(ccopts) -c $(FileNameExt) -o $(FileName).o\n#ccc=gcc $(ccopts) -c $(FileNameExt) -o $(FileName).o\ncc=y:/tcc/tcc.exe -run\nccc=y:/tcc/tcc.exe -run\n \nmake.command=make\ncommand.compile.*.c=$(ccc) -std=c99\ncommand.build.*.c=$(make.command)\ncommand.build.*.h=$(make.command)\ncommand.clean.*.c=$(make.command) clean\ncommand.clean.*.h=$(make.command) clean\ncommand.go.*.c=$(cc) $(FileNameExt)\n#command.go.*.c=./$(FileName)\n# To make the Go command both compile (if needed) and execute, use this setting: \n \n \n \n 完成上述設定後, 可以在編輯器中納入 hello.c, 並且利用 Tools -> Go 直接進行存檔並且執行. \n #include <stdio.h>\n  \nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n} \n \n \n', 'tags': '', 'url': 'W7～W9.html'}, {'title': '----期中期末分界線----', 'text': '從期中下一週開始各小組需要利用CoppeliaSim製作一循環機構。', 'tags': '', 'url': '----期中期末分界線----.html'}, {'title': 'W10', 'text': '第一次小組 Meeting ： \n 決定主題，經討論結果決定設計自動化設備 \n', 'tags': '', 'url': 'W10.html'}, {'title': 'W11', 'text': '第二次小組Meeting: \n 進行分組，分為程式組、機構組以及畫圖組，互相配合設計並在最後進行整合。 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '第三次小組Meeting \n 對機構已經有初步的構思，但覺得不夠複雜，經討論後決定先製作雛形，再在路徑上做補強與更改。 \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '第四次小組Meeting \n 初步機構已經完成並可以作動，但須進行部分小更改，因為時間還有剩餘，將在現機構上進行加強。 \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '第五次小組Meeting \n 進行補強與修改 \n', 'tags': '', 'url': 'W14.html'}, {'title': 'W15', 'text': '第六次小組Meeting \n 討論機構作動途中可能會發生的問題，做改善與調整。 \n \n', 'tags': '', 'url': 'W15.html'}, {'title': 'W16', 'text': '第七次小組Meeting \n 機構已全部完成且能循環，每個組員提出自己的貢獻，並由組長進行整理並推送到小組網頁上。 \n', 'tags': '', 'url': 'W16.html'}, {'title': '課程筆記', 'text': '工程師需要的兩個特質:1.具有創造性 2.聰明的和精巧的創造 \n 多人網際協同 - 專業定位，無遠弗屆 (國際化) \n 持續改進 - 分散版本與歷程 (近端 + 雲端) \n 虛實互動 - 價值導向解決問題 (定性 + 定量 (數學模擬)) \n 機電資軟硬整合 - 買方導向，高度客製化 (適者生存)', 'tags': '', 'url': '課程筆記.html'}]};