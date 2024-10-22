// Function to open modal
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
  }
  
  // Function to close modal
  function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
  }
  
  // Close modal if clicked outside of the modal content
  window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.display = "none";
      }
    }
  }

  function openFullScreenGif() {
    const newWindow = window.open("", "_blank");
  
    newWindow.document.write(`
      <html>
        <head>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              background-color: black;
              color: white;
              font-family: Arial, sans-serif;
            }
            img {
              max-width: 100%;
              max-height: 90%;
            }
            p {
              margin-top: 10px;
              font-size: 18px;
            }
          </style>
        </head>
        <body>
          <img src="images/cat_kiss.gif" alt="Full Screen GIF">
          <p>Well, kiss from kitty for you. Have a nice day!</p>
        </body>
      </html>
    `);
  }
  
