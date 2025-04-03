Component({
    properties: {
        height: {
            type: String,
            value: "260rpx"
        },
        borderRadius: {
            type: String,
            value: "8rpx"
        },
        title: {
            type: Array,
            value: [ "", "" ]
        },
        btnName: {
            type: String,
            value: "站队"
        },
        status: {
            type: String,
            value: "button"
        },
        progress: {
            type: Array,
            value: [ 80, 20, "8000 票", "2000 票" ]
        }
    },
    methods: {
        choose: function(t) {
            this.triggerEvent("choose", t.currentTarget.dataset.index);
        }
    }
});