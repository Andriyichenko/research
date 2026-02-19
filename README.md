# Research Machine Learning Workspace

![VS Code](https://img.shields.io/badge/Editor-VS%20Code-007ACC?logo=visualstudiocode) ![Machine Learning](https://img.shields.io/badge/Focus-Machine%20Learning-ff6f00?logo=tensorflow) ![Visualization](https://img.shields.io/badge/Visualization-Interactive-00c7b7?logo=databricks)

💠 **Purpose**: This workspace curates lecture notes, proofs, slides, and visualization assets for mechanical/machine learning (`機械学習`) research, optimized for authoring inside VS Code.

## 🧠 Repository Highlights

- 📚 **Structured learning tracks**: `ML*` directories mirror course modules (2.2, 3.5–3.6, 3.10, 3.11, 4.2) with LaTeX sources, figures, and bibliographies.
- 📈 **`math-viz/` spotlight**: React + Vite + Tailwind-powered visualizations (e.g., `4.2_SteepestDescentViz.jsx`) to demonstrate optimization geometry.
- 📓 **Formal proofs**: The `semi/` subtree stores convolution/estimation proofs and auxiliary checks for reproducibility.
- 🛠️ **VS Code ready**: Tasks for C++ builds and a modern JavaScript toolchain are pre-configured so you can run experiments or regenerate figures quickly.

## 📁 Directory Guide

| Icon | Path | Contents |
|------|------|----------|
| 🎨 | `math-viz/` | Interactive visualization app (Vite, React, Tailwind) for geometric intuition and algorithm demos. |
| 🧾 | `semi/` | Proof manuscripts (`pf_*.tex`), calculation checks, and auxiliary C++ verification snippets. |
| 📘 | `ML2.2/` | Lecture chapters, appendices, custom style files, and supporting figures for module 2.2. |
| 📗 | `ML3.5-3.6/`, `ML3.10/`, `ML3.11/` | Advanced module notes with bespoke `.sty` themes and PNG figures. |
| 📙 | `ML4.2/` | Optimization-focused materials plus shared artwork under `pics/`. |
| 🧪 | `test/` | Minimal TeX sandboxes for rapidly prototyping math notation. |

## 📑 PDF 資料一覧 (PDF Directory)

GitHub上でレンダリングされたPDFへ直接アクセスできるクィックリンク集です。

| Module | Description | Link |
|--------|-------------|------|
| **ML 2.2** | シグモイド関数 (Sigmoid Function) | [ML2.2.pdf](https://github.com/Andriyichenko/research/blob/main/semi/out/ML2.2.pdf) |
| | 講義スライド (Slides) | [ml2.2-ppt.pdf](https://github.com/Andriyichenko/research/blob/main/semi/out/ml2.2-ppt.pdf) |
| **ML 3.5-3.6** | 交差エントロピー (Cross-Entropy) | [ML3.5-3.6.pdf](https://github.com/Andriyichenko/research/blob/main/semi/ML3.5-3.6/out/ML3.5-3.6.pdf) |
| **ML 3.10** | 平均二乗誤差 (Mean Squared Error) | [ML3.10.pdf](https://github.com/Andriyichenko/research/blob/main/semi/ML3.10/out/ML3.10.pdf) |
| **ML 3.11** | 正則化 (Regularization) | [ml3.11.pdf](https://github.com/Andriyichenko/research/blob/main/semi/ML3.11/out/ml3.11.pdf) |
| **ML 4.2** | 最急降下法 (Steepest Descent) | [ML4.2.pdf](https://github.com/Andriyichenko/research/blob/main/semi/ML4.2/out/ML4.2.pdf) |
| **ML 4.2.4** | 直線探索法 (Line Search Method) | [ML4.2.4.pdf](https://github.com/Andriyichenko/research/blob/main/semi/ML4.2.4/out/ML4.2.4.pdf) |
| **ML 4.3** |  物理の運動学からの解釈(Kinematic Interpretation) | [ML4.3.pdf](https://github.com/Andriyichenko/research/blob/main/semi/ML4.3/out/ML4.3.pdf) |
| **ML 4.4** |  モーメンタム法(Momentum Method) | [ML4.4.pdf](https://github.com/Andriyichenko/research/blob/main/semi/ML4.4/out/ml4.4_momentum_method.pdf) |
| **Application: Seedance 2.0** |  AIモデルの応用:Seedance 2.0 | [Application.pdf](https://github.com/Andriyichenko/research/blob/main/semi/ML4.4/out/ml4.4_momentum_method.pdf) |
| **Proofs** | 畳み込みの証明 (Convolution) | [pf_convolution.pdf](https://github.com/Andriyichenko/research/blob/main/semi/out/pf_convolution.pdf) |
| | 推定の証明 (Estimation) | [pf_estimation.pdf](https://github.com/Andriyichenko/research/blob/main/semi/out/pf_estimation.pdf) |

## ⚙️ VS Code Workflow Tips

1. 🚀 **Launch math visualizations**: `cd math-viz && npm install && npm run dev` to preview React demos with hot-reload.
2. 🧮 **Compile LaTeX**: Use the LaTeX Workshop extension or command-line `latexmk` to render any `ML*.tex` target.
3. 🧰 **Run numerical checks**: Open `semi/check/` and trigger the predefined C++ build tasks for quick sanity tests.
4. 🗂️ **Use VS Code Workspaces**: Pin frequently edited modules (e.g., `ML3.10.tex`) to keep complex derivations organized.

## 🔭 Roadmap & Curation

- 🌀 Extend `math-viz` with more optimization and probabilistic models to accompany each ML chapter.
- 🧩 Consolidate shared macros into a unified `.sty` package for consistency.
- 🧷 Track figure provenance with embedded metadata to streamline future publications.

## 📇 Contact

- 👤 **Andre YI**
- ✉️ [andreyi@outlook.jp](mailto:andreyi@outlook.jp)
- 🌐 [www.andreyis.com](https://www.andreyis.com)

---

## 🇯🇵 リポジトリ概要（Japanese Version）

### 🎯 目的
VS Code 上で効率よく編集できるように構築された機械学習（機械学习）研究ノート、証明、スライド、可視化リソースの総合アーカイブです。

### 🧠 主な特徴
- 📚 **体系立てたモジュール構成**：`ML*` ディレクトリは各講義ブロックごとに TeX ソースと図版を収録。
- 📈 **`math-viz/` の強化**：Vite + React + Tailwind による対話型ビジュアライゼーションで勾配法などを直感的に理解できます。
- 🧾 **証明**：`semi/` には畳み込み・推定に関する証明や検算コードがまとまっています。
- 🛠️ **VS Code 最適化**：C++ ビルドタスクやフロントエンド開発環境が事前設定され、すぐに再現実験を実行可能。

### 📁 ディレクトリ一覧
- 🎨 `math-viz/` — ステープスト降下などを可視化するインタラクティブ教材。
- 🧾 `semi/` — 理論証明、計算チェック、補助 C++ プロジェクト。
- 📘 `ML2.2/` ほか `ML3.*`, `ML4.2/` — 章別の講義ノート、スタイルファイル、画像群。
- 🧪 `test/` — 数式レイアウトを素早く試すためのテスト TeX。

### 💻 VS Code 活用ヒント
1. 🚀 `math-viz` を起動してブラウザ上で視覚化を検証。
2. 🧮 LaTeX Workshop や `latexmk` で任意の ML 章をビルド。
3. 🧰 C++ タスクを使い、`semi/check/` 内の検算コードを即時確認。

### 👤 連絡先
- 🧑‍💻 **Andre YI**
- ✉️ [andreyi@outlook.jp](mailto:andreyi@outlook.jp)
- 🌐 [www.andreyis.com](https://www.andreyis.com)

継続的にビジュアル教材と LaTeX スタイルを磨き込み、プロフェッショナルな機械学習研究ノート群として発展させていきます。
