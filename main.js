document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
  
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Bosh sahifaga yo'naltirishni oldini olamiz
  
      // Foydalanuvchi kiritilgan ma'lumotlarni olish
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Foydalanuvchini bosh sahifaga yo'naltirish
      window.location.href = "./index.html"; // Bosh sahifa URL'siga qaytish

      alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
    });
  });
  