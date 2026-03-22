import iterationScreenshot from '../assets/iteration-screenshot.png';

export default function Iteration() {
  return (
    <div className="slide">
      <h2>生成して終わりじゃない</h2>
      <p style={{ marginBottom: '24px' }}>
        変更点を見ながらコメントで何度でも調整できる
      </p>
      <img
        src={iterationScreenshot}
        alt="diff にコメントして修正を指示している画面"
        style={{
          width: '100%',
          maxWidth: '1000px',
          borderRadius: '12px',
          border: '1px solid rgba(0, 0, 0, 0.12)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
        }}
      />
    </div>
  );
}
