<template>
  <div style="text-align:center;">
    <el-upload action="https://chinain-pic.oss-cn-hangzhou.aliyuncs.com" :data="dataObj" :list-type="uploadType==1?'picture-card':'text'" :multiple="false" :show-file-list="showFileList"
      :file-list="fileList" :before-upload="beforeUpload" :on-remove="handleRemove" :on-success="handleUploadSuccess" :on-preview="handlePreview" :accept="acceptType" :param="param"
      :type="uploadType">
      <el-button size="small" type="primary">点击上传</el-button>
      <!-- <div slot="tip" class="el-upload__tip">{{uploadType==1?'只能上传'+acceptType+'文件，且不超过10MB':uploadType==2?'只能上传'+acceptType+'文件，且不超过20MB':'只能上传'+acceptType+'文件，且不超过500MB'}}
        <span v-if="$route.name=='cmstab'">{{';格式: 380px*220px 或 16:9 的图片'}}</span>
        <span v-if="$route.name=='cms-banner'">{{';格式: 1920px*800px'}}</span>
        <span v-if="$route.name=='cms-activity'">{{';格式: 380px*220px 或 16:9 的图片'}}</span>
      </div> -->
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="fileList[0].url" alt="">
    </el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import { getFileSha1 } from '../assets/js/Sha1'
import { policy } from '../apis/policy'
export default {
  name: 'singleUpload',
  props: {
    value: String,
    acceptType: String,
    uploadType: {
      type: String,
      default: '1'
    },
    param: {
      type: String,
      default: '4'
    }
  },
  computed: {
    imageUrl () {
      return this.value
    },
    imageName () {
      if (this.value != null && this.value !== '') {
        return this.value.substr(this.value.lastIndexOf('/') + 1)
      } else {
        return null
      }
    },
    fileList () {
      return [{
        name: this.imageName,
        url: this.imageUrl
      }]
    },
    showFileList: {
      get: function () {
        return this.value !== null && this.value !== '' && this.value !== undefined
      },
      set: function (newValue) {
      }
    }
  },
  data () {
    return {
      dataObj: {
        policy: '',
        signature: '',
        key: '',
        ossaccessKeyId: '',
        dir: '',
        host: ''
      },
      dialogVisible: false
    }
  },
  methods: {
    emitInput (val) {
      this.$emit('input', val)
    },
    handleRemove (file, fileList) {
      this.emitInput('')
    },
    handlePreview (file) {
      this.dialogVisible = true
    },
    async beforeUpload (file) {
      let _self = this
      const fileSha1 = await getFileSha1(file)
      return new Promise((resolve, reject) => {
        policy({ fileName: file.name, fileSize: file.size, fileSha1: fileSha1 }).then(response => {
          _self.dataObj.policy = response.data.data.policy
          _self.dataObj.signature = response.data.data.signature
          _self.dataObj.ossaccessKeyId = response.data.data.accessid
          _self.dataObj.key = response.data.data.dir + file.name
          _self.dataObj.dir = response.data.data.dir
          _self.dataObj.host = response.data.data.host
          resolve(true)
        }).catch(err => {
          console.log('出错了...', err)
          reject(new Error(false))
        })
      })
    },
    handleUploadSuccess (res, file) {
      console.log(file)
      console.log('上传成功...')
      this.showFileList = true
      this.fileList.pop()
      this.fileList.push({ name: file.name, url: this.dataObj.host + '/' + this.dataObj.key })
      this.emitInput(this.fileList[0].url)
    }
  }
}
</script>
<style>
</style>


