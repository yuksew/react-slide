import demoScreenshot from '../assets/demo-screenshot.png';

export default function DemoScreenshot() {
  return (
    <div className="slide">
      <h2>実際の画面</h2>
      <img
        src={demoScreenshot}
        alt="Claude Code Web でスライドを作成している画面"
        style={{
          width: '100%',
          maxWidth: '800px',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        }}
      />
    </div>
  );
}
