import './style.css'

const STORAGE_KEY = 'finance-tracker-transactions'
const load = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
const save = (txns) => localStorage.setItem(STORAGE_KEY, JSON.stringify(txns))

let transactions = load()

const fmt = (n) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' })

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <div class="topbar-inner">
      <span class="brand">Ledger<span class="brand-accent">IQ</span></span>
      <nav class="nav-links">
        <a href="#product">Product</a>
        <a href="#features">Features</a>
        <a href="#app">Launch App</a>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="hero-inner">
      <span class="eyebrow">Financial Operations Platform</span>
      <h1>Clarity over every dollar that moves through your business.</h1>
      <p>LedgerIQ gives finance teams a single, real-time view of income and expenses — built for the speed modern operations demand.</p>
      <a class="cta" href="#app">Launch the App &rarr;</a>
    </div>
  </section>

  <section id="features" class="features">
    <div class="feature"><strong>Real-time balance</strong><span>Always know your net position.</span></div>
    <div class="feature"><strong>Zero setup</strong><span>No accounts, no onboarding friction.</span></div>
    <div class="feature"><strong>Private by default</strong><span>Data stays on-device.</span></div>
  </section>

  <main class="wrap" id="app">
    <section class="summary">
      <div class="card">
        <span>Total Income</span>
        <strong id="income" class="positive">$0</strong>
      </div>
      <div class="card">
        <span>Total Expenses</span>
        <strong id="expenses" class="negative">$0</strong>
      </div>
      <div class="card">
        <span>Net Balance</span>
        <strong id="balance">$0</strong>
      </div>
    </section>

    <section class="panel">
      <div class="panel-header">
        <h2>Transactions</h2>
      </div>

      <form id="txn-form">
        <input id="desc" type="text" placeholder="Description" required />
        <input id="amount" type="number" step="0.01" placeholder="Amount" required />
        <select id="type">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <button type="submit">Add Entry</button>
      </form>

      <div class="table">
        <div class="table-row table-head">
          <span>Description</span>
          <span>Type</span>
          <span class="amount-col">Amount</span>
          <span></span>
        </div>
        <div id="txn-list"></div>
        <p id="empty-state" class="empty-state">No transactions recorded.</p>
      </div>
    </section>
  </main>

  <footer class="footer">LedgerIQ &mdash; internal demo build</footer>
`

const incomeEl = document.querySelector('#income')
const expensesEl = document.querySelector('#expenses')
const balanceEl = document.querySelector('#balance')
const listEl = document.querySelector('#txn-list')
const form = document.querySelector('#txn-form')
const emptyStateEl = document.querySelector('#empty-state')

function render() {
  const income = transactions.filter((t) => t.type === 'income').reduce((s, t) => s + t.amount, 0)
  const expenses = transactions.filter((t) => t.type === 'expense').reduce((s, t) => s + t.amount, 0)

  incomeEl.textContent = fmt(income)
  expensesEl.textContent = fmt(expenses)
  balanceEl.textContent = fmt(income - expenses)

  emptyStateEl.style.display = transactions.length ? 'none' : 'block'

  listEl.innerHTML = transactions
    .map(
      (t, i) => `
      <div class="table-row">
        <span>${t.desc}</span>
        <span><span class="tag ${t.type}">${t.type === 'expense' ? 'Expense' : 'Income'}</span></span>
        <span class="amount-col ${t.type}">${t.type === 'expense' ? '-' : '+'}${fmt(t.amount)}</span>
        <button data-index="${i}" class="remove" title="Delete">&times;</button>
      </div>`
    )
    .join('')
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const desc = document.querySelector('#desc').value.trim()
  const amount = parseFloat(document.querySelector('#amount').value)
  const type = document.querySelector('#type').value
  if (!desc || Number.isNaN(amount)) return

  transactions.push({ desc, amount, type })
  save(transactions)
  form.reset()
  render()
})

listEl.addEventListener('click', (e) => {
  if (!e.target.matches('.remove')) return
  transactions.splice(Number(e.target.dataset.index), 1)
  save(transactions)
  render()
})

render()
