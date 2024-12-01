// ---------- логіка таймера
function updateTimer() {
  const now = new Date();
  const endOfDay = new Date();
  endOfDay.setHours(23, 59, 59, 999);

  const diff = endOfDay - now;

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / 1000 / 60 / 60) % 24);
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateTimer, 1000);

updateTimer();

// ---------- логіка таймера

// логіка форми

// service_uerq9aj // --- Серві ID
// template_t99vnli // template id
// eQS6CebShZKZGETRn // publick key

(function () {
  emailjs.init({
    publicKey: "eQS6CebShZKZGETRn" // BODI
    // publicKey: "_eP-bKXVm1q1Qduzr",
  });
})();

const phoneInput = document.getElementById("phoneNumber");
phoneInput.addEventListener("focus", () => {
  if (!phoneInput.value) {
    phoneInput.value = "+380";
  }
});
phoneInput.addEventListener("blur", () => {
  if (phoneInput.value === "+380") {
    phoneInput.value = "";
  }
});

const buyerForm = document.forms.buyerForm;

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");

buyerForm.addEventListener("submit", function (e) {
  nameError.innerText = "";
  phoneError.innerText = "";
  emailError.innerText = "";
  e.preventDefault();

  let validateUserName = () => {
    if (buyerForm.userName.value == "") {
      nameError.innerText = "Це поле є обовязковим!";
      return false;
    }
    if (buyerForm.userName.value.length > 35) {
      nameError.innerText = "Максимальна кількість символів 35";
      return false;
    }
    return true;
  };

  let validatePhoneNumber = () => {
    if (buyerForm.phoneNumber.value == "") {
      phoneError.innerText = "Це поле є обовязковим!";
      return false;
    }
    if (buyerForm.phoneNumber.value.length != 13) {
      phoneError.innerText = "Неправильний формат номеру";
      return false;
    }
    return true;
  };
  let validateEmail = (e) => {
    let pattern = /^[a-zA-Z._0-9][a-zA-z._0-9]+@[a-z0-9]{3,20}\.[a-z]{2,4}$/
    if (!pattern.test(buyerForm.email.value)) {
      if(buyerForm.email.value == "") {
        emailError.innerText = "Ви не ввели email"
        return false
      }
      emailError.innerText = "Неправильно введений email"
      return false
    } 
    return true
  }

  if (!validateUserName() || !validatePhoneNumber() || !validateEmail()) return false;
  
  const formData = {
    userName: document.getElementById("userName").value,
    phoneNumber: document.getElementById("phoneNumber").value,
    email: document.getElementById("email").value,
    nickTG: document.getElementById("nickTG").value || "Не вказано",
  };

  emailjs.send('service_uerq9aj', 'template_t99vnli', formData).then( // BODI
  // emailjs.send("service_jy4vky7", "template_xtf1sse", formData).then(
    function (response) {
      console.log("Успіх:", response);
      const successMessage = document.getElementById("successMessage");
      successMessage.style.transform = "translateX(0px)";

      setTimeout(() => {
        successMessage.style.transform = "translateX(-350px)"
      }, 5000);
      e.target.reset()
    },
    function (error) {
      console.log("Помилка:", error);
      alert("Сталася помилка при відправці листа. Спробуйте ще раз.");
    }
  );
});

// логіка форми

// анімація при скролі
const blocks = document.querySelectorAll('.section-block');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < window.innerHeight && // Верхній край у межах вікна
    rect.bottom > 0                 // Нижній край у межах вікна
  );
}

function checkVisibility() {
  blocks.forEach(block => {
    if (isInViewport(block)) {
      block.classList.add('visible');
      block.classList.remove('hidden');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();
// анімація при скролі