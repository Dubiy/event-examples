function sayHello() {
    alert('hello');
    console.log('event triggered');
}

function removeHandler() {
    document.getElementById('clickMe').onclick = null;
    console.info('handler removed');
}

document.getElementById('clickMe').onclick = function () {
    sayHello();
};

/////////////////////////////

var handler1 = function () {
    console.log('listener 1', 'this = ', this);
},
    handler2 = function (event) {
    console.log('listener 2', 'this = ', this, 'event = ', event, 'arguments = ', arguments);
};

function addEvListenter() {
    document.getElementById('testButton').addEventListener('click', handler1);
    document.getElementById('testButton').addEventListener('click', handler2);
    // document.getElementById('testButton').addEventListener('mousemove', handler1);
}

function removeEvListenter() {
    document.getElementById('testButton').removeEventListener('click', handler1);
    document.getElementById('testButton').removeEventListener('click', handler2);
}

///////////////////////////////// bad flow

function addEvListenter2() {
    document.getElementById('testButton2').addEventListener('click', function () {
        alert(1);
    });
}

function removeEvListenter2() {
    document.getElementById('testButton2').removeEventListener('click', function () {
        alert(1);
    });
}

/////////////////////////////////////

document.getElementById('eventObjectButton').onclick = function eventObject(ev) {
    console.log(ev);
    console.log('type', ev.type);
    console.log('target', ev.target);
    console.log('currentTarget', ev.currentTarget);
    console.log('clientX clientY (window)', ev.clientX + ' ' + ev.clientY); //try to press enter

};

///////////////////////////////////// Propagation

var propHandler = function (event) {
    console.log('Target: ' + event.target.tagName + '. Current: ' + event.currentTarget.tagName);
};

document.getElementById('propagationTest').onclick = propHandler;


var propHandler2 = function (event) {
    // event.stopPropagation();
    console.log('Target: ' + event.target.tagName + '. Current: ' + event.currentTarget.tagName);
};

document.getElementById('propagationTest2').onclick = propHandler2;
document.querySelector('#propagationTest2 p').onclick = propHandler2;
document.querySelector('#propagationTest2 span').onclick = propHandler2;
document.querySelector('#propagationTest2 button').onclick = propHandler2;



////////////////////////////////////////////// Bubbling

var bubblingHandler = function (event) {
    alert('Target: ' + event.target.tagName + '. Current: ' + event.currentTarget.tagName + ' eventPhase ' + event.eventPhase );
    // console.log('Target: ' + event.target.tagName + '. Current: ' + event.currentTarget.tagName, event);
};

var elements = document.querySelectorAll('#bubblingTest, #bubblingTest *');
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', bubblingHandler, true);
    elements[i].addEventListener('click', bubblingHandler);
}






