<template>
    <div style="height: calc(100% - 40px)">
        <div class="select-form">
            <el-form :inline="true" :model="selectQuery" class="demo-form-inline" @submit.native.prevent>
                <el-form-item label="商品名称" class="select-form-item">
                    <el-input v-model="selectQuery.name" placeholder="商品名称" :clearable="true"></el-input>
                </el-form-item>
                <el-form-item class="select-form-item">
                    <el-button type="primary" @click="select" native-type="submit">查询</el-button>
                    <el-button type="success" @click="addFl">添加</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 114px 是搜索内容-->
        <div style="height:calc(100% - 114px)">
            <!-- 32px 是页签高度 20px是页签边距-->
            <div style="height:100%; max-height:842px;">
                <el-table :border="true" :data="tableData" :stripe="true" height="100%" class="table"
                    :row-style="{ height: '80px' }" empty-text="暂无数据">
                    <el-table-column prop="cTitle" label="商品名称" min-width="20%" align="center">
                    </el-table-column>
                    <el-table-column label="商品封面图" min-width="20%" align="center">
                        <template v-slot="slot">
                            <el-image style="height: 80px" :src="slot.row.cImgUrl" :preview-src-list="[slot.row.cImgUrl]"
                                :preview-teleported="true" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="nYishou" label="兑换量" min-width="10%" align="center">
                    </el-table-column>
                    <el-table-column prop="nView" label="浏览量" min-width="10%" align="center">
                    </el-table-column>
                    <el-table-column prop="nStock" label="库存" min-width="10%" align="center">
                    </el-table-column>
                    <el-table-column prop="cDizhi" label="兑换地址" min-width="10%" align="center">
                    </el-table-column>
                    <el-table-column label="操作" min-width="20%" align="center">
                        <template v-slot="slot">
                            <el-button type="primary" @click="openUpdateFl(slot.row)">编辑</el-button>
                            <el-button type="danger" @click="deleteFl(slot.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-pagination background layout="prev, pager, next" :total="total" :page-size="10" class="pagination"
                v-model:current-page="current" @current-change="selectFormDb" />
        </div>
        <!-- 弹出层 新建分类或者是分类修改-->
        <el-dialog :title="isAdd ? '添加商品' : '修改商品'" v-model="showDialog" class="dialog-sp" :close-on-press-escape="false"
            :close-on-click-modal="false">
            <el-scrollbar max-height="540px" style="padding-right: 12px;">
                <el-form :model="form" :rules="rules" ref="form" label-position="top">
                    <el-form-item label="商品名称" prop="cTitle">
                        <el-input v-model="form.cTitle" placeholder="请输入商品名称" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="封面图" prop="cImgUrl">
                        <el-upload class="avatar-uploader" action="" :show-file-list="false"
                            :http-request="(param) => uploadImg(param, true)" accept="image/*">
                            <img v-if="form.cImgUrl" :src="form.cImgUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon">
                                <Plus />
                            </el-icon>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="顶部轮播图" prop="cImgs">
                        <el-upload accept="image/*" style="width: 100%;" class="upload-demo" drag action="" :http-request="(param) => uploadImg(param, false)"
                            :multiple="true" list-type="picture" v-model:file-list="form.cImgs" :on-success="upSuccess">
                            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                            <div class="el-upload__text">
                                拖入文件或者 <em>点击上传</em>
                            </div>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="商品详情图片" prop="cImgList">
                        <el-upload accept="image/*" style="width: 100%;" class="upload-demo" drag action="" :http-request="(param) => uploadImg(param, false)"
                            :multiple="true" list-type="picture" v-model:file-list="form.cImgList" :on-success="upSuccess">
                            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                            <div class="el-upload__text">
                                拖入文件或者 <em>点击上传</em>
                            </div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="地址" prop="cDizhi">
                        <el-input v-model="form.cDizhi" placeholder="请输入地址" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="积分" prop="nJifen">
                        <el-input-number :controls="false" style="width: 100%;" :precision="0" v-model="form.nJifen" placeholder="请输入兑换需要积分"></el-input-number>
                    </el-form-item>
                    <el-form-item label="商品原价" prop="dMarketPrice">
                        <el-input-number :controls="false" style="width: 100%;" :precision="2" v-model="form.dMarketPrice" placeholder="请输入商品原价"></el-input-number>
                    </el-form-item>
                    <el-form-item label="库存" prop="nStock">
                        <el-input-number :controls="false" style="width: 100%;" :precision="0" v-model="form.nStock" placeholder="请输入库存"></el-input-number>
                    </el-form-item>
                    <!-- <el-form-item label="地址经度" prop="cLongitude">
                        <el-input v-model="form.cLongitude" placeholder="请输入地址经度" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="地址纬度" prop="cLatitude">
                        <el-input v-model="form.cLatitude" placeholder="请输入地址纬度" clearable></el-input>
                    </el-form-item> -->
                </el-form>
            </el-scrollbar>
            <div slot="footer" class="dialog-footer">
                <el-button @click="showDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitFl">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style scoped>
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

:deep(.dialog-sp) {
    width: 500px;
    height: 700px;
}
:deep(.el-input-number .el-input__inner){
    text-align: left;
}
</style>
<script scoped>
import { Plus } from '@element-plus/icons-vue'
import globalConfig from '../config'
import { loadingInstance } from '../utils/util';
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
        /**
         * 顶部轮播图
         */
        var checkcImgs = (rule, value, callback) => {
            if (this.form.cImgs && this.form.cImgs.length > 0) {
                return callback();
            } else {
                return callback(new Error('请上传顶部轮播图'));

            }
        };
        /**
         * 商品详情图
         */
         var checkcImgList = (rule, value, callback) => {
            if (this.form.cImgList && this.form.cImgList.length > 0) {
                return callback();
            } else {
                return callback(new Error('请上传商品详情图'));

            }
        };
        return {
            //上传文件地址
            uploadUrl: globalConfig.url + '/api/file/imgUpload',
            // 操作方式
            isAdd: true,
            selectQuery: {
                // 商品名称
                name: '',
            },
            tableData: [],

            // 商品类型
            splx: [],
            // 商品数量
            total: 0,
            showDialog: false,
            form: {
            },
            rules: {
                cTitle: [
                    {
                        required: true,
                        message: '请输入商品名称',
                        trigger: 'blur'
                    }
                ],
                cImgUrl: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: checkUpImage
                    }
                ],
                cImgs: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: checkcImgs
                    }
                ],
                cImgList: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: checkcImgList
                    }
                ],
                cDizhi: [
                    {
                        required: true,
                        message: '请输入兑换地址',
                        trigger: 'blur'
                    }
                ],
                nJifen: [
                    {
                        required: true,
                        message: '请输入兑换需要积分',
                        trigger: 'blur'
                    }
                ],
                dMarketPrice: [
                    {
                        required: true,
                        message: '请输入商品原价',
                        trigger: 'blur'
                    }
                ],
                nStock: [
                    {
                        required: true,
                        message: '请输入商品库存',
                        trigger: 'blur'
                    }
                ],
                // cLongitude: [
                //     {
                //         required: true,
                //         message: '请输入商兑换地址经度',
                //         trigger: 'blur'
                //     }
                // ],
                // cLatitude: [
                //     {
                //         required: true,
                //         message: '请输入商兑换地址纬度',
                //         trigger: 'blur'
                //     }
                // ],
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
                url: 'api/sp/v1/select',
                data: {
                    // 当前页数
                    current: this.current,
                    // 分类名称
                    name: this.selectQuery.name
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

        // 新增
        addFl() {
            this.isAdd = true;
            this.form = {};
            this.showDialog = true;
        },
        // 编辑页面
        openUpdateFl(param) {
            this.isAdd = false;
            this.form = param
            this.showDialog = true;
        },
        // 删除
        deleteFl(param) {
            var loding = loadingInstance(null, '提交中');
            // 发起请求
            this.$axios({
                url: 'api/sp/v1/del',
                data: param
            })
                .then(res => {
                    debugger
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                    // 关闭当前弹出层
                    this.showDialog = false;
                    // 重新查询
                    this.select()
                })
                .catch(err => {
                    this.$message({
                        type: 'error',
                        message: '出现错误，请重试'
                    })
                })
                .finally(fil => {
                    loding.close();
                })
        },
        // 上传图片
        uploadImg(param, isFmt) {
            return new Promise((resolve, reject) => {
                let formData = new FormData();
                formData.append('file', param.file)
                // 开启遮罩
                var loding = null;
                if (isFmt) {
                    loding = loadingInstance('this', '图片上传中');
                }
                this.$axios({
                    url: this.uploadUrl,
                    method: 'POST',
                    header: { "Content-Type": "multipart/form-data" },
                    data: formData
                })
                    .then(res => {
                        if (isFmt) {
                            this.form.cImgUrl = res.data.data.url;
                            resolve();
                        }
                        else {
                            resolve(res.data.data.url);
                        }
                    })
                    .catch(err => {
                        this.$message({
                            type: 'error',
                            message: '上传文件异常'
                        })
                        reject(err);
                    })
                    .finally(fil => {
                        if (isFmt) {
                            loding.close();
                        }

                    })
            })
        },
        upSuccess(response, uploadFile, uploadFiles) {
            uploadFile.url = response
        },
        // 提交
        submitFl() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    var loding = loadingInstance('.dialog-sp', '提交中');
                    // 发起请求
                    this.$axios({
                        url: 'api/sp/v1/addOrUpdate',
                        data: this.form
                    })
                        .then(res => {
                            this.$message({
                                type: 'success',
                                message: '提交成功'
                            })
                            // 关闭当前弹出层
                            this.showDialog = false;
                            // 刷新当前页面
                            this.selectFormDb()
                        })
                        .catch(err => {
                            this.$message({
                                type: 'error',
                                message: '出现错误，请重试'
                            })
                        })
                        .finally(fil => {
                            loding.close();
                        })
                }
                else {
                    this.$message({
                        message: "请检查必填项",
                        type: "error"
                    });
                }
            })
        },
        // 打开弹出层前置操作
        clearFields() {
            // 清空已填写数据
            if (this.isAdd = true) {
                // 如果是新增则情况表单数据
                this.form = {
                    cId: '',
                    cFl: '',
                    cImgUrl: ''

                }
            }
            // 清空表单校验
            this.$refs.form.resetFields();
        },

    }
}
</script>