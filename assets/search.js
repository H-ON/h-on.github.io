const searchPanel = document.querySelector('#search');
const searchInput = document.querySelector('#post-search');
const searchStatus = document.querySelector('#search-status');
const searchEmpty = document.querySelector('#search-empty');

const normalize = (value) => value.normalize('NFKC').toLowerCase();
const posts = Array.from(document.querySelectorAll('[data-post]'), (card) => ({
  card,
  text: normalize(card.dataset.search),
}));

function updateSearch() {
  const query = normalize(searchInput.value).trim();
  const terms = query ? query.split(/\s+/) : [];
  let count = 0;

  for (const { card, text } of posts) {
    const matches = terms.every((term) => text.includes(term));
    card.hidden = !matches;
    if (matches) count += 1;
  }

  searchStatus.textContent = query ? `검색 결과 ${count}개` : `전체 ${count}개 게시글`;
  searchEmpty.hidden = count !== 0;
}

function focusSearch() {
  if (location.hash === '#search') searchInput.focus();
}

searchPanel.hidden = false;
searchInput.addEventListener('input', updateSearch);
window.addEventListener('hashchange', focusSearch);
window.addEventListener('load', () => requestAnimationFrame(focusSearch), { once: true });
updateSearch();
