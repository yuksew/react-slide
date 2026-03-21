export default function Tips() {
  return (
    <div className="slide">
      <h2>使いこなすコツ</h2>
      <div className="grid">
        <div className="card">
          <h3>CLAUDE.md を書く</h3>
          <p>プロジェクトのルールや慣習を記述して Claude の理解を深める</p>
        </div>
        <div className="card">
          <h3>具体的に指示する</h3>
          <p>「ボタンを追加」より「ヘッダー右上にログアウトボタンを追加」</p>
        </div>
        <div className="card">
          <h3>段階的に進める</h3>
          <p>大きなタスクは小さく分割。一つずつ確認しながら進める</p>
        </div>
        <div className="card">
          <h3>テストを活用する</h3>
          <p>テストを書いてもらい、通るまで修正を繰り返す TDD スタイル</p>
        </div>
      </div>
    </div>
  );
}
