import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <div class="topbar-inner">
      <span class="brand">Ledger<span class="brand-accent">IQ</span></span>
      <nav class="nav-links">
        <a href="#solutions">Solutions</a>
        <a href="#how-it-works">How it works</a>
        <a href="#testimonials">Customers</a>
        <a href="#contact" class="nav-cta">Request a demo</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-inner">
      <span class="eyebrow">Financial Operations Platform</span>
      <h1>Clarity over every dollar that moves through your business.</h1>
      <p>LedgerIQ unifies cash flow, reconciliation, and reporting into one real-time platform — built for finance teams who can't afford to wait on month-end.</p>
      <div class="hero-ctas">
        <a class="cta" href="#contact">Request a demo &rarr;</a>
        <a class="cta-secondary" href="#solutions">Explore solutions</a>
      </div>
    </div>
  </section>

  <section class="logos">
    <span>Trusted by finance teams at</span>
    <div class="logo-row">
      <span>Northwind Capital</span>
      <span>Vantage Holdings</span>
      <span>Carrow &amp; Pine</span>
      <span>Meridian Group</span>
      <span>Atlas Partners</span>
    </div>
  </section>

  <section class="stats">
    <div class="stat"><strong>$4.2B+</strong><span>Transactions processed annually</span></div>
    <div class="stat"><strong>99.98%</strong><span>Platform uptime</span></div>
    <div class="stat"><strong>6 hrs</strong><span>Avg. close-cycle reduction</span></div>
    <div class="stat"><strong>340+</strong><span>Finance teams onboarded</span></div>
  </section>

  <section id="solutions" class="solutions">
    <h2>Built for every stage of your financial operations</h2>
    <div class="solution-grid">
      <div class="solution-card">
        <span class="icon">&#128202;</span>
        <h3>Real-time reporting</h3>
        <p>Live income, expense, and cash-position dashboards across every entity and currency.</p>
      </div>
      <div class="solution-card">
        <span class="icon">&#128272;</span>
        <h3>Reconciliation</h3>
        <p>Automated matching against bank feeds, with full audit trails for compliance teams.</p>
      </div>
      <div class="solution-card">
        <span class="icon">&#9881;&#65039;</span>
        <h3>Workflow automation</h3>
        <p>Approval chains, recurring entries, and close-cycle checklists that run themselves.</p>
      </div>
      <div class="solution-card">
        <span class="icon">&#128272;</span>
        <h3>Enterprise security</h3>
        <p>SOC 2 Type II controls, role-based access, and full data residency options.</p>
      </div>
    </div>
  </section>

  <section id="how-it-works" class="how-it-works">
    <h2>From raw transactions to board-ready insight</h2>
    <div class="steps">
      <div class="step"><span class="step-num">1</span><h3>Connect</h3><p>Link your bank, ERP, and payment providers in minutes.</p></div>
      <div class="step"><span class="step-num">2</span><h3>Reconcile</h3><p>LedgerIQ categorizes and matches entries automatically.</p></div>
      <div class="step"><span class="step-num">3</span><h3>Report</h3><p>Share live dashboards with leadership and auditors alike.</p></div>
    </div>
  </section>

  <section id="testimonials" class="testimonials">
    <blockquote>
      "LedgerIQ cut our monthly close from eight days to two. It's the first finance tool our whole team actually enjoys using."
      <footer>&mdash; VP of Finance, Meridian Group</footer>
    </blockquote>
  </section>

  <section id="contact" class="cta-banner">
    <h2>Ready to see LedgerIQ in action?</h2>
    <p>Talk to our team about a tailored walkthrough for your finance organization.</p>
    <a class="cta" href="mailto:sales@ledgeriq.example">Request a demo &rarr;</a>
  </section>

  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">Ledger<span class="brand-accent">IQ</span></div>
      <div class="footer-links">
        <a href="#solutions">Solutions</a>
        <a href="#how-it-works">How it works</a>
        <a href="#testimonials">Customers</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
    <p class="footer-note">&copy; 2026 LedgerIQ. Internal demo build &mdash; not a real financial institution.</p>
  </footer>
`
