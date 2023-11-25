function createContactSection() {
    const contactSection = document.createElement('section');
    contactSection.classList.add('contact-section');
    contactSection.id = 'contact'; 
    
    const heading = document.createElement('h2');
    heading.textContent = 'Contact Us';
  
    const contactForm = createContactForm();
    contactSection.appendChild(heading);
    contactSection.appendChild(contactForm);
  
    return contactSection;
  }
  
  function createContactForm() {
    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
  
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
  
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
  
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    const messageTextarea = document.createElement('textarea');
    messageTextarea.setAttribute('name', 'message');
  
    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('value', 'Submit');
  
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageTextarea);
    contactForm.appendChild(submitButton);
  
    return contactForm;
  }
  
  document.body.appendChild(createContactSection());
  