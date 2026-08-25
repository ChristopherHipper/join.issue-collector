# 📋 Join

A collaborative Kanban project management application built with **HTML**, **CSS**, and **JavaScript**. Developed by a team of three developers, Join helps users organize tasks efficiently using a drag-and-drop workflow. User data and tasks are stored in **Firebase**, providing a simple backend for authentication and data management.

Join has been extended with an AI-powered task creation workflow using n8n. Stakeholders can now create tasks simply by sending an email. The email is processed automatically by an n8n workflow, where AI analyzes the content and converts it into a structured task that is added to the Kanban board.

> **⚠️ Note:** This project is intended for demonstration and learning purposes only. Authentication is not production-ready, so **please do not use real email addresses or passwords**.

## ✨ Features

- 🔐 Register and log in with an account
- 📊 Dashboard with task summary and urgency overview
- ✅ Create, edit, and manage tasks
- 🗂️ Kanban board with drag-and-drop functionality
- 📝 Open and edit tasks directly from the board
- 👥 Create and manage contacts
- ☁️ Firebase backend for storing users, contacts, and tasks
- 🤖 AI-powered task creation from emails
- 📧 Create tasks by sending an email through the Stakeholder interface
- ⚙️ Automated n8n workflows for processing incoming task requests
- 🧠 AI-based extraction and structuring of task information from emails
- 🔄 AI-generated tasks are displayed alongside regular tasks on the Kanban board
- 📬 Automatic email notifications to the task creator when the task status changes
- 🤝 Developed collaboratively by a team of three developers

## 🛠️ Tech Stack

- **HTML5** – Application structure
- **CSS3** – Responsive styling and layouts
- **JavaScript (ES6)** – Application logic
- **Firebase** – Backend, authentication, and data storage
- **npm** – Project dependencies and development features
- **n8n** – Workflow automation and integration
- **AI** – AI – Analyzes incoming emails and converts their content int

## 🤖 AI & n8n Task Automation

One of Join's key extensions is an automated workflow that allows **stakeholders to create tasks without directly accessing the Kanban application**.

The workflow connects the stakeholder's email with Join through **n8n** and AI.

### 🔄 How it works

1. 📧 A stakeholder sends an email containing a task request.
2. ⚡ The incoming email triggers an **n8n workflow**.
3. 🧠 AI analyzes the email and extracts the relevant task information.
4. 📝 The AI converts the unstructured email into a structured Join task.
5. ☁️ The task is stored in **Firebase**.
6. 📊 The generated task appears on the Join Kanban board alongside manually created tasks.
7. 🔄 When the task status changes on the board, **n8n automatically sends an email notification to the original creator**.

This creates an automated communication flow between stakeholders and the development/project team without requiring stakeholders to log into Join.

## 🚀 Getting Started

```bash
# Clone the repository
git clone git@github.com:ChristopherHipper/join.issue-collector.git

# Open the project folder
cd join

# Install dependencies
npm install
```

After installing the dependencies, start the project using your preferred local development server (for example, VS Code Live Server).

## 📌 Main Sections

- **Login / Register** – User authentication
- **Summary** – Overview of all tasks and urgent items
- **Add Task** – Create new tasks with priorities and assignees
- **Board** – Manage tasks with drag-and-drop
- **Contacts** – Create and edit contacts
- **Stakeholder Interface** – Entry point for external task requests
- **AI Task Automation** – Convert stakeholder emails into structured tasks
- **Status Notifications** – Automatically inform task creators about status changes

## ⚠️ Disclaimer

This project was created for educational purposes and is **not intended for production use**. Authentication and data validation are simplified. Please use **example email addresses and passwords only**.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License.
