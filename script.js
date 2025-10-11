const RECIPES = [
  {
    id: 1,
    title: 'Hyderabadi Chicken Biryani',
    category: 'biryani',
    tags: ['chicken'],
    image: 'https://images.unsplash.com/photo-1600628422011-27e1c5c74d53?auto=format&fit=crop&w=1200&q=80',
    prep: '30 mins',
    cook: '1 hr',
    serves: '4',
    ingredients: [
      '1 kg chicken',
      '2 cups basmati rice',
      '2 onions (fried)',
      'Biryani masala',
      'Yogurt, mint, and saffron'
    ],
    steps: [
      'Marinate chicken in yogurt and masala for 2 hours.',
      'Cook rice until 70% done.',
      'Layer chicken and rice in a pot.',
      'Seal and cook on low flame (dum) for 30 minutes.'
    ],
    tips: 'Use aged basmati rice for best flavor.'
  },
  {
    id: 2,
    title: 'Masala Dosa',
    category: 'south',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1632156743051-9ff3de862a30?auto=format&fit=crop&w=1200&q=80',
    prep: '8 hrs',
    cook: '20 mins',
    serves: '3',
    ingredients: [
      '2 cups rice',
      '1 cup urad dal',
      'Boiled potatoes',
      'Mustard seeds and curry leaves'
    ],
    steps: [
      'Soak rice and dal for 6 hours.',
      'Grind and ferment overnight.',
      'Prepare masala filling.',
      'Spread dosa batter, fill, and fold.'
    ],
    tips: 'Keep batter warm to ferment properly.'
  },
  {
    id: 3,
    title: 'Idli & Sambar',
    category: 'south',
    tags: ['veg'],
    image: 'https://images.unsplash.com/photo-1662028492936-52778c5a4d3b?auto=format&fit=crop&w=1200&q=80',
    prep: '8 hrs',
    cook: '15 mins',
    serves: '4',
    ingredients: [
      '1 cup urad dal',
      '2 cups idli rice',
      'Salt to taste',
      'For sambar: dal, tamarind, and vegetables'
    ],
    steps: [
      'Soak rice and dal, grind, and ferment overnight.',
      'Pour batter into idli molds and steam.',
      'Prepare sambar and serve hot.'
    ],
    tips: 'Fermented batter gives soft, fluffy idlis.'
  }
];

// Grab elements
const grid = document.getElementById('grid');
const qEl = document.getElementById('q');
const filters = document.getElementById('filters');
const empty = document.getElementById('empty');

// Render the cards
function renderList(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  list.forEach(r => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <div class="media" style="background-image:url('${r.image}')"></div>
      <div class="body">
        <h3>${r.title}</h3>
        <p><span class="badge">${r.category}</span> • ${r.prep}</p>
      </div>
    `;
    card.addEventListener('click', () => showRecipe(r.id));
    grid.appendChild(card);
  });
}

// Show modal with recipe details
function showRecipe(id) {
  const r = RECIPES.find(x => x.id === id);
  if (!r) return;

  document.getElementById('modal-title').textContent = r.title;
  document.getElementById('modal-media').style.backgroundImage = `url('${r.image}')`;
  document.getElementById('modal-ingredients').innerHTML =
    r.ingredients.map(i => `<li>${i}</li>`).join('');
  document.getElementById('modal-steps').innerHTML =
    r.steps.map(s => `<li>${s}</li>`).join('');
  document.getElementById('modal-prep').textContent = r.prep;
  document.getElementById('modal-cook').textContent = r.cook;
  document.getElementById('modal-serves').textContent = r.serves;
  document.getElementById('modal-category').textContent = r.category;
  document.getElementById('modal-tips').textContent = r.tips;
  
  document.getElementById('overlay').classList.add('show');
}

// Close modal
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('overlay').classList.remove('show');
});
document.getElementById('overlay').addEventListener('click', e => {
  if (e.target.id === 'overlay') {
    document.getElementById('overlay').classList.remove('show');
  }
});

// Filter buttons logic
filters.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  qEl.value = '';
  applyFilter();
});

// Search logic
qEl.addEventListener('input', applyFilter);

function applyFilter() {
  const q = qEl.value.toLowerCase();
  const activeChip = document.querySelector('.chip.active');
  if (!activeChip) return;
  const cat = activeChip.dataset.cat;

  const out = RECIPES.filter(r => {
    const matchCat = cat === 'all' || r.category === cat || r.tags.includes(cat);
    const matchQ = r.title.toLowerCase().includes(q);
    return matchCat && matchQ;
  });
  renderList(out);
}

// Initial render
renderList(RECIPES);


