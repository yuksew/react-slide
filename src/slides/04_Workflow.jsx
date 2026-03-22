export default function Workflow() {
  return (
    <div className="slide">
      <h2>利用方法</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
        {[
          { step: '1', text: 'スマホでリポジトリを開く' },
          { step: '2', text: 'やりたいことをチャットで伝える' },
          { step: '3', text: 'Claude がコードを生成・修正してくれる' },
          { step: '4', text: '結果を確認して、そのまま commit & PR' },
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
