class Antibom {
    constructor(clickCount, duration) {
        this.clickCount = clickCount;
        this.duration = duration;
        focus()
    }

    static setCookie(cname, cval, hours) {
        const d = new Date();
        d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
        const expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cval + ";" + expires + "; path=/";
    }

    static getCookie(cname) {
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

    run() {
        const e = window;
        let i = Antibom.getCookie("counter");
        if(i == ""){
            i = 0;
        }
        let duration = this.duration;
        let counter = this.clickCount;
        if (Antibom.getCookie("klik") == "sudah") {
            $(".adsbygoogle").hide();
            $("ins").remove();
        }
        console.log(Antibom.getCookie("counter"));
        const listener = addEventListener('blur', function () {
            if ((document.activeElement.src).match(/doubleclick/g)) {
                i++;
                if (i >= counter || Antibom.getCookie("counter") >= counter) {
                    Antibom.setCookie("klik", "sudah", duration);
                    $(".adsbygoogle").hide();
                    $("ins").remove();
                }
                Antibom.setCookie("counter", i, duration);
            }
            this.blur();
            e.parent.focus();
            $(".adsbygoogle").focus();
            removeEventListener(listener);
        });
    }
}
