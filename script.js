const tags = ["Cajun", "Spicy", "Southern Cooking", "Homemade"];

const prices = [8.50, 9.00, 12.50, 13.00];

console.log(tags);
console.log(prices);

const tagText = document.querySelector("#tags");
tagText.textContent = "";

for (let i = 0; i < tags.length; i++) {
  tagText.textContent = tagText.textContent + tags[i] + " · ";
}

let total = 0;

for (let i = 0; i < prices.length; i++) {
  total = total + prices[i];
}

document.querySelector("#total").textContent = "$" + total;

let tax = total * 0.08;

document.querySelector("#tax").textContent = "Tax (8%): $" + tax.toFixed(2);

document.querySelector("#total-with-tax").textContent = "Total with tax: $" + (total + tax).toFixed(2);
