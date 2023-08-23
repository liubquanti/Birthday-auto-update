function calculateAge() {
    const birthdateInput = document.getElementById("birthdate");
    const resultElement = document.getElementById("result");

    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    const years = currentDate.getFullYear() - birthdate.getFullYear();
    const months = currentDate.getMonth() - birthdate.getMonth();
    const days = currentDate.getDate() - birthdate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
    }

    resultElement.textContent = `Вік: ${years} років`;
}
