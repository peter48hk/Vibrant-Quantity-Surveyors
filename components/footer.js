class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #f3f4f6;
          color: #4b5563;
          padding: 3rem 2rem;
          text-align: center;
          margin-top: auto;
        }
        .dark footer {
          background: #1e293b;
          color: #d1d5db;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-section h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #111827;
        }
        .dark .footer-section h3 {
          color: #f9fafb;
        }
        .footer-section p, .footer-section a {
          color: #6b7280;
          margin-bottom: 0.5rem;
          display: block;
        }
        .dark .footer-section p, .dark .footer-section a {
          color: #9ca3af;
        }
        .footer-section a:hover {
          color: #2563eb;
        }
        .dark .footer-section a:hover {
          color: #60a5fa;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e5e7eb;
          color: #4b5563;
          transition: all 0.2s;
        }
        .dark .social-links a {
          background: #334155;
          color: #d1d5db;
        }
        .social-links a:hover {
          background: #2563eb;
          color: white;
        }
        .dark .social-links a:hover {
          background: #60a5fa;
        }
        .copyright {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e5e7eb;
          font-size: 0.875rem;
          color: #6b7280;
        }
        .dark .copyright {
          border-top-color: #334155;
          color: #9ca3af;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .social-links {
            justify-content: center;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>MeasureMaster Pro</h3>
            <p>Precision quantity surveying services for construction projects of all sizes.</p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn"><i data-feather="linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
              <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/about.html">About</a>
            <a href="/projects.html">Projects</a>
            <a href="/services.html">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div class="footer-section">
            <h3>Contact Info</h3>
            <p><i data-feather="mail" class="inline mr-2"></i> contact@measuremaster.com</p>
            <p><i data-feather="phone" class="inline mr-2"></i> +1 (555) 123-4567</p>
            <p><i data-feather="map-pin" class="inline mr-2"></i> 123 Construction Ave, Build City</p>
          </div>
        </div>
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} MeasureMaster Pro. All rights reserved.</p>
        </div>
      </footer>
    `;
    
    // Replace icons after rendering
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
      script.onload = () => feather.replace();
      this.shadowRoot.appendChild(script);
    }, 0);
  }
}

customElements.define('custom-footer', CustomFooter);
