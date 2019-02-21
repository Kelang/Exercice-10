window.addEventListener('load', function(){
    
    console.log('oui animation');

    let mainTitle = document.getElementsByClassName('site-title');
    let subtitle = document.getElementsByClassName('site-description');
    mainTitle.classList.add('main-title-animation');
    subtitle.classList.add('subtitle-animation');

});