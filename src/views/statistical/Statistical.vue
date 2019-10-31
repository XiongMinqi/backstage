<template>
  <div>
    <div class="title">
      <div class="jinri">
        <div class="word">
          <div>今日发布</div>
          <div>{{ sum }}</div>
        </div>
        <div class="img"><i class="el-icon-check"></i></div>
      </div>
      <div class="yuanchuang">
        <div class="word">
          <div>原创文章</div>
          <div>{{ amount }}</div>
        </div>
        <div class="img"><i class="el-icon-tickets"></i></div>
      </div>
      <div class="liuyan">
        <div class="word">
          <div>新留言</div>
          <div>1</div>
        </div>
        <div class="img"><i class="el-icon-service"></i></div>
      </div>
      <div class="xinxi">
        <div class="word">
          <div>新消息</div>
          <div>1</div>
        </div>
        <div class="img"><i class="el-icon-chat-line-square"></i></div>
      </div>
    </div>
    <div class="pie">
      <div class="pic1">
        <ve-pie :data="list1"></ve-pie>
      </div>
      <div class="pic2">
        <ve-ring :data="list2" :settings="chartSettingsour"></ve-ring>
      </div>
    </div>
    <div class="waterfall">
      <ve-waterfall :data="list3" :settings="chartSettingfall"></ve-waterfall>
    </div>
  </div>
</template>

<script>
let _ = require("lodash");
export default {
  name: "Statistical",
  components: {},
  props: {},
  data() {
    // this.chartSettingcate = {
    //   dimension: "category",
    //   metrics: "num"
    // };
    this.chartSettingsour = {
      dimension: "source",
      metrics: "num",
      roseType: "radius"
    };
    this.chartSettingfall = {
      dimension: "date",
      metrics: "num"
    };
    return {
      sum: 0,
      amount: 0,
      list: [],
      list1: {
        columns: ["category", "num"],
        rows: []
      },
      newcate: [],
      list2: {
        columns: ["source", "num"],
        rows: []
      },
      newsour: [],
      list3: {
        columns: ["date", "num"],
        rows: []
      }
    };
  },
  methods: {
    getlist() {
      this.$axios
        .req("api/article/allArticle")
        .then(res => {
          this.list = res.data;
          // console.log(res);
          this.getcategory();
          this.getsource();
          this.getdate();
        })
        .catch(arr => {
          console.log(arr);
        });
    },
    getcategory() {
      let cate = _.groupBy(this.list, "category");
      let num = 0;
      let category = "";
      let exist = {};
      for (let i in cate) {
        num = cate[i].length;
        category = i;
        exist = {
          category: category,
          num: num
        };
        this.list1.rows.push(exist);
      }
    },
    getsource() {
      let sour = _.groupBy(this.list, "source");
      this.amount = sour["原创"].length;
      let num = 0;
      let source = "";
      let exists = {};
      for (let i in sour) {
        num = sour[i].length;
        source = i;
        exists = {
          source: source,
          num: num
        };
        this.list2.rows.push(exists);
      }
    },
    getdate() {
      this.list.map(item => {
        // console.log(item.date,1111)
        //判断现在时间和item.date时间的格式以及比较
        if (item.date.indexOf("年") === -1)
          item.date = this.$dayjs(item.date).format("YYYY年MM月DD日");
        if (item.date.indexOf("秒") === -1)
          item.date = item.date.split("日")[0] + "日";

        let time = Date.now();
        time = this.$dayjs(time).format("YYYY年MM月DD日");
        if (time === item.date) {
          this.sum += 1;
        }
      });
      let dat = _.groupBy(this.list, "date");
      let num = 0;
      let date = "";
      let existes = {};
      for (let i in dat) {
        num = dat[i].length;
        date = i;

        existes = {
          date: date,
          num: num
        };
        this.list3.rows.push(existes);
        // console.log(this.list3.rows, 33);
      }
    }
  },
  mounted() {
    this.getlist();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped lang="scss">
.title {
  display: flex;
}
.jinri {
  padding: 5px;
  display: flex;
  width: 25%;
  background: #81ffab;
  /*height: 40px;*/
  line-height: 30px;
  text-align: center;
}
.yuanchuang {
  padding: 5px;
  display: flex;
  width: 25%;
  background: #ffa97b;
  /*height: 40px;*/
  line-height: 30px;
  text-align: center;
}
.liuyan {
  padding: 5px;
  display: flex;
  width: 25%;
  background: darkorchid;
  /*height: 40px;*/
  line-height: 30px;
  text-align: center;
}
.xinxi {
  padding: 5px;
  display: flex;
  width: 25%;
  background: #93ffba;
  /*height: 40px;*/
  line-height: 30px;
  text-align: center;
}
.word {
  margin: 4px;
  position: relative;
  left: 40%;
  color: white;
}
.img {
  position: relative;
  left: 70%;
  justify-content: end;
  line-height: 60px;
  color: white;
}
.pie {
  display: flex;
  margin-top: 25px;
}
.pic1 {
  width: 50%;
}
.pic2 {
  width: 50%;
}
</style>
