let getSel = x => document.querySelector(x);

getSel('.block').onmouseover = function() {
    this.style.backgroundColor = 'yellow';
    let id = document.getElementById('text');
    id.appendChild.nodeValue = 'Хочеш знати який ?';
}


getSel('.block').onmouseout = function() {
    this.style.backgroundColor = '';
}

