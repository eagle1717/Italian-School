<template>
  <div class="c-teacher-chart">
    <canvas
      class="c-teacher-chart__canvas"
      ref="chart"
      width="430"
      height="118"
    ></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  data() {
    return {
      chartObject: null
    };
  },
  mounted() {
    this.chartObject = new Chart(this.$refs.chart, {
      type: "line",
      maintainAspectRatio: false,
      data: {
        labels: ["Январь", "Февраль", "Март", "Апрель"],
        datasets: [
          {
            data: [12, 13, 3, 6, 2, 3],
            borderColor: "rgba(239, 64, 54, 1)",
            backgroundColor: "rgba(255, 255, 255, .1)",
            borderWidth: 2,
            pointBorderWidth: 1,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: "rgba(239, 64, 54, 1)",
            pointBorderColor: "rgba(255, 255, 255, 1)"
          },
          {
            data: [12, 25, 2, 8, 7, 20],
            borderColor: "rgba(57, 177, 0, 1)",
            backgroundColor: "rgba(255, 255, 255, .1)",
            borderWidth: 2,
            pointBorderWidth: 1,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: "rgba(57, 177, 0, 1)",
            pointBorderColor: "rgba(255, 255, 255, 1)"
            // borderWidth: 4
          }
        ]
      },
      options: {
        tooltips: {
          backgroundColor: "rgba(255, 255, 255, 1)",
          titleFontFamily: "Circe-Regular",
          bodyFontFamily: "Circe-Regular",
          titleMarginBottom: 2,
          titleFontColor: "#000",
          titleAlign: "center",
          footerFontColor: "#000",
          footerAlign: "center",
          footerFontFamily: "Circe-Regular",
          bodyFontColor: "#000",
          bodyFontSize: 0,
          borderColor: "rgba(0, 0, 0, .4)",
          borderWidth: 0.5,
          displayColors: false,
          callbacks: {
            title: function(line) {
              if (line.length === 1) {
                if (line[0].datasetIndex == 1) {
                  return "Заработано";
                } else {
                  return "Отработано";
                }
              } else {
                return "Заработано и отпработано";
              }
            },
            footer: function(line) {
              let itm = "";
              console.log(line);
              if (line.length === 1) {
                if (line[0].datasetIndex === 1) {
                  return line[0].value + " руб.";
                } else {
                  return line[0].value + " ч.";
                }
              } else {
                for (let l of line) {
                  if (l.datasetIndex === 1) {
                    itm += " " + l.value + " руб.";
                  } else {
                    itm += " " + l.value + " ч.";
                  }
                  // return itm
                }
              }
              return itm;
            }
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 5,
            bottom: 0
          }
        },
        legend: {
          display: false
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                display: false
              },
              lineWidth: 0,
              ticks: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                color: "rgba(216,216,216, 1)",
                lineWidth: 0.4,
                zeroLineColor: "rgba(216,216,216, .5)"
              },
              ticks: {
                fontColor: "rgba(216,216,216, 1)",
                fontSize: 14
              }
            }
          ]
        }
      }
    });
  }
};
</script>

<style lang="scss">
.c-teacher-chart {
  width: 100%;
  height: 100%;
  // .c-teacher-chart__canvas

  &__canvas {
    // width: inherit !important;
    // height: inherit !important;
  }
}
</style>
