function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target.form;
    const imie = form.elements['Imie'].value;
    const nazwisko = form.elements['nazwisko'].value;
    const telefon = form.elements['telefon'].value;
    const mail = form.elements['mail'].value;
    const dni = form.elements['dni'].value;
    const osoby = form.elements['osoby'].value;
    const rodzajpokoju = form.elements['rodzajpokoju'].value;
    const dataprzyjazdu = form.elements['dataprzyjazdu'].value;
    const datawyjazdu = form.elements['datawyjazdu'].value;

    const additionalServices = Array.from(form.querySelectorAll('input[name="zainteresowania"]:checked'))
        .map(el => el.nextElementSibling.textContent.trim())
        .join(', ');
    const dziecko = form.elements['dziecko'].value;
    const pietro = form.elements['pietro'].value;
    const zyczenia = form.elements['zyczenia'].value;

    const emailSubject = `Rezerwacja od ${imie} ${nazwisko}`;
    const emailBody = `
        Imię: ${imie}
        Nazwisko: ${nazwisko}
        Telefon: ${telefon}
        Mail: ${mail}
        Ilość dób: ${dni}
        Ilość osób: ${osoby}
        Rodzaj pokoju: ${rodzajpokoju}
        Data przyjazdu: ${dataprzyjazdu}
        Data wyjazdu: ${datawyjazdu}
        Dodatkowe usługi: ${additionalServices}
        Podróż z dzieckiem: ${dziecko}
        Preferowane piętro: ${pietro}
        Specjalne życzenia: ${zyczenia}
    `;

    window.location.href = `mailto:natalialapot03@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;}