<template>
    <div style="height: calc(100% - 40px)">
        <div class="select-form">
            <el-form :inline="true" :model="selectQuery" class="demo-form-inline" @submit.native.prevent>
                <el-form-item label="问题内容" class="select-form-item">
                    <el-input v-model="selectQuery.name" placeholder="问题内容" :clearable="true"></el-input>
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
                    <el-table-column prop="cWtnr" label="问题内容" min-width="25%" align="center">
                    </el-table-column>
                    <el-table-column prop="nScore" label="问题分数" min-width="25%" align="center">
                    </el-table-column>
                    <el-table-column label="问题答案" min-width="25%" align="center">
                        <template v-slot="slot">
                            {{ getDa(slot.row) }}
                        </template>

                    </el-table-column>

                    <el-table-column label="操作" min-width="25%" align="center">
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
        <!-- 弹出层 新建问题或者是问题修改-->
        <el-dialog :title="isAdd ? '添加问题' : '修改问题'" v-model="showDialog" class="dialog-wt" :close-on-press-escape="false"
            :close-on-click-modal="false">
            <el-form :model="form" :rules="rules" ref="form" label-position="top">
                <el-form-item label="问题内容" prop="cWtnr">
                    <el-input v-model="form.cWtnr" placeholder="请输入问题内容" clearable></el-input>
                </el-form-item>
                <el-form-item label="问题分数" prop="nScore">
                    <el-input-number :controls="false" v-model="form.nScore" placeholder="请输入问题分数" style="width: 100%;text-align: left;"></el-input-number>
                </el-form-item>
                <el-form-item label="问题答案" prop="nType" >
                    <el-select v-model="form.nType" placeholder="问题答案" :clearable="true" style="width: 100%;">
                        <template v-for="(item,index) in type">
                            <el-option :label="item.label" :value="item.value"></el-option>
                        </template>
                    </el-select>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button @click="showDialog = false">取 消</el-button>
                <el-button type="primary" @click="submitWt">确 定</el-button>
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

:deep(.dialog-wt ){
    width: 500px;
    height: 400px;
}
:deep(.el-input-number .el-input__inner){
    text-align: left;
}
</style>
<script scoped>
import { Plus } from '@element-plus/icons-vue'
import { loadingInstance } from '../utils/util';
export default {
    components: {
        Plus
    },
    data() {

        return {
            type:[
                {
                    label: "可回收物",
                    value: 0
                },
                {
                    label: "有害垃圾",
                    value: 1
                },
                {
                    label: "厨余垃圾",
                    value: 2
                },
                {
                    label: "其他垃圾",
                    value: 3
                },
            ],
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
                cImgUrl: ''
            },
            rules: {
                cWtnr: [
                    {
                        required: true,
                        message: '请输入问题内容',
                        trigger: 'blur'
                    }
                ],
                nScore: [
                    {
                        required: true,
                        message: '请输入问题分数',
                        trigger: 'blur'
                    }
                ],
                nType: [
                    {
                        required: true,
                        message: '请选择问题答案',
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
        getDa(param){
            for (const key in this.type) {
              if(this.type[key].value == param.nType){
                return this.type[key].label
              } 
            }
        },
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
                url: 'api/exam/v1/select',
                data: {
                    // 当前页数
                    current: this.current,
                    // 问题
                    kstm: this.selectQuery.name
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
                url: 'api/exam/v1/del',
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

        // 提交
        submitWt() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    var loding = loadingInstance(null, '提交中');
                    // 发起请求
                    this.$axios({
                        url: 'api/exam/v1/addOrUpdate',
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