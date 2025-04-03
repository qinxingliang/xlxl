module.exports = {
    count: function(e) {
        return !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1] ? e.length : this.removeAllSpace(e).length;
    },
    removeAllSpace: function(e) {
        return e.replace(/\s+/g, "");
    },
    trim: function(e) {
        return e.trim();
    },
    trimL: function(e) {
        return e.replace(/^\s+/g, "");
    },
    trimR: function(e) {
        return e.replace(/\s+$/g, "");
    },
    search: function(e, t) {
        return !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2] || (t = t.toLowerCase(), 
        e = e.toLowerCase()), e.indexOf(t);
    },
    getExtension: function(e) {
        return (e = e.split(".")).pop();
    }
};