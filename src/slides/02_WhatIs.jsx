export default function WhatIs() {
  return (
    <div className="slide">
      <h2>Claude Code Web とは？</h2>
      <p>
        Anthropic が提供する <span className="highlight">ブラウザベースの AI コーディング環境</span>
      </p>
      <div className="grid">
        <div className="card">
          <h3>ブラウザ完結</h3>
          <p>インストール不要。URL を開くだけで即座に開発を始められる</p>
        </div>
        <div className="card">
          <h3>Claude が相棒</h3>
          <p>コード生成・レビュー・デバッグを AI がリアルタイムにサポート</p>
        </div>
        <div className="card">
          <h3>Git 連携</h3>
          <p>GitHub リポジトリと直接連携。ブランチ・PR もそのまま操作</p>
        </div>
        <div className="card">
          <h3>フル環境</h3>
          <p>ターミナル・ファイルシステム・パッケージマネージャーが使える</p>
        </div>
      </div>
    </div>
  );
}
