import "./App.css";

function App() {
  return (
    <><div>
      <section className="main">
        <nav>
          <span className="logo">NETFLIX</span>

          <div>
            <button className="btn">English</button>
            <button className="btn btn-red-sm">Sign In</button>
          </div>
        </nav>

        <div className="box"></div>

        <div className="hero">
          <span>Enjoy big movies, hit series and more from ₹149.</span>

          <span>Join today. Cancel anytime.</span>

          <span>
            Ready to watch? Enter your email to create or restart your membership.
          </span>

          <div className="hero-buttons">
            <input type="email" placeholder="Email Address" />

            <button className="btn btn-red">
              Get Started &gt;
            </button>
          </div>
        </div>
      </section>
      </div>

      <section className="first">
        <div>
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV and more.
          </p>
        </div>
      

        <div className="image-placeholder">
          🎬
        </div>
      </section>

      <section className="first second">
        <div className="image-placeholder">
          📱
        </div>

        <div>
          <h1>Download your shows to watch offline</h1>
          <p>
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </section>

      <section className="faq">
        <h1>Frequently Asked Questions</h1>

        <div className="faq-box">
          <span>What is Netflix?</span>
          <span>+</span>
        </div>

        <div className="faq-box">
          <span>How much does Netflix cost?</span>
          <span>+</span>
        </div>

        <div className="faq-box">
          <span>Where can I watch?</span>
          <span>+</span>
        </div>

        <div className="faq-box">
          <span>How do I cancel?</span>
          <span>+</span>
        </div>
      </section>

      <footer>
        <p>Questions? Contact us.</p>

        <div className="footer">
          <div className="footer-item">
            <a href="#faq">FAQ</a>
            <a href="#help">Help Centre</a>
            <a href="#account">Account</a>
          </div>

          <div className="footer-item">
            <a href="#media">Media Centre</a>
            <a href="#investor">Investor Relations</a>
            <a href="#jobs">Jobs</a>
          </div>

          <div className="footer-item">
            <a href="#terms">Terms of Use</a>
            <a href="#privacy">Privacy</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div className="footer-item">
            <a href="#speed">Speed Test</a>
            <a href="#legal">Legal Notices</a>
            <a href="#netflix">Only on Netflix</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;