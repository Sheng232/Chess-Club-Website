document.addEventListener('DOMContentLoaded',function(){
    const menuToggle = document.querySelector('.hamburger-menu input');

    //resotre the state from local storage
    if(localStorage.getItem('menuToggleState') === 'checked'){
        menuToggle.checked = true;
    }

    //save the state to local storage so it can be used across different pages of the website
    menuToggle.addEventListener('change', function(){
        if(menuToggle.checked){
            localStorage.setItem('menuToggleState', 'checked');
        } else {
            localStorage.removeItem('menuToggleState');
        }
    });
});
