// miniprogram/pages/study/study.js
const util = require('../../utils/util.js');
var app = getApp();
let items = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
Page({
  /**
   * 页面的初始数据
   */
  data: {
    percent: 0,
    btnText: '下一题',
    rightNum: 0,
    idx: 0,
    length: 0,
    question: {

    },
    selectedOption: {
      code: '',
      content: '',
      value: -1
    },
    errNum: 0,
    rightNum: 0,
    score_arr: [],
    options_arr: []
  },

  onShow() {
    //   console.log("执行了onShow");
    // },
    // onLoad: function (options) {
    // console.log("执行了onLoad", options);
    this.queryQues('01');
    this.setData({
      ordernum: util.formatTime(new Date()),
      percent: 0,
      btnText: '下一题',
      rightNum: 0,
      idx: 0,
      length: 0,
      question: {},
      selectedOption: {
        code: '',
        content: '',
        value: -1
      },
      errNum: 0,
      rightNum: 0,
      score_arr: [],
      options_arr: [],
      items: items,
      length: items.length
    })
  },
  queryQues: function (id) {
    let that = this;
    const db = wx.cloud.database();
    db.collection('garbage_questions').doc(id)
      .get()
      .then(res => {
        console.log('[数据库] [查询记录] 成功: ', res)
        let question = res.data;
        let options = question.options;
        options.map((option) => {
          option.selected = false;
        })
        that.setData({
          question,
          options
        })
      })
  },

  selectOption: function (e) {
    console.log(e.currentTarget.dataset);
    let selectedOption = JSON.parse(e.currentTarget.dataset.value);
    let options = this.data.options;
    options.map((option) => {
      if (option.code == selectedOption.code) {
        option.selected = !option.selected;
      }else{
        option.selected = false;
      }
    });
    this.setData({
      options,
      selectedOption
    })
  },
  goResult: function () {
    console.log(app.globalData.userInfo)
    wx.cloud.database().collection('garbage_users')
    .doc(app.globalData.userInfo._id)
    .update({
     data:{
      score:wx.cloud.database().command.inc(this.data.rightNum)
     }
    })


    let url = '/pages/examresult/examresult?length=' + this.data.length + '&errNum=' + this.data.errNum + '&rightNum=' + this.data.rightNum + '&ordernum=' + this.data.ordernum;
    wx.navigateTo({
      url: url
    })
  },

  addNote: function (options) {
    let that = this;
    let ordernum = this.data.ordernum;
    const db = wx.cloud.database()
    db.collection('garbage_notes').add({
      data: {
        ordernum: ordernum,
        question: this.data.question,
        options: options
      },
      success: res => {
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        // 在返回结果中会包含新创建的记录的 _id
        // wx.showToast({
        //   title: '新增记录成功',
        // })
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    })
  },
  addHistory: function () {
    console.log('进来了')
    let that = this;
    let time = util.getTime(new Date(Date.now()));
    let ordernum = this.data.ordernum;
    const db = wx.cloud.database()
    db.collection('garbage_historys').add({
      data: {
        _id: ordernum,
        // subject: subject,
        // items: this.data.items,
        // question: this.data.question,
        // options_arr: this.data.options_arr,
        // score_arr: this.data.score_arr,
        rightNum: this.data.rightNum,
        errNum:this.data.errNum,
        createTime: time
      },
      success: res => {
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        // 在返回结果中会包含新创建的记录的 _id
        wx.showToast({
          title: '新增记录成功',
        })
      },
    })
      
    
  },
  doNext: function () {
    console.log('doNext')
    let idx = this.data.idx;
    let length = this.data.length;
    idx++;
    let options = this.data.options;
    let isRight = true;
    for (const option of options) {
      console.log(option);
      if (option.selected == true && option.value == 0) {
        isRight = false;
        break;
      }
    }
    let rightNum = this.data.rightNum;
    let errNum = this.data.errNum;
    if (isRight) {
      rightNum++;
    } else {
      errNum++;
      this.addNote(options);
    }
    let score_arr = this.data.score_arr;
    let options_arr = this.data.options_arr;
    score_arr[this.data.idx] = isRight;
    options_arr[this.data.idx] = options;
    let items = this.data.items;
    let percent = ((idx + 1) / length) * 100;
    if (idx == length) {
      this.setData({
        rightNum,
        errNum,
        score_arr,
        options_arr
      }, () => {
        this.addHistory();
        this.goResult();
      })
      return;
    }

    if (length - idx == 1) {
      this.setData({
        btnText: '完成'
      })
      wx.showToast({
        icon: 'none',
        title: '已经是最后一题了'
      })
    }

    let id = items[idx];
    this.queryQues(id);

    this.setData({
      rightNum,
      errNum,
      score_arr,
      options_arr,
      idx,
      percent,
      selectedOption: {
        code: '',
        content: '',
        value: -1
      }
    }, () => {

    })
  },

})