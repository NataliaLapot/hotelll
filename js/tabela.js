document.addEventListener("DOMContentLoaded", function() {
    const rooms = [
        { type: "Jednoosobowy", price: 200, view: "Widok na plac", amenities: "Łazienka, balkon, telewizor, Wi-Fi" },
        { type: "Jednoosobowy Premium", price: 250, view: "Widok na jezioro", amenities: "Łazienka, balkon, telewizor, Wi-Fi, jacuzzi, stół do bilarda, lokaj" },
        { type: "Dwuosobowy", price: 400, view: "Widok na plac", amenities: "Łazienka, balkon, telewizor, Wi-Fi" },
        { type: "Dwuosobowy Premium", price: 500, view: "Widok na jezioro", amenities: "Łazienka, balkon, telewizor, Wi-Fi, jacuzzi, stół do bilarda, lokaj" },
        { type: "Trzyosobowy", price: 600, view: "Widok na plac", amenities: "Łazienka, balkon, telewizor, Wi-Fi" },
        { type: "Trzyosobowy Premium", price: 750, view: "Widok na jezioro", amenities: "Łazienka, balkon, telewizor, Wi-Fi, jacuzzi, stół do bilarda, lokaj" },
        { type: "Pokój rodzinny 2+2", price: 800, view: "Widok na plac", amenities: "Łazienka, balkon, telewizor, Wi-Fi" },
        { type: "Pokój rodzinny 2+2 Premium", price: 1000, view: "Widok na jezioro", amenities: "Łazienka, balkon, telewizor, Wi-Fi, jacuzzi, stół do bilarda, lokaj" },
        { type: "Pokój dla nowożeńców", price: 1500, view: "Widok na jezioro", amenities: "Łazienka, balkon, telewizor, Wi-Fi, jacuzzi, stół do bilarda, lokaj, śniadanie do łóżka, rozsypane płatki róż, pokój w ustronnej lokalizacji" },
        { type: "Pokój samotnika", price: 300, view: "Widok na jezioro", amenities: "Łazienka, balkon, telewizor, Wi-Fi, biblioteczka, platformy audiobookowe dostępne na telewizorze, pokój w ustronnej lokalizacji" }
    ];

    const tableContainer = document.getElementById("table-container");

    const table = document.createElement("table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = ["Nr", "Rodzaj pokoju", "Cena za dobę", "Widok", "Dodatkowe wyposażenie"];

    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.appendChild(document.createTextNode(headerText));
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    rooms.forEach((room, index) => {
        const row = document.createElement("tr");
        if (room.type.includes("Premium")) {
            row.classList.add("premium");
        }

        const cellIndex = document.createElement("td");
        cellIndex.appendChild(document.createTextNode(index + 1));
        row.appendChild(cellIndex);

        const cellType = document.createElement("td");
        cellType.appendChild(document.createTextNode(room.type));
        row.appendChild(cellType);

        const cellPrice = document.createElement("td");
        cellPrice.appendChild(document.createTextNode(room.price + " PLN"));
        row.appendChild(cellPrice);

        const cellView = document.createElement("td");
        cellView.appendChild(document.createTextNode(room.view));
        row.appendChild(cellView);

        const cellAmenities = document.createElement("td");
        cellAmenities.appendChild(document.createTextNode(room.amenities));
        row.appendChild(cellAmenities);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);
});