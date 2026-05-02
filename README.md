# 迭代算法可视化课件 | Slidev

> 基于 Slidev + Markdown 制作的《算法设计与分析》第 4 章迭代算法交互式课件。项目围绕递推法、倒推法、欧几里得算法、杨辉三角、沙漠储油问题、牛顿迭代法与二分法等内容进行结构化展示，可在线演示，也可导出为 PPTX。

## 在线预览

- 在线课件：<https://lheng2386-png.github.io/iterative-method-slidev/>
- 源码仓库：<https://github.com/lheng2386-png/iterative-method-slidev>

## 项目简介

本项目将传统算法课程内容转化为代码化课件，使用 Markdown 编写幻灯片内容，通过 Slidev 渲染为可交互网页。相比普通 PPT，本项目更适合长期维护、版本管理和在线展示。

它既可以作为在线交互式网页课件展示，也可以导出为 PPTX，用于课程汇报、课堂演示、学习笔记和个人作品集展示。

## 内容目录

1. 迭代算法基本思想
2. 递推法：兔子繁殖问题
3. 递推法：欧几里得算法
4. 倒推法：猴子吃桃
5. 倒推法：一维数组输出杨辉三角
6. 倒推法：穿越沙漠储油问题
7. 迭代法解方程组
8. 牛顿迭代法求根
9. 二分法求方程根
10. 迭代算法总结

## 项目亮点

- 使用 Slidev 构建交互式网页课件
- 使用 Markdown 管理课程内容，便于维护和二次扩展
- 支持数学公式、代码块、Mermaid 流程图和双栏排版
- 可通过 GitHub Pages 在线部署
- 可导出为 PPTX，用于课程汇报或课堂展示
- 同一份源码可同时构建静态网页并导出 PPTX

## 技术栈

- Slidev
- Markdown
- CSS
- Mermaid
- GitHub Pages
- GitHub Actions

## 本地运行

```bash
npm install
npm run dev
```

运行后会自动打开本地预览页面。

## 构建静态网页

```bash
npm run build
```

如果部署到 GitHub Pages 子路径，需要指定 base：

```bash
npm run build -- --base /iterative-method-slidev/
```

构建产物会生成在 `dist/` 目录，可用于静态站点部署。

## 导出 PPTX

```bash
npm run export
```

导出后可获得适合提交或课堂汇报使用的 PPTX 文件。如遇到浏览器依赖问题，可按终端提示安装 Playwright 相关依赖。

## GitHub Pages 自动部署

本仓库使用 `.github/workflows/deploy.yml` 配置 GitHub Actions 自动部署。

启用方式：

1. 打开仓库 Settings
2. 进入 Pages
3. 在 Build and deployment 中将 Source 设置为 GitHub Actions
4. 推送到 `main` 分支，或手动运行 Deploy pages 工作流

每次向 `main` 分支提交代码后，会自动执行：

```text
安装依赖 -> 构建 Slidev 静态网页 -> 上传 Pages artifact -> 部署到 GitHub Pages
```

部署完成后，在线访问地址为：

```text
https://lheng2386-png.github.io/iterative-method-slidev/
```

## 仓库展示建议

GitHub 仓库右侧 About 建议填写：

```text
基于 Slidev 的《迭代算法》交互式算法课件，覆盖递推法、倒推法、欧几里得算法、牛顿迭代法与二分法。
```

Website 建议填写：

```text
https://lheng2386-png.github.io/iterative-method-slidev/
```

Topics 建议添加：

```text
slidev
algorithm
markdown
presentation
github-pages
computer-science
iterative-method
```

## 可作为成果展示的表述

> 完成了一个基于 Slidev + Markdown + GitHub Pages 的算法可视化课件项目，主题为《迭代算法》。项目将递推法、倒推法、欧几里得算法、杨辉三角、牛顿迭代法和二分法等内容进行结构化讲解，并通过 GitHub Actions 实现自动化网页部署，支持在线网页展示与 PPTX 导出。

## 作者

Ethan Lee  
武汉科技大学计算机专业本科生
