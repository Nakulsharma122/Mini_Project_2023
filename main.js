document.getElementById("myBtn1").onclick = function() {myFunction1()};
document.getElementById("myBtn2").onclick = function() {myFunction2()};
document.getElementById("myBtn3").onclick = function() {myFunction3()};
document.getElementById("myBtn4").onclick = function() {myFunction4()};
document.getElementById("myBtn5").onclick = function() {myFunction5()};
document.getElementById("myBtn6").onclick = function() {myFunction6()};
document.getElementById("myBtn7").onclick = function() {myFunction7()};
document.getElementById("myBtn8").onclick = function() {myFunction8()};


function myFunction1() {
    var selector = document.getElementById('Clothes');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}
function myFunction2() {
    var selector = document.getElementById('Health-care');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}
function myFunction3() {
    var selector = document.getElementById('Furniture');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}
function myFunction4() {
    var selector = document.getElementById('Electronic Gadgets');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}
function myFunction5() {
    var selector = document.getElementById('Beauty');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}
function myFunction6() {
    var selector = document.getElementById('pet-care');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}
function myFunction7() {
    var selector = document.getElementById('Toys');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}
function myFunction8() {
    var selector = document.getElementById('Fashion');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}

function toggle1() {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup-1");
    popup.classList.toggle("active");
  }
  function toggle2() {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup-2");
    popup.classList.toggle("active");
  }