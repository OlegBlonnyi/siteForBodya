document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = {
      userName: document.getElementById('userName').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      email: document.getElementById('email').value,
      nickTG: document.getElementById('nickTG').value
  };

  // Створюємо запит для GitHub API
  try {
      const response = await fetch('https://api.github.com/repos/OlegBlonnyi/Testing-DB/contents/data.json', {
          method: 'PUT',
          headers: {
              'Authorization': `Bearer DB_FOR_USERS`, // заміни на свій токен
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              message: 'Додано новий запис даних',
              content: btoa(JSON.stringify(formData, null, 2)) // кодуємо дані у base64
          })
      });
      if (response.ok) {
          alert("Дані успішно відправлені");
      } else {
          alert("Помилка під час відправки даних");
      }
  } catch (error) {
      console.error("Error:", error);
      alert("Помилка з'єднання");
  }
});
