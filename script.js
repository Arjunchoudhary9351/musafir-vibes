
function showCategory(category) {
  document.querySelectorAll('.category').forEach(cat => {
    cat.classList.add('hidden');
  });
  document.getElementById(category).classList.remove('hidden');
}
