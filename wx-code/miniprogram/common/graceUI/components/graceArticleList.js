Component({
    properties: {
        articles: {
            type: Array,
            value: []
        },
        titleStyle: {
            type: Object,
            value: {
                lineHeight: "50rpx",
                fontSize: "36rpx",
                color: "#323232"
            }
        }
    },
    methods: {
        newstap: function(t) {
            this.triggerEvent("newstap", t.currentTarget.dataset.articleid);
        }
    }
});