
# Blaze Tic-Tac-Toe Project

## Setting Up React.js with Tailwind CSS using Vite

Follow these steps to set up a React.js project with Tailwind CSS using Vite for bundling. The process covers both Linux and Windows OS.

### 1. Installing Vite and Creating a React Project

**On Linux and Windows:**

1. **Install Node.js and npm (if you haven't already):**

   - **Linux:** Open your terminal and run:
     ```bash
     sudo apt update
     sudo apt install nodejs npm
     ```

   - **Windows:** Download and install Node.js from [nodejs.org](https://nodejs.org). The installer includes npm.

2. **Create a new Vite project:**

   Open a terminal and run:
   ```bash
   npm create vite@latest blaze-tic-tac-toe
   ```

    You'll be prompted to choose a framework. Select **React**.
    Then, you’ll be prompted to select a variant. Choose **JavaScript + SWC**.

    Navigate to your project directory:

    ```bash
    cd blaze-tic-tac-toe
    ```

    Install project dependencies:
    ```bash
    npm install
    ```

## 2. Setting Up Tailwind CSS

**Install Tailwind CSS:**

**In your project directory, run:**

```bash
    npm install -D tailwindcss postcss autoprefixer
```
**Initialize Tailwind CSS:**

Run the following command to create the configuration files:

```bash
    npx tailwindcss init -p
```
This will create `tailwind.config.js` and `postcss.config.js` in your project root.

**Configure `tailwind.config.js`:**

Update the content section in `tailwind.config.js` to include your project files:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
**Add Tailwind directives to your CSS:**

Open `src/index.css` and add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## 3. Running the Vite Development Server

**Start the development server:**

```bash
    npm run dev
```

This will start the Vite development server, and it will provide a local URL (e.g., `http://localhost:5173`) where you can view your app.

*NOTE:* It is recommended to update your npm to version 10.8.2 and ensure that your node version is v18.20.4 or above. Always go for the stable versions.
