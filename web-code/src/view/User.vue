<template>
    <div style="height: calc(100% - 40px)">
        <div class="select-form">
            <el-form :inline="true" :model="selectQuery" class="demo-form-inline" @submit.native.prevent>
                <el-form-item label="用户id" class="select-form-item">
                    <el-input v-model="selectQuery.userId" placeholder="用户id" :clearable="true"></el-input>
                </el-form-item>

                <el-form-item label="用户昵称" class="select-form-item">
                    <el-input v-model="selectQuery.nickName" placeholder="用户昵称" :clearable="true"></el-input>
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
                    
                    <el-table-column prop="cOpenid" label="用户id" min-width="34%" align="center"></el-table-column>
                    <el-table-column prop="cNickName" label="用户昵称" min-width="33%" align="center">
                    </el-table-column>
                    <el-table-column label="用户头像" min-width="33%" align="center">
                        <template v-slot="slot">
                            <el-image style="height: 80px" :src="slot.row.cIcon" :preview-src-list="[slot.row.cIcon]"
                                :preview-teleported="true" />
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-pagination background layout="prev, pager, next" :total=total :page-size="10" class="pagination" v-model:current-page="current" @current-change="selectFormDb"/>
        </div>
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
    width: 80%;
    height: 700px;
}
</style>
<script scoped>
import { Plus } from '@element-plus/icons-vue'
import globalConfig from '../config'
import { loadingInstance } from '../utils/util';
import TEditor from '@/components/TEditor.vue';


export default {
    components: {
        Plus,
        TEditor
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
                url: 'api/wx/v1/select',
                data: {
                    // 当前页数
                    current: this.current,
                    // 用户id
                    userId: this.selectQuery.userId,
                    // 用户昵称
                    nickName:this.selectQuery.nickName
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

    }
}
</script>