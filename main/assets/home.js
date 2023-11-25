
function createHomeSection() {
  const homeSection = document.createElement('section');
  homeSection.classList.add('home-section');
  homeSection.id = 'home';
  
  const heading = document.createElement('h2');
  heading.textContent = 'Welcome to Our Website';

  const loremIpsumParagraph = document.createElement('p');
  loremIpsumParagraph.textContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  homeSection.appendChild(heading);
  homeSection.appendChild(loremIpsumParagraph);

  return homeSection;
}

document.body.appendChild(createHomeSection());


