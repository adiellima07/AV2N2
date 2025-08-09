
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  const li = createTaskElement(text);
  list.prepend(li); 
  input.value = '';
  input.focus();
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('complete-btn')) {
    const li = e.target.closest('li');
    li.classList.add('fade-out');
    li.addEventListener('transitionend', () => li.remove(), { once: true });
  }
});

function createTaskElement(text) {
  const li = document.createElement('li');
  li.className = 'task';
  li.innerHTML = `<span class="text"></span><button class="complete-btn">Concluída</button>`;
  li.querySelector('.text').textContent = text;
  return li;
}
