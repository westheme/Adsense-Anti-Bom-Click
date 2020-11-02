focus();
let i = 0;
const klik = getCookie("klik"); // get cookie 
if (klik == "sudah") { // if cookie found
// remove all ads code
    $(".adsbygoogle").hide();
    $("ins").remove();
}
const listener = addEventListener('blur', function() { // check if focus change
    i++;
    if ((document.activeElement.src).match(/doubleclick/g)) {
    // enable it if you want set maximum clickable
    //if(i > 3) { // it mean, visitor only can click 3 times
    //   setCookie("klik", "sudah", 1); 
    //    $(".adsbygoogle").hide();
    //    $("ins").remove();
    //}
        setCookie("klik", "sudah", 1); // set cookie for 1 hour. You can change 1 with other like 12 (mean 12 hours)
        $(".adsbygoogle").hide();
        $("ins").remove();
    }
    removeEventListener(listener); // remove listener
});

// setCookie from w3school, modified by me
function setCookie(cname, cvalue, hours) {
    const d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
    const expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// getCookie from w3school, modified by me
function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
