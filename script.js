// -----------my info tab---------
const skills = document.getElementById('skills');
const experience = document.getElementById('experience');
const education = document.getElementById('education');
const tabLinks = document.getElementsByClassName('tab-link');
const tabContents = document.getElementsByClassName('tab-content');

function openTab(tabName) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove('active-link');
  }
  for (const tabContent of tabContents) {
    tabContent.classList.remove('active-tab');
  }
  
  event.currentTarget.classList.add('active-link');
  document.getElementById(tabName).classList.add('active-tab');
}

skills.addEventListener('click', function() {
  openTab('skills-content');
});
experience.addEventListener('click', function() {
  openTab('experience-content');
});
education.addEventListener('click', function() {
  openTab('education-content');
});

// ---------side menu---------

const sideMenu = document.getElementById('sidemenu');

function openMenu() {
  sideMenu.style.right = '0';
}

function closeMenu() {
  sideMenu.style.right = '-12.5rem';
}
// ---------form------

const scriptURL = 'https://script.google.com/macros/s/AKfycbx1YprXu_wttLvJ14wrrgclNzAS3AoSY07-49zpfO0kO0c473T9nPQ0-fGJcbS2-qvJ8Q/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('msg');

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message sent successfully";
          setTimeout(function(){
            msg.innerHTML = "";
          }, 5000);
          form.reset();
        })
        .catch(error => console.error('Error!', error.message))
    })

// ----------light/dark mode---------

const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const whiteTheme = document.getElementsByClassName('white-theme');
const lightText = document.getElementsByClassName('light-text');
const lightBackground = document.getElementsByClassName('light-back');

sun.addEventListener('click', function() {
  document.body.style.backgroundColor = '#fff';
  sun.style.display = "none";
  moon.style.display = "inline";

  for (const item of whiteTheme) {
    item.style.color = '#262626';
  }
  for (const item of lightText) {
    item.style.color = '#3b3b3b';
  }

  for (const item of lightBackground) {
    item.style.backgroundColor = '#3b3b3b';
  }

});

moon.addEventListener('click', function() {
  document.body.style.backgroundColor = '#000';
  sun.style.display = "inline";
  moon.style.display = "none";

  for (const item of whiteTheme) {
    item.style.color = '#fff';
  }

  for (const item of lightText) {
    item.style.color = '#ababab';
  }

  for (const item of lightBackground) {
    item.style.backgroundColor = '#262626';
  }
});