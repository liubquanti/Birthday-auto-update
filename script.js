window.addEventListener('load', function() {
    var currentDate = new Date();
    var birthDate = new Date("2005-10-27");
    var timeDiff = currentDate - birthDate;
    var age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
    document.getElementById("age").textContent = age;
});
