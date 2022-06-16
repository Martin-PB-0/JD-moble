document.addEventListener('load', function() {
    var slide = document.querySelector('.slide');
    var slideImg = document.querySelector('#slideImg');
    var w = slide.offsetWidth;
    var slideFirst = slideImg.children[0].cloneNode(true);
    var slideLast = slideImg.children[slide.children.length - 1];
    console.log(slideFirst);
    slideImg.appendChild(slideFirst);
    slideImg.insertBefore(slideLast, slide.children[0]);
    slideImg.style.width = w * slide.children.length;
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translateX = -index * w;
        slideImg.getElementsByClassName.transform = ' translateX(' + translateX + ')';
    }, 3000);
});