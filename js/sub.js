         
/** 모바일 슬라이드 토글 */
let dataOpen = $(".data--open");
$(document).ready(function () {
  dataOpen.click(function () {
    var currentSlide = $(this).next(".mo__slide");
    $(this).next(".mo__slide").stop().slideToggle();
    $(this).toggleClass("on").siblings().removeClass("on");
    dataOpen.not($(this)).removeClass('on');
    $(".mo__slide").not(currentSlide).slideUp();
  });
  $(".mo__slide").slideUp();
});


/* 서브 탭 변환 */
$(document).ready(function () {
  let moTabBtn = $(".mobile__tab .swiper-slide button");
  let moTabContent = $(".mo__open__wrap .mobile__con");

  /* Open Tab */
  $('.tab__content .tab').hide().eq(0).show();
  $('.tab__btn button').eq(0).addClass('active');
  $(".tab__wrap .tab__btn button").click(function () {
    var idx = $(this).parent().index();
    $(".tab__content .tab").hide();
    $(".tab__content .tab").eq(idx).fadeIn();
    $(".tab__btn button").removeClass("active");
    $(this).addClass("active");

    chartResize();
  });

  /* mobile Tab */
  moTabBtn.eq(0).addClass('active');
  moTabBtn.click(function(){
    var idx = $(this).parent().index()
    $(".tab__content .tab").hide();
    $(".tab__content .tab").eq(idx).fadeIn();
    moTabBtn.removeClass("active")
    $(this).addClass("active")

    chartResize();
  })


// Pie Chart 1
var pieChart1 = echarts.init(document.getElementById("pieChart1"));
window.onresize = function () {
  // console.log('차트 리사이징')
  chartResize()
};
function chartResize(){
  pieChart1.resize();
  pieChart2.resize();
  pieChart3.resize();
  pieChart4.resize();
  barChart1.resize();
  barChart2.resize();
  barChart3.resize();
  barChart4.resize();
  barChart5.resize();
  barChart6.resize();
}
var pieOption1 = {
  chart__title: {
    text: "Pie Chart 1",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    bottom: 'bottom',
    padding: [0,0,20,0],
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
      ],
    },
  ],
};
pieChart1.setOption(pieOption1);

// Pie Chart 2
var pieChart2 = echarts.init(document.getElementById("pieChart2"));
var pieOption2 = {
  chart__title: {
    text: "Pie Chart 2",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    bottom: 'bottom',
    padding: [0,0,20,0],
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "전년도이월금" },
        { value: 735, name: "조합비" },
        { value: 580, name: "기타" },
      ],
    },
  ],
};
pieChart2.setOption(pieOption2);

// Pie Chart 3
var pieChart3 = echarts.init(document.getElementById("pieChart3"));
var pieOption3 = {
  chart__title: {
    text: "Pie Chart 3",
    left: "center",
  },

  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    bottom: 'bottom',
    padding: [0,40,20,40],
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "인건비" },
        { value: 735, name: "업무추진비" },
        { value: 580, name: "기타운영비" },
        { value: 484, name: "사업수행비용" },
        { value: 300, name: "상급단체부과금" },
        { value: 100, name: "차년도이월금" },
      ],
    },
  ],
};
pieChart3.setOption(pieOption3);

// Pie Chart 4
var pieChart4 = echarts.init(document.getElementById("pieChart4"));
var pieOption4 = {
  chart__title: {
    text: "Pie Chart 4",
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "horizontal",
    bottom: 'bottom',
    padding: [0,0,20,0],
  },
  series: [
    {
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "현금 및 예금" },
        { value: 735, name: "토지" },
        { value: 580, name: "건물" },
        { value: 484, name: "기타자산" },
        { value: 300, name: "부재재" },
      ],
    },
  ],
};
pieChart4.setOption(pieOption4);

// Bar Chart 1
var barChart1 = echarts.init(document.getElementById("barChart1"));
var barOption1 = {
  chart__title: {
    text: "Bar Chart 1",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["자산", "부채"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#8ECCE2",
          },
        },
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#91cc75",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart1.setOption(barOption1);

// Bar Chart 2
var barChart2 = echarts.init(document.getElementById("barChart2"));
var barOption2 = {
  chart__title: {
    text: "Bar Chart 2",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["자산", "부채"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#A4D594",
          },
        },
        {
          value: 1807,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#F8C862",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart2.setOption(barOption2);

var barChart3 = echarts.init(document.getElementById("barChart3"));
var barOption3 = {
  chart__title: {
    text: "Bar Chart 3",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["2021", "2022", "2023"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 0,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#12A59C",
          },
        },
        {
          value: 13800,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#12A59C",
          },
        },
        {
          value: 1538,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#12A59C",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart3.setOption(barOption3);

// Bar Chart 4
var barChart4 = echarts.init(document.getElementById("barChart4"));
var barOption4 = {
  chart__title: {
    text: "Bar Chart 4",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  xAxis: {
    type: "category",
    data: ["2021", "2022", "2023"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 0,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#186DBB",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#186DBB",
          },
        },
        {
          value: 1538,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#186DBB",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart4.setOption(barOption4);

// Bar Chart 5
var barChart5 = echarts.init(document.getElementById("barChart5"));
var barOption5 = {
  chart__title: {
    text: "Bar Chart 5",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    orient: "vertical",
    right: "right",
  },
  xAxis: {
    type: "category",
    data: ["2021", "2022", "2023"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 0,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#28BC78",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#28BC78",
          },
        },
        {
          value: 1538,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#28BC78",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart5.setOption(barOption5);


// Bar Chart 6
var barChart6 = echarts.init(document.getElementById("barChart6"));
var barOption6 = {
  chart__title: {
    text: "Bar Chart 6",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
  },
  legend: {
    orient: "vertical",
    right: "right",
  },
  xAxis: {
    type: "category",
    data: ["2021", "2022", "2023"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      type: "bar",
      data: [
        {
          value: 0,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#3891E3",
          },
        },
        {
          value: 12500,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#3891E3",
          },
        },
        {
          value: 1538,
          label: {
            show: true,
          },
          itemStyle: {
            color: "#3891E3",
          },
        },
      ],
      barWidth: "40%",
    },
  ],
};
barChart6.setOption(barOption6);
});



















