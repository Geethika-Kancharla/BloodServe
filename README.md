# BloodServe

BloodServe is a web-based application designed to streamline the process of managing blood donors and their registrations. Built with **Java Spring Boot** for the backend and **React** with **Tailwind CSS** for the frontend, this system provides a robust platform for efficiently handling donor information and facilitating blood donation processes.

## Features

- **Donor Registration:** Donors can easily register by providing necessary information, including name, contact details, and blood group.
- **CRUD Operations:** The system allows authorized personnel to add, update, and delete donor records, ensuring that the information is always up-to-date.
- **Blood Group Filtering:** Hospitals, blood banks, and other organizations can quickly filter and find suitable donors based on blood group, making it easier to meet emergency and regular blood requirements.
- **Secure Access:** The system prioritizes the privacy and security of donor information, with access restricted to authorized users only.

## Tech Stack

### Frontend
- **React:** A powerful JavaScript library for building user interfaces.
- **Tailwind CSS:** A utility-first CSS framework for quickly designing custom UI components.

### Backend
- **Java Spring Boot:** A framework for building robust and scalable Java applications.
- **MySQL:** A reliable relational database for storing and managing donor information.

## Installation

To run this application locally, follow these steps:

### Prerequisites

- **Java 17** or later
- **Node.js** (for running the React frontend)
- Java Development Kit (JDK) installed.
- MySQL installed and running.

### Backend Setup

1. Clone the repository:
   ```bash
   
   git clone https://github.com/Geethika-Kancharla/BloodServe.git

2. Navigate to the backend directory:
   ```bash
   
   cd Backend

3. Update the application.properties file with your MySQL credentials
   ```bash
   
   spring.datasource.url=jdbc:mysql://localhost:3306/your-database-name
   spring.datasource.username=your-username
   spring.datasource.password=your-password
   spring.mail.username=your-email@gmail.com
   spring.mail.password=your-app-password
   
4. Run the Spring Boot application:
   ```bash
   
   mvn spring-boot:run

### Frontend Setup
 
1. Navigate to the frontend directory:
   ```bash
   
   cd frontend

2. Install the required dependencies:
   ```bash
   
   npm install
   
3. Start the React development server:
   ```bash
   
   npm start

The application should now be running locally. Access the frontend at [http://localhost:3000](http://localhost:3000) and the backend API at [http://localhost:8080](http://localhost:8080).

## Usage

- **Register Donors**: Donors can use the registration form to provide their details.
- **Manage Donor Records**: Authorized personnel can log in to the system to manage donor records, including adding, updating, and deleting information.
- **Filter by Blood Group**: Use the filter functionality to find donors based on blood group criteria.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

  
