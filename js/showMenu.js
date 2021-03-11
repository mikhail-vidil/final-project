 /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
/*function myFunction() {
    document.getElementById("myMenu").classList.toggle("show");
}*/
// Close the dropdown if the user clicks outside of it
/*window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
        var dropdowns = document.getElementsByClassName("menu-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                } else if (openDropdown.classList.contains('search-form')) {
                    
                }
            }
        }
}*/
/*jshint esversion: 6 */
function showMenu(){
    
    /*let button = document.getElementsByClassName('menubtn')[0];
    let iconMenu = document.getElementsByClassName('icon-menu')[0];
    let iconClose = document.getElementsByClassName('icon-close')[0];
    
    let hide = document.querySelector('.hide');
        
    iconMenu.classList.add('hide');
    iconClose.classList.remove('hide');

    button.addEventListener('click', function(){
        
        if(hide) {
            hide.classList.remove('hide');
        }
        
        iconClose.classList.add('hide');
    });*/
    document.getElementById("myMenu").classList.toggle("show");
}