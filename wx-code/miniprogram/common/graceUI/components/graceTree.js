Component({
    properties: {
        trees: {
            type: Array,
            value: function() {
                return [];
            }
        },
        indent: {
            type: Number,
            value: 28
        },
        level: {
            type: Number,
            value: 0
        },
        lineHeight: {
            type: String,
            value: "80rpx"
        },
        fontSize: {
            type: String,
            value: "28rpx"
        },
        fontColor: {
            type: String,
            value: "#323232"
        },
        type: {
            type: String,
            value: "text"
        },
        isIcon: {
            type: Boolean,
            value: !0
        },
        iconSize: {
            type: String,
            value: "30rpx"
        },
        indexes: {
            type: Array,
            value: [ "", 0 ]
        },
        checkedId: {
            type: [ String, Number ],
            value: "-1"
        },
        checkedIds: {
            type: Array,
            value: []
        },
        checkedColor: {
            type: String,
            value: "#0da408"
        },
        allCanCheck: {
            type: Boolean,
            value: !0
        },
        isFold: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        treesIN: [],
        indexesIn: [],
        fold: !1
    },
    ready: function() {
        if (this.setData({
            treesIN: this.data.trees
        }), "" != this.data.indexes[0]) var e = this.data.indexes[0].split(","); else e = [];
        e.push(this.data.indexes[1]), this.data.indexesIn = e.join(","), this.setData({
            indexesIn: this.data.indexesIn
        });
    },
    methods: {
        taped: function(e) {
            var t = e.currentTarget.dataset.havsons, a = e.currentTarget.dataset.treeindexs;
            a = a.split(",");
            var i = e.currentTarget.dataset.index;
            if (a.push(i), a.shift(), "text" == this.data.type) {
                if (this.data.isFold && t) return void this.setData({
                    fold: !this.data.fold
                });
                this.tapbase(a);
            } else {
                e.currentTarget.dataset.cancheck && this.tapbase(a);
            }
        },
        tapbase: function(e) {
            e.detail && (e = e.detail), this.triggerEvent("taped", e);
        },
        setTrees: function(e) {
            this.setData({
                treesIN: e
            });
        }
    }
});