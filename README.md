<h1 align="center"><b>Muhammad Selim</b></h1>
<div align="center">
  <img alt="Logo" src="public/images/favicon.svg" width="100" />
</div>
<p align="center">
    The second iteration of my personal website uisng JavaScript, Tailwind CSS, Node.js, and Express.js
</p>
<p align="center">
    Previous iteration: <a href="https://github.com/Mu-selim/v1">v1</a>
</p>
<div align="center">
  <img alt="preview" src="public/images/preview.png" />
</div>

# **Documentation and Licence**
* <a href="#forkingNotes">Important forking notes.</a>
* <a href="#setup">Installation & Set Up.</a>
* <a href="#structure">Directory Structure.</a>


<h2 id="forkingNotes"><b>🚨 Forking this repo (please read!)</b></h2>

if you are asking to use my code for your application, my answer to that question is usually yes, **with attribution**.

I am keeping my code open source, but as you all know, ***plagiarism is bad***. it is a bad thing to find your code in anothor project without giving me ***credit***.  so All I ask of you all is to not claim this effort as your own.

Finally, you can fork this repo and give me credit [Muhammad Selim](https://www.linkedin.com/in/selimjs).


<h2 id="setup"><b>🛠 Installation & Set Up</b></h2>

1. Install [**Node.js**](https://nodejs.org/en/).
2. Initialize package.json
   ```bash
   npm init
   ```
3. Install Tailwind CSS
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```
4. Configure your template paths
   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
     extend: {},
   },
   plugins: [],
   }
   ```
4. Install Node packages
   ```bash
   npm install express ejs body-parser fs path nodemon
   ```
5. Configure your build process
   ```js
   // package.json
   "scripts": {
     "build": "tailwindcss build src/input.css -o dist/output.css"
   }
   ```



<h2 id="structure"><b>Directory Structure</b></h2>

```bash
Root
|--- node_modules
|--- public
|--- |--- fonts
|--- |--- images
|--- |--- scripts
|--- |--- styles
|--- routes
|--- |--- index.js
|--- |--- database
|--- |--- |--- index.json
|--- |--- user
|--- |--- |--- index.js
|--- |--- |--- APIs
|--- views
|--- |--- index.ejs
|--- |--- 404.ejs
|--- server.js
|--- package.json
|--- tailwind.config.js
|--- README.md
```