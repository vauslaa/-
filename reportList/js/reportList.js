document.addEventListener("DOMContentLoaded", function () {
  // 1. 获取 DOM 容器
  var chartDom = document.getElementById("mbti-chart");

  // 检查容器是否存在，防止报错
  if (chartDom) {
    // 2. 初始化 ECharts 实例
    var myChart = echarts.init(chartDom);

    // 3. 配置项
    var option = {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        top: "15%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "E外倾",
            "I内向",
            "S感觉",
            "N直觉",
            "T思考",
            "F情感",
            "J判断",
            "P感知",
          ],
          axisTick: { alignWithLabel: true },
          axisLine: { lineStyle: { color: "#e0e0e0" } },
          axisLabel: { color: "#666", fontSize: 11, margin: 12 },
        },
      ],
      yAxis: [
        {
          type: "value",
          max: 16,
          splitLine: {
            lineStyle: { type: "dashed", color: "#eeeeee" },
          },
        },
      ],
      series: [
        {
          name: "得分",
          type: "bar",
          barWidth: "45%",
          data: [14, 10, 13, 9, 11, 7, 11, 7],
          itemStyle: {
            borderRadius: [4, 4, 0, 0],
            color: function (params) {
              var colorList = ["#4a90e2", "#2dcdd8"];
              return colorList[params.dataIndex % 2];
            },
          },
         
        },
      ],
    };

    // 4. 渲染
    myChart.setOption(option);

    // 5. 自适应
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  } else {
    console.error("未找到 id 为 mbti-chart 的元素");
  }
});
