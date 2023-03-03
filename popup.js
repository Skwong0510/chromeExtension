async function getCurrentPrice() {
    const response = await fetch('https://api.coinmarketcap.com/data/price?ids=ethereum&convert=USD', {
      mode: 'cors'
    });
    const data = await response.json();
    return data.ethereum.usd.toFixed(2);
  }  
  
  async function updatePrice() {
    const price = await getCurrentPrice();
    const priceElement = document.getElementById('price');
    priceElement.textContent = `$${price}`;
  }
  
  updatePrice();
  