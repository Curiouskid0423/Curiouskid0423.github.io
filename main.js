function toggleDropdown() {
    let navbarToggle = document.getElementById('navbar-toggle');
    if(navbarToggle.className === 'top-nav'){
      navbarToggle.className += ' responsive'; //append responsive class
    }else{
      navbarToggle.className = 'top-nav';
    }
}
