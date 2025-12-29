export const templates = [
  {
    id: 'classic',
    name: 'Classic Newspaper',
    description: 'A traditional layout with a large image and bottom text area.',
    defaults: {
      accentColor: '#D9232D',
      bgColor: '#ffffff',
      textColor: '#111827',
      heading: 'সন্ধ্যার সংবাদ',
      subheading: 'আজকের গুরুত্বপূর্ণ সব খবর, এক নজরে দেখে নিন।',
      date: '27 December 2025',
      domain: 'example.com'
    },
    html: `
      <div class="template-wrapper classic-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="image-area">
          <img src="{image}" alt="Main Photo" class="main-photo" />
          <div class="overlay">
            <p class="subheading" style="color: #ffffff;">{subheading}</p>
          </div>
        </div>
        <div class="content-area">
          <div class="accent-bar"></div>
          <div class="header-row">
            <h1 class="heading">{heading}</h1>
          </div>
          <div class="footer-row">
            <div class="date-pill">{date}</div>
            <div class="logo-wrapper">
                <img src="{logo}" class="logo" />
            </div>
            <div class="domain-pill">{domain}</div>
          </div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.classic-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        overflow: hidden;
        position: relative;
      }
      
      .classic-theme .ad-container {
        display: none;
      }

      .classic-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }
      
      .classic-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .classic-theme .image-area {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
      }
      
      .classic-theme .main-photo {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .classic-theme .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
        padding: 40px 50px;
        display: flex;
        align-items: flex-end;
      }
      
      .classic-theme .subheading {
        font-size: 32px;
        margin: 0;
        font-weight: 500;
        text-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
      
      .classic-theme .content-area {
        height: 430px;
        flex: 0 0 auto;
        padding: 0;
        position: relative;
        display: flex;
        flex-direction: column;
      }
      
      .classic-theme .accent-bar {
        height: 8px;
        width: 100%;
        background-color: var(--accent);
      }
      
      .classic-theme .header-row {
        padding: 40px 50px;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      
      .classic-theme .heading {
        font-size: 64px;
        line-height: 1.2;
        margin: 0;
        color: var(--text);
        font-weight: 700;
      }
      
      .classic-theme .footer-row {
        padding: 0 50px 40px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      
      .classic-theme .logo-wrapper {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        width: 140px;
        height: 140px;
        background: var(--bg);
        border-radius: 50%;
        padding: 0;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border: 4px solid var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      
      .classic-theme .logo {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
      }
      
      .classic-theme .date-pill, .classic-theme .domain-pill {
        font-size: 24px;
        color: var(--text);
        opacity: 0.7;
        font-weight: 500;
      }
    `
  },
  {
    id: 'modern',
    name: 'Modern Bold',
    description: 'A bold, high-contrast design with large typography.',
    defaults: {
      accentColor: '#2563eb',
      bgColor: '#ffffff',
      textColor: '#1f2937'
    },
    html: `
      <div class="template-wrapper modern-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="top-half">
           <div class="logo-badge">
              <img src="{logo}" />
           </div>
           <img src="{image}" class="hero-image" />
        </div>
        <div class="bottom-half">
           <div class="meta-line">
              <span class="date">{date}</span>
              <span class="separator">•</span>
              <span class="source">News Update</span>
           </div>
           <h1 class="headline">{heading}</h1>
           <p class="summary">{subheading}</p>
           <div class="read-more-btn" style="background: var(--accent)">বিস্তারিত পড়ুন</div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.modern-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        overflow: hidden;
      }
      
      .modern-theme .ad-container {
        display: none;
      }

      .modern-theme.has-ad .ad-container {
        margin-top: auto;
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
      }
      
      .modern-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .modern-theme .top-half {
        flex: 1;
        min-height: 0;
        position: relative;
      }
      
      .modern-theme .hero-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .modern-theme .logo-badge {
        position: absolute;
        top: 40px;
        left: 40px;
        width: 100px;
        height: 100px;
        background: var(--bg);
        padding: 0;
        border: 4px solid var(--bg);
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10;
        overflow: hidden;
      }
      
      .modern-theme .logo-badge img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      
      .modern-theme .bottom-half {
        height: 486px;
        flex: 0 0 auto;
        padding: 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: var(--bg);
      }
      
      .modern-theme .meta-line {
        font-size: 24px;
        color: var(--accent);
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      .modern-theme .separator { margin: 0 10px; color: var(--text); opacity: 0.4; }
      
      .modern-theme .headline {
        font-size: 72px;
        line-height: 1.1;
        color: var(--text);
        margin: 0 0 30px 0;
        font-weight: 800;
      }
      
      .modern-theme .summary {
        font-size: 32px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 40px 0;
        line-height: 1.4;
      }
      
      .modern-theme .read-more-btn {
        align-self: flex-start;
        padding: 15px 40px;
        color: white;
        font-size: 24px;
        font-weight: 600;
        border-radius: 50px;
      }
    `
  },    
  {
    id: 'breaking',
    name: 'Breaking News',
    description: 'High impact red alert style for urgent news.',
    defaults: {
      accentColor: '#dc2626',
      bgColor: '#111111',
      textColor: '#ffffff'
    },
    html: `
      <div class="template-wrapper breaking-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="header-strip">
            <div class="breaking-label">BREAKING NEWS</div>
            <div class="live-dot"></div>
            <div class="date">{date}</div>
        </div>
        <div class="main-content">
            <div class="image-container">
                <img src="{image}" class="news-image" />
                <div class="logo-overlay">
                    <img src="{logo}" />
                </div>
            </div>
            <div class="text-content">
                <h1 class="headline">{heading}</h1>
                <div class="divider"></div>
                <p class="subhead">{subheading}</p>
            </div>
        </div>
        <div class="ticker-tape">
            <span>LIVE UPDATE • {date} • STAY TUNED FOR MORE DETAILS • BREAKING NEWS •</span>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.breaking-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        color: var(--text);
      }

      .breaking-theme .ad-container {
        display: none;
      }

      .breaking-theme.has-ad .ad-container {
        margin-top: auto;
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(255,255,255,0.05);
        border-radius: 0;
        flex: 0 0 auto;
      }
      
      .breaking-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .breaking-theme .header-strip {
        height: 80px;
        flex: 0 0 auto;
        background: var(--accent);
        display: flex;
        align-items: center;
        padding: 0 40px;
        gap: 20px;
      }

      .breaking-theme .breaking-label {
        font-size: 32px;
        font-weight: 900;
        font-style: italic;
        letter-spacing: 1px;
      }

      .breaking-theme .live-dot {
        width: 16px;
        height: 16px;
        background: white;
        border-radius: 50%;
        animation: blink 1s infinite;
      }

      @keyframes blink { 50% { opacity: 0.5; } }

      .breaking-theme .date {
        margin-left: auto;
        font-size: 24px;
        font-weight: 600;
      }

      .breaking-theme .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        position: relative;
        min-height: 0;
      }

      .breaking-theme .image-container {
        flex: 1;
        min-height: 0;
        width: 100%;
        position: relative;
      }

      .breaking-theme .news-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .breaking-theme .logo-overlay {
        position: absolute;
        top: 30px;
        right: 30px;
        width: 120px;
        height: 120px;
        background: rgba(0,0,0,0.5);
        padding: 0;
        border-radius: 10px;
        backdrop-filter: blur(5px);
        overflow: hidden;
      }

      .breaking-theme .logo-overlay img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .breaking-theme .text-content {
        padding: 50px;
        background: var(--bg);
        height: 340px;
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .breaking-theme .headline {
        font-size: 64px;
        line-height: 1.1;
        margin: 0 0 20px 0;
        color: var(--text);
        font-weight: 800;
      }

      .breaking-theme .divider {
        width: 100px;
        height: 6px;
        background: var(--accent);
        margin-bottom: 20px;
      }

      .breaking-theme .subhead {
        font-size: 32px;
        color: var(--text);
        opacity: 0.8;
        margin: 0;
        line-height: 1.4;
      }

      .breaking-theme .ticker-tape {
        height: 60px;
        flex: 0 0 auto;
        background: var(--accent);
        color: var(--text);
        display: flex;
        align-items: center;
        overflow: hidden;
        white-space: nowrap;
      }

      .breaking-theme .ticker-tape span {
        font-size: 24px;
        font-weight: 700;
        padding-left: 40px;
        text-transform: uppercase;
      }
    `
  },    
  {
    id: 'quote',
    name: 'Quote Card',
    description: 'Focus on a powerful statement with background image.',
    defaults: {
      accentColor: '#f59e0b',
      bgColor: '#000000',
      textColor: '#ffffff'
    },
    html: `
      <div class="template-wrapper quote-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="main-layout">
            <img src="{image}" class="bg-image" />
            <div class="overlay"></div>
            
            <div class="content-wrapper">
                <div class="quote-mark">“</div>
                <h1 class="quote-text">{heading}</h1>
                <div class="quote-author">
                    <div class="line"></div>
                    <p>{subheading}</p>
                </div>
            </div>

            <div class="footer">
                <div class="logo-area">
                    <img src="{logo}" />
                </div>
                <div class="date-area">{date}</div>
            </div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.quote-theme {
        width: 1080px;
        height: 1080px;
        position: relative;
        font-family: var(--font), sans-serif;
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .quote-theme .main-layout {
        flex: 1;
        position: relative;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        min-height: 0;
      }

      .quote-theme .ad-container {
        display: none;
      }

      .quote-theme.has-ad .ad-container {
        max-height: 120px;
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.2);
        z-index: 10;
        margin-top: auto;
        flex: 0 0 auto;
      }
      
      .quote-theme .ad-container img {
        max-height: 100%;
        max-width: 100%;
        object-fit: contain;
      }

      .quote-theme .bg-image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }

      .quote-theme .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.6);
        z-index: 2;
      }

      .quote-theme .content-wrapper {
        position: relative;
        z-index: 3;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 100px;
      }

      .quote-theme .quote-mark {
        font-size: 200px;
        color: var(--accent);
        font-family: serif;
        line-height: 0;
        margin-bottom: 60px;
        opacity: 0.8;
      }

      .quote-theme .quote-text {
        font-size: 64px;
        color: var(--text);
        line-height: 1.3;
        font-weight: 700;
        margin: 0 0 40px 0;
        font-style: italic;
      }

      .quote-theme .quote-author {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      .quote-theme .line {
        width: 60px;
        height: 4px;
        background: var(--accent);
      }

      .quote-theme .quote-author p {
        font-size: 32px;
        color: var(--text);
        opacity: 0.9;
        margin: 0;
        font-weight: 500;
      }

      .quote-theme .footer {
        width: 100%;
        padding: 20px 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 3;
        border-top: 1px solid var(--text);
        background: rgba(0,0,0,0.3);
      }

      .quote-theme .logo-area {
        width: 80px;
        height: 80px;
      }

      .quote-theme .logo-area img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .quote-theme .date-area {
        color: var(--text);
        opacity: 0.7;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
    `
  },
  {
    id: 'minimal',
    name: 'Minimalist',
    description: 'Clean, white space focused design.',
    defaults: {
      accentColor: '#10b981',
      bgColor: '#ffffff',
      textColor: '#111827'
    },
    html: `
      <div class="template-wrapper minimal-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="minimal-content-wrapper">
            <div class="image-frame">
                <img src="{image}" />
            </div>
            <div class="content-body">
                <div class="top-meta">
                    <img src="{logo}" class="mini-logo" />
                    <span class="date">{date}</span>
                </div>
                <h1 class="title">{heading}</h1>
                <p class="desc">{subheading}</p>
                <div class="accent-dot"></div>
            </div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.minimal-theme {
        width: 1080px;
        height: 1080px;
        background: var(--bg);
        font-family: var(--font), sans-serif;
        display: flex;
        flex-direction: column;
      }
      
      .minimal-theme .minimal-content-wrapper {
        flex: 1;
        padding: 60px;
        display: flex;
        flex-direction: column;
        gap: 50px;
        min-height: 0;
      }

      .minimal-theme .ad-container {
        display: none;
      }

      .minimal-theme.has-ad .ad-container {
        max-height: 120px;
        height: auto;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f9fafb;
        flex: 0 0 auto;
      }
      
      .minimal-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      .minimal-theme .image-frame {
        width: 100%;
        flex: 1;
        min-height: 0;
        overflow: hidden;
        border: 8px solid var(--accent);
      }

      .minimal-theme .image-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .minimal-theme .content-body {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 0 40px;
      }

      .minimal-theme .top-meta {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 30px;
      }

      .minimal-theme .mini-logo {
        height: 40px;
        width: auto;
      }

      .minimal-theme .date {
        font-size: 20px;
        color: var(--text);
        opacity: 0.6;
        font-weight: 500;
      }

      .minimal-theme .title {
        font-size: 56px;
        color: var(--text);
        margin: 0 0 20px 0;
        line-height: 1.2;
        font-weight: 700;
      }

      .minimal-theme .desc {
        font-size: 28px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 40px 0;
        line-height: 1.5;
        max-width: 800px;
      }

      .minimal-theme .accent-dot {
        width: 12px;
        height: 12px;
        background: var(--accent);
        border-radius: 50%;
      }
    `
  },
  {
    id: 'feature',
    name: 'Feature Card',
    defaults: {
      accentColor: '#8b5cf6',
      bgColor: '#ffffff',
      textColor: '#1f2937'
    },
    description: 'Centered layout with overlapping logo and footer strip.',
    html: `
      <div class="template-wrapper feature-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="image-section">
            <img src="{image}" class="main-image" />
        </div>
        
        <div class="content-section">
            <div class="logo-section">
                <div class="logo-circle">
                    <img src="{logo}" />
                </div>
            </div>
            <p class="subhead">{subheading}</p>
            <h1 class="headline">{heading}</h1>
        </div>

        <div class="footer-strip">
            <div class="footer-left">{date}</div>
            <div class="footer-right">
                {domain}
            </div>
        </div>
        
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.feature-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
      }

      .feature-theme .image-section {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }

      .feature-theme .main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .feature-theme .content-section {
        flex: 0 0 auto;
        padding: 90px 60px 20px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      }

      .feature-theme .logo-section {
        position: absolute;
        top: -70px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
      }

      .feature-theme .logo-circle {
        width: 140px;
        height: 140px;
        background: var(--bg);
        border-radius: 50%;
        padding: 0;
        border: 4px solid var(--bg);
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }

      .feature-theme .logo-circle img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .feature-theme .subhead {
        font-size: 32px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 20px 0;
      }

      .feature-theme .headline {
        font-size: 64px;
        line-height: 1.3;
        color: var(--accent);
        margin: 0;
        font-weight: 700;
      }

      .feature-theme .footer-strip {
        height: 80px;
        flex: 0 0 auto;
        background: rgba(0,0,0,0.05);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 50px;
        font-sivar(--text);
        opacity: 0.7x;
        color: #6b7280;
      }
      
      .feature-theme .ad-container {
        display: none;
      }

      .feature-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        flex: 0 0 auto;
      }
      
      .feature-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'classikalo',
    name: 'Classikalo',
    description: 'Clean news card style.',
    defaults: {
      accentColor: '#D9232D',
      bgColor: '#ffffff',
      textColor: '#111827'
    },
    html: `
      <div class="template-wrapper pa-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="pa-image-area">
          <img src="{image}" class="pa-main-image" />
        </div>
        <div class="pa-content-area">
          <div class="pa-meta">
            <span class="pa-date">{date}</span>
          </div>
          <h1 class="pa-headline">{heading}</h1>
          <p class="pa-subhead">{subheading}</p>
          <div class="pa-footer">
              <img src="{logo}" class="pa-logo" />
          </div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.pa-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
      }

      .pa-theme .pa-image-area {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }

      .pa-theme .pa-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .pa-theme .pa-content-area {
        flex: 0 0 auto;
        padding: 40px 50px;
        display: flex;
        flex-direction: column;
        background: var(--bg);
        border-top: 8px solid var(--accent);
      }

      .pa-theme .pa-meta {
        margin-bottom: 20px;
        font-size: 24px;
        color: var(--text);
        opacity: 0.7;
        font-weight: 500;
      }

      .pa-theme .pa-headline {
        font-size: 60px;
        line-height: 1.3;
        color: var(--text);
        margin: 0 0 20px 0;
        font-weight: 700;
      }

      .pa-theme .pa-subhead {
        font-size: 30px;
        color: var(--text);
        opacity: 0.9;
        margin: 0 0 40px 0;
        line-height: 1.5;
      }

      .pa-theme .pa-footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 20px;
      }

      .pa-theme .pa-logo {
        height: 60px;
        width: auto;
        object-fit: contain;
      }

      .pa-theme .ad-container {
        display: none;
      }

      .pa-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .pa-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'bbc',
    name: 'BBC News Style',
    description: 'Classic clean design with red accents.',
    defaults: {
      accentColor: '#b80000',
      bgColor: '#ffffff',
      textColor: '#111827'
    },
    html: `
      <div class="template-wrapper bbc-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="bbc-image-area">
          <img src="{image}" class="bbc-main-image" />
          <div class="bbc-category-tag">NEWS</div>
        </div>
        <div class="bbc-content-area">
          <h1 class="bbc-headline">{heading}</h1>
          <p class="bbc-subhead">{subheading}</p>
          <div class="bbc-footer">
             <div class="bbc-meta">
                <span class="bbc-time">{date}</span>
                <span class="bbc-divider">|</span>
                <span class="bbc-domain">{domain}</span>
             </div>
             <div class="bbc-logo-wrapper">
                <img src="{logo}" class="bbc-logo" />
             </div>
          </div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.bbc-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
      }

      .bbc-theme .bbc-image-area {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }

      .bbc-theme .bbc-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .bbc-theme .bbc-category-tag {
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--accent);
        color: white;
        padding: 10px 30px;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
      }

      .bbc-theme .bbc-content-area {
        flex: 0 0 auto;
        padding: 50px;
        display: flex;
        flex-direction: column;
        background: var(--bg);
        border-bottom: 8px solid var(--accent);
      }

      .bbc-theme .bbc-headline {
        font-size: 64px;
        line-height: 1.2;
        color: var(--text);
        margin: 0 0 25px 0;
        font-weight: 700;
      }

      .bbc-theme .bbc-subhead {
        font-size: 32px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 40px 0;
        line-height: 1.4;
      }

      .bbc-theme .bbc-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: auto;
      }

      .bbc-theme .bbc-meta {
        font-size: 24px;
        color: var(--text);
        opacity: 0.6;
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .bbc-theme .bbc-divider {
        color: var(--text);
        opacity: 0.4;
      }

      .bbc-theme .bbc-logo-wrapper {
        height: 50px;
      }

      .bbc-theme .bbc-logo {
        height: 100%;
        width: auto;
        object-fit: contain;
      }

      .bbc-theme .ad-container {
        display: none;
      }

      .bbc-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .bbc-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'ntv',
    name: 'NTV Style',
    description: 'Vibrant green accent with clean typography.',
    defaults: {
      accentColor: '#00A651',
      bgColor: '#ffffff',
      textColor: '#000000'
    },
    html: `
      <div class="template-wrapper ntv-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="ntv-image-container">
            <img src="{image}" class="ntv-main-image" />
            <div class="ntv-logo-badge">
                <img src="{logo}" />
            </div>
        </div>
        <div class="ntv-content">
            <div class="ntv-meta">
                <span class="ntv-date-pill">{date}</span>
            </div>
            <h1 class="ntv-headline">{heading}</h1>
            <p class="ntv-subhead">{subheading}</p>
            <div class="ntv-bottom-bar"></div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.ntv-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
      }

      .ntv-theme .ntv-image-container {
        width: 100%;
        flex: 1;
        min-height: 0;
        position: relative;
        overflow: hidden;
      }

      .ntv-theme .ntv-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .ntv-theme .ntv-logo-badge {
        position: absolute;
        top: 40px;
        left: 40px;
        width: 120px;
        height: 120px;
        background: var(--bg);
        border-radius: 50%;
        padding: 0;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .ntv-theme .ntv-logo-badge img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      .ntv-theme .ntv-content {
        flex: 0 0 auto;
        padding: 50px;
        background: var(--bg);
        display: flex;
        flex-direction: column;
        position: relative;
      }

      .ntv-theme .ntv-meta {
        margin-bottom: 25px;
      }

      .ntv-theme .ntv-date-pill {
        background: var(--accent);
        color: white;
        padding: 10px 25px;
        border-radius: 50px;
        font-size: 24px;
        font-weight: 600;
      }

      .ntv-theme .ntv-headline {
        font-size: 60px;
        line-height: 1.3;
        color: var(--text);
        margin: 0 0 20px 0;
        font-weight: 700;
      }

      .ntv-theme .ntv-subhead {
        font-size: 30px;
        color: var(--text);
        opacity: 0.8;
        margin: 0 0 30px 0;
        line-height: 1.5;
      }

      .ntv-theme .ntv-bottom-bar {
        height: 10px;
        width: 100%;
        background: linear-gradient(90deg, var(--accent) 0%, #8dc63f 100%);
        margin-top: auto;
      }

      .ntv-theme .ad-container {
        display: none;
      }

      .ntv-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .ntv-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'btv',
    name: 'BTV Style',
    description: 'Official and formal broadcast style.',
    defaults: {
      accentColor: '#006a4e',
      bgColor: '#ffffff',
      textColor: '#000000'
    },
    html: `
      <div class="template-wrapper btv-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="btv-header">
            <div class="btv-logo-area">
                <img src="{logo}" />
            </div>
            <div class="btv-date">{date}</div>
        </div>
        <div class="btv-image-frame">
            <img src="{image}" class="btv-main-image" />
            <div class="btv-live-badge">LIVE</div>
        </div>
        <div class="btv-content">
            <h1 class="btv-headline">{heading}</h1>
            <p class="btv-subhead">{subheading}</p>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.btv-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
        border: 20px solid var(--bg);
      }

      .btv-theme .btv-header {
        height: 100px;
        flex: 0 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px 20px;
        border-bottom: 4px solid var(--accent);
      }

      .btv-theme .btv-logo-area {
        height: 80px;
        width: 150px;
      }

      .btv-theme .btv-logo-area img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        object-position: left;
      }

      .btv-theme .btv-date {
        font-size: 24px;
        color: var(--text);
        font-weight: 600;
        opacity: 0.8;
      }

      .btv-theme .btv-image-frame {
        flex: 1;
        min-height: 0;
        width: 100%;
        position: relative;
        margin-top: 20px;
        border: 2px solid #eee;
      }

      .btv-theme .btv-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .btv-theme .btv-live-badge {
        position: absolute;
        top: 20px;
        right: 20px;
        background: #cc0000;
        color: white;
        padding: 5px 15px;
        font-weight: bold;
        font-size: 20px;
        border-radius: 4px;
        animation: blink 2s infinite;
      }

      .btv-theme .btv-content {
        flex: 0 0 auto;
        padding: 30px 20px;
        background: var(--bg);
      }

      .btv-theme .btv-headline {
        font-size: 56px;
        line-height: 1.3;
        color: var(--text);
        margin: 0 0 15px 0;
        font-weight: 700;
      }

      .btv-theme .btv-subhead {
        font-size: 28px;
        color: var(--text);
        opacity: 0.8;
        margin: 0;
        line-height: 1.4;
      }

      .btv-theme .ad-container {
        display: none;
      }

      .btv-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
        margin-top: 20px;
      }

      .btv-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'amaderdesh',
    name: 'Amader Desh',
    description: 'Bold newspaper headline style.',
    defaults: {
      accentColor: '#009958',
      bgColor: '#CDDCD5',
      textColor: '#1f2937',
      font: 'Noto Serif Bengali',
      readmore: 'বিস্তারিত কমেন্টে',
      date: '৩২ ডিসেম্বর ২০২৫'
    },
    html: `
      <div class="template-wrapper adesh-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="adesh-logo">
            <img src="{logo}" />
        </div>
        <div class="adesh-image-area">
            <img src="{image}" class="adesh-main-image" />
        </div>
        <div class="adesh-content">
            <h1 class="adesh-headline">{heading}</h1>
            <p class="adesh-subhead">{subheading}</p>
            <p class="adesh-readmore">{readmore}</p>
        </div>
        <div class="adesh-footer">
            <div class="adesh-domain">{domain}</div>
            <div class="adesh-date">{date}</div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.adesh-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
      }

      .adesh-theme .adesh-logo {
        height: 150px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px;
      }

      .adesh-theme .adesh-logo img {
        height: 100%;
        object-fit: contain;
      }

      .adesh-theme .adesh-image-area {
        flex: 1;
        min-height: 0;
        width: 100%;
        padding: 40px 40px 0;
      }

      .adesh-theme .adesh-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .adesh-theme .adesh-content {
        padding: 40px;
        text-align: center;
        color: var(--text);
      }

      .adesh-theme .adesh-headline {
        font-size: 68px;
        line-height: 1.2;
        margin: 0 0 10px 0;
        font-weight: 800;
      }

      .adesh-theme .adesh-subhead {
        font-size: 32px;
        color: var(--text);
        line-height: 1.5;
        margin: 0;
      }

      .adesh-theme .adesh-readmore:empty {
        display: none;
      }

      .adesh-theme .adesh-readmore {
        margin-top: 20px;
        font-size: 28px;
        color: #EE1C25;
        font-weight: 600;
        position: relative;
        line-height: 1;
        margin: 20px 0 0 0;
      }

      .adesh-theme .adesh-readmore:before {
        content: '';
        display: inline-block;
        border: solid #EE1C25;
        border-width: 0 0px 3px 3px;
        padding: 6px;
        margin-right: 10px;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
      }

      .adesh-theme .adesh-readmore:after {
        content: '';
        display: inline-block;
        margin-left: 10px;
        border: solid #EE1C25;
        border-width: 0 3px 3px 0;
        padding: 6px;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
      }

      .adesh-footer {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--accent);
        color: white;
        padding: 16px 40px;
        line-height: 1;
        border-bottom: 10px solid #EE1C25;
      }

      .adesh-footer:after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0;
        right: 0;
        height: 4px;
        background: #FFFFFF;
      }

      .adesh-theme .ad-container {
        display: none;
      }

      .adesh-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .adesh-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'somoy',
    name: 'Somoy TV',
    description: 'Modern broadcast style with bottom ticker.',
    defaults: {
      accentColor: '#BD0706',
      bgColor: '#383838',
      textColor: '#FFFFFF',
      font: 'Noto Serif Bengali',
      tag: 'ব্রেকিং নিউজ',
      readmore: 'বিস্তারিত কমেন্টে',
      date: '৩২ ডিসেম্বর ২০২৫'
    },
    html: `
      <div class="template-wrapper somoy-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="somoy-image-area">
            <span class="somoy-tag">{tag}</span>
            <img src="{image}" class="somoy-main-image" />
        </div>
        <div class="somoy-content">
            <h1 class="somoy-headline">{heading}</h1>
            <p class="somoy-subhead">{subheading}</p>
        </div>
        <div class="somoy-footer">
            <div class="somoy-logo">
                <img src="{logo}" />
            </div>
            <span class="somoy-more">{readmore}</span>
            <div class="somoy-time-bar">{date}</div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.somoy-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        border: 10px solid var(--accent);
      }

      .somoy-theme .somoy-image-area {
        flex: 1;
        min-height: 0;
        width: 100%;
        position: relative;
      }

      .somoy-theme .somoy-image-area .somoy-tag {
        display: block;
        position: absolute;
        bottom: -4px;
        left: 0;
        padding: 10px 40px 10px 20px;
        background: linear-gradient(115deg, var(--accent) calc(100% - 30px), transparent calc(100% - 29px));
        color: white;
        font-size: 24px;
        font-weight: 700;
        line-height: 1;
      }

      .somoy-theme .somoy-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .somoy-theme .somoy-content {
        flex: 0 0 auto;
        padding: 40px 50px;
        background: var(--bg);
        border-top: 4px solid var(--accent);
        display: flex;
        flex-direction: column;
      }

      .somoy-theme .somoy-headline {
        font-size: 60px;
        line-height: 1.2;
        color: var(--text);
        margin: 0 0 20px 0;
        font-weight: 700;
        text-align: center;
      }

      .somoy-theme .somoy-subhead {
        font-size: 30px;
        color: var(--text);
        opacity: 0.8;
        margin: 0;
        line-height: 1.4;
        text-align: center;
      }

      .somoy-theme .somoy-footer {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      }

      .somoy-theme .somoy-logo {
        height: 150px;
        text-align: center;
        min-width: 250px;
        padding-bottom: 20px;
      }
      .somoy-theme .somoy-logo img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        object-position: center;
      }
      
      .somoy-theme .somoy-more {
        background: var(--accent);
        color: white;
        border-radius: 10px;
        font-size: 32px;
        padding: 10px 20px;
        line-height: 1;
        mb-ottom: 10px;
      }
        
      .somoy-theme .somoy-time-bar {
        padding: 10px 12px 9px 40px;
        background: linear-gradient(245deg, var(--accent) calc(100% - 30px), transparent calc(100% - 29px));
        color: white;
        font-size: 24px;
        font-weight: 700;
      }

      .somoy-theme .ad-container {
        display: none;
      }

      .somoy-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
        flex: 0 0 auto;
      }

      .somoy-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'jamuna',
    name: 'Jamuna TV',
    description: 'Sleek design with gradient accents.',
    defaults: {
      accentColor: '#9b090d',
      bgColor: '#810004',
      textColor: '#ffffff',
      domain: 'www.jamuna.tv',
      facebook: 'jamunatelevision',
      youtube: 'jamnuatvbd',
      font: 'Noto Serif Bengali'
    },
    html: `
      <div class="template-wrapper jamuna-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="jamuna-body">
            <div class="jamuna-image-wrap">
                <img src="{image}" class="jamuna-main-image" />
            </div>
            <div class="jamuna-text-wrap">
                <h1 class="jamuna-headline">{heading}</h1>
                <p class="jamuna-subhead">{subheading}</p>
                <div class="jamuna-date">{date}</div>
            </div>
        </div>
        <div class="jamuna-footer">
            <div class="jamuna-logo">
                <img src="{logo}" />
            </div>
            <div class="jamuna-domain">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span>{domain}</span>
            </div>
            <div class="jamuna-facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                <span>{facebook}</span>
            </div>
            <div class="jamuna-youtube">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                <span>{youtube}</span>
            </div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.jamuna-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        font-family: var(--font), sans-serif;
      }

      .jamuna-theme .jamuna-footer {
        height: 75px;
        flex: 0 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--bg);
        padding: 0 30px;
      }

      .jamuna-theme .jamuna-logo img {
        height: 50px;
        width: auto;
        object-fit: contain;
        object-position: left;
      }

      .jamuna-theme .jamuna-logo,
      .jamuna-theme .jamuna-domain,
      .jamuna-theme .jamuna-facebook,
      .jamuna-theme .jamuna-youtube {
        font-size: 24px;
        color: var(--text);
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .jamuna-theme .jamuna-body {
        flex: 1;
        min-height: 0;
        display: flex;
        flex-direction: column;
        background-color: var(--accent);
      }

      .jamuna-theme .jamuna-image-wrap {
        flex: 1;
        min-height: 0;
        width: 100%;
        overflow: hidden;
        border: 10px solid var(--accent);
        border-bottom: none;
      }

      .jamuna-theme .jamuna-main-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .jamuna-theme .jamuna-text-wrap {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        padding: 40px;
        text-align: center;
      }

      .jamuna-theme .jamuna-date {
        display: inline-block;
        color: var(--text);
        opacity: 0.8;
        border-radius: 4px;
        font-size: 20px;
        align-self: flex-end;
      }

      .jamuna-theme .jamuna-headline {
        font-size: 56px;
        line-height: 1.2;
        color: var(--text);
        margin: 0 0 20px 0;
        font-weight: 700;
      }

      .jamuna-theme .jamuna-subhead {
        font-size: 28px;
        color: var(--text);
        opacity: 0.8;
        margin: 0;
        line-height: 1.4;
      }

      .jamuna-theme .ad-container {
        display: none;
      }

      .jamuna-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f3f4f6;
      }

      .jamuna-theme .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'vertical1',
    name: 'Vertical #1',
    description: 'Split layout with quote on left and image on right.',
    defaults: {
      accentColor: '#D9232D',
      bgColor: '#ffffff',
      textColor: '#ffffff',
      content: 'আজকের গুরুত্বপূর্ণ সব খবর, এক নজরে দেখে নিন।',
      author: 'ড. পাগল কবি',
      designation: 'বিশ্বখ্যাত কবি ও সাহিত্যিক',
      date: '২০ সেপ্টেম্বর ২০২৫',
      domain: 'example.com'
    },
    html: `
      <div class="template-wrapper vertical1-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="main-content">
        <div class="left-panel">
            <div class="quote-icon">
                <svg height="40px" width="40px" fill="currentColor" version="1.1" viewBox="0 0 191.029 191.029" xml:space="preserve">
                  <path d="M44.33,88.474v15.377h38.417v82.745H0v-82.745h0.002V88.474c0-31.225,8.984-54.411,26.704-68.918 C38.964,9.521,54.48,4.433,72.824,4.433v44.326C62.866,48.759,44.33,48.759,44.33,88.474z M181.107,48.759V4.433 c-18.343,0-33.859,5.088-46.117,15.123c-17.72,14.507-26.705,37.694-26.705,68.918v15.377h0v82.745h82.744v-82.745h-38.417V88.474 C152.613,48.759,171.149,48.759,181.107,48.759z" />
                </svg>
            </div>
            <div class="content-text">
                <h1 class="main-quote">{content}</h1>
            </div>
            <div class="footer-area">
                <div class="logo-area">
                    <img src="{logo}" />
                </div>
                <div class="meta-info">
                    <span class="date">{date}</span>
                    <span class="separator">•</span>
                    <span class="domain">{domain}</span>
                </div>
            </div>
            <div class="deco-squares">
                <span></span><span></span><span></span>
            </div>
        </div>
        <div class="right-panel">
            <img src="{image}" class="person-image" />
            <div class="name-plate">
                <div class="name-info">
                    <h2 class="name">{author}</h2>
                    <p class="designation">{designation}</p>
                </div>
            </div>
        </div>
        </div>
        <div class="ad-container">
            <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.vertical1-theme {
        width: 1080px;
        height: 1080px;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
        font-family: var(--font), sans-serif;
        position: relative;
        overflow: hidden;
      }

      .vertical1-theme .main-content {
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
      }

      .vertical1-theme .left-panel {
        width: 50%;
        background-color: var(--accent);
        height: 100%;
        padding: 60px;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
        border-top-right-radius: 40px;
      }

      .vertical1-theme .quote-icon {
        margin-bottom: 40px;
      }
      
      .vertical1-theme .quote-icon svg {
        width: 100px;
        height: 100px;
        fill: white;
        opacity: 0.9;
      }

      .vertical1-theme .content-text {
        flex: 1;
      }

      .vertical1-theme .main-quote {
        font-size: 48px;
        color: white;
        line-height: 1.4;
        font-weight: 600;
        margin: 0;
      }

      .vertical1-theme .footer-area {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      .vertical1-theme .logo-area {
        height: 60px;
        display: flex;
        align-items: center;
      }

      .vertical1-theme .logo-area img {
        height: 100%;
        width: auto;
        object-fit: contain;
      }

      .vertical1-theme .meta-info {
        display: flex;
        align-items: center;
        gap: 10px;
        color: rgba(255, 255, 255, 0.9);
        font-size: 20px;
        font-weight: 500;
      }

      .vertical1-theme .right-panel {
        flex: 1;
        height: 100%;
        position: relative;
        background: #f3f4f6;
        margin-left: -35px;
        z-index: 1;
      }

      .vertical1-theme .person-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .vertical1-theme .name-plate {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 35px;
        background: rgba(255, 255, 255, 0.9);
        padding: 20px 30px;
      }

      .vertical1-theme .name {
        font-size: 42px;
        color: var(--accent);
        margin: 0 0 5px 0;
        font-weight: 800;
      }

      .vertical1-theme .designation {
        font-size: 24px;
        color: #333;
        margin: 0;
        font-weight: 500;
      }
      
      .vertical1-theme .deco-squares {
        position: absolute;
        top: 60px;
        right: 40px;
        display: flex;
        gap: 15px;
      }
      
      .vertical1-theme .deco-squares span {
        width: 20px;
        height: 20px;
        border: 2px solid rgba(255,255,255,0.4);
        display: block;
        border-radius: 4px;
      }

      .vertical1-theme .ad-container {
        display: none;
      }
      
      .vertical1-theme.has-ad .ad-container {
        width: 100%;
        max-height: 120px;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        flex: 0 0 auto;
        z-index: 10;
      }
      
      .vertical1-theme.has-ad .ad-container img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  },
  {
    id: 'gradient-news',
    name: 'Gradient News Card',
    description: 'Full image background with gradient overlay and bottom footer.',
    defaults: {
      accentColor: '#D9232D',
      bgColor: '#000000',
      textColor: '#ffffff',
      heading: 'মিডিয়া ছাড়লেন লোটাবাবা; পরলেন প্যান্টের উপর আন্ডারওয়ার, মুখ আর দেখাবেন না',
      category: 'বিনোদন',
      date: '২৭ ডিসেম্বর ২০২৫',
      domain: 'example.com'
    },
    html: `
      <div class="template-wrapper gradient-news-theme" style="--accent: {accentColor}; --bg: {bgColor}; --text: {textColor}; --font: '{font}';">
        <div class="bg-container">
            <img src="{image}" alt="Background" class="bg-image" />
        </div>

        <div class="top-logo">
            <div class="logo-wrapper">
                <img src="{logo}" class="logo-img" />
            </div>
        </div>

        <div class="content-section">
            <div class="headline-container">
                <div class="vertical-bar"></div>
                <h1 class="heading">{heading}</h1>
            </div>
        </div>

        <div class="footer-bar">
            <div class="footer-left">
                <span class="category">{category}</span>
                <span class="separator">|</span>
                <span class="date">{date}</span>
            </div>
            <div class="footer-right">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                <span class="domain">{domain}</span>
            </div>
        </div>
        <div class="ad-container">
          <img src="{adImage}" />
        </div>
      </div>
    `,
    css: `
      .template-wrapper.gradient-news-theme {
        width: 1080px;
        height: 1080px;
        position: relative;
        overflow: hidden;
        font-family: var(--font), sans-serif;
        background-color: var(--bg);
        color: white;
        display: flex;
        flex-direction: column;
      }

      .gradient-news-theme .bg-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
      }

      .gradient-news-theme .bg-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .gradient-news-theme .content-section::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 250%;
        background: linear-gradient(to top, var(--accent) 0%, transparent 100%);
        z-index: -1;
      }

      .gradient-news-theme .top-logo {
        position: absolute;
        top: 0;
        right: 50px;
        z-index: 10;
        width: 140px;
        height: 280px;
        background: white;
        border-bottom-right-radius: 65px;
        border-bottom-left-radius: 65px;
        display: flex;
        align-items: end;
        justify-content: center;
        background-color: var(--accent);
      }

      .gradient-news-theme .logo-wrapper {
        width: 130px;
        height: 130px;
        margin-bottom: 5px;
        border-radius: 50%;
        background-color: white;
        border: 1px solid white;
      }

      .gradient-news-theme .logo-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 50%;
        border: 4px solid white;
      }

      .gradient-news-theme .content-section {
        position: absolute;
        bottom: 100px; /* Height of footer */
        left: 0;
        width: 100%;
        padding: 0 60px 50px 60px;
        z-index: 10;
      }

      .gradient-news-theme .headline-container {
        display: flex;
        align-items: stretch;
        gap: 30px;
      }

      .gradient-news-theme .vertical-bar {
        width: 12px;
        background-color: #facc15; /* Yellow */
        flex-shrink: 0;
      }

      .gradient-news-theme .heading {
        font-size: 48px;
        line-height: 1.2;
        font-weight: 700;
        margin: 0;
        color: white;
        text-shadow: 0 2px 4px rgba(0,0,0,0.5);
      }

      .gradient-news-theme .footer-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background-color: var(--accent);
        z-index: 10;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
        font-size: 32px;
      }

      .gradient-news-theme .footer-left {
        display: flex;
        align-items: center;
        gap: 20px;
        font-weight: 500;
      }

      .gradient-news-theme .separator {
        opacity: 0.7;
      }

      .gradient-news-theme .footer-right {
        display: flex;
        gap: 15px;
        font-weight: 600;
        align-items: center;
      }

      /* Ad support */
      .gradient-news-theme .ad-container {
        display: none;
      }

      .gradient-news-theme.has-ad .ad-container {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 120px;
        background: white;
        z-index: 20;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
      .gradient-news-theme.has-ad .footer-bar {
        bottom: 120px;
      }
      
      .gradient-news-theme.has-ad .content-section {
        bottom: 220px;
      }
    `
  }
];
