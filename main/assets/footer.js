
function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerContent = createFooterContent();
  footer.appendChild(footerContent);

  return footer;
}

function createFooterContent() {
  const footerContent = document.createElement('div');
  footerContent.classList.add('footer-content');

  const heading = document.createElement('h3');
  heading.textContent = 'Contact Us';

  const emailParagraph = document.createElement('p');
  emailParagraph.textContent = 'Email: info@example.com';

  const phoneParagraph = document.createElement('p');
  phoneParagraph.textContent = 'Phone: (123) 456-7890';

  footerContent.appendChild(heading);
  footerContent.appendChild(emailParagraph);
  footerContent.appendChild(phoneParagraph);

  return footerContent;
}

document.body.appendChild(createFooter());

// const styles = `
//   .footer {
//     background-color: #333;
//     color: #fff;
//     padding: 20px;
//     text-align: center;
//   }

//   .footer-content {
//     max-width: 600px;
//     margin: 0 auto;
//   }

//   .footer h3 {
//     margin-bottom: 10px;
//   }

//   .footer p {
//     margin: 0;
//   }
// `;

// const styleTag = document.createElement('style');
// styleTag.innerHTML = styles;
// document.head.appendChild(styleTag);
