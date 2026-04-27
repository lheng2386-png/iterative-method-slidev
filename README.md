# 迭代法 Slidev 代码化课件

本仓库使用 Slidev + Markdown 重构 `迭代法.pptx` 的教学内容，覆盖迭代算法、递推法、倒推法、方程求根等章节。

## 开发环境

任务要求统一使用 VS Code。建议安装推荐扩展后，在 VS Code 中打开本仓库目录。

```bash
npm install
npm run dev
```

导出 PPTX：

```bash
npm run export
```

## 内容结构

- `slides.md`：Slidev 主课件，所有页面均以 Markdown 编写。
- `style.css`：统一视觉样式。
- `.vscode/`：VS Code 推荐扩展与任务配置。

## 代码化说明

课件未使用传统 PowerPoint 手工排版方式重做，主要通过 Markdown、Slidev frontmatter、代码块、LaTeX 公式和少量 CSS 完成。
