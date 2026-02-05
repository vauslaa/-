document.addEventListener("DOMContentLoaded", function () {

  var chartDom = document.getElementById("mbti-chart");
  if (chartDom) {
    var myChart = echarts.init(chartDom);

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
            "I内倾",
            "N感觉",
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


    myChart.setOption(option);
    window.addEventListener("resize", function () {
      myChart.resize();
    });
  } else {
    console.error("未找到 id 为 mbti-chart 的元素");
  }
});
