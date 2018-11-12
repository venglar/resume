var marked = require('marked');

import 'styles/index.scss';

//load in the content markdown, parse it, set it in the body, and then show the page
var newXHR = new XMLHttpRequest();
newXHR.addEventListener('load', function(){
    document.getElementById('content').innerHTML = marked(this.response);
    document.body.style.opacity = 1;
});
newXHR.open('GET', 'assets/content.md');
newXHR.send();


document.getElementById('toggle-references').addEventListener('click', function(){
    if(this.classList.contains('expanded')){
        this.innerHTML = 'Hide References';
        document.getElementById('references').classList.remove('d-none');
        this.classList.remove('expanded');
    } else {
        this.innerHTML = 'Show References';
        document.getElementById('references').classList.add('d-none');
        this.classList.add('expanded');
    }
});