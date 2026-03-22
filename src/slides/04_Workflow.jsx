export default function Workflow() {
  return (
    <div className="slide">
      <h2>利用方法</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '32px' }}>
        {[
          { step: '1', text: 'GitHub アカウントを連携する' },
          { step: '2', text: 'やりたいことをチャットで伝える' },
          { step: '3', text: 'Claude がコードを生成・修正してくれる' },
          { step: '4', text: '結果を確認して、そのまま commit & PR' },
        ].map(({ step, text }) => (
          <div key={step} className="step-item">
            <span className="step-number">{step}</span>
            <span className="step-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
