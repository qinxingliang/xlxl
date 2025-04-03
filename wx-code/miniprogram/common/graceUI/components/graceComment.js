Component({
    properties: {
        placeholder: {
            type: String,
            value: "说点什么吧"
        },
        isImg: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        comment: {
            img: "",
            content: "",
            at: ""
        }
    },
    methods: {
        open: function() {
            this.selectComponent("#graceBottomDialog").open();
        },
        hide: function() {
            this.selectComponent("#graceBottomDialog").hide();
        },
        submit: function() {
            this.triggerEvent("submit", this.data.comment), this.hide(), this.setData({
                comment: {
                    img: "",
                    content: "",
                    at: ""
                }
            });
        },
        selectImg: function() {
            var e = this;
            wx.chooseImage({
                count: 1,
                success: function(t) {
                    e.data.comment.img = t.tempFilePaths[0], e.setData({
                        comment: e.data.comment
                    });
                }
            });
        },
        removeImg: function() {
            this.data.comment.img = "", this.setData({
                comment: this.data.comment
            });
        },
        setAt: function(t) {
            this.data.comment.at = t, this.setData({
                comment: this.data.comment
            });
        },
        contentInput: function(t) {
            this.data.comment.content = t.detail.value, this.setData({
                comment: this.data.comment
            });
        }
    }
});