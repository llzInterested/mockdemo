import Mock,{Random} from 'mockjs'
Mock.setup({
    timeout:'100-500'
})

Mock.mock('/test',function(options){
    return {
        data:[
            {id:1,"name|1-10":'张三',age:20,gender:true},
            {id:2,name:'李四',age:25,gender:true},
            {id:3,name:'王五',"age|+1":40,"gender|1":true},
        ],
        imgs:Random.image('200x100',Random.color(),'Hello Mock.js!')
    }
})

