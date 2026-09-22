(() => {
  const cfg = window.NOBLEVEYRA || {};

  function ensureToolkitStyles() {
    if (document.querySelector('link[href*="toolkit.css"]')) return;
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'toolkit.css?v=1';
    link.dataset.toolkitStyles = 'true';
    document.head.appendChild(link);
  }

  function patchHomepage() {
    const servicesRoot = document.querySelector('#services .shell.center.content-layer');
    if (servicesRoot) {
      servicesRoot.innerHTML = `
        <p class="kicker dark">Start Here</p>
        <h2>Choose the Right Level of Support</h2>
        <p class="section-lead">
          Not every entrepreneur needs the same kind of help. Start with the level of support that matches where you are now.
        </p>

        <div class="offer-grid offer-grid-three">
          <article class="offer-card toolkit-card">
            <div class="toolkit-card-image-wrap">
              <img src="toolkit-product.webp" alt="NobleVeyra Business Launch Clarity Toolkit" class="toolkit-card-image">
            </div>
            <p class="offer-eyebrow">Self-Guided Business Clarity</p>
            <p class="price">$49</p>
            <h3>Launch Clarity Toolkit</h3>
            <p class="tagline">Diagnose before you build.</p>
            <p class="offer-summary">
              A premium 33-page business launch workbook designed to help you determine what actually deserves your attention before you spend more time or money building the wrong things.
            </p>
            <ul>
              <li>Launch Clarity Diagnostic</li>
              <li>Customer, offer, pricing, and positioning</li>
              <li>Startup spending priorities</li>
              <li>Customer-acquisition planning</li>
              <li>30-day roadmap and weekly scorecards</li>
            </ul>
            <p class="offer-summary"><strong>You leave with:</strong> fewer unanswered questions, clearer priorities, and a focused 30-day path forward.</p>
            <a class="pill wide" data-link="toolkitPaymentUrl" href="#">Get the Toolkit — $49 <span>→</span></a>
            <a class="text-link" href="toolkit.html">See What’s Inside</a>
            <p class="fine">Digital workbook. Immediate access after purchase.</p>
          </article>

          <article class="offer-card blue-card">
            <div class="card-icon"><span class="service-icon">◎</span></div>
            <p class="offer-eyebrow">Private Business Diagnosis</p>
            <p class="price">$199</p>
            <h3>Business Launch<br>Strategy Session</h3>
            <p class="tagline">Get personalized clarity.</p>
            <p class="offer-summary">
              A 90-minute private diagnostic and strategy engagement designed to identify what is keeping your business stuck and determine what deserves attention first.
            </p>
            <ul>
              <li>Clarify your target customer and core offer</li>
              <li>Review pricing and positioning decisions</li>
              <li>Determine startup spending priorities</li>
              <li>Identify practical acquisition channels</li>
              <li>Organize priorities into a 30-day roadmap</li>
            </ul>
            <p class="offer-summary"><strong>You leave with:</strong> clearer decisions, prioritized next steps, and a custom 30-day strategy built around your specific business.</p>
            <a class="pill wide" data-link="strategyPaymentUrl" href="#">Book Your Strategy Session — $199 <span>→</span></a>
            <a class="text-link" href="mailto:tj@nobleveyraadvisory.com?subject=Question%20About%20the%20Strategy%20Session">Questions before booking? Ask NobleVeyra.</a>
            <p class="fine">One-time private strategy engagement. Not a discovery call or introductory consultation.</p>
          </article>

          <article class="offer-card black-card featured-offer" id="intensive">
            <span class="badge">Founding Client Access<br><small>First 3 Engagements</small></span>
            <div class="card-icon"><span class="service-icon">◇</span></div>
            <p class="offer-eyebrow">30 Days of Private Advisory</p>
            <p class="price">$1,500</p>
            <h3>30-Day Business<br>Launch Intensive</h3>
            <p class="tagline">Execute with strategic support.</p>
            <p class="offer-summary">
              For entrepreneurs who know what they want to build and want ongoing guidance, accountability, and decision support while they actively execute.
            </p>
            <ul>
              <li>One private strategy call each week</li>
              <li>Business-day accountability and strategic support</li>
              <li>Customer, offer, pricing, and positioning guidance</li>
              <li>Startup spending and acquisition strategy</li>
              <li>Launch execution and market-feedback adjustments</li>
            </ul>
            <p class="offer-summary"><strong>The objective:</strong> move from scattered planning into structured execution with a clear path toward customer acquisition.</p>
            <a class="pill wide" data-link="intensiveApplicationUrl" href="#">Start the 30-Day Intensive <span>→</span></a>
            <a class="text-link" href="mailto:tj@nobleveyraadvisory.com?subject=Question%20About%20the%2030-Day%20Intensive">Questions before committing? Ask about the Intensive.</a>
            <p class="fine">Eligible Strategy Session clients receive the full $199 session credit when upgrading within 48 hours.</p>
          </article>
        </div>

        <div class="choice-panel choice-panel-three reveal">
          <div>
            <span class="choice-label">Want to work through it yourself?</span>
            <h3>Start with the Toolkit.</h3>
            <p>Choose this when you want a structured way to examine your customer, offer, pricing, spending, acquisition, and next priorities.</p>
            <a class="choice-link" href="toolkit.html">Explore the Toolkit →</a>
          </div>
          <div class="choice-divider"></div>
          <div>
            <span class="choice-label">Need an outside perspective?</span>
            <h3>Choose the Strategy Session.</h3>
            <p>Choose this when priorities are competing or you need personalized diagnosis and strategic judgment applied to your specific business.</p>
          </div>
          <div class="choice-divider"></div>
          <div>
            <span class="choice-label">Ready to execute with support?</span>
            <h3>Continue with the Intensive.</h3>
            <p>Choose this when you want ongoing guidance, accountability, and decision support while actively launching the business.</p>
          </div>
        </div>`;
    }

    const heroExplore = document.querySelector('.hero .actions .pill.outline');
    if (heroExplore) {
      heroExplore.innerHTML = 'Explore Your Options <span>↓</span>';
      heroExplore.href = '#services';
    }

    const primaryNav = document.querySelector('#nav');
    if (primaryNav) {
      const servicesLink = primaryNav.querySelector('a[href="#services"]');
      if (servicesLink) servicesLink.textContent = 'Start Here';
    }

    const processTitle = document.querySelector('#process h2');
    if (processTitle) processTitle.textContent = 'From Clarity to Execution';

    const finalCta = document.querySelector('#contact .shell.center.content-layer');
    if (finalCta) {
      finalCta.innerHTML = `
        <p class="kicker">Your Next Move</p>
        <h2>You Know What You Want to Build. Now Determine What Matters Next.</h2>
        <p>
          Building a business becomes expensive when every decision feels equally urgent. NobleVeyra helps you separate what matters now from what can wait, protect early capital, create a realistic path toward customers, and execute in the right order.
        </p>
        <div class="next-move-grid">
          <a class="next-move-card" href="toolkit.html">
            <span>SELF-GUIDED</span>
            <strong>Launch Clarity Toolkit</strong>
            <b>$49</b>
            <small>Work through the business yourself with structure.</small>
          </a>
          <a class="next-move-card" data-link="strategyPaymentUrl" href="#">
            <span>PERSONALIZED DIAGNOSIS</span>
            <strong>Strategy Session</strong>
            <b>$199</b>
            <small>Apply NobleVeyra judgment to your specific business.</small>
          </a>
          <a class="next-move-card" data-link="intensiveApplicationUrl" href="#">
            <span>SUPPORTED EXECUTION</span>
            <strong>30-Day Intensive</strong>
            <b>$1,500</b>
            <small>Execute with ongoing strategic support.</small>
          </a>
        </div>
        <p class="cta-process">Clarity before complexity.</p>`;
    }

    const faqHeading = document.querySelector('#faq h2');
    if (faqHeading) faqHeading.textContent = 'Before You Choose';

    const faqList = document.querySelector('#faq .faq-list');
    if (faqList) {
      faqList.innerHTML = `
        <details>
          <summary>Who is NobleVeyra for?</summary>
          <p>NobleVeyra is designed for aspiring entrepreneurs and early-stage founders who already know what they want to build but need greater clarity around their customer, offer, pricing, positioning, startup spending, customer acquisition, launch sequence, or execution.</p>
        </details>
        <details>
          <summary>What is the Launch Clarity Toolkit?</summary>
          <p>The NobleVeyra Launch Clarity Toolkit is a 33-page self-guided business launch workbook built around one principle: diagnosis before action. It helps you evaluate your customer, offer, pricing, positioning, spending, acquisition, conversion, and execution before deciding what deserves attention next.</p>
        </details>
        <details>
          <summary>Is the Toolkit a course?</summary>
          <p>No. It is a structured diagnostic and execution workbook designed to help you think through the business, make better decisions, and build a focused 30-day plan.</p>
        </details>
        <details>
          <summary>What is included with the $49 Toolkit?</summary>
          <p>You receive the complete digital Launch Clarity Toolkit, including the Launch Clarity Diagnostic, customer and offer exercises, pricing and positioning tools, startup spending filter, customer-acquisition planning, 30-day roadmap, weekly execution scorecards, and final priority framework.</p>
        </details>
        <details>
          <summary>What is the difference between the Toolkit and Strategy Session?</summary>
          <p>The Toolkit gives you NobleVeyra's framework for working through the business yourself. The Strategy Session applies personalized diagnosis, judgment, and prioritization directly to your specific business. If you complete the Toolkit and still have conflicting answers or unclear priorities, the Strategy Session is the next level of support.</p>
        </details>
        <details>
          <summary>What happens in the $199 Strategy Session?</summary>
          <p>We diagnose what is keeping the business stuck, clarify your customer and offer, review pricing and startup spending priorities, identify practical customer-acquisition channels, and determine what deserves your attention first. You leave with prioritized decisions and a custom 30-day roadmap.</p>
        </details>
        <details>
          <summary>Which option should I choose?</summary>
          <p>Choose the Launch Clarity Toolkit if you want a structured self-guided process. Choose the Business Launch Strategy Session when you want personalized diagnosis and strategic judgment. Choose the 30-Day Business Launch Intensive when you want ongoing strategic guidance, accountability, and decision support while you execute.</p>
        </details>
        <details>
          <summary>What makes the 30-Day Intensive different?</summary>
          <p>The Intensive adds 30 days of ongoing advisory support, weekly private strategy calls, business-day accountability, and strategic adjustments while you actively build and respond to market feedback.</p>
        </details>
        <details>
          <summary>Can I ask a question before purchasing?</summary>
          <p>Yes. If you are unsure which NobleVeyra option fits your situation, email <a href="mailto:tj@nobleveyraadvisory.com">Tj@nobleveyraadvisory.com</a>.</p>
        </details>
        <details>
          <summary>Do you guarantee revenue or customers?</summary>
          <p>No. NobleVeyra provides strategy, research, guidance, prioritization, tools, and execution support. Business outcomes depend on the founder, market, offer, execution, customer response, and other factors outside NobleVeyra's control.</p>
        </details>`;
    }
  }

  function initMenu() {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('#nav');
    if (!menu || !nav) return;

    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-label', 'Open navigation');
      });
    });
  }

  function initReveal() {
    const revealItems = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealItems.forEach(el => io.observe(el));
    } else {
      revealItems.forEach(el => el.classList.add('visible'));
    }
  }

  function bindConfigLinks() {
    document.querySelectorAll('[data-link]').forEach(el => {
      const key = el.getAttribute('data-link');
      const value = cfg[key];
      if (value && !value.includes('PASTE_YOUR_')) {
        el.href = value;
        if (key === 'instagramUrl' || key === 'threadsUrl') {
          el.target = '_blank';
          el.rel = 'noopener noreferrer';
        }
      } else {
        el.addEventListener('click', event => {
          event.preventDefault();
          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
        });
      }
    });

    document.querySelectorAll('[data-email]').forEach(el => {
      el.href = cfg.email ? `mailto:${cfg.email}` : '#contact';
    });

    document.querySelectorAll('[data-booking]').forEach(el => {
      if (cfg.bookingUrl) {
        el.href = cfg.bookingUrl;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      }
    });
  }

  ensureToolkitStyles();
  patchHomepage();
  initMenu();
  initReveal();
  bindConfigLinks();

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
