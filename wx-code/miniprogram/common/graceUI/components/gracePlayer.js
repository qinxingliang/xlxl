var gracePlayer;

Component({
    properties: {
        color: {
            type: String,
            value: "#FFFFFF"
        },
        list: {
            type: Array,
            value: []
        },
        listBg: {
            type: String,
            value: "#292E35"
        },
        listHeight: {
            type: String,
            value: "880rpx"
        }
    },
    data: {
        playStatus: 1,
        player: null,
        playTime: "00:00",
        timer: null,
        dotype: 1,
        index: 0,
        listShow: !1,
        audioLength: 1
    },
    ready: function() {
        var t = this;
        (gracePlayer = wx.getBackgroundAudioManager()).onTimeUpdate(function() {
            if (1 == t.data.playStatus) {
                var a = gracePlayer.currentTime / t.data.audioLength;
                a = Math.round(100 * a), t.selectComponent("#graceSingleSlider").setProgress(a), 
                t.setData({
                    playTime: t.timeFormat(gracePlayer.currentTime)
                });
            }
        }), gracePlayer.onPlay(function() {
            console.log("play"), t.setData({
                playStatus: 1,
                audioLength: gracePlayer.duration
            });
        }), gracePlayer.onPause(function() {
            console.log("pause"), t.setData({
                playStatus: 2
            });
        }), gracePlayer.onEnded(function() {
            switch (console.log("ended"), t.data.dotype) {
              case 1:
                t.data.index++, t.data.index + 1 > t.data.list.length ? t.setData({
                    index: 0
                }) : t.setData({
                    index: t.data.index
                }), t.play();
                break;

              case 2:
                gracePlayer.seek(0), t.play();
            }
        }), this.play();
    },
    methods: {
        play: function() {
            var a = this.data.list[this.data.index];
            gracePlayer.title = a.title, gracePlayer.singer = a.singer, gracePlayer.coverImgUrl = a.coverImgUrl, 
            gracePlayer.src = a.src, gracePlayer.play();
        },
        progressChange: function(a) {
            a = a.detail, null != this.data.timer && clearTimeout(this.data.timer), gracePlayer.pause();
            var t = this.data.audioLength * a / 100;
            t = Math.round(t), this.data.playTime = this.timeFormat(t), this.data.timer = setTimeout(function() {
                gracePlayer.seek(t), gracePlayer.play();
            }, 800), this.setData({
                playTime: this.data.playTime
            });
        },
        timeFormat: function(a) {
            if ((a = Math.round(a)) < 60) return a < 10 ? "00:0" + a : "00:" + a;
            var t = a % 60, e = (a -= t) / 60;
            return e < 10 && (e = "0" + e), t < 10 && (t = "0" + t), e + ":" + t;
        },
        changeType: function() {
            switch (this.data.dotype) {
              case 1:
                this.setData({
                    dotype: 2
                });
                break;

              case 2:
                this.setData({
                    dotype: 1
                });
            }
        },
        pause: function() {
            gracePlayer.pause();
        },
        playi: function() {
            gracePlayer.play();
        },
        next: function() {
            this.data.index + 1 >= this.data.list.length ? wx.showToast({
                title: "已经到底了 (:",
                icon: "none"
            }) : (this.setData({
                index: this.data.index + 1
            }), this.play());
        },
        prev: function() {
            this.data.index - 1 < 0 ? wx.showToast({
                title: "已经到头了 (:",
                icon: "none"
            }) : (this.setData({
                index: this.data.index - 1
            }), this.play());
        },
        openList: function() {
            this.setData({
                listShow: !0
            });
        },
        hideList: function() {
            this.setData({
                listShow: !1
            });
        },
        playList: function(a) {
            var t = a.currentTarget.dataset.index;
            this.setData({
                index: t
            }), this.play();
        },
        setIndex: function(a) {
            this.setData({
                index: a
            });
        }
    }
});