document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const reviewForm = document.getElementById('review-form');
    const reviewText = document.getElementById('review-text');
    const ratingStars = document.querySelectorAll('.star');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value;
        fetch(`server.php?action=search&query=${query}`)
            .then(response => response.json())
            .then(data => {
                searchResults.innerHTML = '';
                data.forEach(review => {
                    const reviewElement = document.createElement('div');
                    reviewElement.classList.add('review');
                    reviewElement.innerHTML = `
                        <p>${review.text}</p>
                        <p>Rating: ${review.rating}</p>
                    `;
                    searchResults.appendChild(reviewElement);
                });
            });
    });

    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            ratingStars.forEach(s => s.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const review = reviewText.value;
        const rating = document.querySelector('.star.selected').dataset.value;
        fetch('server.php?action=submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ review, rating })
        })
        .then(response => response.json())
        .then(data => {
            alert('Review submitted successfully!');
            reviewText.value = '';
            ratingStars.forEach(star => star.classList.remove('selected'));
        });
    });

    let currentLanguage = 'es';

    function loadLanguage(lang) {
        fetch(`/lang/${lang}.json`)
            .then(response => response.json())
            .then(translations => {
                document.querySelector('#search-button').textContent = translations.search;
                document.querySelector('#submit-review-button').textContent = translations.submit_review;
                document.querySelector('#rating-label').textContent = translations.rating;
                document.querySelector('#write-review-label').textContent = translations.write_a_review;
                document.querySelector('#search-results-label').textContent = translations.search_results;
                // Update other elements as needed
            });
    }

    document.querySelector('#language-selector').addEventListener('change', function(event) {
        currentLanguage = event.target.value;
        loadLanguage(currentLanguage);
    });

    // Load default language on page load
    loadLanguage(currentLanguage);
});
