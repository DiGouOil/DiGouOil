<template>
    <div style="height:100%" ref="echart" >
        Echarts
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    props:{
        chartData:{
            type:Object,
            default(){
                return{
                    xData:[],
                    series:[]
                }
            }
        },
        isAxisChart:{
            type:Boolean,
            default:true
        }
    },
    computed:{
        options(){
            return this.isAxisChart ? this.axisOption : this.normalOption
        },
        isCollapse() {
            return this.$store.state.tab.isCollapse
        }
    },
    watch: {
        chartData: {
            handler: function() {
            this.initChart()
            },
            deep: true
        },
        isCollapse() {
            setTimeout(() => {
                this.resizeChart()
            }, 300)
        }   
    },
    data() {
        return {
            echart:null,
            axisOption:{
                legend: {
                    textStyle: {
                        color: '#333'
                    }
                },
                grid: {
                    left: '20%'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis:{
                    type: 'category',
                    data: [],
                    axisLine: {
                        lineStyle: {
                        color: '#17b3a3'
                        }
                    },
                    axisLabel: {
                        color: '#333'
                    }
                },
                yAxis:[
                    {
                        type:'value',
                        axisLine: {
                            lineStyle: {
                                color: '#17b3a3'
                            }
                        }
                    }
                ],
                series:[]
            },
            normalOption:{
                tooltip: {
                    trigger: 'item'
                },
                series:[],
            }
        }
    },
    methods:{
        initChart(){
            this.initChartData()
            if(this.echart){
                this.echart.setOption(this.options)
            }else{
                this.echart = echarts.init(this.$refs.echart)
                this.echart.setOption(this.options)
            }
        },
        initChartData(){
            if(this.isAxisChart){
                this.axisOption.xAxis.data = this.chartData.xData
                this.axisOption.series = this.chartData.series
            }else{
                this.normalOption.series = this.chartData.series
            }
        },
        resizeChart() {
            this.echart ? this.echart.resize() : ''
        }
    },
    mounted() {
        window.addEventListener('resize', this.resizeChart)
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeChart)
    }  
}
</script>

<style lang="scss" scoped>

</style>