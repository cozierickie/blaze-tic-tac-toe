
# Blaze Tic-Tac-Toe Project

## Setting Up React.js with Tailwind CSS using Vite

Follow these steps to set up a React.js project with Tailwind CSS using Vite for bundling. The process covers both Linux and Windows OS.

### 1. **Install Node.js and npm (if you haven't already):**
   - **For Linux:** Open your terminal and run:
     ```
     sudo apt update
     sudo apt install nodejs npm
     ```
   - **For Windows:** Download and install Node.js from [nodejs.org](https://nodejs.org). The installer includes npm.

### 2. **Ensure Git is Installed:**
   - **For Linux:** Run:
     ```
     sudo apt update
     sudo apt install git
     ```
   - **For Windows:** Download and install Git from [git-scm.com](https://git-scm.com).

### 3. **Verify Installations:**
   - Check Node.js and npm:
     ```
     node -v
     npm -v
     ```
   - Check Git:
     ```
     git --version
     ```

### 4. **Clone the Repository:**
   - Clone the Git repository where the project files are hosted:
     ```
     git clone https://< your-github-token >github.com/blaze-alx/blaze-tic-tac-toe.git
     cd blaze-tic-tac-toe
     ```

### 5. **Navigate to the Project Directory:**
   - Make sure you’re in the right directory where the `package.json` file is located:
     ```
     cd frontend
     ```

### 6. **Install Project Dependencies:**
   - Run:
     ```
     npm install
     ```

### 7. **Check `.gitignore`:**
   - Ensure the `.gitignore` file is set up properly to exclude `node_modules` and other unnecessary files.

### 8. **Confirm Configuration Files:**
   - Make sure that `tailwind.config.js`, `postcss.config.js`, `vite.config.js`, and other config files are present and correctly set up.

### Once you’ve completed these steps, you can start the development server by running:
   - Run:
     ```
     npm run dev
     ```
##### This will start the Vite development server, and it will provide a local URL (e.g., `http://localhost:5173`) where you can view your app.

