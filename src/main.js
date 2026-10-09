import './style.css'

const STORAGE_KEY = 'finance-tracker-transactions'
const load = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
const save = (txns) => localStorage.setItem(STORAGE_KEY, JSON.stringify(txns))

let transactions = load()

const fmt = (n) => n.toLocaleString(undefined, { style: 'currency', currency: 'USD' })

document.querySelector('#app').innerHTML = `
  <main class="wrap">
    <header>
      <h1>Finance Tracker</h1>
      <p class="subtitle">Track income and expenses at a glance</p>
    </header>

    <section class="summary">
      <div class="card"><span>Income</span><strong id="income" class="positive">$0</strong></div>
      <div class="card"><span>Expenses</span><strong id="expenses" class="negative">$0</strong></div>
      <div class="card highlight"><span>Balance</span><strong id="balance">$0</strong></div>
    </section>

    <form id="txn-form">
      <input id="desc" type="text" placeholder="Description" required />
      <input id="amount" type="number" step="0.01" placeholder="Amount" required />
      <select id="type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add</button>
    </form>

    <ul id="txn-list"></ul>
    <p id="empty-state" class="empty-state">No transactions yet — add your first one above.</p>
  </main>
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
      <li class="${t.type}">
        <span>${t.desc}</span>
        <span>${t.type === 'expense' ? '-' : '+'}${fmt(t.amount)}</span>
        <button data-index="${i}" class="remove">&times;</button>
      </li>`
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
