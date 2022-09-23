/**
 * 设备监控切换特效
 * 立即执行函数 （finction（）{}）（）；防止变量冲突
 */
$(function () {
  /* $(".monitor .tabs>a").click(function(){
		
	}); */
  $(".monitor .tabs").on("click", "a", function () {
    //切换选中特效
    //  .siblings("a") 兄弟元素
    $(this).addClass("active").siblings("a").removeClass("active");
    //切换显示的文本内容
    $(".monitor .content")
      .eq($(this).index())
      .show()
      .siblings(".content")
      .hide();
  });
});
//点位分布统计模板
$(function () {
  //1.创建echarts对象，告诉当前这个echarts对象的展示容器
  //初始化echarts对象
  var myChart = echarts.init(document.querySelector(".pie"));
  //2.定义echarts的展示数据
  var option = {
    //提示框
    tooltip: {
      //triggerOn://触发时机
      trigger: "item", //触发类型
      formatter: "{a}<br/>{b} : {c} ({d}%)",
    },
    //配置颜色，注意颜色书写的位置
    color: [
      "#5470c6",
      "#91cc75",
      "#fac858",
      "#ee6666",
      "#73c0de",
      "#3ba272",
      "#fc8452",
      "#9a60b4",
    ],
    series: [
      {
        name: "点位统计",
        type: "pie", //图形类型
        //如果radius是百分比则必须加引号。
        //设置零个半径
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        data: [
          //展示的数据
          {
            // 数据项的名称
            name: "云南",
            // 数据项值8
            value: 20,
          },
          {
            // 数据项的名称
            name: "北京",
            // 数据项值8
            value: 26,
          },
          {
            // 数据项的名称
            name: "山东",
            // 数据项值8
            value: 24,
          },
          {
            // 数据项的名称
            name: "河北",
            // 数据项值8
            value: 25,
          },
          {
            // 数据项的名称
            name: "江苏",
            // 数据项值8
            value: 20,
          },
          {
            // 数据项的名称
            name: "浙江",
            // 数据项值8
            value: 25,
          },
          {
            // 数据项的名称
            name: "四川",
            // 数据项值8
            value: 30,
          },
          {
            // 数据项的名称
            name: "湖北",
            // 数据项值8
            value: 42,
          },
        ],
        label: {
          fontSize: 10,
        },
        lableLine: {
          length: 6,
          length2: 8,
        },
      },
    ],
  };
  //3.配置项和数据给我们的实例化对象
  myChart.setOption(option);
});
//柱形图
$(function () {
  //1.实例化echarts对象
  var myChart = echarts.init(document.querySelector(".bar"));

  //2.配置项
  var option = {
    /**
     * 设置渐变的线形
     */
    color: new echarts.graphic.LinearGradient(
      //(x1,y2) (x2,y2)之间渐变
      0,
      0,
      0,
      1,
      [
        {
          offset: 0,
          color: "#00fffb",
        }, //起始颜色
        {
          offset: 1,
          color: "#0061ce",
        }, //结束颜色
      ]
    ),
    tooltip: {
      trigger: "item", //触发类型
    },
    grid: {
      left: "0%",
      right: "3%",
      bottom: "3%",
      top: "3%",
      containLabel: true,
      show: true,
      borderColor: "rgba(0,240,255,0.3)",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
        //坐标轴刻度
        axisTick: {
          show: false,
          alignWithLabel: false,
        },
        axisLabel: {
          color: "#4c9bfd",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,240,255,0.3)",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          show: false,
          alignWithLabel: false,
        },
        axisLabel: {
          color: "#4c9bfd",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0,240,255,0.3)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0,240,255,0.3)",
          },
        },
      },
    ],
    series: [
      {
        name: "直接访问",
        type: "bar",
        barWidth: "60%",
        data: [
          2100, 1900, 1700, 1560, 1400, 1000, 1000, 1000, 900, 750, 600, 480,
          240,
        ],
      },
    ],
  };
  //3.把配置设置到echarts对象中
  myChart.setOption(option);
});
/**
 * 当页面加载的时候自动执行
 */
// 销售额
$(function () {
  //销售额统计可视化
  //1.准备数据
  var data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 120, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 500],
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [100, 87, 32, 76, 60, 12, 50, 87, 39, 36, 29, 180],
    ],
    week: [
      [180, 87, 32, 76, 98, 40, 50, 87, 39, 36, 60],
      [100, 87, 32, 76, 30, 12, 20, 87, 39, 36, 29, 180],
    ],
  };
  //2.初始化echarts对象
  var myChart = echarts.init(document.querySelector(".line"));
  //3.指定配置
  var option = {
    backgroundColor: "#080b30",

    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "rgba(0, 255, 233,0)",
              },
              {
                offset: 0.5,
                color: "rgba(255, 255, 255,1)",
              },
              {
                offset: 1,
                color: "rgba(0, 255, 233,0)",
              },
            ],
            global: false,
          },
        },
      },
    },
    grid: {
      top: "15%",
      left: "5%",
      right: "5%",
      bottom: "15%",
      // containLabel: true
    },
    xAxis: [
      {
        type: "category",
        axisLine: {
          show: true,
        },
        splitArea: {
          // show: true,
          color: "#f00",
          lineStyle: {
            color: "#f00",
          },
        },
        axisLabel: {
          color: "#fff",
        },
        splitLine: {
          show: false,
        },
        boundaryGap: false,
        data: ["A", "B", "C", "D", "E", "F"],
      },
    ],

    yAxis: [
      {
        type: "value",
        min: 0,
        // max: 140,
        splitNumber: 4,
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255,255,255,0.1)",
          },
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          show: false,
          margin: 20,
          textStyle: {
            color: "#d1e6eb",
          },
        },
        axisTick: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "注册总量",
        type: "line",
        // smooth: true, //是否平滑
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbol: "circle",
        symbolSize: 25,
        lineStyle: {
          normal: {
            color: "#6c50f3",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            color: "#6c50f3",
          },
        },
        itemStyle: {
          color: "#6c50f3",
          borderColor: "#fff",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        tooltip: {
          show: false,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(108,80,243,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(108,80,243,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(108,80,243, 0.9)",
            shadowBlur: 20,
          },
        },
        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02],
      },
      {
        name: "注册总量",
        type: "line",
        // smooth: true, //是否平滑
        showAllSymbol: true,
        // symbol: 'image://./static/images/guang-circle.png',
        symbol: "circle",
        symbolSize: 25,
        lineStyle: {
          normal: {
            color: "#00ca95",
            shadowColor: "rgba(0, 0, 0, .3)",
            shadowBlur: 0,
            shadowOffsetY: 5,
            shadowOffsetX: 5,
          },
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            color: "#00ca95",
          },
        },

        itemStyle: {
          color: "#00ca95",
          borderColor: "#fff",
          borderWidth: 3,
          shadowColor: "rgba(0, 0, 0, .3)",
          shadowBlur: 0,
          shadowOffsetY: 2,
          shadowOffsetX: 2,
        },
        tooltip: {
          show: false,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0,202,149,0.3)",
                },
                {
                  offset: 1,
                  color: "rgba(0,202,149,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0,202,149, 0.9)",
            shadowBlur: 20,
          },
        },
        data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14],
      },
    ],
  };
  //4.设置配置和数据到对象中
  myChart.setOption(option);
  //5.切换年月日对应切换数据
  $(".sales .caption").on("click", "a", function () {
    index = $(this).index() - 1;
    $(this).addClass("active").siblings("a").removeClass("active");
    //console.log(this.dataset.type);
    var arr = data[this.dataset.type];
    option.series[0].data = arr[0];
    option.series[1].data = arr[1];
    myChart.setOption(option);
  });
  //定时器，每隔5秒自动切换，鼠标停留停止计时器，移除计数器才重新开始
});
//雷达图
$(function () {
  //1.初始化echarts对象
  var myChart = echarts.init(document.querySelector(".radar"));
  //2. 配置项和加载数据
  var option = {
    tooltip: {
      show: true,
      //提示框浮层的位置
      position: ["60%", "10%"],
    },
    radar: {
      //雷达图的指示器，用来指定雷达图中的多个变量（维度），
      indicator: [
        {
          name: "机场",
          max: 100,
        },
        {
          name: "商场",
          max: 100,
        },
        {
          name: "火车站",
          max: 100,
        },
        {
          name: "汽车站",
          max: 100,
        },
        {
          name: "地铁",
          max: 100,
        },
      ],
      radius: "75%", //雷达的大小
      shape: "circle",
      splitNumber: 4,
      name: {
        textStyle: {
          color: "#4c9bfd",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.5)",
        },
      },
      splitArea: false,
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.5)",
        },
      },
    },
    series: [
      {
        name: "北京",
        type: "radar",
        lineStyle: {
          normal: {
            color: "#fff",
            width: 1,
            opacity: 0.5,
          },
        },
        data: [[90, 19, 56, 11, 34]],
        symbol: "circle",
        symbolSize: 5,
        itemStyle: {
          color: "#fff",
        },
        lable: {
          show: true,
          fontSize: 10,
        },
        areaStyle: {
          color: "rgba(238,197,102,0.6)",
        },
      },
    ],
  };
  myChart.setOption(option);
});
//季度进度表-----仪盘表视图

$(function () {
  //1.初始化echarts对象
  var myChart = echarts.init(document.querySelector(".gauge"));
  //2.设置配置项
  option = {
    title: {
      text: "70%",
      x: "center",
      y: "center",
      textStyle: {
        fontWeight: "normal",
        color: "#0580f2",
        fontSize: "10",
      },
    },
    color: ["rgba(176, 212, 251, 1)"],
    legend: {
      show: true,
      itemGap: 12,
      data: ["01", "02"],
    },

    series: [
      {
        name: "Line 1",
        type: "pie",
        clockWise: true,
        radius: ["50%", "66%"],
        itemStyle: {
          normal: {
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        },
        hoverAnimation: false,
        data: [
          {
            value: 70,
            name: "01",
            itemStyle: {
              normal: {
                color: {
                  // 完成的圆环的颜色
                  colorStops: [
                    {
                      offset: 0,
                      color: "#00cefc", // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#367bec", // 100% 处的颜色
                    },
                  ],
                },
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
              },
            },
          },
          {
            name: "02",

            value: 30,
          },
        ],
      },
    ],
  };
  //3.把配置项设置到echarts对象中
  myChart.setOption(option);
});
//全国热销
$(function () {
  //1.创建echarts对象，告诉当前这个echarts对象的展示容器
  //初始化echarts对象
  var myChart = echarts.init(document.querySelector(".pia"));
  //2.定义echarts的展示数据
  var res = {
    success: true,
    errMsg: "ok",
    data: [
      {
        name: "深圳市",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "广州市",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "珠海市",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "汕头市",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "佛山市",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "深圳市2",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "广州市2",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "珠海2市",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "汕头市2",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "佛山市2",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "深圳市3",
        plts: [
          { name: "PM25", rate: 95 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "广州市3",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "珠海3市",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "汕头市3",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "佛山市3",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "深圳市4",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "广州市4",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "珠海市4",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "汕头市4",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "佛山市4",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "深圳市5",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 35 },
        ],
      },
      {
        name: "广州市5",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 35 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "珠海市5",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "汕头市5",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 45 },
          { name: "O3", rate: 15 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
      {
        name: "佛山市5",
        plts: [
          { name: "PM25", rate: 25 },
          { name: "PM10", rate: 15 },
          { name: "O3", rate: 35 },
          { name: "CO", rate: 15 },
          { name: "NO2", rate: 15 },
          { name: "SO2", rate: 15 },
        ],
      },
    ],
  };
  var color = [
    "#78b4ff",
    "#f66bc7",
    "#2bcba7",
    "#ff8896",
    "#79c628",
    "#6c93ee",
    "#a9abff",
    "#f7a23f",
    "#27bae7",
    "#ff6d9d",
    "#cb79ff",
    "#f95b5a",
    "#ccaf27",
    "#38b99c",
    "#93d0ff",
    "#bd74e0",
    "#fd77da",
    "#dea700",
  ];

  var citylist = [];
  var data = [];
  res.data.forEach((v, i) => {
    citylist.push({
      name: v.name,
      itemStyle: {
        color: "#78b4ff",
      },
    });
    v.plts.forEach((val, j) => {
      if (i === 0) {
        citylist.push({
          name: val.name,
          itemStyle: {
            color: color[j],
          },
        });
      }
      data.push({
        target: v.name,
        source: val.name,
        value: val.rate,
        lineStyle: {
          color: color[j],
        },
      });
    });
  });

  var option = {
    backgroundColor: "#000",
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
      formatter: function (o) {
        if (o.dataType !== "edge") {
          return "";
        }
        return (
          o.data.source + " - " + o.data.target + "：" + o.data.value + "%"
        );
      },
    },
    series: [
      {
        type: "sankey",
        data: citylist,
        links: data,
        top: "1%",
        right: "1%",
        left: "1%",
        bottom: "10%",

        nodeWidth: 80,
        nodeGap: 0,
        focusNodeAdjacency: "allEdges",
        itemStyle: {
          normal: {
            borderWidth: 0,
            borderColor: "#fff",
            opacity: 1,
          },
        },
        label: {
          normal: {
            align: "center",
            padding: [0, 0, 0, -90],
            fontSize: "14",
            color: "#fff",
          },
        },
        lineStyle: {
          normal: {
            curveness: 0.5,
            opacity: 0.5,
          },
        },
      },
    ],
  };

  //3.配置项和数据给我们的实例化对象
  myChart.setOption(option);
});
