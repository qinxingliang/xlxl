<template>
    <div style="height: calc(100% - 40px)">
        <div class="select-form">
            <el-form :inline="true" :model="seleectQuery" class="demo-form-inline" @submit.native.prevent>
                <el-form-item label="歌曲名称" class="select-form-item">
                    <el-input v-model="seleectQuery.name" placeholder="歌曲名称" :clearable="true"></el-input>
                </el-form-item>
                <el-form-item label="歌曲类型" class="select-form-item">
                    <el-select v-model="seleectQuery.lx" placeholder="歌曲类型" :clearable="true">
                        <template v-for="(item, index) in gqlx">
                            <el-option :label=item.cFl :value=item.cId></el-option>
                        </template>
                    </el-select>
                </el-form-item>

                <el-form-item label="歌手名称" class="select-form-item">
                    <el-select v-model="seleectQuery.gsmc" placeholder="歌手名称" :clearable="true">
                        <template v-for="(item, index) in gsxx">
                            <el-option :label=item.cName :value=item.cId></el-option>
                        </template>
                    </el-select>
                </el-form-item>

                <el-form-item class="select-form-item">
                    <el-button type="primary" @click="select" native-type="submit">查询</el-button>
                    <el-button type="success" @click="addSp">添加</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- 114px 是搜索内容-->
        <div style="height:calc(100% - 114px)">
            <!-- 32px 是页签高度 20px是页签边距-->
            <div style="height:100%; max-height:842px;">
                <el-table :border="true" :data="tableData" :stripe="true" height="100%" class="table"
                    :row-style="{ height: '80px' }" empty-text="暂无数据" :show-overflow-tooltip="true">
                    <el-table-column prop="cTitle" label="歌曲名称" min-width="15%" align="center">
                    </el-table-column>
                    <el-table-column label="封面图" min-width="10%" align="center">
                        <template v-slot="slot">
                            <el-image style="height: 80px" :src="slot.row.cCover" :preview-src-list="[slot.row.cCover]"
                                :preview-teleported="true" />
                        </template>
                    </el-table-column>

                    <el-table-column label="歌手" min-width="5%" align="center">
                        <template v-slot="slot">
                            {{ getGsmc(slot.row.cSingerId) }}
                        </template>
                    </el-table-column>
                    <el-table-column label="歌手照片" min-width="10%" align="center">
                        <template v-slot="slot">
                            <el-image style="height: 80px" :src="slot.row.cSingerImg" :preview-src-list="[slot.row.cSingerImg]"
                                :preview-teleported="true" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="cSinger" label="作者" min-width="10%" align="center">
                    </el-table-column>
                    <el-table-column label="歌曲类型" min-width="10%" align="center">
                        <template v-slot="slot">
                            <template  v-for="(item,index) in slot.row.cTypeList">
                                {{ item.cFl }} <br>
                            </template>
                        </template>
                    </el-table-column>


                    <el-table-column label="是否展示" min-width="5%" align="center">
                        <template v-slot="slot">
                            {{ slot.row.nShow == 1 ? "是" : "否" }}
                        </template>
                    </el-table-column>

                    <el-table-column label="是否推荐音乐" min-width="5%" align="center">
                        <template v-slot="slot">
                            {{ slot.row.nTjyy == 1 ? "是" : "否" }}
                        </template>
                    </el-table-column>

                    <el-table-column label="是否推荐视频" min-width="5%" align="center">
                        <template v-slot="slot">
                            {{ slot.row.nTjsp == 1 ? "是" : "否" }}
                        </template>
                    </el-table-column>

                    <el-table-column label="歌曲音频" min-width="10%" align="center">
                        
                        <template v-slot="slot">
                            <audio  controls >
                                <source :src="slot.row.cAudio[0].response">
                            </audio>
                        </template>
                    </el-table-column>

                    <el-table-column label="歌曲视频mv" min-width="10%" align="center">
                        <template v-slot="slot">
                            <template v-if="slot.row.cVideo">
                                <video :src="slot.row.cVideo[0].response" style="width: 100% ;height:80px" controls></video>
                            </template>
                        </template>
                    </el-table-column>

                    <el-table-column label="操作" min-width="10%" align="center">
                        <template v-slot="slot">
                            <el-button type="primary" @click="updateSp(slot.row)">编辑</el-button>
                            <el-button type="danger" @click="deleteSp(slot.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <el-pagination background layout="prev, pager, next" :total=total :page-size="10" class="pagination"
                v-model:current-page="current" @current-change="selectFormDb" />
        </div>


        <!-- 弹出层 新建歌曲或者是修改-->
        <el-dialog :title="isAdd ? '添加歌曲' : '修改歌曲'" v-model="showDialog" class="dialog-sp" :close-on-press-escape="false"
            :lock-scroll="true" :close-on-click-modal="false">
            <el-scrollbar max-height="740px">
                <el-form :model="form" :rules="rules" ref="form" label-position="top">
                    <div style="display: flex;">
                        <el-form-item label="歌曲名称" prop="cTitle" style="flex: 1;">
                            <el-input v-model="form.cTitle" placeholder="请输入歌曲名称" clearable class="input"></el-input>
                        </el-form-item>
                        <el-form-item label="歌曲作者" prop="cSinger" style="flex: 1;">
                            <el-input v-model="form.cSinger" placeholder="请输入歌曲作者" clearable class="input"></el-input>
                        </el-form-item>
                    </div>

                    <div style="display: flex;">
                        <el-form-item label="歌手名称" prop="cSingerId" style="flex: 1;">
                            <el-select v-model="form.cSingerId" placeholder="歌手名称" :clearable="true" class="select"
                                :filterable="true">
                                <template v-for="(item, index) in gsxx">
                                    <el-option :label="item.cName" :value="item.cId"></el-option>
                                </template>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="是否展示" prop="nShow" style="flex: 1;">
                            <el-select v-model="form.nShow" placeholder="是否展示" :clearable="true" class="select">
                                <el-option label="是" :value="1"></el-option>
                                <el-option label="否" :value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>

                    <div style="display: flex;">
                        <el-form-item label="是否推荐音乐" prop="nTjyy" style="flex: 1;">
                            <el-select v-model="form.nTjyy" placeholder="是否推荐音乐" :clearable="true" class="select">
                                <el-option label="是" :value="1"></el-option>
                                <el-option label="否" :value="0"></el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item label="是否推荐视频" prop="nTjsp" style="flex: 1;">
                            <el-select v-model="form.nTjsp" placeholder="是否推荐视频" :clearable="true" class="select">
                                <el-option label="是" :value="1"></el-option>
                                <el-option label="否" :value="0"></el-option>
                            </el-select>
                        </el-form-item>
                    </div>


                    <div style="display: flex;">
                        <el-form-item label="封面图" prop="cCover" style="flex: 1;">
                            <el-upload class="avatar-uploader" :show-file-list="false"
                                :http-request="(parms) => uploadImg(parms, true)" accept="image/*">
                                <img v-if="form.cCover" :src="form.cCover" class="avatar" />
                                <el-icon v-else class="avatar-uploader-icon">
                                    <Plus />
                                </el-icon>
                            </el-upload>
                        </el-form-item>
                        <el-form-item label="歌曲时长" prop="cTimeLength" style="flex: 1;">
                            <el-input v-model="form.cTimeLength" placeholder="请输入歌曲时长" clearable class="input"></el-input>
                        </el-form-item>
                    </div>

                    <el-form-item label="音频" prop="cAudio">
                        <el-upload class="upload-demo" drag action="" multiple v-model:file-list="form.cAudio"
                            :http-request="(parms) => uploadImg(parms, false)" style="height: 100%; width: 100%;" :limit="1"
                            accept="audio/*">
                            <el-icon class="el-icon--upload"><upload-filled></upload-filled></el-icon>
                            <div class="el-upload__text">
                                <em>点击上传</em>
                            </div>
                        </el-upload>
                    </el-form-item>

                    <el-form-item label="视频mv">
                        <el-upload class="upload-demo" drag action="" multiple v-model:file-list="form.cVideo"
                            :http-request="(parms) => uploadImg(parms, false)" style="height: 100%; width: 100%;" :limit="1"
                            accept="video/*">
                            <el-icon class="el-icon--upload"><upload-filled></upload-filled></el-icon>
                            <div class="el-upload__text">
                                <em>点击上传</em>
                            </div>
                        </el-upload>
                    </el-form-item>

                    <template v-for="(item, index) in form.cTypeList">
                        <el-form-item label="歌曲类型" :prop="'cTypeList.' + index" :rules="rules.type">
                            <el-select v-model="form.cTypeList[index]" placeholder="歌曲类型" :clearable="true" value-key="cId"
                                style="width:calc(100% - 40px)">
                                <el-option :label=item2.cFl :value="item2" v-for="(item2, index2) in gqlx"
                                    :key="item2.cId"></el-option>
                            </el-select>
                            <el-icon @click="remove(index)" style="margin-left: 20px;">
                                <Remove />
                            </el-icon>
                        </el-form-item>
                    </template>
                    <el-button @click="add" style="width: 100%;">添加歌曲类型</el-button>
                </el-form>
            </el-scrollbar>
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

.select,
.input {
    width: 80%;
}

.dialog-footer {
    margin-top: 10px;
}

.dialog-sp {
    margin-top: 2%;
    width: 800px;
    height: 900px;
    /* max-height: 80%; */
}

.el-scrollbar__view {
    padding-right: 10px;
    height: 100%;
}
</style>
<script scoped>

import { Plus, UploadFilled } from '@element-plus/icons-vue'
import globalConfig from '../config'
import { loadingInstance } from '../utils/util';

export default {
    components: {
        Plus,
        UploadFilled
    },

    data() {
        /**
         * 上传文件校验
         * @param {*} rule 
         * @param {*} value 
         * @param {*} callback 
         */
        var checkUpImage = (rule, value, callback) => {
            if (this.form.cCover != null && this.form.cCover != '') {
                return callback();
            } else {
                return callback(new Error('请上传封面图'));

            }
        };
        return {
            uploadUrl: globalConfig.url + '/api/file/imgUpload',

            seleectQuery: {},
            tableData: [

            ],
            // 歌曲类型
            gqlx: [],
            // 歌手信息
            gsxx: [],
            // 歌曲数量
            total: 0,
            // 是否为添加页面
            isAdd: true,
            // 弹出层
            showDialog: false,
            // 提交表单
            form: {

            },
            // 校验规则
            rules: {
                cTitle: [
                    {
                        required: true,
                        message: '请输入歌曲名称',
                        trigger: 'blur'
                    }

                ],
                cSinger: [
                    {
                        required: true,
                        message: '请输入歌曲作者',
                        trigger: 'blur'
                    }

                ],

                cSingerId: [
                    {
                        required: true,
                        trigger: 'blur',
                        message: '请选择歌手'
                    }
                ],

                nShow: [
                    {
                        required: true,
                        trigger: 'blur',
                        message: '请选择是否显示'
                    }
                ],
                cCover: [
                    {
                        required: true,
                        trigger: 'blur',
                        validator: checkUpImage
                    }
                ],
                nTjyy: [
                    {
                        required: true,
                        trigger: 'blur',
                        message: '请选择是否推荐音乐'
                    }
                ],
                nTjsp: [
                    {
                        required: true,
                        trigger: 'blur',
                        message: '请选择是否推荐视频'
                    }
                ],
                cTimeLength: [
                    {
                        required: true,
                        trigger: 'blur',
                        message: '请输入歌曲时长'
                    }
                ],
                cAudio: [
                    {
                        required: true,
                        trigger: 'blur',
                        message: '请上传音频'
                    }
                ],
                type: [
                    {
                        required: true,
                        trigger: 'blur',
                        message: '请选择歌曲类型'
                    }
                ],
            },
            // 页数
            current: 1,
        }
    },
    beforeMount() {
        var that = this;
        // 渲染之前执行脚本
        this.$axios({
            method: 'POST',
            url: '/api/spfl/v1/getAll'
        })
            .then(res => {
                that.gqlx = res.data.data.list;
                this.getGs();

            })
            .catch(err => {
                debugger
            })
    },
    methods: {
        /**
         * 添加选项事件
         */
        add() {
            if (!this.form.cTypeList) {
                this.form.cTypeList = [];
            }
            this.form.cTypeList.push({})

        },
        /**
 * 移除选项事件
 * @param {} param 
 */
        remove(param) {
            this.form.cTypeList.splice(param, 1);
        },
        // 获取歌手信息
        getGs() {
            this.$axios({
                method: 'POST',
                url: '/api/singer/v1/getAll'
            })
                .then(res => {
                    this.gsxx = res.data.data.list;
                    // 获取歌曲
                    this.selectFormDb();
                })
                .catch(err => {
                })
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
                url: 'api/music/v1/select',
                data: {
                    ...this.seleectQuery,
                    // 当前页数
                    current: this.current,
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

        // 添加歌曲按钮事件
        addSp() {
            this.isAdd = true;
            this.form = {
                cTypeList: [{}]
            };
            this.showDialog = true;
        },
        // 删除操作
        deleteSp(param) {
            var loding = loadingInstance('this', '删除中');

            // 发起请求
            this.$axios({
                url: 'api/music/v1/del',
                data: param
            })
                .then(res => {
                    this.$message({
                        type: 'success',
                        message: '删除成功'
                    })
                    // 关闭当前弹出层
                    this.showDialog = false;
                    // 刷新当前数据
                    this.selectFormDb();
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
        // 获取歌手名称
        getGsmc(param) {
            for (var i = 0; i < this.gsxx.length; i++) {
                if (this.gsxx[i].cId == param) {
                    return this.gsxx[i].cName
                }
            }
        },
        // 添加确认事件
        submitFl() {
            if (!this.form.cTypeList || this.form.cTypeList.length == 0) {
                this.$message(
                    {
                        type: 'error',
                        message: '请添加歌曲分类'
                    }
                )
                return
            }
            this.$refs.form.validate(valid => {
                if (valid) {
                    var loding = loadingInstance('.dialog-sp', '提交中');
                    // 获取歌手头像 
                    for (var i = 0; i < this.gsxx.length; i++) {
                        if (this.gsxx[i].cId == this.form.cSingerId) {
                            this.form.cSingerImg = this.gsxx[i].cCover
                            break
                        }
                    }

                    // 发起请求
                    this.$axios({
                        url: 'api/music/v1/addOrUpdate',
                        data: this.form
                    })
                        .then(res => {
                            this.$message({
                                type: 'success',
                                message: '提交成功'
                            })
                            // 关闭当前弹出层
                            this.showDialog = false;
                            // 刷新当前数据
                            this.selectFormDb();
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
        // 上传图片
        uploadImg(param, isfm) {
            return new Promise((resolve, reject) => {
                let formData = new FormData();
                formData.append('file', param.file)
                // 开启遮罩
                var loding = loadingInstance('this', '文件上传中');
                this.$axios({
                    url: this.uploadUrl,
                    method: 'POST',
                    header: { "Content-Type": "multipart/form-data" },
                    data: formData
                })
                    .then(res => {
                        if (isfm) {
                            this.form.cCover = res.data.data.url
                            resolve();
                        }
                        else {
                            resolve(res.data.data.url);
                        }

                    })
                    .catch(err => {
                        debugger
                        this.$message({
                            type: 'error',
                            message: '上传文件异常'
                        })
                        reject();
                    })
                    .finally(fil => {
                        loding.close();
                    })
            });
        },

        // 编辑歌曲按钮
        updateSp(param) {
            this.isAdd = false;
            this.form = param
            this.showDialog = true;
        }
    }
}
</script>