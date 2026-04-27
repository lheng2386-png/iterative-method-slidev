# 上传说明

这份补丁包用于把 `lheng2386-png/iterative-method-slidev` 包装成更像“正式成果”的 GitHub Pages 展示项目。

## 需要上传/替换的文件

1. `README.md`
2. `.github/workflows/deploy.yml`
3. `.gitignore`

## 推荐方式：本地 git 上传

把这三个文件放到仓库根目录对应位置后，运行：

```bash
git add .
git commit -m "Add GitHub Pages deployment and project README"
git push
```

## 网页端上传方式

1. 打开仓库主页
2. 替换根目录的 `README.md`
3. 点击 `Add file → Create new file`
4. 文件名填写：`.github/workflows/deploy.yml`
5. 粘贴 `deploy.yml` 内容并 Commit
6. 再创建 `.gitignore`
7. 进入 `Settings → Pages`
8. `Build and deployment → Source` 选择 `GitHub Actions`
9. 回到 `Actions` 页面，等待部署成功

## 成功后的访问地址

```text
https://lheng2386-png.github.io/iterative-method-slidev/
```

如果 404，优先检查：

1. Actions 是否运行成功
2. Settings → Pages 是否选择了 GitHub Actions
3. 仓库名是否仍然是 `iterative-method-slidev`
