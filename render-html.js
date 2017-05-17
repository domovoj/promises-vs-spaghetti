function renderHtml(listPhones) {
    let template = listPhones.map(phone => `<tr><td>${phone.id}</td><td>${phone.name}</td><td>${phone.age}</td><td>${phone.snippet}</td><td><img src="${phone.image}" alt="${phone.name}" width="50"></td></tr>`);

    document.getElementById('phones').innerHTML = template.join('');
}