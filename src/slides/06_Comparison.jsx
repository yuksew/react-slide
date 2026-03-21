export default function Comparison() {
  return (
    <div className="slide">
      <h2>従来の開発 vs Claude Code Web</h2>
      <div className="comparison">
        <div className="box">
          <h3>従来の開発</h3>
          <ul>
            <li>環境構築に数時間</li>
            <li>ドキュメントを読む</li>
            <li>StackOverflow で検索</li>
            <li>手動でコード記述</li>
            <li>ローカルでテスト</li>
          </ul>
        </div>
        <span className="arrow">→</span>
        <div className="box highlight-box">
          <h3>Claude Code Web</h3>
          <ul>
            <li>URL を開くだけ</li>
            <li>やりたいことを伝える</li>
            <li>AI が最適解を提案</li>
            <li>コードを自動生成</li>
            <li>その場でテスト & PR</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
