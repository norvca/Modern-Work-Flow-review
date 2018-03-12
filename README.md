# Modern-Work-Flow-review

##  获取 html 案例
1. `git clone` 克隆别人的项目到本地
2. `git remote set-url origin <your repo url>` 修改远程仓库地址
3. `git remote -v` 验证远程 url

##  npm 入门
1. `npm init` 初始化你的 package.json 文件
2. package.json 可以只保留 name 和 version 项
3. 通过 `npm install <packageName>` 下载的模块都会放入通文件夹的 node_modules 目录里。
4. 由于模块依赖信息会保存在 package.json 里，所以只要有 package.json 文件,输入 `npm install` 即可下载全部的模块到 node_modules 目录中。
5. 确保 .gitignore 文件里 包含 node_modules/ 目录，这样就不用上传大量的模块到 GitHub 里。
