
$(document).ready(function() {
    //bura yazacaqsan
    document.querySelectorAll('.view-button').forEach((element) => {
        element.addEventListener('click', function () {
            document.querySelector('.fancy').innerHTML = '';
            // console.log(document.querySelectorAll('.js_image'));
            document.querySelectorAll('.js_image').forEach((imageElement) => {
                var imgSrc = imageElement.querySelector('img').getAttribute('src');
                let aTag = document.createElement('a');
                aTag.setAttribute('data-fancybox', "gallery");
                let imgFancy = document.createElement('img');
                imgFancy.setAttribute('src', `${imgSrc}`);
                imgFancy.setAttribute('href',`${imgSrc}`)
                aTag.appendChild(imgFancy);
                document.querySelector('.fancy').appendChild(aTag);
                
            })
            var viewButtons = Array.from(document.querySelectorAll('.view-button'));
            var buttonIndex = viewButtons.indexOf(this);
            console.log(Array.isArray(viewButtons));
            console.log(buttonIndex)
            document.querySelectorAll('.fancy a')[buttonIndex].click();
            console.log(document.querySelectorAll('.fancy a')[buttonIndex])
        })
        
    });
});