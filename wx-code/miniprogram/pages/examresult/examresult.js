Page({
  onLoad: function (e) {
    this.setData({
      ordernum: e.ordernum,
      rightNum: e.rightNum,
      errNum: e.errNum,
      unAnswerNum: parseInt(e.length) - (parseInt(e.rightNum) + parseInt(e.errNum))
    })

    wx.cloud.database().collection('garbage_history')
  },
  examBack: function () {
    wx.redirectTo({
      url: "../note/note?ordernum=" + this.data.ordernum
    });
  },

  exam_repeat: function () {
    // this._repeat_examGo(this);
    wx.reLaunch({
      url: '../exam/exam',
    })
  }
})