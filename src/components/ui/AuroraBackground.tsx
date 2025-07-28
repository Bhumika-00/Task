export default function AuroraBackground() {
    return (
        <>
    <div className="aurora-bg">
  <div className="aurora" />
  <div className="aurora" />
  <div className="aurora" />
</div>

<div className="floating-orbs">
  <div className="orb orb1" />
  <div className="orb orb2" />
  <div className="orb orb3" />
</div>

<div className="parallax-bg">
  <div className="stars-layer" />
  <div className="nebula-layer" />
  <canvas id="sparkles" />
</div>
</>
    );
}
