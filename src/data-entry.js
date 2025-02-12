let jsonData = [];

function addToJSON()
{

    const id = 1;
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const category = document.getElementById("category").value;
    const price = parseFloat(document.getElementById("price").value); // Parse as float
    const qty = parseInt(document.getElementById("quantity").value); // Parse as int

    const newItem =
    {
        id: id,
        brand: brand,
        model: model,
        category: category,
        price: price,
        qty: qty
    };
    jsonData.push(newItem);

    fetch('/saveData', {  // Replace '/saveData' with your server endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    })
    .then(response => response.json()) // Assuming server sends back JSON
    .then(data => {
        console.log('Data saved successfully:', data);
        document.getElementById("output").textContent = JSON.stringify(jsonData, null, 2); // Update output
        document.getElementById("dataForm").reset(); // Clear form
    })
    .catch(error => {
        console.error('Error saving data:', error);
        alert("Error saving data. Please try again later."); // Or a better error message
    });
}