# Car Sales Website

## Project Description

This project is a car sales website developed for the CSCI426 Advanced Web Programming course at the Lebanese International University.

The website allows users to browse different cars, view their information, and add cars to their favorites. It also includes information about the dealership and a contact page.

The project is developed using React and CSS. This first phase focuses on the frontend design, navigation, responsiveness, and basic functionality.

## Features

- Browse available cars with images and details
- View car information such as type, model, year, horsepower, and price
- Add cars to favorites
- Remove cars from favorites
- Save favorites using localStorage
- Add to Cart button with a confirmation message
- Contact form with basic validation
- Responsive design for desktop and mobile

## Website Pages

The website contains five pages:

1. **Home:** Introduces the dealership and its services.
2. **Store:** Displays available cars with their specifications and prices.
3. **Favorites:** Displays the cars saved by the user and allows removing them.
4. **About:** Provides information about the dealership.
5. **Contact:** Allows visitors to enter their name, email, and message.

## Technologies Used

- React
- JavaScript
- HTML
- CSS
- React Router
- Vite
- localStorage
- Git and GitHub

## Installation

To run the project locally, follow these steps.

### 1. Clone the repository

```bash
git clone https://github.com/CharbelAlKhawand/CSCI426_WebAdv.git
```

### 2. Open the project folder

```bash
cd CSCI426_WebAdv
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the project

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

## Project Structure

```text
src/
├── app/
│   ├── Home.jsx
│   ├── Store.jsx
│   ├── Favorites.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── Cards.jsx
├── App.jsx
├── App.css
└── main.jsx
```

Each page and component has its own CSS file where needed.

## Group Members

- Charbel Al Khawand
- Charbel Jobran

## Course Information

**Course:** CSCI426 Advanced Web Programming

**University:** Lebanese International University

**Project:** Phase 1
