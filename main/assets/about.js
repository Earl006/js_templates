function createAboutUsSection() {
    const aboutUsSection = document.createElement('section');
    aboutUsSection.classList.add('about-us');
    aboutUsSection.id = 'about';
    
    const heading = document.createElement('h2');
    heading.textContent = 'About Us';
  
    const contentParagraph = document.createElement('p');
    contentParagraph.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  
    aboutUsSection.appendChild(heading);
    aboutUsSection.appendChild(contentParagraph);
  
    return aboutUsSection;
  }
  
  document.body.appendChild(createAboutUsSection());
  