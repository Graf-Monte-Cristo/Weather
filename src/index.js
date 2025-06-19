import './styles/styles.scss';

const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(form);
  const place    = formData.get('place').trim(); // получаем значение
  getWeather(place);                             // передаём как аргумент
});

async function getWeather(place) {
  const key = 'HLQFELSXZUXPQZD6TR7TVDEVV';
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(place)}?key=${key}`;

  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`);
    }
    const data = await response.json();      // ждём парсинга JSON
    console.log(data);                       // выводим уже объект ответа
    // здесь можно рендерить погоду на странице
  } catch (err) {
    console.error("Ошибка запроса погоды:", err);
  }
}
