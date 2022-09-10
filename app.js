let menuLi = document.getElementById('menuLi');

menuLi.style.maxHeight = '0px';

function togglemenu() {
    if (menuLi.style.maxHeight == '0px')
     {
        menuLi.style.maxHeight = '140px'
    }
    else
    {
        menuLi.style.maxHeight = '0px';
    }
}