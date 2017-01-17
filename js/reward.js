document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        dscreate();
    }
    document.getElementById('dash-tip-id').onclick = function () {
        $('#donate_guide').addClass('hidden');
        $('#donate_board').removeClass('hidden');
    }
}

function dscreate() {
    var dashname = document.getElementsByName("dashmain");
    var a,
        b,
        c;
    objs = new Array();
    var n = 1;

    for (var i = 0; i < dashname.length; i++) {
        c = dashname[i].id.split("-");
        dashname[i].id += "-" + n;
        objs[i] = createDash(c[3], n);
        objs[i].dsinit();
        n += 1;
    }
}

function createDash(suffix, extra) {
    var dash = new Object;
    dash.d = null;
    dash.flag = 0;
    dash.suffix = "-" + suffix;
    dash.extra = "-" + extra;
    dash.mainid = "dash-main-id";
    dash.imgid = "dash-img-id";
    dash.urlprefix = "http://www.shigzhao.me";

    dash.dsinit = function () {
        this.flag = 0;
        this.d = document;
        this.mainid += this.suffix + this.extra;

        this.d.getElementById(this.mainid).innerHTML = this.dshtml();
        this.dsresetid();

        this.dscss();
    };

    dash.dshtml = function () {
        var mainvalue = this.d.getElementById(this.mainid).className;

        var a = mainvalue.split(" ");
        if (a.length == 2) {
            b = a[1].split("-");
        } else {
        }

        var url = encodeURIComponent(window.location.href);

        return "<a href=\"javascript:;\" id=\"dash-tip-id\" class=\"dash-tip\" >" +
            "<img id=\"dash-img-id\" src=\"/img/dashang.png\" alt=\"����\" /></a>";
    };

    dash.dsresetid = function () {
        this.d.getElementById(this.imgid).setAttribute("id", this.imgid + this.suffix + this.extra);
        this.imgid += this.suffix + this.extra;
    };

    dash.dscss = function () {
        var obj = document.createElement('style');
        obj.type = "text/css";
        var styles = ".dash-main{position:relative;width:128px;height:128px;}"
            + ".dash-main-1{position:relative;width:96px;height:96px;}"
            + ".dash-main-2{position:relative;width:64px;height:64px;}"
            + ".dash-main-3{position:relative;width:32px;height:32px;}"
            + ".dash-main-4{position:relative;width:16px;height:16px;}"
            + ".dash-main-5{position:relative;width:8px;height:8px;}"
            + ".dash-tip img{position:relative;width:100%;height:100%;}";
        if (obj.styleSheet)
            obj.styleSheet.cssText = styles;
        else
            obj.appendChild(document.createTextNode(styles));
        document.getElementById(this.mainid).appendChild(obj);
    };

    return dash;
}

document.getElementById('btn_donate').onclick = function () {
    $('#donate_board').addClass('hidden');
    $('#donate_guide').removeClass('hidden');
}


function donate_on_web() {
    $('#donate').submit();
}

var original_window_onload = window.onload;
window.onload = function () {
    if (original_window_onload) {
        original_window_onload();
    }
    document.getElementById('donate_board_wdg').className = 'hidden';
}