// 1. Event Handling

// Button Click Event
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button was clicked!');
  });
  
  // Hover Effect Event
  document.getElementById('hoverButton').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'lightblue';
  });
  document.getElementById('hoverButton').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
  });
  
  // Keypress Event
  document.getElementById('keypressInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      alert('You pressed Enter!');
    }
  });
  
  // Double Click Event
  document.getElementById('clickButton').addEventListener('dblclick', function() {
    alert('You double-clicked the button!');
  });
  
  // Long Press Event
  let pressTimer;
  document.getElementById('clickButton').addEventListener('mousedown', function() {
    pressTimer = setTimeout(function() {
      alert('Long press detected!');
    }, 1000); // 1-second press
  });
  document.getElementById('clickButton').addEventListener('mouseup', function() {
    clearTimeout(pressTimer);
  });
  
  // 2. Interactive Elements
  
  // Button that changes text and color
  document.getElementById('clickButton').addEventListener('click', function() {
    this.textContent = 'You Clicked Me!';
    this.style.backgroundColor = 'green';
  });
  
  // Image Gallery
  let currentImageIndex = 0;
  const images = ['image 1.jpg', 'image 2.jpg', 'image 3.jpg'];
  
  document.getElementById('nextImage').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
  });
  
  document.getElementById('prevImage').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('galleryImage').src = images[currentImageIndex];
  });
  
  // Tabs
  document.getElementById('tab1').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'block';
    document.getElementById('content2').style.display = 'none';
  });
  
  document.getElementById('tab2').addEventListener('click', function() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'block';
  });
  
  // 3. Form Validation
  
  // Form Validation (Required Fields)
  document.getElementById('submitButton').addEventListener('click', function(event) {
    const nameField = document.getElementById('name');
    if (!nameField.value.trim()) {
      event.preventDefault();
      alert('Name is required!');
    }
  
    const emailField = document.getElementById('email');
    if (!emailField.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
      event.preventDefault();
      alert('Please enter a valid email address!');
    }
  
    const passwordField = document.getElementById('password');
    if (passwordField.value.length < 8) {
      event.preventDefault();
      alert('Password must be at least 8 characters long!');
    }
  });
  
  // Real-Time Feedback on Password
  document.getElementById('password').addEventListener('input', function() {
    const feedback = document.getElementById('passwordFeedback');
    if (this.value.length < 8) {
      feedback.textContent = 'Password too short';
      feedback.style.color = 'red';
    } else {
      feedback.textContent = 'Password is good!';
      feedback.style.color = 'green';
    }
  });
  