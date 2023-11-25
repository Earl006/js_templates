
function createHeader() {
  const header = document.createElement('header');
  header.classList.add('header');

  const logoContainer = createLogo();
  header.appendChild(logoContainer);

  const navContainer = createNav();
  header.appendChild(navContainer);

  return header;
}

function createLogo() {
  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo');

  const logoImg = document.createElement('img');
  logoImg.src = 'https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png';
  logoImg.alt = 'Logo Image';

  logoContainer.appendChild(logoImg);

  return logoContainer;
}

function createNav() {
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav');

  const navList = document.createElement('nav');
  const ul = document.createElement('ul');

  const links = ['Home', 'About', 'Team', 'Contact'];

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `pages/${link.toLowerCase()}.html`;
    a.textContent = link;
    a.target = '_blank';

    li.appendChild(a);
    ul.appendChild(li);
  });

  navList.appendChild(ul);
  navContainer.appendChild(navList);

  return navContainer;
}

// document.addEventListener('DOMContentLoaded', function () {
//     const navLinks = document.querySelectorAll('.nav a');
  
//     navLinks.forEach(function (links) {
//       links.addEventListener('click', function (event) {
//         event.preventDefault();
  
//         const targetPage = links.getAttribute('href');
  
//         window.open(targetPage, '_blank');
//       });
//     });
//   });
  
document.body.appendChild(createHeader());
const styles = `
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 10px;
  }

  .logo {
    display: flex;
    align-items: center;
    text-align: left;
  }

  .logo img {
    height: 100px;
    width: 100px;
  }

  .nav ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav ul li {
    color: #fff;
    display: inline;
    margin-right: 20px;
  }
`;

const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);
