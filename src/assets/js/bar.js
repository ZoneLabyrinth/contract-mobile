export const bar = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['合同应收账款余额比重', '权责应收账款余额比重', "发票应收账款余额比重"],
        icon: 'circle'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['正常合同', '终止合同', "暂停合同"]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '合同应收账款余额比重',
            type: 'bar',
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7
                }
            },
            data: [0, 0, 0]
        },
        {
            name: '权责应收账款余额比重',
            type: 'bar',
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7
                }
            },
            data: [0, 0, 0]
        },
        {
            name: '发票应收账款余额比重',
            type: 'bar',
            itemStyle: {
                emphasis: {
                    barBorderRadius: 7
                },
                normal: {
                    barBorderRadius: 7
                }
            },
            data: [0, 0, 0]
        }
    ],
    color: ["#e4615c", "#79e2f2", "#68d9c0"]
}