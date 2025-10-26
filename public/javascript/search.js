document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input');
  const searchForm = document.querySelector('.search-form');
  
  if (searchInput) {
    let debounceTimer;
    
    searchInput.addEventListener('input', function(e) {
      clearTimeout(debounceTimer);
      const query = e.target.value.trim();
      
      if (query.length < 2) return;
      
      debounceTimer = setTimeout(() => {
        fetchSuggestions(query);
      }, 300);
    });
  }
  
  async function fetchSuggestions(query) {
    try {
      const response = await fetch(`/listing/suggestions?q=${encodeURIComponent(query)}`);
      const suggestions = await response.json();
      displaySuggestions(suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  }
  
  function displaySuggestions(suggestions) {
    // Remove existing dropdown
    const existingDropdown = document.querySelector('.search-suggestions');
    if (existingDropdown) {
      existingDropdown.remove();
    }
    
    if (suggestions.length === 0) return;
    
    const dropdown = document.createElement('div');
    dropdown.className = 'search-suggestions';
    dropdown.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 40px;
      background: white;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin-top: 4px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 1000;
      max-height: 300px;
      overflow-y: auto;
    `;
    
    suggestions.forEach(item => {
      const div = document.createElement('div');
      div.style.cssText = `
        padding: 10px 15px;
        cursor: pointer;
        border-bottom: 1px solid #f0f0f0;
      `;
      div.innerHTML = `
        <i class="fa-solid fa-location-dot text-primary"></i>
        <strong>${item.title}</strong> - ${item.location}, ${item.country}
      `;
      div.addEventListener('click', () => {
        searchInput.value = item.location;
        searchForm.submit();
      });
      dropdown.appendChild(div);
    });
    
    searchForm.style.position = 'relative';
    searchForm.appendChild(dropdown);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function closeDropdown(e) {
      if (!searchForm.contains(e.target)) {
        dropdown.remove();
        document.removeEventListener('click', closeDropdown);
      }
    });
  }
});