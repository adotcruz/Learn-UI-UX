(function() {
    var ids = [{'id':'brownburger', 'el':'div'},
               {'id':'navbar',      'el':'li'},
               {'id':'navbar3',     'el':'li'},
               {'id':'search',      'el':'form'}],
        bars = [];
    function getstyle(e,p) {
        return getComputedStyle(e).getPropertyValue(p);
    }
    function displayif(list, cond, val) {
        for (var i=0; i<list.length; i++)
            list[i].style.display = (cond) ? val : 'none';
    }
    var onload = window.onload;
    window.onload = function() {
        if (onload)
            onload();
        function clicker(w, els) {
            return function() {
                var bg = getstyle(w, 'background-image');
                if (bg != 'none') {
                    var disp = getstyle(els[0], 'display');
                    displayif(els, disp == 'none', 'block');
                }
            };
        }
        for (var i in ids) {
            var w = document.getElementById(ids[i].id);
            if (w) {
                var els = w.getElementsByTagName(ids[i].el);
                if (els.length) {
                    w.onclick = clicker(w, els);
                    bars.push({'w': w, 'els': els});
                    for (var j in els) {
                        els[j].onclick = function(e) {e.stopPropagation();};
                    }
                }
                else
                    w.style.backgroundImage = 'none';
            }
        }
    };
    var onresize = window.onresize;
    window.onresize = function() {
        if (onresize)
            onresize();
        for (var i in bars) {
            var bg = getstyle(bars[i].w, 'background-image');
            displayif(bars[i].els, bg == 'none', 'inline-block');
        }
    };
}());