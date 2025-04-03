<template>
    <div style="height: calc(100% - 40px)">
        <div class="select-form">
            <el-form :inline="true" :model="selectQuery" class="demo-form-inline" @submit.native.prevent>
                <el-form-item label="轮播图标题" class="select-form-item">
                    <el-input v-model="selectQuery.name" placeholder="轮播图标题" :clearable="true"></el-input>
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
                    :row-style="{ height: '80px' }" empty-text="暂无数据" :show-overflow-tooltip="true">
                    <el-table-column prop="cDescribe" label="轮播图标题" min-width="40%" align="center">
                    </el-table-column>
                    <el-table-column label="轮播图图片" min-width="40%" align="center">
                        <template v-slot="slot">
                            <el-image style="height: 80px" :src="slot.row.cImgUrl" :preview-src-list="[slot.row.cImgUrl]"
                                :preview-teleported="true" />
                        </template>
                    </el-table-column>
                    <!-- <el-table-column prop="cContent" label="轮播内容" min-width="40%" align="center"></el-table-column> -->

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

        <!-- 弹出层 新建轮播图或者是轮播图修改-->
        <el-dialog :title="isAdd ? '添加轮播图' : '修改轮播图'" v-model="showDialog" class="dialog-lbt" :close-on-press-escape="false" :destroy-on-close="true"
            :close-on-click-modal="false">
            <el-form :model="form" :rules="rules" ref="form" label-position="top">
                <el-form-item label="轮播图标题" prop="cDescribe">
                    <el-input v-model="form.cDescribe" placeholder="请输入分类名称" clearable></el-input>
                </el-form-item>
                <el-form-item label="轮播图图片" prop="cImgUrl">
                    <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false"
                        :http-request="uploadImg"  accept="image/*">
                        <img v-if="form.cImgUrl" :src="form.cImgUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>
                <!-- <el-form-item label="内容">
                    <div style="width: 100%;">
                        <TEditor ref="editor" v-model:tinymceHtml="form.cContent"/>
                    </div>
                </el-form-item> -->
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="showDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitFl">确 定</el-button>
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

.dialog-lbt {
    width: 500px;
    height: 460px;
}
</style>
<script scoped>
import { Plus } from '@element-plus/icons-vue'
import globalConfig from '../config'
import { loadingInstance } from '../utils/util';



export default {
    components: {
        Plus,
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
                cId: '',
                cFl: '',
                cImgUrl: '',
                cContent: ''
            },
            rules: {
                cDescribe: [
                    {
                        required: true,
                        message: '请输轮播图标题',
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
            },
            // 页数
            current: 1,
        }
    },
    watch: {

    },
    beforeMount() {
        // 查询数据
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
                url: 'api/lbt/v1/select',
                data: {
                    // 当前页数
                    current: this.current,
                    // 分类名称
                    flmc: this.selectQuery.name
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
                url: 'api/lbt/v1/del',
                data: param
            })
                .then(res => {
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
        uploadImg(param) {
            let formData = new FormData();
            formData.append('file', param.file)
            // 开启遮罩
            var loding = loadingInstance('this', '图片上传中');
            this.$axios({
                url: this.uploadUrl,
                method: 'POST',
                header: { "Content-Type": "multipart/form-data" },
                data: formData
            })
                .then(res => {
                    this.form.cImgUrl = res.data.data.url
                })
                .catch(err => {
                    debugger
                    this.$message({
                        type: 'error',
                        message: '上传文件异常'
                    })
                })
                .finally(fil => {
                    loding.close();
                })
        },
        // 提交
        submitFl() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    var loding = loadingInstance('.dialog-spfl', '提交中');
                    // 发起请求
                    this.$axios({
                        url: 'api/lbt/v1/addOrUpdate',
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