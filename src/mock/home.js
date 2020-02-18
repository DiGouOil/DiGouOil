import Mock from "mockjs"

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    Weigth: Mock.Random.float(75, 80, 0, 2),
                    Carbohydrate: Mock.Random.float(170, 225, 0, 2),
                    Proteins: Mock.Random.float(100, 150, 0, 2),
                    Fat: Mock.Random.float(20, 50, 0, 2),
                    
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: 'Carbohydrate',
                        value: Mock.Random.float(800, 1600, 0, 2)
                    },
                    {
                        name: 'Proteins',
                        value: Mock.Random.float(400, 800, 0, 2)
                    },
                    {
                        name: 'Fat',
                        value: Mock.Random.float(180, 540, 0, 2)
                    },
                    
                ],
                // 柱状图
                userData: [
                    {
                        date: '周一',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周二',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周三',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周四',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周五',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周六',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    },
                    {
                        date: '周日',
                        new: Mock.Random.integer(1, 100),
                        active: Mock.Random.integer(100, 1000)
                    }
                ],
                // 折线图
                orderData: {
                    date: ['月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'],
                    data: List
                },
                tableData: [
                    {
                        name: 'Carbohydrate',
                        total: Mock.Random.float(200, 400, 0, 2),
                        calorific: Mock.Random.float(800, 1600, 0, 2),
                       
                    },
                    {
                        name: 'Proteins',
                        total: Mock.Random.float(100, 200, 0, 2),
                        calorific: Mock.Random.float(400, 800, 0, 2),
                    },
                    {
                        name: 'Fat',
                        total: Mock.Random.float(20, 60, 0, 2),
                        calorific: Mock.Random.float(180, 540, 0, 2),
                    },
                    
                ]
            }
        }
    }
}