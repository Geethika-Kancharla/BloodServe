# BloodServe

BloodServe is a web-based application designed to streamline the process of managing blood donors and their registrations. 

---

## Demo Video

[https://github.com/Geethika-Kancharla/BloodServe/issues/1#issue-2938155317](https://github.com/user-attachments/assets/fec2a68d-93f9-48ee-a0c3-a3deab11a106)

---

## 🌐 Try It Here

👉 **[Click the link to try out BloodServe live!](https://blood-serve.vercel.app/)**  

---

## 🚀 Features

✅ **Donor Registration:** Donors can easily register by providing necessary information, including name, contact details, and blood group.

✅ **CRUD Operations:** Authorized personnel can add, update, and delete donor records, ensuring that the information is always up-to-date.

✅ **Blood Group Filtering:** Hospitals, blood banks, and other organizations can quickly filter and find suitable donors based on blood group, making it easier to meet emergency and regular blood requirements.

✅ **Email Notifications:** The system allows sending emails to donors based on their blood group, facilitating urgent blood donation requests.

✅ **Secure Access:** Privacy and security of donor information are prioritized, with access restricted to authorized users only.

✅ **Dockerized Deployment:** The application is fully containerized using Docker, making it easy to deploy and manage across different environments.

---

## 🛠️ Tech Stack

### **Frontend**
-  React – A powerful JavaScript library for building user interfaces.
-  Tailwind CSS – A utility-first CSS framework for quickly designing custom UI components.

### **Backend**
-  Java Spring Boot – A framework for building robust and scalable Java applications.

### **Database**  
-  PostgreSQL – A powerful, open-source relational database for storing and managing donor information.

### Deployment & DevOps  

- Dockerized with **GitHub Actions** automating CI/CD—publishing images to **DockerHub** on each push event.  
- Frontend deployed on **Vercel**, backend on **Render** for seamless scalability. 

---


## 🐳 Docker Setup

To run the application using Docker:

1. Navigate to the project root directory.
2. Build and start the containers:
   ```sh
   docker-compose up --build
   ```
3. The application should now be accessible at **http://localhost:3000** (frontend) and **http://localhost:8080** (backend).

---

## 📜 License
This project is licensed under the **MIT License**. See the [LICENSE](path/to/license-file) file for details.

---
