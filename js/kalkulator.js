function calculateCost() {
    const days = document.getElementById('days').value;
    const guests = document.getElementById('guests').value;
    const isPremiumRoom = document.getElementById('premiumRoom').checked;
    const isDeluxeBreakfast = document.getElementById('deluxeBreakfast').checked;
    const discount = document.getElementById('discount').value;
    
    let costPerDayPerPerson = isPremiumRoom ? 250 : 200;
    let breakfastCostPerPerson = isDeluxeBreakfast ? 50 : 0;
    
    let totalCost = (costPerDayPerPerson + breakfastCostPerPerson) * guests * days;

    let discountAmount = totalCost * (discount / 100);
    totalCost -= discountAmount;
    
    document.getElementById('result').innerText = `Całkowity koszt pobytu: ${totalCost} zł`;
}