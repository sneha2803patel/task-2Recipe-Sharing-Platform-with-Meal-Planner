const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

// Helper function to serve files
function serveFile(res, filePath, contentType, statusCode = 200) {
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('500 Internal Server Error');
        } else {
            res.writeHead(statusCode, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    // Route handling
    if (req.url === '/' || req.url === '/index.html') {
        serveFile(res, path.join(__dirname, 'public', 'index.html'), 'text/html');
    } else if (req.url === '/style.css') {
        serveFile(res, path.join(__dirname, 'public', 'style.css'), 'text/css');
    } else if (req.url === '/script.js') {
        serveFile(res, path.join(__dirname, 'public', 'script.js'), 'application/javascript');
    } else if (['/breakfast.html', '/lunch.html', '/dinner.html', '/snack.html', '/teatime.html'].includes(req.url)) {
        serveFile(res, path.join(__dirname, 'public', req.url), 'text/html');
    } else if (req.url.startsWith('/')) {
        const filePath = path.join(__dirname, 'public', req.url);
        const ext = path.extname(filePath);
        const contentType = {
            '.jpeg': 'image/jpeg',
            '.jpg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
        }[ext] || 'application/octet-stream';
    
        serveFile(res, filePath, contentType);
    } else {
        serveFile(res, path.join(__dirname, 'public', '404.html'), 'text/html', 404);
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

// Create example files if they don't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}


// Main example files
const exampleFiles = {
    'index.html': `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home Page</title>
</head><!-- Main container -->
  <div class="home-container">
    <!-- Welcome message -->
    <div class="welcome-text">W<u>elcom</u>
      T<u>o</u>
      O<u>ur</u>
      R<u>ecipe</u>
      P<u>latform</u>
    </div>
    <!-- Search bar and button -->
    
  </div>
   <!-- Categories -->
   <nav class="navbar">
    <div class="navbar-container">
      <!-- Logo Section -->
      <div class="logo">
        
        <span class="logo-text">CookWithLove</span>
      </div>

      <!-- Menu Links -->
      <ul class="menu">
        <li><a href="breakfast.html">Breakfast</a></li>
        <li><a href="lunch.html">Lunch</a></li>
        <li><a href="dinner.html">Dinner</a></li>
        <li><a href="snack.html">Snack</a></li>
      </ul>

      <!-- Search and Auth Section -->
      <div class="search-auth">
        <!-- Search Box -->
        <div class="search-container">
          <input type="text" id="searchInput" class="search-input" placeholder="Search recipes...">
          <button class="search-button" id="searchButton">Search</button>
        </div>
       <!-- Auth Links -->
        <div class="auth-links">
          <a href="#" class="auth-link">Sign in</a>
          <a href="#" class="auth-link">Login</a>
        </div>
      </div>
    </div>
  </nav>
</section>


  <!-- Recipe Cards -->
  <section class="recipes">
    <div class="recipe-card">
      <a href="step.html">
      <img src="a3.jpg" alt="Recipe 1"></a>
      <p>Thepla</p>
    </div>
    <div class="recipe-card">
      <a href="dhosa.html">
      <img src="a2.jpg" alt="Recipe 2"></a>
      <p>   Dhosa</p>  </div>
    <div class="recipe-card">
      <a href="khandvi.html">
      <img src="d3.jpg" alt="Recipe 3"></a>
      <p>Khandvi</p>
    </div>
    <div class="recipe-card">
      <a href="khicdhi.html">
      <img src="c3.jpg" alt="Recipe 4"></a>
      <p>Khicdhi</p>
    </section>
    <br>
    <section class="recipe">
    <div class="recipe-card">
      <a href="dahi.html">
      <img src="e1.jpg" alt="Recipe 1"></a>
      <p>dahi pani-puri</p>
    </div>
    <div class="recipe-card">
      <a href="pav.html">
      <img src="e2.jpg" alt="Recipe 2"></a>
      <p>Pav Bhaji</p>
    </div>
    <div class="recipe-card">
      <a href="dahi vade.html">
      <img src="e3.jpg" alt="Recipe 3"></a>
      <p>Dahi vade</p>
    </div>
    <div class="recipe-card">
      <a href="rasmalai.html">
      <img src="e4.jpg" alt="Recipe 4"></a>
      <p>Rasmalai</p>
    </div>
  </section>
  <br>
  <h1>Breakfast Recipes</h1>
  <section class="recipes">
    <div class="recipe-card">
      <a href="aloo.html">
      <img src="a1.webp" alt="Recipe 1"></a>
      <p>Aloo Paratha</p>
    </div>
    <div class="recipe-card">
      <a href="dhosa.html">
      <img src="a2.jpg" alt="Recipe 2"></a>
      <p>   Dhosa</p>  </div>
    <div class="recipe-card">
      <a href="step.html">
      <img src="a3.jpg" alt="Recipe 3"></a>
      <p>Thepla</p>
    </div>
    
  </section>
  <h1>Lunch Recipes</h1>
  <section class="recipes">
    <div class="recipe-card">
      <a href="lemon.html">
      <img src="b1.jpg" alt="Recipe 1"></a>
      <p>Lemon Rice</p>
    </div>
    <div class="recipe-card">
      <a href="masala.html">
      <img src="b2.jpg" alt="Recipe 2"></a>
      <p>Masala Bhindi </p>
    </div>
    <div class="recipe-card">
      <a href="cadhi.html">
      <img src="b3.jpg" alt="Recipe 3"></a>
      <p>Cadhi Chawal</p>
    </div>
   
  </section>
  <h1>Dinner Recipes</h1>
    <br>
    <section class="recipes">
      <div class="recipe-card">
        <a href="daal.html">
        <img src="c1.jpg" alt="Recipe 1"></a>
        <p>Daal makhani</p>
      </div>
      <div class="recipe-card">
        <a href="palak.html">
        <img src="c2.jpg" alt="Recipe 2"></a>
        <p>Palak paneer</p>
      </div>
      <div class="recipe-card">
        <a href="khicdhi.html">
        <img src="c3.jpg" alt="Recipe 4"></a>
        <p>Khicdhi</p>
      </div>
     
    </section>
    <h1>Snack Recipes</h1>
    <section class="recipes">
      <div class="recipe-card">
        <a href="samosa.html">
        <img src="d1.jpg" alt="Recipe 1"></a>
        <p>Samosa</p>
      </div>
      <div class="recipe-card">
        <a href="puff.html">
        <img src="d2.jpg" alt="Recipe 2"></a>
        <p>puff</p>
      </div>
      <div class="recipe-card">
        <a href="khandvi.html">
        <img src="d3.jpg" alt="Recipe 3"></a>
        <p>Khandvi</p>
      </div>
      
    </section>
  <!----login----->
<section>
  <div class="container">
    <form action="/login" method="POST">
      <h2>Login</h2>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      
      <button type="submit">Login</button>
      
      <div class="form-footer">
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
        <p><a href="/forgot-password">Forgot Password?</a></p>
      </div>
    </form>
  </div>
</section>
<section>
  <img src="i.jpg" alt="Meal Planner">
 </section>
   <!-- Health Preferences Section -->
   <section class="health-preferences">
       <h2>Choose your health preference.</h2>
       <p>Choosing your health preference is an important step towards achieving a healthier lifestyle.</p>
       <div class="preferences-container">
           <button>Wheat-Free</button>
           <button>Vegetarian</button>
           <button>Vegan</button>
           <button>Tree-Nut-Free</button>
           <button>Sugar-Conscious</button>
           <button>Mediterranean</button>
           <button>Gluten-Free</button>
           <button>Fish-Free</button>
           <!-- Add more health preference buttons here -->
       </div>
   </section>
   </body>
   </html>
`,

    'style.css': `{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

/* Body Styling */
body {
  background-color: #f5f5f5;
  margin: 0;
}

/* Navbar Styling */
.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar-container{
  font-size: 20PX;
}

/* Menu Links */
.menu {
  display: flex;
  list-style: none;
}

.menu li {
  margin-right: 20px;
}

.menu a {
  text-decoration: none;
  color: #1f4b90;
  font-weight: 600;
  transition: color 0.3s;
}

.menu a:hover {
  color: #0b75d9;
}

/* Search and Auth Section */
.search-auth {
  display: flex;
  align-items: center;
}

.search-box {
  position: relative;
}



.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  pointer-events: none;
}

.auth-links {
  margin-left: 15px;
  
}

.auth-link {
  text-decoration: none;
  color: #1f4b90;
  margin-right: 10px;
  font-weight: 600;
  transition: color 0.3s;
  justify-content: space-between;
}

.auth-link:hover {
  color: #0b75d9;
}

/* Container for the page */
.home-container {
  height: 100vh; /* Full viewport height */
  background-image: url('s1.jpg'); /* Replace with your image path */
  background-size: cover; /* Image fills the entire area */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat;

  /* Center content using Flexbox */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Welcome message styling */
.welcome-text {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

/* Styling for the search container */
.search-container {
  margin-bottom: 20px;
}

/* Search input field */
.search-input {
  padding: 10px;
  font-size: 1rem;
  width: 250px;
  border-radius: 5px;
  border: none;
  margin-right: 10px;
}

/* Search button styling */
.search-button {
  background-color: #ff7f50; /* Coral button color */
  border: none;
  padding: 12px 25px;
  font-size: 1.2rem;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Search button hover effect */
.search-button:hover {
  background-color: #ff6347;
}

/* Responsive design for smaller screens */
@media (max-width: 600px) {
  .welcome-text {
    font-size: 2rem;
  }

  .search-input {
    width: 200px;
  }

  .search-button {
    font-size: 1rem;
    padding: 10px 20px;
  }
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #d8d8d8;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #ff7f50;
}
  
  .recipes {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px;
  }
  .recipe {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	padding: 20px;
  }
  .recipe-card {
	width: 200px;
	margin: 10px;
	background-color: #fff;
	border: 1px solid #ddd;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	text-align: center;
	border-radius: 7px;
	overflow: hidden;
  }
  
  .recipe-card img {
	width: 100%;
	height: 400px;
  }
  
  .recipe-card p {
	padding: 10px;
	font-weight: bold;
  }
  h2 {
    margin-bottom: 1rem;
}
.recipes-container {
    display: flex;
    gap: 1.5rem;
    overflow-x: auto;
}
.recipe-card {
    flex: 0 0 auto;
    width: 300px;
    height: 320px;
    background: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 1rem;
}
.recipe-card img {
  width: 250px;
  height: 250px;
    object-fit: cover;
    border-radius: 5px;
}
.recipe-card p {
    font-weight: bold;
    margin: 0.5rem 0;
}

.health-preferences {
    padding: 2rem;
    background-color: #fff;
    text-align: center;
}
.preferences-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
}
.preferences-container button {
    background-color: #eee;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition:  0.6s;
}
.preferences-container button:hover {
    background-color: #a0a7af;
    color: white;
}
/* General Reset */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f4f9; /* Light background color */
}

/* Center the form on the page */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f9;
}

/* Form Styling */
form {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

/* Form Heading */
form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

/* Labels */
form label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
}

/* Input Fields */
form input[type="email"],
form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease;
}

/* Input Field Focus */
form input[type="email"]:focus,
form input[type="password"]:focus {
  border-color: #a0a7af;
  outline: none;
}

/* Submit Button */
form button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

form button:hover {
  background-color: #a0a7af;
}

/* Optional: Links for Sign-up or Forgot Password */
form .form-footer {
  text-align: center;
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

form .form-footer a {
  color: #007bff;
  text-decoration: none;
}

form .form-footer a:hover {
  text-decoration: underline;
}
h1 {
        text-align: center;
        font-size: 2.5rem;
        margin-top: 20px;
        color: #2c3e50; /* Dark gray-blue color */
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    }`,

    'script.js': `console.log('Welcome to the Recipe App');`,

    '404.html': `<!DOCTYPE html>
<html lang="en">
<head><title>404 Not Found</title></head>
<body><h1>404 - Page Not Found</h1></body></html>`,
};

// Add HTML for each button
const recipePages = {
    'breakfast.html': `<h1>Breakfast Recipes</h1><p>Start your day with healthy and tasty breakfast options!</p>`,
    'lunch.html': `<h1>Lunch Recipes</h1><p>Delicious lunch ideas to keep you energized throughout the day.</p>`,
    'dinner.html': `<h1>Dinner Recipes</h1><p>End your day with a satisfying dinner.</p>`,
    'snack.html': `<h1>Snack Recipes</h1><p>Quick and easy snack ideas for anytime hunger strikes.</p>`,
    'teatime.html': `<h1>Teatime Recipes</h1><p>Perfect recipes to pair with your favorite tea.</p>`,
};

// Merge all files into public folder
const allFiles = { ...exampleFiles, ...recipePages };

for (const [fileName, content] of Object.entries(allFiles)) {
    const filePath = path.join(publicDir, fileName);
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, content);
    }
}
