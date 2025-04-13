// Dummy authentication using localStorage (not secure - for demo only)

function register() {
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
  
    if (username && password) {
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("Registration successful! Please log in.");
      window.location.href = "login.html";
    } else {
      alert("Please fill in all fields.");
    }
  }
  
  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert("Login successful!");
      window.location.href = "index.html";
    } else {
      alert("Invalid credentials.");
    }
  }
  
  function logout() {
    alert("You have been logged out.");
    window.location.href = "login.html";
  }
  
  function enroll(courseName) {
    alert(`You have enrolled in ${courseName}!`);
  }
  function toggleMenu() {
    const menu = document.getElementById('moreMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  function logout() {
    alert("You have been logged out.");
    // Redirect to login page or clear session if needed
    window.location.href = "login.html";
  }
  
  // Optional: Close menu if clicking outside
  document.addEventListener('click', function(event) {
    const isClickInside = document.querySelector('.more-options').contains(event.target);
    if (!isClickInside) {
      document.getElementById('moreMenu').style.display = 'none';
    }
  });
    