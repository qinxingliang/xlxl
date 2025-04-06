
const app = getApp();
const db = wx.cloud.database()
const store = db.collection('map_maps');
Page({


  data: {

  },


  onLoad: function (options) {

    store
    .where({
      id:Number(options.id)
    })
    .get()
    .then(res => {
      console.log(res.data[0])
      this.setData({
        spot:res.data[0]
      })
       //播放音乐
      // wx.playBackgroundAudio({
      //   dataUrl: res.data[0].audioUrl,
      // })

    })

    // 'https://6263-bcbdy-3gj5jsx126e4beb4-1300085904.tcb.qcloud.la/audios/%E5%85%89%E8%BE%89%E5%B2%81%E6%9C%88.mp3?sign=bd30ded648d2e4173bdf1f958e76adef&t=1650794065'
    


  },
  opendLocation(){

    var that = this;
    wx.openLocation({
      latitude: Number(that.data.spot.latitude),
      longitude: Number(that.data.spot.longitude),
    })
  },
})