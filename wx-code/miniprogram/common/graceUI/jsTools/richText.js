var graceRichTextReg, GRT = [ [ "div", "line-height:2em;" ], [ "h1", "font-size:3em; line-height:1.5em;" ], [ "h2", "font-size:2em; line-height:1.8em;" ], [ "h3", "font-size:1.6em; line-height:2em;" ], [ "h4", "font-size:1.2em; line-height:2em;" ], [ "h5", "font-size:1em; line-height:2em;" ], [ "h6", "font-size:0.9em; line-height:2em;" ], [ "p", "font-size:1em; line-height:2em;" ], [ "b", "font-size:1em; line-height:2em;" ], [ "strong", "font-size:1em; line-height:2em;" ], [ "code", "font-size:1em; line-height:1.2em; background:#F6F7F8; padding:8px 2%; width:96%;" ], [ "img", "max-width:100%; margin:8px 0; width:100%; height:auto;" ], [ "blockquote", "font-size:1em; border-left:3px solid #D1D1D1; line-height:2em; border-radius:5px; background:#F6F7F8; padding:8px 2%;" ], [ "ul", "padding:5px 0; list-style:none; padding:0; margin:0;" ], [ "li", "line-height:1.5em; padding:5px 0; list-style:none; padding:0; margin:0; margin-top:10px;" ], [ "table", "width:100%; border-left:1px solid #F2F3F4; border-top:1px solid #F2F3F4;" ], [ "th", "border-right:1px solid #F2F3F4; border-bottom:1px solid #F2F3F4;" ], [ "td", "border-right:1px solid #F2F3F4; border-bottom:1px solid #F2F3F4; padding-left:5px;" ] ];

module.exports = {
    format: function(e) {
        e = (e = (e = e.replace(/<pre.*pre>?/gi, function(e) {
            return (e = (e = e.replace(/[\n]/gi, "<br />")).replace(/    /gi, '<span style="padding-left:2em;"></span>')).replace(/[\t]/gi, '<span style="padding-left:2em;"></span>');
        })).replace(/<pre/gi, '<p style="font-size:1em; margin:12px 0; line-height:1.2em; background:#F6F7F8; border-radius:5px; padding:8px 4%; width:92%;"')).replace(/<\/pre/gi, "</p");
        for (var i = function(t) {
            graceRichTextReg = new RegExp("<" + GRT[t][0] + ">|<" + GRT[t][0] + " (.*?)>", "gi"), 
            e = e.replace(graceRichTextReg, function(e) {
                if (-1 != e.indexOf("style=")) {
                    var i = new RegExp("<" + GRT[t][0] + '(.*?)style="(.*?)"(.*?)(/?)>', "gi");
                    return e.replace(i, "<" + GRT[t][0] + '$1style="$2 ' + GRT[t][1] + '"$3$4>');
                }
                i = new RegExp("<" + GRT[t][0] + "(.*?)(/?)>", "gi");
                return e.replace(i, "<" + GRT[t][0] + '$1 style="' + GRT[t][1] + '$2">');
            });
        }, t = 0; t < GRT.length; t++) i(t);
        return e;
    }
};