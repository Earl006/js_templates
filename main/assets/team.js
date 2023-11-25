function createTeamPage() {
    const teamPage = document.createElement('section');
    teamPage.classList.add('team-page');
    teamPage.id = 'team';
    
    const heading = document.createElement('h2');
    heading.textContent = 'Our Team';
  
    const teamMembers = createTeamMembers();
    teamPage.appendChild(heading);
    teamPage.appendChild(teamMembers);
  
    return teamPage;
  }
  
  function createTeamMembers() {
    const teamMembers = document.createElement('div');
    teamMembers.classList.add('team-members');
  
    const member1 = createTeamMember('John Doe', 'CEO');
    const member2 = createTeamMember('Jane Smith', 'Designer');
    const member3 = createTeamMember('Bob Johnson', 'Developer');
  
    teamMembers.appendChild(member1);
    teamMembers.appendChild(member2);
    teamMembers.appendChild(member3);
  
    return teamMembers;
  }
  
  function createTeamMember(name, role) {
    const member = document.createElement('div');
    member.classList.add('team-member');
  
    const memberName = document.createElement('h3');
    memberName.textContent = name;
  
    const memberRole = document.createElement('p');
    memberRole.textContent = role;
  
    member.appendChild(memberName);
    member.appendChild(memberRole);
  
    return member;
  }
  
  document.body.appendChild(createTeamPage());
  