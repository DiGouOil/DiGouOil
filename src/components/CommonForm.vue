<template>
    <el-form :inline="inline" :model="form" ref="form" label-width="100px">
        <el-form-item v-for="item in formLabel" :key="item.model" :label="item.label">
        <el-input v-model="form[item.model]" :placeholder="'input' + item.label" v-if="!item.type"></el-input>
        <el-select v-model="form[item.model]" placeholder="select please" v-if="item.type === 'select'">
            <el-option v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-switch v-model="form[item.model]" v-if="item.type === 'switch'"></el-switch>
        <el-date-picker v-model="form[item.model]" type="date" placeholder="select date please" v-if="item.type === 'date'" value-format="yyyy-MM-dd"> </el-date-picker>
        <el-time-picker v-model="form[item.model]" type="time" placeholder="select time please" v-if="item.type === 'time'" value-format="hh-mm-ss"></el-time-picker>
        <el-checkbox-group v-model="form[item.model]" v-if="item.type === 'checkbox'">
            <el-checkbox v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-checkbox>
        </el-checkbox-group>
        <el-radio-group v-model="form[item.model]" v-if="item.type === 'radio'">
            <el-radio v-for="item in item.opts" :key="item.value" :label="item.label" :value="item.value"></el-radio>
        </el-radio-group>
        </el-form-item>
        <el-form-item><slot></slot></el-form-item>
    </el-form>
</template>

<script>
    export default {
        props:{
            inline:Boolean,
            form:Object,
            formLabel:Array,
            
        }        
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/set";
</style>