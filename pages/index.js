export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>🔥 RoastFi</h1>
      <p>Get roasted by AI & turned into a meme.</p>
      <a
        href="https://buy.stripe.com/test_9B65kF2oSfEV48S9q39k400"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "16px 32px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#ff0055",
          borderRadius: "8px",
          textDecoration: "none",
          marginTop: "40px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.15)",
          transition: "transform 0.2s ease"
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
      🔥 GET ROASTED NOW
    </a>
    </div>
  );
}
