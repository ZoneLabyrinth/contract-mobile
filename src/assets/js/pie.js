export const pie = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title: {
        show: true,
        x: 'center',
        y: 'bottom',
        text: '合同金额比重',
        textStyle: {
            fontSize: 12,
            fontWeight: 100
        },
    },
    graphic:{
        type:'text',
        left:'center',
        top:'32%',
        style:{
            text:"无数据",
            fontSize:'10',
            textAlign:'center'
        }
    },
    series: [
        {

            type: 'pie',
            name: '',
            center:['50%','37%'],
            radius: ['45%', '50%'],
            label: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: '', name: '合同应收比重' },
                { value: '', name: '其他比重' },
            ]
        }
    ],
    color:['#FF1F2D','#000']
};


export const rose = {
    title : {
        text: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'top',
        textAlign:'center',
        icon:'circle'
    },
    calculable : true,
    series : [
        {
            type:'pie',
            name:'人员',
            radius : [40, 80],
            center : ['50%', '50%'],
            roseType : 'area',
            data:[
                {value:10, name:'rose1'},
                {value:5, name:'rose2'},
                {value:15, name:'rose3'},
                {value:25, name:'rose4'},
                {value:20, name:'rose5'},
            ],
            label:{
                show:true,
                formatter:"{c} \n {b}",
                textAlign:'center'
            }
        }
    ],
    color:['#eba96b','#e4615c','#79e2f2','#68d9c0','#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
};
