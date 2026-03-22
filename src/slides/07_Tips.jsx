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
          <h3>放置でOK</h3>
          <p>チケットの監視や調査を Claude に任せて、自分は別の作業に集中</p>
        </div>
        <div className="card">
          <h3>スマホと相性抜群</h3>
          <p>移動中にセットしておけば、着いた頃には調査結果が揃っている</p>
        </div>
      </div>
    </div>
  );
}
