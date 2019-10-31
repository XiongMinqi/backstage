<template>
  <div class="back">
    <div class="title">
      <div class="labal">
        <div class="weidu" @click="jump1(1)">
          <el-link type="primary">未读消息({{ unreadlist.length }})</el-link>
        </div>
        <div class="yidu" @click="jump2(2)">
          <el-link type="primary">已读消息({{ readlist.length }})</el-link>
        </div>
        <div class="huishou" @click="jump3(3)">
          <el-link type="primary">回收站({{ recyclelist.length }})</el-link>
        </div>
      </div>
    </div>
    <div class="form">
      <div v-if="num === 1">
        <div v-if="unreadlist.length > 0">
          <div class="xinxi">
            <div class="msg" v-for="(item, index) in unreadlist" :key="index">
              <div>
                <el-row>
                  <el-col :span="24"
                    >{{ item.msg }}
                    <div class="grid-content bg-white"></div
                  ></el-col>
                </el-row>
              </div>

              <div>
                {{ item.time }}
                <el-button @click="read(item, index)">标为已读</el-button>
              </div>
            </div>

            <div>
              <el-row>
                <el-col :span="24">
                  <el-button type="primary" @click="allread"
                    >全部标为已读</el-button
                  >
                  <div class="grid-content bg-white"></div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div v-else class="liuyan">当前暂无未读消息</div>
      </div>
      <div v-if="num === 2">
        <div v-if="readlist.length > 0">
          <div class="xinxi">
            <div class="msg" v-for="(item, index) in readlist" :key="index">
              <div>
                <el-row>
                  <el-col :span="24"
                    >{{ item.msg }}
                    <div class="grid-content bg-white"></div
                  ></el-col>
                </el-row>
              </div>

              <div>
                {{ item.time }}
                <el-button @click="deleteone(item, index)">删除</el-button>
              </div>
            </div>

            <div>
              <el-row>
                <el-col :span="24">
                  <el-button type="danger" @click="alldelete"
                    >删除全部</el-button
                  >
                  <div class="grid-content bg-white"></div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div v-else class="liuyan">当前已读消息被清空</div>
      </div>
      <div v-if="num === 3">
        <div v-if="recyclelist.length > 0">
          <div class="xinxi">
            <div class="msg" v-for="(item, index) in recyclelist" :key="index">
              <div>
                <el-row>
                  <el-col :span="24"
                    >{{ item.msg }}
                    <div class="grid-content bg-white"></div
                  ></el-col>
                </el-row>
              </div>

              <div>
                {{ item.time }}
                <el-button type="warning" @click="back(item, index)"
                  >还原</el-button
                >
              </div>
            </div>

            <div>
              <el-row>
                <el-col :span="24">
                  <el-button type="info" @click="backall">清空回收站</el-button>
                  <div class="grid-content bg-white"></div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
        <div v-else class="liuyan">所有消息已清空</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Label",
  components: {},
  props: {},
  data() {
    return {
      num: 1,
      unreadlist: [
        {
          msg: "[系统通知] 该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          msg: "今晚2点整发大红包,先到先得",
          time: "2018-04-19 21:00:00"
        },
        {
          msg: "跟我走吧，天亮就出发",
          time: "2018-04-19 21:00:00"
        },
        {
          msg: "梦已经醒来，心不在害怕",
          time: "2018-04-19 21:00:00"
        },
      ],
      readlist: [
        {
          msg: "[系统通知] 该系统将于今晚凌晨2点到5点进行升级维护",
          time: "2018-04-19 20:00:00"
        },
        {
          msg: "小爱同学，放个屁",
          time: "2018-04-19 20:00:00"
        },
        {
          msg: "小熊维尼爱吃蜂蜜",
          time: "2018-04-19 20:00:00"
        },
      ],
      recyclelist: [
        {
          msg: "[系统通知] 您的优惠券已经过期",
          time: "2018-04-19 20:00:00"
        },
        {
          msg: "支付宝到账100万元",
          time: "2018-04-19 20:00:00"
        },
        {
          msg: "微信收款500万元",
          time: "2018-04-19 20:00:00"
        },
      ]
    };
  },
  methods: {
    jump1(index) {
      this.num = index;
    },
    jump2(index) {
      this.num = index;
    },
    jump3(index) {
      this.num = index;
    },
    read(item, index) {
      this.unreadlist.splice(index, 1);
      this.readlist.push(item);
    },
    allread() {
      this.readlist = this.readlist.concat(this.unreadlist);
      this.unreadlist.splice(0);
    },
    deleteone(item, index) {
      this.readlist.splice(index, 1);
      this.recyclelist.push(item);
    },
    alldelete() {
      this.recyclelist = this.recyclelist.concat(this.readlist);
      this.readlist.splice(0);
    },
    back(item, index) {
      this.recyclelist.splice(index, 1);
      this.readlist.push(item);
    },
    backall() {
      this.recyclelist.splice(0);
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

<style scoped lang="scss">
.liuyan {
  text-align: center;
}
.title {
  height: 58px;
}
.labal {
  display: flex;
  background: #f0f2f5;
  border-bottom: 1px solid #d0d2d5;
  height: 45px;
  font-size: 28px;
  div {
    margin-left: 20px;
    margin-right: 15px;
    line-height: 42px;
  }
}
.back {
  width: 100%;
  height: 847px;
}
.form {
  line-height: 65px;
  div {
    background: white;
  }
}
.xinxi {
  width: 97%;
  margin: 0 auto;
  background: white;
}
.msg {
  border-bottom: 1px solid #e0e2e5;
  display: flex;
  justify-content: space-between;
}
</style>
