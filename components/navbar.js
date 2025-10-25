class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .dark nav {
          background: #1e293b;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        .logo {
          font-weight: bold;
          font-size: 1.5rem;
          background: linear-gradient(to right, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .dark .logo {
          background: linear-gradient(to right, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          font-weight: 500;
          color: #4b5563;
          text-decoration: none;
          transition: color 0.2s;
        }
        .dark a {
          color: #d1d5db;
        }
        a:hover {
          color: #2563eb;
        }
        .dark a:hover {
          color: #60a5fa;
        }
        .theme-toggle {
          background: none;
          border: none;
          cursor: pointer;
          color: #4b5563;
          padding: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }
        .dark .theme-toggle {
          color: #d1d5db;
        }
        .theme-toggle:hover {
          background: rgba(0,0,0,0.05);
          color: #2563eb;
        }
        .dark .theme-toggle:hover {
          background: rgba(255,255,255,0.05);
          color: #60a5fa;
        }
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: #4b5563;
          cursor: pointer;
        }
        .dark .mobile-menu-button {
          color: #d1d5db;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            flex-direction: column;
            gap: 0;
            padding: 1rem 0;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .dark ul {
            background: #1e293b;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          }
          ul.open {
            display: flex;
          }
          li {
            width: 100%;
            text-align: center;
          }
          a {
            display: block;
            padding: 1rem;
          }
          .mobile-menu-button {
            display: block;
          }
          .theme-toggle {
            margin-top: 1rem;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">MeasureMaster Pro</a>
        <button class="mobile-menu-button" aria-label="Toggle menu">
          <i data-feather="menu"></i>
        </button>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about.html">About</a></li>
          <li><a href="/projects.html">Projects</a></li>
          <li><a href="/services.html">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button class="theme-toggle" aria-label="Toggle dark mode" onclick="toggleTheme()">
              <i data-feather="moon"></i>
            </button>
          </li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    const menuButton = this.shadowRoot.querySelector('.mobile-menu-button');
    const menu = this.shadowRoot.querySelector('ul');
    
    menuButton.addEventListener('click', () => {
      menu.classList.toggle('open');
      const icon = menuButton.querySelector('i');
      if (menu.classList.contains('open')) {
        icon.setAttribute('data-feather', 'x');
      } else {
        icon.setAttribute('data-feather', 'menu');
      }
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
