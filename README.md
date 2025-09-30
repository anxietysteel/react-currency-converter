# 💱 React Currency Converter

[![GitHub Pages](https://img.shields.io/badge/demo-online-green)](https://anxietysteel.github.io/react-currency-converter/)

Простой и удобный конвертер валют на **React + Vite** с использованием TailwindCSS.  
Получает актуальные курсы валют через внешнее API и позволяет быстро пересчитать сумму из одной валюты в другую.

---

## 🚀 Возможности
- Конвертация валют в реальном времени через API.  
- Поддержка популярных валют (USD, EUR, RUB, UZS и др.).  
- Красивый и адаптивный интерфейс (TailwindCSS, grid + flex).  
- Автоматический деплой на **GitHub Pages**.

---

## 🛠️ Технологии
- [React 19](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [gh-pages](https://www.npmjs.com/package/gh-pages)  

---

## 📦 Установка и запуск локально
Клонируй репозиторий и установи зависимости:

```bash
git clone https://github.com/anxietysteel/react-currency-converter.git
cd react-currency-converter
npm install

---

## Запуск dev-сервера:

`npm run dev`

---

## Сборка проекта:

`npm run build`

---

## 📸 Скриншоты

(сюда можно вставить скриншот приложения, например screenshot.png)

---

## 📂 Структура проекта
src/
 ├── components/
 │   ├── App.jsx         # Заголовок и описание
 │   ├── Form.jsx        # Форма с вводом суммы и выбором валют
 │   ├── Select.jsx      # Компонент для выпадающих списков валют
 │   └── Wrapper.jsx     # Обёртка для контента
 ├── assets/
 │   └── images/minBg.jpg # Фоновое изображение
 ├── main.jsx            # Точка входа React
 ├── index.css           # Tailwind + стили
 └── index.html          # HTML-шаблон

 ## 📜 Лицензия

MIT License. Свободно для использования и модификации.
