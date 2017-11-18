function f(){alert('hello');}

document.body.innerHTML = '<button onclick="f()">button1</button>'

var button2 = document.createElement('button');
button2.innerText = 'button2';
button2.addEventListener('click', function(){f();})

document.body.appendChild(button2);

var a = document.body.children[0];


var b = document.body.children[1];

// document.body.outerHTML = a.outerHTML;
// document.body.outerHTML = b.outerHTML;
