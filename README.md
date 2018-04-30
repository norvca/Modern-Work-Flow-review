# Modern-Work-Flow-review

##  00 获取 html 案例
1. `git clone` 克隆别人的项目到本地
2. `git remote set-url origin <your repo url>` 修改远程仓库地址为你自己的仓库地址
3. `git remote -v` 验证远程 url 是否为你自己的仓库地址





## 01 node入门

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





##  02 npm 入门

### npm 是什么？

npm 是 node 模块管理器，有了它我们可以直接安装使用别人写好的模块。

###使用方法

1. `npm init` 初始化你的 package.json 文件， package.json 记录了项目所需要的模块。
2. package.json 至少得有 name 和 version 项
3. 通过 `npm install <packageName>` 下载的模块都会放入通文件夹的 node_modules 目录里。
4. 由于模块依赖信息会保存在 package.json 里，所以只要有 package.json 文件,输入 `npm install` 即可下载全部的模块到 node_modules 目录中。
5. 确保 .gitignore 文件里 包含 node_modules/ 目录，这样就不用上传大量的模块到 GitHub 里。





## 03 gulp 入门

### gulp是什么？

gulp 是一个自动化的构建工具， 它可以让不同的 gulp 插件按你想要顺序的执行，达到自动化的效果。

### gulp使用方法

1. `npm install --global gulp-cli` 全局安装 gulp 

2. `npm install gulp --save-dev` 到项目根目录下载 gulp 作为开发依赖

3. `touch gulpfile.js` 在项目根目录创建 gulkpfile.js 文件，在文件里引入 gulp

   ```js
   var gulp = require('gulp');

   gulp.task('html', function() {
     return gulp.src('./inner/goods') // 文件输入
       .pipe(// do something...)
       .pipe(gulp.dest('./outer/goods')) // 文件输出
   })

   ```

   ​



## 04 postcss 入门

postcss 是一个利用 js 插件来处理 css 的工具， 利用 postcss 里的插件可以实现为 css 自动添加浏览器前缀，支持变量、转换未来 css 语法等功能。在这个项目里配合 gulp 来构建自动化。

### 使用方法

`npm install gulp-postcss --save-dev` 安装 postcss，然后根据情况安装 postcss 插件



## 05 css 如何实现组件化？

1. 在 style.css 里通过 @import 方法导入各模块的 css 文件
2. 通过 postcss-import 解析 style.css 里的 @import 文件，生成 css 代码




## 06 gulp.js 文件实现组件化

在 gulpfile.js 文件里通过 `require('<gulpTaskFile>')` 引入各功能代码



## 07 处理 gulp 中的报错

gulp-watch 发现代码中的错误后会报错并停止监听，在 gulp 任务中通过监听报错进行处理使其仍能继续监听。

```js
gulp.task('style', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimport, autoprefixer, nested, cssvars]))
    // 监听代码，打印错误原因然后继续
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});
```



## 08 利用 html 标签实现图片响应式

1. 利用 `picture` 标签和 `source`  标签的媒体查询功能

   ```js
   <picture>
       // 针对不同宽度显示不同图片,可以根据情况选择高分辨率适应
       <source srcset="images/pic-large.jpg 1920w, images/pic-large-hi-dpi.jpg 3840w" media="(min-width: 1200px)">
       <source srcset="images/pic-medium.jpg" media="(min-width: 760px)">
       // 默认显示最小图片
       <img src="images/pic-small.jpg" alt="small pic">
   </picture>
   ```

2. 利用 `img`标签的 srcset 属性

   ```js
   <img srcset="images/pic-small.jpg 570w, images/pic-medium.jpg 1200w, image/pic-large,jpg 1920w" alt="this is a picture!">
   ```




## 09 webpack 入门 

1. 全局安装 webpack `npm install webpack -g`

2. 配置好 webpack 文件

   ```js
   var path = require('path')

   module.exports = {
     // 选择输出文件格式
     mode: "development",
     // 打包文件入口
     entry: "./app/assets/scripts/App.js",
     // 打包文件出口
     output: {
       path: path.resolve(__dirname, "./app/temp/scripts/"),
       filename: "App.js"
     }
   }

   ```

3. 一个简易的 webpack 模块

    创建一个 Person 模块,在 Person.js 模块里

   ```js
   function Person(name, age) {
       this.name = name;
       this.age = age;
       this.greet = function() {
   		console.log("Hello! this is " +this.name+ " and I'm " +this.age);
       }
   }

   module.exports = Person;
   ```

   在 App.js 里引入模块

   ```js
   var Person = require('./<path>/Person');

   var jhon = new Person('jhon', 12);
   jhon.greet();
   ```

   

## 10 在 gulp 里集成 webpack

1. 创建新的 gulp task 文件 scripts.js 用于触发 webpack 打包

   ```js
   var gulp = require('gulp'),
   webpack = require('webpack')

   gulp.task('scripts', function(callback) {
     // 引入webpack 配置
     webpack(require('../../webpack.config.js'), function(err, stats) {
       if (err) {
         console.log(err.toString());
       }
       console.log(stats.toString());
       callback();
     })
   })
   ```

2. 在 gulp watch 里监听 js 变化触发 script.js 完成自动打包工作

   ```js
   gulp.task('watch', function() {

     browserSync.init({
       server:{
         baseDir: 'app'
       }
     })

     // 监听 js 文件，触发 scriptRefresh 页面刷新任务
     watch('./app/assets/scripts/**/*.js', function() {
       gulp.start('scriptsRefresh');
     })
   })

   // 开始 scriptRefresh 页面刷新任务前先触发 scripts 打包任务
   gulp.task('scriptsRefresh', ['scripts'], function() {
     browserSync.reload();
   })
   ```




##11 babel 的使用

1. 集成 babel 到 webpack 设置里，需要用到 `babel-loader` 及核心组件

   `npm install babel-core babel-loader babel-preset-es2015 --save-dev` 

2. 在 webpack 里添加 babel 模块

   ```js
     module: {
       rules: [
         {
           loader: 'babel-loader',
           query: {
             presets: ['es2015']
           },
           test: /\.js$/,
           exclude: /node_modules/
         }
       ]
     }
   ```



## 12 如何避免写出面条式的 js 代码?

分离出事件源(DOM元素)、事件、事件处理函数，不把他们混在一起写。

```js
class Menu() {
    // 事件源
    constructor() {
        this.menuIcon = $('.menuIcon');
        event();
    }
    
    // 事件
    event() {
        this.menuIcon.click(this.fireTheMenu)
    }
    
    // 事件处理函数
    fireTheMenu() {
        console.log("Menu is clicked!")
    }
}
```







## 99 项目中用到的插件/工具

`autoprifixer`：自动添加浏览器前缀

`postcss-simple-vars`：给 css 设置变量名

`postcss-nested`：可以以嵌套的方式写 css 

`postcss-import`： @import 规则解析成内联代码

`normalize.css`：重定义一些浏览器默认样式，保证各浏览器呈现效果的一致性

`browser-syne`：浏览器同步监听工具

`postcss-mixins`：配合媒体查询做宽度自适应

`gulp-svg-sprite`：制作雪碧图

`gulp-rename`： 重命名文件

`del`：删除文件

`gulp-hexrgba`：使 CSS 的 rgba() 属性可以填写色彩的缩写

`waypoints`： 页面滑动到某个位置触发效果插件

`jquery-smooth-scroll`： 页面平滑移动插件

`gulp-svg2png`：转换 svg 为 png 增强兼容性

`gulp-imagemin` ：压缩图片尺寸

`gup-uesmin`：将 html 文件里没有优化的 scripts 和 css 文件替换为优化过的版本

`gulp-rev`： 文件版本替换

`gulp-cssnano`：css文件压缩

`gulp-uglify`：js 文件压缩

`babel-core / babel-loader / babel-preset-es2015`：转换 es6 代码为 es5代码