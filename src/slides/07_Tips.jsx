export default function NewFeature() {
  return (
    <div className="slide">
      <h2>新機能: 定期実行 (Loop)</h2>
      <p style={{ marginBottom: '24px' }}>
        プロンプトやコマンドを<span className="highlight">一定間隔で自動実行</span>できるようになった
      </p>
      <div className="code-block">
        <div>
          <span className="comment">{'// 例: 5分ごとにデプロイ状況をチェック'}</span>
        </div>
        <div>
          <span className="keyword">/loop</span> <span className="string">5m</span> デプロイの状態を確認して
        </div>
        <div style={{ marginTop: '16px' }}>
          <span className="comment">{'// 例: PR の状態を定期的に監視'}</span>
        </div>
        <div>
          <span className="keyword">/loop</span> <span className="string">10m</span> /babysit-prs
        </div>
      </div>
      <div className="grid" style={{ marginTop: '32px' }}>
        <div className="card">
          <h3>放置でOK</h3>
          <p>CI の監視やレビュー待ちを Claude に任せて、自分は別の作業に集中</p>
        </div>
        <div className="card">
          <h3>スマホと相性抜群</h3>
          <p>移動中にセットしておけば、着いた頃には結果が揃っている</p>
        </div>
      </div>
    </div>
  );
}
