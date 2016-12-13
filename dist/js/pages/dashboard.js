jQuery(document).ready(function($) {
    
    $('.counter').counterUp();
    
    //ICHECK
    $('input:not(.ios-switch)').iCheck({
        checkboxClass: 'icheckbox_square-aero',
        radioClass: 'iradio_square-aero',
        increaseArea: '20%' // optional
    });
    
    iziToast.info({
        color: 'dark',
        icon: 'icon-person',
        position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        pauseOnHover: true,
        close: true,
        layout: 2,
        icon: 'fa fa-user',
        title: 'Welcome!!',
        message: 'Welcome to MagicAdmin Template.'
    });
    
    
    
    if (!jQuery.plot) {
      return;
    }
    var data = [];
    var totalPoints = 250;
    // random data generator for plot charts

    function getRandomData() {
      if (data.length > 0) data = data.slice(1);
      // do a random walk
      while (data.length < totalPoints) {
      var prev = data.length > 0 ? data[data.length - 1] : 50;
      var y = prev + Math.random() * 10 - 5;
      if (y < 0) y = 0;
      if (y > 100) y = 100;
      data.push(y);
      }
      // zip the generated y values with the x values
      var res = [];
      for (var i = 0; i < data.length; ++i) res.push([i, data[i]])
      return res;
    }

    function showTooltip(x, y, contents) {
      $("<div id='tooltip'>" + contents + "</div>").css({
        position: "absolute",
        display: "none",
        top: y + 5,
        left: x + 5,
        border: "1px solid #000",
        padding: "5px",
        'color':'#fff',
        'border-radius':'2px',
        'font-size':'11px',
        "background-color": "#000",
        opacity: 0.80
      }).appendTo("body").fadeIn(200);
    }
    
    function randValue() {
        return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;
    }
    
    var visitors = [
    [1, randValue() - 5],
    [2, randValue() - 5],
    [3, randValue() - 5],
    [4, 6 + randValue()],
    [5, 5 + randValue()],
    [6, 20 + randValue()],
    [7, 25 + randValue()],
    [8, 36 + randValue()],
    [9, 26 + randValue()],
    [10, 38 + randValue()],
    [11, 39 + randValue()],
    [12, 50 + randValue()],
    [13, 51 + randValue()],
    [14, 12 + randValue()],
    [15, 13 + randValue()],
    [16, 14 + randValue()],
    [17, 15 + randValue()],
    [18, 15 + randValue()],
    [19, 16 + randValue()],
    [20, 17 + randValue()],
    [21, 18 + randValue()],
    [22, 19 + randValue()],
    [23, 20 + randValue()],
    [24, 21 + randValue()],
    [25, 14 + randValue()],
    [26, 24 + randValue()],
    [27, 25 + randValue()],
    [28, 26 + randValue()],
    [29, 27 + randValue()],
    [30, 31 + randValue()]
    ];
    
    var data_com = [
        [1, randValue()],
        [2, randValue()],
        [3, 10 + randValue()],
        [4, 15 + randValue()],
        [5, 20 + randValue()],
        [6, 25 + randValue()],
        [7, 30 + randValue()],
        [8, 35 + randValue()],
        [9, 40 + randValue()],
        [10, 45 + randValue()],
        [11, 50 + randValue()],
        [12, 55 + randValue()],
        [13, 60 + randValue()],
        [14, 70 + randValue()],
        [15, 75 + randValue()],
        [16, 80 + randValue()],
        [17, 85 + randValue()],
        [18, 90 + randValue()],
        [19, 95 + randValue()],
        [20, 100 + randValue()],
        [21, 110 + randValue()],
        [22, 120 + randValue()],
        [23, 130 + randValue()]
      ];
      
      /*COM Chart*/
      var data_com2 = [
        [1, randValue()],
        [2, randValue()],
        [3, 2 + randValue()],
        [4, 3 + randValue()],
        [5, 5 + randValue()],
        [6, 10 + randValue()],
        [7, 15 + randValue()],
        [8, 20 + randValue()],
        [9, 25 + randValue()],
        [10, 30 + randValue()],
        [11, 35 + randValue()],
        [12, 25 + randValue()],
        [13, 15 + randValue()],
        [14, 20 + randValue()],
        [15, 45 + randValue()],
        [16, 50 + randValue()],
        [17, 65 + randValue()],
        [18, 70 + randValue()],
        [19, 85 + randValue()],
        [20, 80 + randValue()],
        [21, 75 + randValue()],
        [22, 80 + randValue()],
        [23, 75 + randValue()]
      ];
    
    var plot_statistics = $.plot($("#chart3"), [{
        data: data_com, showLabels: true, label: "New Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
      },{
        data: data_com2, showLabels: true, label: "Old Visitors", labelPlacement: "below", canvasRender: true, cColor: "#FFFFFF" 
      }
      ], {
        series: {
          lines: {
            show: true,
            lineWidth: 1, 
            fill: true,
             fillColor: { colors: [{ opacity: 0.5 }, { opacity: 0.5}] }
          },
          fillColor: "rgba(0, 0, 0, 1)",
          points: {
            show: false,
            fill: true
          },
          shadowSize: 2
        },
        legend:{
          show: true,
           position:"nw",
           backgroundColor: "green",
           container: $("#chart3-legend")
        },
        grid: {
          show:false,
          margin: 0,
          labelMargin: 0,
           axisMargin: 0,
          hoverable: true,
          clickable: true,
          tickColor: "rgba(255,255,255,1)",
          borderWidth: 0
        },
        colors: ["#CCCED5","#1fb594"],
        xaxis: {
          autoscaleMargin: 0,
          ticks: 11,
          tickDecimals: 0
        },
        yaxis: {
          autoscaleMargin: 0.2,
          ticks: 5,
          tickDecimals: 0
        }
      });
      
       var previousPoint = null;
      $("#chart3").bind("plothover", function (event, pos, item) {
      
        var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";

        if (item) {
          if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;
            $("#tooltip").remove();
            var x = item.datapoint[0].toFixed(2),
            y = item.datapoint[1].toFixed(2);
            showTooltip(item.pageX, item.pageY,
            item.series.label + " of " + x + " = " + y);
          }
        } else {
          $("#tooltip").remove();
          previousPoint = null;
        }
      }); 
    
});


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: '# of Sales',
            data: [350, 230, 500, 279, 129, 600],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#E7E9ED',
                'rgba(255, 159, 64, 1)'
            ],
            
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


var getMonthName=function(e) {
    var t=[];
    t[0]="January";
    t[1]="February";
    t[2]="March";
    t[3]="April";
    t[4]="May";
    t[5]="June";
    t[6]="July";
    t[7]="August";
    t[8]="September";
    t[9]="October";
    t[10]="November";
    t[11]="December";
    return t[e]
}
;

var getDate=function(e) {
    var t=new Date(e);
    var n=t.getDate();
    var r=t.getMonth()+1;
    var i=t.getFullYear();
    if(n<10) {
        n="0"+n
    }
    if(r<10) {
        r="0"+r
    }
    t=i+"-"+r+"-"+n;
    return t
}
;
    
var handleScheduleCalendar=function() {
    var e=["January",
           "February",
           "March",
           "April",
           "May",
           "June",
           "July",
           "August",
           "September",
           "October",
           "November",
           "December"];
    
    var t=["D",
           "M",
           "T",
           "Q",
           "Q",
           "S",
           "S"];
    
    var n=new Date,
        r=n.getMonth()+1,
        i=n.getFullYear();
    
    var s=[["2/"+r+"/"+i,
        "Popover Title",
        "#",
        "#00acac",
        "Some contents here"],
        ["5/"+r+"/"+i,
        "Tooltip with link",
        "http://www.magicmidia.com",
        "#2d353c"],
        ["18/"+r+"/"+i,
        "Popover with HTML Content",
        "#",
        "#2d353c",
        'Some contents here <div class="text-right"><a href="http://www.google.com"> view more >>></a></div>'],
        ["28/"+r+"/"+i,
        "MagicAdmin Event",
        "http://magicadmin.magicmidia.com",
        "#2d353c"]];
        
    var o=$("#schedule-calendar");
    
    $(o).calendar( {
        months:e, days:t, events:s, popover_options: {
            placement: "top", html: true
        }
    }
    );
    $(o).find("td.event").each(function() {
        var e=$(this).css("background-color");
        $(this).removeAttr("style");
        $(this).find("a").css("background-color", e)
    }
    );
    $(o).find(".icon-arrow-left, .icon-arrow-right").parent().on("click", function() {
        $(o).find("td.event").each(function() {
            var e=$(this).css("background-color");
            $(this).removeAttr("style");
            $(this).find("a").css("background-color", e)
        }
        )
    }
    )
}

;

var DashboardV2=function() {
    "use strict";
    return {
        init:function() {
             handleScheduleCalendar();
         }
    }
}



()