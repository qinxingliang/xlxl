<template>
    <div style="height: calc(100% - 40px)">
        <div class="select-form">
            <el-form :inline="true" :model="selectQuery" class="demo-form-inline" @submit.native.prevent>
                <el-form-item label="订单编号" class="select-form-item">
                    <el-input v-model="selectQuery.id" placeholder="订单编号" :clearable="true"></el-input>
                </el-form-item>
                <el-form-item label="订单状态" class="select-form-item">
                    <el-select v-model="selectQuery.ddzt" placeholder="订单状态" :clearable="true">
                        <el-option label="已取消" :value="-2"></el-option>
                        <el-option label="待支付" :value="-1"></el-option>
                        <el-option label="待发货" :value="0"></el-option>
                        <el-option label="待收货" :value="1"></el-option>
                        <el-option label="待评价" :value="2"></el-option>
                        <el-option label="已完成" :value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="select-form-item">
                    <el-button type="primary" @click="select" native-type="submit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 114px 是搜索内容-->
        <div style="height:calc(100% - 114px)">
            <!-- 32px 是页签高度 20px是页签边距-->
            <div style="height:100%; max-height:842px;">
                <el-table :border="true" :data="tableData" :stripe="true" height="100%" class="table"
                    :row-style="{ height: '80px' }" empty-text="暂无数据" :show-overflow-tooltip="true">
                    <el-table-column prop="cId" label="订单编号" min-width="20%" align="center">
                    </el-table-column>
                    <el-table-column prop="cPhone" label="电话号码" min-width="10%" align="center">

                    </el-table-column>
                    <el-table-column prop="dTotalMoney" label="订单金额" min-width="10%" align="center">
                    </el-table-column>

                    <el-table-column label="订单状态" min-width="15%" align="center">
                        <template v-slot="slot">
                            {{ getDdzt(slot.row.nStatus) }}
                        </template>
                    </el-table-column>
                    <el-table-column label="订单时间" min-width="15%" align="center">
                        <template v-slot="slot">
                            {{ formData(slot.row.dTime) }}
                        </template>
                    </el-table-column>
                    <el-table-column prop="cBz" label="订单备注" min-width="20%" align="center">
                    </el-table-column>


                    <el-table-column label="操作" min-width="20%" align="center">
                        <template v-slot="slot">
                            <template v-if="slot.row.nStatus == 0">
                                <el-button type="primary" @click="fh(slot.row)">发货</el-button>
                            </template>
                            <el-button type="success" @click="openUpdateFl(slot.row)">详情</el-button>
                            <el-button type="danger" @click="deleteFl(slot.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-pagination background layout="prev, pager, next" :total="total" :page-size="10" class="pagination"
                v-model:current-page="current" @current-change="selectFormDb" />
        </div>
        <!-- 弹出层 新建分类或者是分类修改-->
        <el-dialog title="订单详情" v-model="showDialog" class="dialog-dd" :close-on-press-escape="false"
            :close-on-click-modal="false">
            <el-scrollbar max-height="540px">
                <el-form :model="form" ref="form" label-position="top">
                    <el-form-item label="订单编号">
                        <el-input v-model="form.cId" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="收货地址">
                        <el-input v-model="form.cAddress" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="收货人姓名">
                        <el-input v-model="form.cName" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="收货人电话">
                        <el-input v-model="form.cPhone" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="快递名称">
                        <el-input v-model="form.cKdmc" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="快递单号">
                        <el-input v-model="form.cKddh" disabled></el-input>
                    </el-form-item>
                    <template v-for="(item, index) in form.goods">
                        <div style="border: 1px;">
                            <div style="display: flex;">
                                <el-form-item label="商品名称" style="flex: 1;">
                                    <el-input v-model="item.cTitle" disabled></el-input>
                                </el-form-item>
                                <el-form-item label="购买数量" style="flex: 1;">
                                    <el-input v-model="item.number" disabled></el-input>
                                </el-form-item>
                            </div>
                        </div>
                    </template>
                    <el-form-item label="备注">
                        <el-input v-model="form.cBz" disabled></el-input>
                    </el-form-item>
                </el-form>
            </el-scrollbar>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="showDialog = false">确 定</el-button>
            </div>
        </el-dialog>


        <el-dialog title="快递单号" v-model="showKdDialog" class="dialog-dd" style="height: 300px;" :close-on-press-escape="false"
            :close-on-click-modal="false">
            <el-scrollbar max-height="540px">
                <el-form  :rules="rules" :model="kddh" ref="kddh" label-position="top">
                    <el-form-item label="快递单号" prop="cKddh">
                        <el-input v-model="kddh.cKddh" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="快递名称" prop="cKdmc">
                        <el-input v-model="kddh.cKdmc" clearable></el-input>
                    </el-form-item>
                </el-form>
            </el-scrollbar>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showKdDialog = false">取 消</el-button>
                <el-button type="primary" @click="commitFh()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style>
.select-form {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-radius: 10px;
    border-color: #ddd;
}

.select-form-item {
    margin-top: 20px;
    margin-bottom: 20px;
}

.table {
    border: 1px solid;
    border-radius: 10px;
    border-color: #ddd;
    max-height: "100%";
}

.pagination {
    margin-top: 10px;
    float: right;
}

.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}

.avatar-uploader .avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.dialog-dd {
    width: 500px;
    height: 680px;
}
</style>
<script scoped>
import { Plus } from '@element-plus/icons-vue'
import globalConfig from '../config'
import { loadingInstance } from '../utils/util';
import { ElMessageBox } from 'element-plus'
export default {
    components: {
        Plus
    },
    data() {
        /**
         * 上传文件校验
         * @param {*} rule 
         * @param {*} value 
         * @param {*} callback 
         */
        var checkUpImage = (rule, value, callback) => {
            if (this.form.cImgUrl != null && this.form.cImgUrl != '') {
                return callback();
            } else {
                return callback(new Error('请上传图片'));

            }
        };
        return {
            //上传文件地址
            uploadUrl: globalConfig.url + '/api/file/imgUpload',

            selectQuery: {
                // 订单状态
                ddzt: '',
                // 订单id
                id: ''
            },

            tableData: [],

            // 商品数量
            total: 0,
            showDialog: false,
            showKdDialog: false,
            form: {

            },
            kddh:{},
            rules: {
                cKddh: [
                    {
                        required: true,
                        message: '请输入快递单号',
                        trigger: 'blur'
                    }

                ],
                cKdmc: [
                    {
                        required: true,
                        message: '请输入快递名称',
                        trigger: 'blur'
                    }

                ],
            },
            // 页数
            current: 1,
            // 加载蒙层
            loding: false
        }
    },
    beforeMount() {
        this.selectFormDb();

    },
    methods: {
        // 查询
        select() {
            // 重置页数
            this.current = 1;
            this.selectFormDb();
        },
        // 查询提交方法
        selectFormDb() {
            var loding = loadingInstance(null, '数据加载中');
            this.$axios({
                url: '/api/orders/v1/select',
                data: {
                    // 当前页数
                    current: this.current,
                    // 订单状态
                    ddzt: this.selectQuery.ddzt,
                    // 订单id
                    id: this.selectQuery.id
                }
            })
                .then(res => {
                    this.tableData = res.data.data.list
                    this.total = res.data.data.total
                })
                .catch(err => {
                    debugger
                })
                .finally(fil => {
                    loding.close();
                })
        },

        // 发货
        fh(data) {
            this.fhData = data;
            this.showKdDialog = true;
        },
        // 填写快递单号等信息
        commitFh() {
            this.$refs.kddh.validate(vaildate => {
                if (vaildate) {
                    var loding = loadingInstance('this', '提交中');
                    this.$axios({
                        url: '/api/orders/v1/wx/updateOrder',
                        data: {
                            orderId: this.fhData.cId,
                            nStatus: 1,
                            cKddh: this.kddh.cKddh,
                            cKdmc: this.kddh.cKdmc
                        }
                    })
                        .then(res => {
                            this.$message({
                                type: 'success',
                                message: '发货成功'
                            })
                            this.showKdDialog = false;
                            this.selectFormDb();
                        })
                        .catch(err => {
                            debugger
                        })
                        .finally(fil => {
                            loding.close();
                        })
                }
            })

        },
        // 格式化时间
        formData(time, format = 'YY-MM-DD hh:mm:ss') {
            var date = new Date(time);
            var year = date.getFullYear(),
                month = date.getMonth() + 1,//月份是从0开始的
                day = date.getDate(),
                hour = date.getHours(),
                min = date.getMinutes(),
                sec = date.getSeconds();
            var preArr = Array.apply(null, Array(10)).map(function (elem, index) {
                return '0' + index;
            });

            var newTime = format.replace(/YY/g, year)
                .replace(/MM/g, preArr[month] || month)
                .replace(/DD/g, preArr[day] || day)
                .replace(/hh/g, preArr[hour] || hour)
                .replace(/mm/g, preArr[min] || min)
                .replace(/ss/g, preArr[sec] || sec);

            return newTime;
        },
        // 获取订单状态
        getDdzt(status) {
            if (status == -2) {
                return "已取消"
            }
            if (status == -1) {
                return "待支付"
            }
            if (status == 0) {
                return "待发货"
            }
            if (status == 1) {
                return "待收货"
            }
            if (status == 2) {
                return "待评价"
            }
            if (status == 3) {
                return "已完成"
            }
        },


        // 编辑页面
        openUpdateFl(param) {
            this.form = param
            this.showDialog = true;
        },
        // 删除
        deleteFl(param) {
            var that = this;
            ElMessageBox.confirm(
                '确认要删除这个订单数据吗？',
                '警告',
                {
                    confirmButtonText: '确认',
                    cancelButtonText: '取消',
                    type: 'warning',
                    'close-on-click-modal': false
                }
            )
                .then(() => {
                    var loding = loadingInstance(null, '提交中');
                    // 发起请求
                    that.$axios({
                        url: '/api/orders/v1/delById',
                        data: param
                    })
                        .then(res => {
                            debugger
                            that.$message({
                                type: 'success',
                                message: '删除成功'
                            })
                            // 重新查询
                            that.select()
                        })
                        .catch(err => {
                            that.$message({
                                type: 'error',
                                message: '出现错误，请重试'
                            })
                        })
                        .finally(fil => {
                            loding.close();
                        })
                })
                .catch(() => {
                    // 取消按钮操作
                })
        },
        // // 上传图片
        // uploadImg(param) {
        //     let formData = new FormData();
        //     formData.append('file', param.file)
        //     // 开启遮罩
        //     var loding = loadingInstance('this', '图片上传中');
        //     this.$axios({
        //         url: this.uploadUrl,
        //         method: 'POST',
        //         header: { "Content-Type": "multipart/form-data" },
        //         data: formData
        //     })
        //         .then(res => {
        //             this.form.cImgUrl = res.data.data.url
        //         })
        //         .catch(err => {
        //             debugger
        //             this.$message({
        //                 type: 'error',
        //                 message: '上传文件异常'
        //             })
        //         })
        //         .finally(fil => {
        //             loding.close();
        //         })
        // },
        // // 提交
        // submitFl() {
        //     this.$refs.form.validate(valid => {
        //         if (valid) {
        //             var loding = loadingInstance('.dialog-spfl', '提交中');
        //             // 发起请求
        //             this.$axios({
        //                 url: 'api/spfl/v1/addOrUpdate',
        //                 data: this.form
        //             })
        //                 .then(res => {
        //                     this.$message({
        //                         type: 'success',
        //                         message: '提交成功'
        //                     })
        //                     // 关闭当前弹出层
        //                     this.showDialog = false;
        //                     // 刷新当前页面
        //                     this.selectFormDb()
        //                 })
        //                 .catch(err => {
        //                     this.$message({
        //                         type: 'error',
        //                         message: '出现错误，请重试'
        //                     })
        //                 })
        //                 .finally(fil => {
        //                     loding.close();
        //                 })
        //         }
        //         else {
        //             this.$message({
        //                 message: "请检查必填项",
        //                 type: "error"
        //             });
        //         }
        //     })
        // },
    }
}
</script>