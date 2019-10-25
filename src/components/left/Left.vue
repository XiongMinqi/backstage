<template>
  <div style="width: 100%; height: 100%; background:#545c64">
    <el-menu
      default-active
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div @click="jump1">
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </div>
      <div @click="jump2">
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">分页表格</span>
        </el-menu-item>
      </div>
      <div @click="jump3">
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">标签页</span>
        </el-menu-item>
      </div>
      <div @click="jump4">
        <el-menu-item index="4">
          <i class="el-icon-picture-outline"></i>
          <span slot="title">图片上传</span>
        </el-menu-item>
      </div>
      <div @click="jump5">
        <el-menu-item index="5">
          <i class="el-icon-message"></i>
          <span slot="title">已发表</span>
        </el-menu-item>
      </div>
      <div @click="jump6">
        <el-menu-item index="6">
          <i class="el-icon-edit"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
      </div>
      <div @click="jump7">
        <el-menu-item index="7">
          <i class="el-icon-s-data"></i>
          <span slot="title">统计</span>
        </el-menu-item>
      </div>
      <div @click="jump8">
        <el-menu-item index="8">
          <i class="el-icon-share"></i>
          <span slot="title">导出excel</span>
        </el-menu-item>
      </div>
      <div @click="jump9">
        <el-menu-item index="9">
          <i class="el-icon-switch-button"></i>
          <span slot="title">退出系统</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Left",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  methods: {
    jump1() {
      this.$router.push("/home");
    },
    jump2() {
      this.$router.push("/pagingtable");
    },
    jump3() {
      this.$router.push("/label");
    },
    jump4() {
      this.$router.push("/picture");
    },
    jump5() {
      this.$router.push("/published");
    },
    jump6() {
      this.$router.push("/publishedarticles");
    },
    jump7() {
      this.$router.push("/statistical");
    },
    jump8() {
      this.$router.push("/excel");
    },
    jump9() {
      this.$router.push("/logout");
    }
  },
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss"></style>
