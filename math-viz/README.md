# 📉 Method of Steepest Descent Visualization (最急降下法可視化)

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)

This guide provides step-by-step instructions on how to set up, "pull over" the code, and run this React application locally using VS Code.

---

## 🇬🇧 English Instructions

### 1. ⚙️ Prerequisites
Ensure you have **Node.js** installed on your computer. You can check this by opening a terminal in VS Code and running:

```bash  
node -v  
```

### 2. ⚡ Create the Project (using Vite)
Open your terminal in VS Code and run the following commands to create a new React project:

```bash  
# Create a project named 'math-viz'  
npm create vite@latest math-viz -- --template react  

# Enter the project directory  
cd math-viz  

# Install basic dependencies  
npm install  
```

### 3. 🎨 Install & Configure Tailwind CSS
This project uses **Tailwind CSS** for styling. We will use the standard stable version (v3).

**Step A: Install Dependencies**
```bash  
npm install -D tailwindcss@3 postcss autoprefixer  
npx tailwindcss init -p  
```

**Step B: Configure `tailwind.config.js`**
> Open the **`tailwind.config.js`** file created in your project root and replace its content with:

```javascript  
/** @type {import('tailwindcss').Config} */  
export default {  
  content: [  
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],  
  theme: {  
    extend: {},  
  },  
  plugins: [],  
}  
```

**Step C: Add Directives to CSS**
> Open **`src/index.css`** and replace everything in it with just these three lines:

```css  
@tailwind base;  
@tailwind components;  
@tailwind utilities;  
```

### 4. 🧩 Install Icon Library
Install **lucide-react** for the icons used in the app:

```bash  
npm install lucide-react  
```

### 5. 📥 Pull Over the Code
Now, copy the code provided in the chat into your project.

**Create the Component File:**
1.  Inside the `src` folder, create a new file named **`SteepestDescentViz.jsx`**.
2.  Paste the complete code from the React component provided in the chat into this file.

**Update the Entry Point:**
> Open **`src/App.jsx`**. Replace its entire content with the following:

```javascript  
import SteepestDescentApp from './SteepestDescentViz'  

function App() {  
  return (  
    <div className="w-full h-full">  
      <SteepestDescentApp />  
    </div>  
  )  
}  

export default App  
```

### 6. 🚀 Run the Application
Finally, start the development server:

```bash  
npm run dev  
```

Hold **Ctrl** (or **Cmd** on Mac) and click the link shown in the terminal (usually `http://localhost:5173/`). Your browser will open, and you should see the visualization running!

---

## 🇯🇵 日本語ガイド (Japanese Instructions)

### 1. ⚙️ 前提条件
お使いのコンピュータに **Node.js** がインストールされていることを確認してください。VS Codeのターミナルで以下のコマンドを実行して確認できます。

```bash  
node -v  
```

### 2. ⚡ プロジェクトの作成 (Viteを使用)
VS Codeのターミナルを開き、以下のコマンドを実行して新しいReactプロジェクトを作成します。

```bash  
# 'math-viz' という名前のプロジェクトを作成  
npm create vite@latest math-viz -- --template react  

# 作成したフォルダに移動  
cd math-viz  

# 基本的な依存パッケージをインストール  
npm install  
```

### 3. 🎨 Tailwind CSS のインストールと設定
このプロジェクトでは、スタイリングに **Tailwind CSS** を使用しています。安定版（v3）を使用します。

**ステップ A: パッケージのインストール**
```bash  
npm install -D tailwindcss@3 postcss autoprefixer  
npx tailwindcss init -p  
```

**ステップ B: `tailwind.config.js` の設定**
> プロジェクトのルートディレクトリに作成された **`tailwind.config.js`** ファイルを開き、内容を以下のように書き換えてください。

```javascript  
/** @type {import('tailwindcss').Config} */  
export default {  
  content: [  
    "./index.html",  
    "./src/**/*.{js,ts,jsx,tsx}",  
  ],  
  theme: {  
    extend: {},  
  },  
  plugins: [],  
}  
```

**ステップ C: CSSファイルへのディレクティブ追加**
> **`src/index.css`** を開き、ファイルの中身をすべて削除して、以下の3行だけを貼り付けてください。

```css  
@tailwind base;  
@tailwind components;  
@tailwind utilities;  
```

### 4. 🧩 アイコンライブラリのインストール
アプリ内で使用しているアイコンのために **lucide-react** をインストールします。

```bash  
npm install lucide-react  
```

### 5. 📥 コードの配置 (Pull Over)
チャットで提供されたコードをプロジェクトをコピーします。

**コンポーネントファイルの作成:**
1.  `src` フォルダの中に、**`SteepestDescentViz.jsx`** という名前の新しいファイルを作成します。
2.  チャットで提供された **Reactコンポーネントの全コード** をこのファイルに貼り付けてください。

**エントリーポイントの更新:**
> **`src/App.jsx`** を開きます。内容をすべて削除し、以下のコードに置き換えてください。

```javascript  
import SteepestDescentApp from './SteepestDescentViz'  

function App() {  
  return (  
    <div className="w-full h-full">  
      <SteepestDescentApp />  
    </div>  
  )  
}  

export default App  
```

### 6. 🚀 アプリケーションの実行
最後に、開発サーバーを起動します。

```bash  
npm run dev  
```

ターミナルに表示されたリンク（通常は `http://localhost:5173/`）を **Ctrlキー**（Macの場合は **Cmdキー**）を押しながらクリックしてください。ブラウザが開き、可視化アプリが表示されます！