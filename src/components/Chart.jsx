import { useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

function Chart({ data = [], fields = [] }) {
  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    const stockChart = root.container.children.push(am5stock.StockChart.new(root, {}));

    root.numberFormatter.set("numberFormat", "#,###.00");

    const mainPanel = stockChart.panels.push(am5stock.StockPanel.new(root, {
      wheelY: "zoomX",
      panX: true,
      panY: true,
      height: am5.percent(70)
    }));

    const valueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        pan: "zoom"
      }),
      tooltip: am5.Tooltip.new(root, {}),
      numberFormat: "#,###.00",
      extraTooltipPrecision: 2
    }));

    const dateAxis = mainPanel.xAxes.push(am5xy.GaplessDateAxis.new(root, {
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      groupData: true,
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));

    const createValueSeries = (valueYField = 'High') => {
      const valueSeries = mainPanel.series.push(am5xy.LineSeries.new(root, {
        name: "MSFT",
        valueXField: "Date",
        valueYField,
        highValueYField: "High",
        lowValueYField: "Low",
        openValueYField: "Open",
        calculateAggregates: true,
        xAxis: dateAxis,
        yAxis: valueAxis,
        legendValueText: "{valueY}"
      }));

      return valueSeries;
    }

    const valueSeries = createValueSeries();
    stockChart.set("stockSeries", valueSeries);

    const valueLegend = mainPanel.plotContainer.children.push(am5stock.StockLegend.new(root, {
      stockChart: stockChart
    }));
    valueLegend.data.setAll([valueSeries]);

    mainPanel.set("cursor", am5xy.XYCursor.new(root, {
      yAxis: valueAxis,
      xAxis: dateAxis,
      snapToSeries: [valueSeries],
      snapToSeriesBy: "y!"
    }));

    const scrollbar = mainPanel.set("scrollbarX", am5xy.XYChartScrollbar.new(root, {
      orientation: "horizontal",
      height: 50
    }));
    stockChart.toolsContainer.children.push(scrollbar);

    const sbDateAxis = scrollbar.chart.xAxes.push(am5xy.GaplessDateAxis.new(root, {
      baseInterval: {
        timeUnit: "day",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {})
    }));

    const sbValueAxis = scrollbar.chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));

    const sbSeries = scrollbar.chart.series.push(am5xy.LineSeries.new(root, {
      valueYField: "Close",
      valueXField: "Date",

      xAxis: sbDateAxis,
      yAxis: sbValueAxis
    }));

    sbSeries.fills.template.setAll({
      visible: true,
      fillOpacity: 0.3
    });

    function loadData(root, series) {
      // am5.net.load("https://www.amcharts.com/wp-content/uploads/assets/docs/stock/" + "MSFT" + ".csv")
      const processor = am5.DataProcessor.new(root, {
        dateFields: ["Date"],
        dateFormat: "yyyy-MM-dd",
        numericFields: ["Open", "High", "Low", "Close", "Adj Close", "Volume"]
      });
      processor.processMany(data);

      am5.array.each(series, function (item) {
        item.data.setAll(data);
      });
    }

    loadData(root, [valueSeries, sbSeries]);

    let myDropdown = am5stock.DropdownListControl.new(root, {
      stockChart: stockChart,
      fixedLabel: true,
      items: fields.map(node => ({
        id: "id1",
        ...node,
      }))
    });

    function setSeriesType(valueYField) {
      var currentSeries = stockChart.get("stockSeries");
      var data = currentSeries.data.values;
      mainPanel.series.removeValue(currentSeries);
      var series = createValueSeries(valueYField);

      if (series) {
        valueLegend.data.removeValue(currentSeries);
        series.data.setAll(data);
        stockChart.set("stockSeries", series);
        var cursor = mainPanel.get("cursor");
        if (cursor) {
          cursor.set("snapToSeries", [series]);
        }
        valueLegend.data.insertIndex(0, series);
      }
    }

    myDropdown.events.on("selected", event => setSeriesType(event.item.value));

    am5stock.StockToolbar.new(root, {
      container: document.getElementById("chartcontrols"),
      stockChart: stockChart,
      controls: [
        myDropdown,
        am5stock.PeriodSelector.new(root, {
          stockChart: stockChart
        }),
      ]
    });

    return () => root.dispose();
  }, [fields, data]);

  return (
    <div>
      <div id="chartcontrols"></div>
      <div id="chartdiv" style={{ width: "500px", height: "500px" }}></div>
    </div>
  );
}
export default Chart;