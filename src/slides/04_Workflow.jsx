export default function Workflow() {
  return (
    <div className="slide">
      <h2>典型的なワークフロー</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
        {[
          { step: '1', text: 'GitHub リポジトリを Claude Code Web で開く' },
          { step: '2', text: '自然言語でやりたいことを伝える' },
          { step: '3', text: 'Claude がコードを生成・修正' },
          { step: '4', text: 'ターミナルでテスト・ビルドを確認' },
          { step: '5', text: 'そのまま commit & PR を作成' },
        ].map(({ step, text }) => (
          <div
            key={step}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              padding: '16px 24px',
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #d97706, #f59e0b)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: '#0a0a0a',
                flexShrink: 0,
              }}
            >
              {step}
            </span>
            <span style={{ fontSize: '1.2rem' }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
