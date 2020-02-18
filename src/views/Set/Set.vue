<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="お名前：">
            <el-col :span="11">
            <el-input v-model="form.name"></el-input>
            </el-col>
        </el-form-item>
        <el-form-item label="性別：">
            <el-radio-group v-model="form.sex">
                <el-radio label="1">男性</el-radio>
                <el-radio label="0">女性</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="生年月日">
            <el-col :span="11">
            <el-date-picker type="date" placeholder="選択お願いします" v-model="form.birth" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="身長(cm)">
            <el-input-number v-model="form.height" :min="120" :max="250"></el-input-number>
        </el-form-item>
        <el-form-item label="体重(kg)">
            <el-input-number v-model="form.weight" :min="20" :max="150"></el-input-number>
        </el-form-item>
        <el-form-item label="目標：" >
            <el-radio-group v-model="form.aimed">
                <el-radio :label="-500">減量</el-radio>
                <el-radio :label="0">現状維持</el-radio>
                <el-radio :label="500">増量</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="活動：" >
            <el-radio-group v-model="form.active">
                <el-radio  :label="1.2">あまりアクティブではありません</el-radio>
                <el-radio  :label="1.35">少しアクティブ</el-radio>
                <el-radio  :label="1.55" >アクティブ</el-radio>
                <el-radio  :label="1.95">かなりアクティブ</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">確定</el-button>
            <el-button>キャンセル</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
      return {
        form: {
          name: '',
          sex: '',
          birth:'',
          height: '160',
          weight: '45',
          aimed: '',
          active: '',
          
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/set";

</style>