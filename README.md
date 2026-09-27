# 👤 User Profile Card Generator

A form-based web application that allows users to create dynamic profile cards by entering their personal information, bio, skills, social links, and profile image.

The application processes form data on the Node.js server, generates a dynamic HTML profile card, and stores profile records in MongoDB.

## 🚀 Features

* User profile creation form
* Name and bio input
* Multiple skills support
* GitHub and LinkedIn social links
* Profile avatar/image support
* Server-side form processing
* Dynamic HTML profile card generation
* MongoDB database storage
* Responsive and clean user interface
* Express.js backend

## 🛠️ Technologies Used

* HTML5
* CSS3
* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon
* dotenv

## 📂 Project Structure

```text
user-profile-card-generator/
│
├── models/
│   └── Profile.js
│
├── public/
│   ├── index.html
│   └── style.css
│
├── views/
│   └── profile.html
│
├── server.js
├── package.json
├── package-lock.json
├── .env
└── .gitignore
```

> **Note:** `.env` should not be uploaded to GitHub because it contains database credentials.

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/user-profile-card-generator.git
```

### 2. Open the project

```bash
cd user-profile-card-generator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Replace `your_mongodb_connection_string` with your MongoDB connection string.

## ▶️ Run the Project

For development mode:

```bash
npm run dev
```

Or:

```bash
npm start
```

The server will run at:

```text
http://localhost:5000
```

## 📝 How It Works

1. User opens the application.
2. User enters name, bio, skills, social links, and avatar URL.
3. Form data is sent to the Express.js server.
4. The server processes and formats the submitted information.
5. Skills are converted into individual skill badges.
6. A dynamic profile card is generated.
7. Profile information is stored in MongoDB.

## 🗄️ Database

The application uses MongoDB to store profile records.

Each profile contains:

* Name
* Bio
* Skills
* GitHub URL
* LinkedIn URL
* Avatar URL
* Creation timestamp

## 🔐 Environment Variables

The following variables are required:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Never upload `.env` to a public GitHub repository.

## 🎯 Assignment Objective

This project demonstrates:

* Server-side form processing
* Node.js and Express.js
* String manipulation
* Dynamic HTML rendering
* Database integration
* MongoDB data storage
* Basic web application development

## 👨‍💻 Author

**Ayush Singh**

B.Tech Computer Science Engineering Student

## 📄 License

This project is created for learning and educational purposes.
