// Виконується після завантаження сторінки
window.addEventListener('load', function() {
    // Отримуємо поточну дату та час
    var currentDate = new Date();
    
    // Вказуємо дату народження
    var birthDate = new Date("2005-10-27");
    
    // Визначаємо вік на основі років
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    // Створюємо дату народження в поточному році
    var birthDateThisYear = new Date(currentDate.getFullYear(), birthDate.getMonth(), birthDate.getDate());

    // Перевіряємо, чи настав або минув день народження у поточному році
    if (currentDate < birthDateThisYear) {
        age--; // Зменшуємо вік, якщо день народження ще не настав у поточному році
    }

    // Вставляємо обчислений вік у відповідний елемент на сторінці
    document.getElementById("age").textContent = age;
});
