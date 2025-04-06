// const mta = require('../../vendor/mta_analysis.js');
const app = getApp();
const config = require('../../../utils/config.js');
const db = wx.cloud.database()
const store = db.collection('map_maps');
// const userInfo = db.collection('userInfo');

Page({


  /**
   * 页面的初始数据
   */
  data: {
    longitude: config.center_longitude,
    latitude: config.center_latitude,
    windowHeight: 600,
    mapSubKey: config.mapSubKey,
    hideMe:true,
    showAdmin:false,
    page:1,
    search:false,
    searchKey:''
  },
  showSearch(){
    
    //单独的搜索页面
    // wx.navigateTo({
    //   url: '/pages/search/search',
    // })
    // return

    if(!this.data.searchKey){
      this.setData({
        search:!this.data.search,
      })
      this.getList(1)
    }else{
      this.setData({
        stores:[]
      })
      this.getSearchList(1)
    }
    
  },
  getSearchValue(event){
    console.log(event.detail.value)
    this.setData({
      searchKey:event.detail.value
    })
  },
  getSearchList(page){
    
    store
    .where({
      title:wx.cloud.database().RegExp({
        regexp:this.data.searchKey,
        options:'i'
      })
    })
    .skip((page - 1) * 20).limit(20).get().then(res => {
      let data = res.data;
      if(res.data.length!=0){
        // 将 _id 给 id ,确保 marker 事件的正确触发
        // data.map(item => {
        //   item.id = Number(Math.random())
        // });
        this.setData({
          stores: this.data.stores.concat(data),
          windowHeight: app.globalData.windowHeight,
          hideMe:false,
          showAdmin: this.data.showAdmin,
          defaultScale: config.default_scale
        })
        this.getSearchList(page + 1)
      }else{
        wx.hideLoading({
          success: (res) => {},
        })
      }
      
    })
  },
  
  onLoad: function (options) {
    
   
    let showAdmin = config.show_admin?true:false;

    if (app.globalData.showAdmin) {
      showAdmin = true;
    }

    wx.showLoading({
      title: '数据加载中...',
    })
    
    //mta.Page.init();

    this.mapCtx = wx.createMapContext('map')
    this.mapCtx.on('markerClusterClick', res =>{
      console.log('markerClusterClick', res)
      
    })

    // 使用默认聚合效果时可注释下一句
    this.bindEvent()

  },
  getList(page){
    if(page == 1){
      this.setData({
        stores:[]
      })
    }
    store.skip((page - 1) * 20).limit(20).get().then(res => {
      let data = res.data;
      if(res.data.length!=0){
        // 将 _id 给 id ,确保 marker 事件的正确触发
        // data.map(item => {
        //   item.id = Number(Math.random())
        // });
        this.setData({
          stores: this.data.stores.concat(data),
          windowHeight: app.globalData.windowHeight,
          hideMe:false,
          showAdmin: this.data.showAdmin,
          defaultScale: config.default_scale
        })
        this.getList(page + 1)
      }else{
        wx.hideLoading({
          success: (res) => {},
        })
      }
      
    })
  },
bindEvent() {
    this.mapCtx.initMarkerCluster({
      enableDefaultStyle: false,
      zoomOnClick: true,
      gridSize: 60,
      complete(res) {
        console.log('initMarkerCluster', res)
      }
    })

    // enableDefaultStyle 为 true 时不会触发改事件
    this.mapCtx.on('markerClusterCreate', res => {
      console.log('clusterCreate', res)
      const clusters = res.clusters
      const markers = clusters.map(cluster => {
        const {center, clusterId, markerIds} = cluster
        console.log(center)
        return  {
          ...center,
          width: 0,
          height: 0,
          clusterId,
          label: {
            content: markerIds.length + '',
            fontSize: 20,
            width: 50,
            height: 50,
            color: '#ffffff',
            bgColor: '#d2120c',
            borderWidth: '3',
            borderColor: '#ffffff',
            borderRadius: 30,
            textAlign: 'center',
            anchorX: -20,
            anchorY: -20,
          }
        }
      })
      this.mapCtx.addMarkers({
        markers,
        clear: false,
        complete(res) {
          console.log('clusterCreate addMarkers', res)
        }
      })
    })
      },
  onShow: function () {


    this.getList(1)

  },

  viewAll: function () {
    wx.navigateTo({
      url: '../list/list',
    })
  },
  add: function (e) {
    
    wx.navigateTo({
      url: '/pages/add/add',
    })
  },
  onMarkerTap: function (event) {
    console.log(event)
    wx.navigateTo({
      url: '/pages/zhinan/info/info?id=' + event.markerId,
    })
  },

  hideMe:function(res){
    this.setData({
      hideMe: true
    })
  },
  showAdmin:function(res){
    wx.setStorage({
      key: 'showAdmin',
      data: !this.data.showAdmin,
    })
    this.setData({
      showAdmin: !this.data.showAdmin
    })
  },

  //设置标题为空
  setTitleNull(){
    if(this.data.stores[0].callout.content==''){

      this.getList(1)

    }else{
      for(let l in this.data.stores){
        this.data.stores[l].callout.content = ''
        console.log(l)
        console.log(this.data.stores[l].callout.content)
      }
      this.setData({
        stores:this.data.stores
      })
    }
  }

})