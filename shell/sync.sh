#!/bin/bash

## 设置并加载变量
source "./shell/init.sh"
NowPath=${NowPath}
OutPutPath=${OutPutPath}
DeployPath="git@github.com:jjliu98/jjliu98.github.io.git"
DeployLocalPath="${NowPath}/jjliu98.github.io"
DeployEndText="https://github.com/jjliu98/jjliu98.github.io"

## 判断参数
desc=$1
if [ -z "${desc}" ]; then
  echo -e "\033[31m Err:需要开源说明 \033[0m"
  exit 1
fi
echo "git commit: ${desc}"

## 清理本地目录 dist 和 git 仓库
rm -rf "${OutPutPath}"
rm -rf "${DeployLocalPath}"

## 开始编译
pnpm run build &&
  cp "${NowPath}/package.json" "${OutPutPath}"

# 开始进行发布步骤 OutPutPath -> 远程 DeployPath
## 拉取远程仓库
git clone "${DeployPath}"

## git 本地仓库中 .git 移动到 dist 目录中
mv "${DeployLocalPath}/.git" "${OutPutPath}/.git"

## 删除本地 git 仓库
rm -rf "${DeployLocalPath}"

## dist 更名为 本地 git 仓库名
mv "${OutPutPath}" "${DeployLocalPath}"

# 将仓库推送到远端
cd "${DeployLocalPath}" || exit

git add . &&
  git commit -m "${desc}" &&
  git push &&
  ## 清理 dist
  rm -rf ".git" &&
  echo "${DeployLocalPath}"
echo "${OutPutPath}"
mv "${DeployLocalPath}" "${OutPutPath}" &&
  echo "已推送至${DeployPath}"

echo "同步结果查看： ${DeployEndText}"

exit 0
