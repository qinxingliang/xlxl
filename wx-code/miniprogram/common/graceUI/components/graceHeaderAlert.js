Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        background: {
            type: String,
            value: "#F1F2F3"
        },
        top: {
            type: Number,
            value: 20
        },
        width: {
            type: Number,
            value: 580
        },
        duration: {
            type: Number,
            value: 2500
        }
    },
    options: {
        multipleSlots: !0
    },
    methods: {
        open: function() {
            var t = this;
            this.setData({
                show: !0
            }), setTimeout(function() {
                t.setData({
                    show: !1
                });
            }, this.data.duration);
        },
        close: function() {
            this.setData({
                show: !1
            });
        }
    }
});