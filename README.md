🚨 Complaint Management System

A simple full-stack web application that allows users to submit complaints which are stored in MongoDB. It features a frontend built with HTML and Bootstrap, and a backend using Node.js, Express.js, and Mongoose.


---

🛠 Technologies Used

Frontend: HTML, CSS, Bootstrap

Backend: Node.js, Express.js

Database: MongoDB using Mongoose



---

📁 Project Structure

complaint-management-system/  
├── models/  
│   └── Complaint.js  
├── public/  
│     └── index.html,└── view.html   
├── server.js 
├── package.json  
└── README.md
├── server.js 


---

🚀 How to Run This Project

🔹 Step 1: Clone the Repository

git clone https://github.com/Kummaricharitha15/complaint-management-system.git  
cd complaint-management-system

🔹 Step 2: Install Dependencies

Make sure Node.js and npm are installed.

npm install

🔹 Step 3: Install MongoDB

Download MongoDB Community version: https://www.mongodb.com/try/download/community

During installation:

✅ Check "Install MongoDB as a Service"

✅ Check "Add MongoDB to PATH"


After installation, open MongoDB Compass or run mongod in terminal.


🔹 Step 4: Run the Server

node server.js

Output:

MongoDB connected  
Server running at http://localhost:3000

🔹 Step 5: Open in Browser

Visit: http://localhost:3000

Submit your complaint using the form.

🔹 Step 6: View Complaints (API Endpoint)

Go to: http://localhost:3000/complaints


---

✨ Features

📩 Complaint submission form with Name, Email, and Message

🗃 Complaints stored securely in MongoDB

🔍 REST API to fetch complaints

🎨 Clean responsive frontend using Bootstrap



---

👩‍💻 Author

Charitha Kummari
🔗 GitHub


---

📜 License

This project is licensed under the MIT License



