# Modern-Work-Flow-review

##  获取 html 案例
1. `git clone` 克隆别人的项目到本地
2. `git remote set-url origin <your repo url>` 修改远程仓库地址为你自己的仓库地址
3. `git remote -v` 验证远程 url 是否为你自己的仓库地址



## node入门

### node.js 是什么？

node.js 是一个 JavaScript 运行环境

### 为什么要用 node？

- 能使得 JavaScript 语言不被局限于浏览器中


- 他能直接与电脑文件交互，直接与数据库交互等，发送电子邮件等

### 使用方法

1. 在官网下载 node 后，命令行输入 `node -v` 即可查到当前使用的 node 的版本号

2. 测试一下： 如果成功就会在当前文件夹建立一个 index.html 文件

   ```js
   // 获取 filesystem 模块
   var fs = require('fs');

   // 写入数据到文件里
   fs.writeFile('index.html', '<h1>hello world</h1>', function(err) {
       if(err) {
       	return console.log(err);
       }else {
       	console.log('congrats!');
       }
   });

   ```

3. 在这个项目里 node 作为一个开发工具，来自动化处理我们的各种任务。



##  npm 入门

### npm 是什么？

npm 是 node 模块管理器，有了它我们可以直接安装使用别人写好的模块。

###使用方法

1. `npm init` 初始化你的 package.json 文件， package.json 记录了项目所需要的模块。
2. package.json 至少得有 name 和 version 项
3. 通过 `npm install <packageName>` 下载的模块都会放入通文件夹的 node_modules 目录里。
4. 由于模块依赖信息会保存在 package.json 里，所以只要有 package.json 文件,输入 `npm install` 即可下载全部的模块到 node_modules 目录中。
5. 确保 .gitignore 文件里 包含 node_modules/ 目录，这样就不用上传大量的模块到 GitHub 里。



## gulp 入门

### gulp是什么？

gulp 是一个自动化的构建工具， 它可以让不同的 gulp 插件按你想要顺序的执行，达到自动化的效果。

### gulp使用方法

1. `npm install --global gulp-cli` 全局安装 gulp 

2. `npm install gulp --save-dev` 到项目根目录下载 gulp 作为开发依赖

3. `touch gulpfile.js` 在项目根目录创建 gulkpfile.js 文件，在文件里引入 gulp

   ```js
   var gulp = require('gulp');

   gulp.task('default', function() {
     // place code for your default task here
   });
   ```

   ​

   ​




