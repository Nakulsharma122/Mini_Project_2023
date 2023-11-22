document.getElementById("myBtn").onclick = function() {myFunction()};


function myFunction() {
    var selector = document.getElementById('Best_mobile_phone');
    if(typeof selector.scrollIntoView !== 'undefined' )
        selector.scrollIntoView();
}