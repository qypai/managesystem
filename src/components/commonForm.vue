<template>
  <el-form
    label-width="70px"
    ref="form"
    :model="form"
    :inline='inline'
    size="mini"
  >
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <el-input
        v-if="item.type==='input'"
        :placeholder='`请输入${item.label}`'
        v-model="form[item.model]"
      ></el-input>
      <el-select
        v-if="item.type==='select'"
        :placeholder='`请选择${item.label}`'
      >
        <el-option
          v-for="item in item.opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-date-picker
        type="date"
        placeholder="选择日期"
        v-if="item.type==='date'"
        v-model="form[item.model]"
      ></el-date-picker>
    </el-form-item>
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'commonform',
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean


  }
  ,
  data () {
    return {

    }
  },

}
</script>

<style>
</style>