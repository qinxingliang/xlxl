<template>
    <div>
        <el-form :model="form" :rules="rules" ref="form" label-position="top">
            <el-form-item label="小程序二维码" prop="cImage">
                <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false" :http-request="uploadImg"
                    accept="image/*">
                    <img v-if="form.cImage" :src="form.cImage" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon">
                        <Plus />
                    </el-icon>
                </el-upload>
            </el-form-item>

            <el-form-item label="积分说明" prop="cJfsm">
                <div style="width: 100%;">
                    <TEditor v-model:tinymceHtml="form.cJfsm" :height="400" />
                </div>
            </el-form-item>
            <el-form-item label="关于我们" prop="cGywm">
                <div style="width: 100%;">
                    <TEditor v-model:tinymceHtml="form.cGywm" height="400" />
                </div>
            </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="showDialog = false">取 消</el-button>
            <el-button type="primary" @click="submitInfo">确 定</el-button>
        </div>
    </div>
</template>
<style></style>
<script scoped>

import globalConfig from '@/config'
import { loadingInstance } from '@/utils/util';
import TEditor from '@/components/TEditor.vue';

export default {
    components: {
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
            if (this.form.cImage != null && this.form.cImage != '') {
                return callback();
            } else {
                return callback(new Error('请上传二维码图片'));

            }
        };
        return {
            //上传文件地址
            uploadUrl: globalConfig.url + '/api/file/imgUpload',

            tableData: [],

            form: {},
            rules: {
                cImage: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: checkUpImage
                    }
                ],
                cJfsm: [
                    {
                        required: true,
                        message: '请输入积分说明内容',
                        trigger: 'blur'
                    }

                ],
                cGywm: [
                    {
                        required: true,
                        message: '请输入关于我们内容',
                        trigger: 'blur'
                    }

                ],
            },
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
                url: 'api/info/v1/wx/getInfo',
                data: {}
            })
                .then(res => {
                    this.form = res.data

                })
                .catch(err => {
                    debugger
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
                    this.form.cImage = res.data.data.url
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
        // 提交基础信息
        submitInfo() {
            this.$refs.form.validate(validate => {
                if (validate) {
                    var loding = loadingInstance('this', '数据加载中');
                    this.$axios({
                        url: 'api/info/v1/updateInfo',
                        data: this.form
                    })
                        .then(res => {
                            if (res.data = true) {
                                this.$message({
                                    type: 'success',
                                    message: "更新成功"
                                })
                            }
                        })
                        .finally(res=>{
                            loding.close();
                        })
                }
                else {
                    this.$message({
                        type: 'error',
                        message: "请检查必填项"
                    })
                }
            })
        }


    }
}
</script>