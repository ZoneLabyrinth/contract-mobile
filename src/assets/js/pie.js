export const pie = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    title:{
        show:true,
        x:'center',
        y:'bottom',
        text:'合同应收',
        textStyle:{
            fontSize:12
        }
    },
    series: [
        {
            
            type:'pie',
            name:'访问来源',
            radius: ['40%', '50%'],
            label: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ]
};