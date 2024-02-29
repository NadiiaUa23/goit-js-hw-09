// Чекаємо щоб вся структура сторінки буде завантажена. 
//Событие DOMContentLoaded запускается когда первоначальный HTML документ 
//будет полностью загружен и разобран, без ожидания полной загрузки таблиц стилей, изображений и фреймов.

document.addEventListener("DOMContentLoaded", () => {
  
    const form = document.querySelector('.feedback-form');
  
    // Функція для ЗБЕРЕЖЕННЯ стану форми в локальне сховище.
    const saveFormState = () => {
      //  formData зі значеннями полів email і message форми. значение без пробелов.
      const formData = {
        email: form.email.value.trim(), // Отримуємо значення поля email.
        message: form.message.value.trim() // Отримуємо значення поля message.

//Метод trim() возвращает строку с вырезанными пробельными символами с её концов.
// Метод trim() не изменяет значение самой строки.
      };

      // Зберігаємо(.setItem) об'єкт formData у локальному сховищі під ключем 'feedback-form-state'. JSON. stringify() преобразует значение в представляющую его нотацию JSON 
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    };
  
    // Функція дляЗАВАНТАЖЕННЯ стану форми з локального сховища.
    const loadFormState = () => {
      // Отримуємо (.getItem ) збережений стан форми з локального сховища.
      const savedState = localStorage.getItem('feedback-form-state');
      // Перевіряємо, чи є збережений стан.
      if (savedState) {
        // Розпаковуємо збережений об'єкт formData з формату JSON.parse()- метод конвертирует строку в формате JSON обратно в объект JavaScript
        const formData = JSON.parse(savedState);
        // Заповнюємо поля форми зі значеннями збереженого стану.
        form.email.value = formData.email; 
        form.message.value = formData.message; 
      }
    };
  
    // Викликаємо функцію для завантаження стану форми при першому завантаженні сторінки.
    loadFormState();
  
    // СЛУХАЧА  на input на формі для збереження стану форми при введенні даних.
    form.addEventListener('input', saveFormState);
  
    // Обробляємо подію submit на формі.
    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Відмінюємо стандартну поведінку форми.
  
      // Отримуємо значення полів email та message і видаляємо зайві пробіли з країв.
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      // Перевіряємо, чи заповнені обидва поля форми.
      if (email && message) {
        // Якщо так, виводимо об'єкт з email та message в консоль.
        console.log({ email, message });
        // Видаляємо збережений стан форми з локального сховища.
        localStorage.removeItem('feedback-form-state');
        // Очищуємо поля форми.
        form.reset();
      } else {
        // Якщо якесь з полів не заповнене, показуємо сповіщення.
        alert('Please fill out all fields!');
      }
    });
  });
  