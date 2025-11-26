import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft, BookOpen, Activity, Settings, Info, User, Globe } from 'lucide-react';

// スタイルユーティリティ
const cardClass = "bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden";
const btnClass = "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:outline-none";

// 数式表示コンポーネント
const MathFormula = ({ children, className = "" }) => (
  <span className={`font-serif italic bg-gray-50 px-1.5 py-0.5 rounded text-gray-800 border border-gray-200 mx-1 ${className}`}>
    {children}
  </span>
);

export default function SteepestDescentApp() {
  const [activeTab, setActiveTab] = useState('tutorial'); // tutorial | simulation

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-100 flex flex-col">
      {/* ヘッダーナビゲーション */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-blue-200 shadow-lg">
              SD
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-tight">最急降下法 (Method of Steepest Descent)</h1>
              <p className="text-xs text-slate-500">資料 §4.2.3 に基づく可視化</p>
            </div>
          </div>
          <nav className="flex bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('tutorial')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'tutorial' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              理論的導出
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                activeTab === 'simulation' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              峡谷関数シミュレーション (Ex 1.2)
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 flex-grow">
        {activeTab === 'tutorial' ? <TutorialSection /> : <SimulationSection />}
      </main>

      {/* フッター：著者情報 */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <User size={16} className="text-blue-500" />
            <span>Created by: <span className="font-semibold text-slate-700">Andre YI</span></span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={16} className="text-blue-500" />
            <a 
              href="https://www.andreyis.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 hover:underline transition-colors"
            >
              www.andreyis.com
            </a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Andre YI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * 理論セクション - ステップバイステップ解説
 */
function TutorialSection() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "1. 問題設定と一次近似",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-slate-600 leading-relaxed">
            目的：現在の点 <MathFormula>x^0</MathFormula> において、関数 <MathFormula>f</MathFormula> を最も減少させる単位ベクトル <MathFormula>ν</MathFormula>（方向）を求めたい。
          </p>
          
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
              <BookOpen size={18}/> テイラー展開 (Taylor Expansion)
            </h4>
            <p className="mb-3 text-slate-700">テイラー展開の一次近似より：</p>
            <div className="font-mono text-center text-lg text-blue-900 bg-white p-4 rounded border border-blue-100 shadow-sm">
              f(x⁰ + ην) - f(x⁰) ≈ η · ⟨∇f(x⁰), ν⟩
            </div>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              ここで <MathFormula>η</MathFormula> はステップ幅、<MathFormula>∇f(x⁰)</MathFormula> は勾配です。
              左辺の関数の減少幅を最大化（つまり負の値を最小化）するには、右辺の内積 <MathFormula>⟨∇f(x⁰), ν⟩</MathFormula> を最小にする必要があります。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "2. 最適な方向の探索 (Cauchy-Schwarz)",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600">
            内積を最小にする <MathFormula>ν</MathFormula> を見つけるために、<strong>コーシー・シュワルツの不等式</strong>を利用します。
          </p>
          
          <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
             <h4 className="font-semibold text-slate-800 mb-2">不等式の原理 (PDF Ex 3)</h4>
             <div className="font-mono text-center text-lg mb-4">
                |⟨a, b⟩| ≤ ||a|| · ||b||
             </div>
             <p className="text-slate-600 text-sm mb-4">
               この問題に適用すると（<MathFormula>||ν|| = 1</MathFormula> であるため）：
             </p>
             <div className="font-mono text-center text-base bg-white p-3 rounded border border-slate-200">
                -||∇f(x⁰)|| ≤ ⟨∇f(x⁰), ν⟩ ≤ ||∇f(x⁰)||
             </div>
          </div>

          <div className="p-4 bg-green-50 border-l-4 border-green-500 text-green-800 rounded-r-lg">
            <h5 className="font-bold">結論</h5>
            <p className="mt-1">
              ベクトル <MathFormula>ν</MathFormula> が勾配 <MathFormula>∇f(x⁰)</MathFormula> と<strong>反対方向</strong>を向いているとき、内積は最小値 <MathFormula>-||∇f(x⁰)||</MathFormula> を取ります。
            </p>
          </div>
        </div>
      )
    },
    {
      title: "3. ラグランジュの未定乗数法による証明 (PDF Ex 1)",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600">
            資料では厳密な証明が提供されています。制約条件 <MathFormula>||ν||² - 1 = 0</MathFormula> の下で <MathFormula>⟨∇f(x⁰), ν⟩</MathFormula> を最小化します。
          </p>
          
          {/* 这里的样式已经修改为浅色风格 */}
          <div className="space-y-3 font-mono text-sm bg-slate-50 text-slate-800 p-6 rounded-xl border border-slate-200 overflow-x-auto">
             <p className="text-slate-500 font-medium">// ラグランジュ関数を定義</p>
             <p>L(ν, λ) = ⟨∇f(x⁰), ν⟩ + λ(||ν||² - 1)</p>
             <br/>
             <p className="text-slate-500 font-medium">// ν で偏微分して 0 とおく</p>
             <p>∇L = ∇f(x⁰) + 2λν = 0</p>
             <br/>
             <p className="text-slate-500 font-medium">// ν について解く</p>
             <p className="text-blue-600 font-bold bg-blue-50 inline-block px-2 rounded">ν = - (1 / 2λ) · ∇f(x⁰)</p>
          </div>
          
          <p className="text-slate-600 text-sm">
            これを解くと <MathFormula>λ = ±0.5 ||∇f(x⁰)||</MathFormula> となります。最小値を取るために負号を選び、最終的に最急降下方向が得られます：
            <MathFormula className="font-bold not-italic text-blue-600">ν* = - ∇f(x⁰) / ||∇f(x⁰)||</MathFormula>
          </p>
        </div>
      )
    },
    {
      title: "4. 標準的な勾配降下法の式",
      content: (
        <div className="space-y-6">
          <p className="text-slate-600">
            以上の導出から反復式が得られます。ステップ幅を <MathFormula>η = δ||∇f(x^n)||</MathFormula> (<MathFormula>δ &gt; 0</MathFormula>) と仮定すると、式は以下のように簡略化されます：
          </p>
          
          <div className="flex justify-center my-8">
            <div className="bg-white px-10 py-8 rounded-2xl border-2 border-blue-100 shadow-xl shadow-blue-50 transform hover:scale-105 transition-transform">
              <span className="text-2xl font-mono text-blue-900 font-bold">
                x^{`n+1`} = x^n - δ · ∇f(x^n)
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
               <h5 className="font-bold text-yellow-800 mb-1">基本的な考え方</h5>
               <p className="text-xs text-yellow-700">常に勾配の反対方向（関数値が最も減少する方向）に一歩進みます。</p>
             </div>
             <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
               <h5 className="font-bold text-purple-800 mb-1">収束性</h5>
               <p className="text-xs text-purple-700"><MathFormula>∇f(x^n) → 0</MathFormula> のとき、アルゴリズムは極小値に収束します。</p>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* サイドバー（ステップ） */}
      <div className="lg:col-span-4 space-y-3">
        {steps.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setStep(idx)}
            className={`w-full text-left px-5 py-4 rounded-xl transition-all flex items-center justify-between group ${
              step === idx
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-[1.02]'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100 hover:border-blue-100'
            }`}
          >
            <div>
               <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${step === idx ? 'text-blue-200' : 'text-slate-400'}`}>Step {idx + 1}</div>
               <span className="font-bold">{s.title}</span>
            </div>
            {step === idx && <ChevronRight size={20} className="text-blue-200" />}
          </button>
        ))}
        
        <div className="mt-8 bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-slate-900 font-bold border-b border-slate-100 pb-2">
            <Info size={18} className="text-blue-500" />
            <span>資料インデックス</span>
          </div>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="bg-slate-100 px-1.5 rounded text-xs text-slate-500 mt-0.5">P1</span>
              <span>テイラー展開と定義</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-slate-100 px-1.5 rounded text-xs text-slate-500 mt-0.5">P1</span>
              <span>Prop 1.1 標準的な勾配降下法</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-slate-100 px-1.5 rounded text-xs text-slate-500 mt-0.5">Ex1</span>
              <span>ラグランジュの未定乗数法</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-slate-100 px-1.5 rounded text-xs text-slate-500 mt-0.5">Appx</span>
              <span>Cauchy-Schwarz の証明 (A.1)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* コンテンツ表示エリア */}
      <div className={`lg:col-span-8 ${cardClass} p-8 min-h-[500px] flex flex-col justify-between relative`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100">{steps[step].title}</h2>
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
             {steps[step].content}
          </div>
        </div>
        
        <div className="flex justify-between mt-12 pt-6 border-t border-slate-100">
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${
              step === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <ChevronLeft size={18} /> 前へ
          </button>
          <button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium shadow-md transition-all ${
              step === steps.length - 1 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none' 
                : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200'
            }`}
          >
            次へ <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * シミュレーションセクション - 峡谷関数
 */
function SimulationSection() {
  // 状態
  const [delta, setDelta] = useState(0.8); // 学習率
  const [points, setPoints] = useState([]); // 履歴
  const [isPlaying, setIsPlaying] = useState(false);
  const [iteration, setIteration] = useState(0);
  const canvasRef = useRef(null);
  
  // 初期点
  const x0 = 0.0;
  const y0 = 1.8;

  // 反復ロジック - PDF Ex 1.2
  const nextStep = (currentPoints) => {
    const lastPoint = currentPoints.length > 0 ? currentPoints[currentPoints.length - 1] : { x: x0, y: y0 };
    
    // 勾配: ∇f = (-1, y)
    // 更新ルール: 
    // x_new = x - δ*(-1) = x + δ
    // y_new = y - δ*(y) = y(1-δ)
    
    const newPoint = {
      x: lastPoint.x + delta,
      y: lastPoint.y * (1 - delta)
    };
    
    return [...currentPoints, newPoint];
  };

  // リセット
  const handleReset = () => {
    setPoints([{ x: x0, y: y0 }]);
    setIteration(0);
    setIsPlaying(false);
  };

  // 初期化
  useEffect(() => {
    handleReset();
  }, []); // eslint-disable-line

  // 自動再生タイマー
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setPoints(prev => {
          if (prev.length > 30) { 
            setIsPlaying(false);
            return prev;
          }
          const next = nextStep(prev);
          setIteration(next.length - 1);
          return next;
        });
      }, 400); // 400ms interval
    }
    return () => clearInterval(interval);
  }, [isPlaying, delta]);

  // ステップ実行
  const handleStep = () => {
    setPoints(prev => {
       const next = nextStep(prev);
       setIteration(next.length - 1);
       return next;
    });
  };

  // Canvas描画
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // クリア
    ctx.clearRect(0, 0, width, height);

    // 座標マッピング
    const xMax = 16;
    const yMax = 2.5;
    
    const mapX = (x) => (x / xMax) * (width - 60) + 40;
    const mapY = (y) => height / 2 - (y / yMax) * (height / 2 - 20);

    // 1. グリッド
    ctx.strokeStyle = '#f1f5f9';
    ctx.lineWidth = 1;
    for(let i=0; i<=xMax; i+=2) {
      ctx.beginPath(); ctx.moveTo(mapX(i), 0); ctx.lineTo(mapX(i), height); ctx.stroke();
    }
    for(let j=-2; j<=2; j+=1) {
      ctx.beginPath(); ctx.moveTo(0, mapY(j)); ctx.lineTo(width, mapY(j)); ctx.stroke();
    }

    // 2. 軸
    ctx.beginPath();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    // X軸
    ctx.moveTo(20, mapY(0));
    ctx.lineTo(width - 20, mapY(0));
    // Y軸
    ctx.moveTo(mapX(0), 20);
    ctx.lineTo(mapX(0), height - 20);
    ctx.stroke();

    // ラベル
    ctx.font = '12px sans-serif';
    ctx.fillStyle = '#64748b';
    ctx.fillText('X', width - 20, mapY(0) + 20);
    ctx.fillText('Y', mapX(0) - 20, 20);

    // 3. 峡谷の概形 (ガイド)
    ctx.beginPath();
    ctx.strokeStyle = '#cbd5e1';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1;
    ctx.moveTo(mapX(0), mapY(2));
    ctx.bezierCurveTo(mapX(5), mapY(1.5), mapX(10), mapY(1), mapX(15), mapY(0.5));
    ctx.moveTo(mapX(0), mapY(-2));
    ctx.bezierCurveTo(mapX(5), mapY(-1.5), mapX(10), mapY(-1), mapX(15), mapY(-0.5));
    ctx.stroke();
    ctx.setLineDash([]);

    // 4. 点と軌跡
    if (points.length > 0) {
      // 線
      ctx.beginPath();
      ctx.strokeStyle = delta > 1 ? '#ef4444' : '#2563eb'; 
      ctx.lineWidth = 2;
      ctx.moveTo(mapX(points[0].x), mapY(points[0].y));
      
      points.forEach((p) => {
        ctx.lineTo(mapX(p.x), mapY(p.y));
      });
      ctx.stroke();

      // 点
      points.forEach((p, i) => {
        ctx.beginPath();
        ctx.fillStyle = i === 0 ? '#10b981' : (i === points.length - 1 ? '#f59e0b' : '#94a3b8');
        const radius = i === points.length - 1 ? 5 : 3;
        ctx.arc(mapX(p.x), mapY(p.y), radius, 0, Math.PI * 2);
        ctx.fill();
        
        // 最新の点のみ座標表示
        if (i === points.length - 1) {
          ctx.font = 'bold 12px monospace';
          ctx.fillStyle = '#1e293b';
          const label = `(${p.x.toFixed(1)}, ${p.y.toFixed(2)})`;
          const labelX = mapX(p.x) + 10 > width - 80 ? mapX(p.x) - 100 : mapX(p.x) + 10;
          const labelY = mapY(p.y) - 10 < 20 ? mapY(p.y) + 20 : mapY(p.y) - 10;
          ctx.fillText(label, labelX, labelY);
        }
      });
    }
  }, [points, delta]);

  return (
    <div className="space-y-6">
      <div className={`${cardClass} p-6`}>
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* 左側：コントロールパネル */}
          <div className="w-full lg:w-1/3 space-y-8 border-r border-slate-100 lg:pr-8">
            <div>
              <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800 border-b border-slate-100 pb-2 mb-4">
                <Settings size={20} className="text-slate-500"/> パラメータ設定
              </h3>
              <div className="bg-slate-50 p-3 rounded text-sm text-slate-600 font-mono mb-4 border border-slate-200">
                f(x,y) = 0.5y² - x <br/>
                ∇f = (-1, y)
              </div>
            </div>

            {/* 学習率スライダー */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-slate-700">学習率 (δ)</label>
                <div className="font-mono text-blue-700 bg-blue-50 px-3 py-1 rounded text-sm font-bold border border-blue-100">
                  δ = {delta.toFixed(2)}
                </div>
              </div>
              
              <div className="relative pt-1">
                <input
                  type="range"
                  min="0.1"
                  max="1.9"
                  step="0.05"
                  value={delta}
                  onChange={(e) => {
                    setDelta(parseFloat(e.target.value));
                    handleReset();
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-2 font-medium">
                  <span>0.1 (滑らか)</span>
                  <span>1.0 (境界)</span>
                  <span>1.9 (激しい振動)</span>
                </div>
              </div>

              {/* プリセットボタン */}
              <div className="grid grid-cols-1 gap-2">
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">クイックプリセット</p>
                 <button
                  onClick={() => { setDelta(0.6); handleReset(); }}
                  className="flex items-center justify-between px-3 py-2 bg-emerald-50 text-emerald-700 rounded border border-emerald-200 hover:bg-emerald-100 transition-colors text-sm text-left"
                >
                  <span>ケース A: 滑らかな収束 (0 &lt; δ &lt; 1)</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                </button>
                <button
                  onClick={() => { setDelta(1.5); handleReset(); }}
                  className="flex items-center justify-between px-3 py-2 bg-rose-50 text-rose-700 rounded border border-rose-200 hover:bg-rose-100 transition-colors text-sm text-left"
                >
                  <span>ケース B: 振動収束 (1 &lt; δ &lt; 2)</span>
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                </button>
              </div>
            </div>

            {/* 再生コントロール */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
               {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className={`${btnClass} bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200`}
                >
                  <Play size={18} fill="currentColor" /> 開始
                </button>
              ) : (
                <button
                  onClick={() => setIsPlaying(false)}
                  className={`${btnClass} bg-amber-500 text-white hover:bg-amber-600 shadow-lg shadow-amber-200`}
                >
                  <Pause size={18} fill="currentColor" /> 一時停止
                </button>
              )}
              
              <button
                onClick={handleStep}
                className={`${btnClass} bg-white border border-slate-300 hover:bg-slate-50 text-slate-700`}
              >
                ステップ <ChevronRight size={18} />
              </button>
              
              <button
                onClick={handleReset}
                className={`${btnClass} bg-slate-100 text-slate-600 hover:bg-slate-200 ml-auto`}
              >
                <RotateCcw size={18} />
              </button>
            </div>
            
            <div className="text-xs text-slate-400 mt-2 text-center">
               「開始」をクリックまたはスライダーを操作
            </div>
          </div>

          {/* 右側：可視化キャンバス */}
          <div className="w-full lg:w-2/3 flex flex-col">
             <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2 text-slate-800">
                  <Activity size={20} className="text-blue-600"/>
                  収束軌跡の可視化 (y vs x)
                </h3>
                <div className="bg-slate-100 px-3 py-1 rounded-full text-xs font-mono text-slate-600">
                   n = {iteration}
                </div>
             </div>
             
             <div className="relative border border-slate-200 rounded-xl bg-white shadow-inner flex-grow min-h-[400px]">
                <canvas 
                  ref={canvasRef}
                  width={800}
                  height={500}
                  className="w-full h-full object-contain"
                />
                
                {/* フローティング説明 */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur shadow-sm p-3 rounded-lg border border-slate-200 text-xs max-w-[200px]">
                  <p className="font-bold mb-1 text-slate-800">現在の挙動分析:</p>
                  <p className="mb-1">
                    収束係数 (1-δ): <span className="font-mono font-bold">{(1-delta).toFixed(2)}</span>
                  </p>
                  {Math.abs(1 - delta) < 1 ? (
                    delta > 1 ? (
                      <span className="text-rose-600 font-medium flex items-center gap-1">
                         <Activity size={12}/> 振動収束 (Oscillating)
                      </span>
                    ) : (
                      <span className="text-emerald-600 font-medium flex items-center gap-1">
                         <ChevronRight size={12}/> 単調収束 (Monotonic)
                      </span>
                    )
                  ) : (
                    <span className="text-slate-400 font-medium">発散または不収束</span>
                  )}
                </div>
             </div>
             <p className="mt-3 text-xs text-slate-400 text-center">
               PDFの図1に対応。xが増加するにつれてyが0に近づく様子を観察してください。
             </p>
          </div>
        </div>
      </div>
      
      {/* 下部説明カード */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
           <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
             ケース A: 0 &lt; δ &lt; 1
           </h4>
           <p className="text-sm text-emerald-800 leading-relaxed">
             この範囲では、<MathFormula>0 &lt; 1-δ &lt; 1</MathFormula> です。反復ごとに <MathFormula>y</MathFormula> は正の小数を掛けられるため、<strong>滑らかに単調減少</strong>して 0 に近づきます。これは図1aのような理想的な挙動です。
           </p>
        </div>
        <div className="bg-rose-50 border border-rose-100 rounded-xl p-5">
           <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-2">
             ケース B: 1 &lt; δ &lt; 2
           </h4>
           <p className="text-sm text-rose-800 leading-relaxed">
             この範囲では、<MathFormula>-1 &lt; 1-δ &lt; 0</MathFormula> です。反復ごとに <MathFormula>y</MathFormula> は負数を掛けられるため、符号が正負交互に入れ替わります。絶対値は減少（収束）しますが、視覚的には峡谷の両側を行き来する<strong>振動</strong>が見られます（図1b）。
           </p>
        </div>
      </div>
    </div>
  );
}