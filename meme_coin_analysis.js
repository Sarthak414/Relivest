async function fetchCoinData() {
    try {
        // Replace with the URL to your Python script's output (e.g., an API endpoint)
        const response = await fetch('https://your-api-endpoint.com/meme-coins');
        const data = await response.json();

        const tableBody = document.querySelector('#coin-table tbody');
        tableBody.innerHTML = ''; // Clear existing rows

        data.forEach(coin => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${coin.name}</td>
                <td>${coin.symbol}</td>
                <td>${coin.price_change_7d.toFixed(2)}%</td>
                <td>$${coin.current_price.toFixed(6)}</td>
                <td>$${coin.market_cap.toLocaleString()}</td>
                <td>$${coin.total_volume.toLocaleString()}</td>
                <td>${coin.twitter_mentions.toLocaleString()}</td>
                <td>${coin.reddit_posts.toLocaleString()}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching coin data:', error);
    }
}

// Fetch data when the page loads
document.addEventListener('DOMContentLoaded', fetchCoinData);
