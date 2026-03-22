export default function Demo() {
  return (
    <div className="slide">
      <h2>実際にやってみよう</h2>
      <p style={{ marginBottom: '32px' }}>
        このスライド自体が Claude Code Web で作られています
      </p>
      <div className="code-block">
        <div>
          <span className="comment">{'// ユーザーの指示'}</span>
        </div>
        <div style={{ marginTop: '8px' }}>
          <span className="string">
            React を使ってカンファレンス用のスライドを作りたいです。テーマは Claude Code Web は良いぞ です
          </span>
        </div>
        <div style={{ marginTop: '16px' }}>
          <span className="comment">{'// Claude Code Web が自動で:'}</span>
        </div>
        <div>
          <span className="comment">{'// → Vite + React プロジェクトを初期化'}</span>
        </div>
        <div>
          <span className="comment">{'// → スライドコンポーネントを生成'}</span>
        </div>
        <div>
          <span className="comment">{'// → キーボードナビゲーションを実装'}</span>
        </div>
        <div>
          <span className="comment">{'// → アニメーション付きスタイルを適用'}</span>
        </div>
        <div>
          <span className="comment">{'// → Git commit & push まで完了'}</span>
        </div>
      </div>
    </div>
  );
}
