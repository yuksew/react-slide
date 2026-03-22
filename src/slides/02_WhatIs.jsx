export default function WhatIs() {
  return (
    <div className="slide">
      <h2>Claude Code Web とは？</h2>
      <p>
        Anthropic が提供する <span className="highlight">ブラウザベースの AI コーディング環境</span>
      </p>
      <div className="grid">
        <div className="card">
          <h3>Claude が相棒</h3>
          <p>コード生成・レビュー・デバッグを AI がリアルタイムにサポート</p>
        </div>
        <div className="card">
          <h3>フル環境</h3>
          <p>ターミナル・ファイルシステム・パッケージマネージャーが使える</p>
        </div>
      </div>
    </div>
  );
}
