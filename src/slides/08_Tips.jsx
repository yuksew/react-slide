export default function NewFeature() {
  return (
    <div className="slide">
      <h2>新機能: 定期実行 (Loop)</h2>
      <p style={{ marginBottom: '24px' }}>
        <span className="highlight">Claude Code Web の画面から</span>定期実行を設定できるようになった
      </p>
      <div className="code-block" style={{ marginTop: '24px' }}>
        <div>
          <span className="comment">{'// 例: バグ管理システムを定期チェック'}</span>
        </div>
        <div>
          新しいチケットが増えていないかチェックして、
        </div>
        <div>
          増えていたら調査して
        </div>
      </div>
      <div className="grid" style={{ marginTop: '32px' }}>
        <div className="card">
          <h3>完全自動</h3>
          <p>一度設定すれば、あとはクラウド上で実行し続けてくれる</p>
        </div>
        <div className="card">
          <h3>スマホからでも確認</h3>
          <p>定期実行の結果はスマホからでもすぐ確認できる</p>
        </div>
      </div>
    </div>
  );
}
