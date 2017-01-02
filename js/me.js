Vue.component('child',{
    template:'#child-template',
    data:function () {
        return {
            msg:'',
        }
    },
    methods:{
        notify:function () {
            this.$emit('child-msg',this.msg)
            this.msg = '';
        }
    }

});
Vue.component('like',{
    template:'#likeable',
    props:[
        'name'
    ],
    data:function () {
        return {
            count:0
        }
    },
    methods:{
        counter:function () {
            this.count = this.count+1;
        }
    }
});
Vue.component('plan', {
    template: '#plan-id',
    props:['plans'],
    data:function () {
        return {
            active:''
        }
    },
    methods:{
        actived:function (plan) {
            if(plan == this.active){
                this.active = '';
            }
            else{
                this.active = plan;
            }
        },
        isActive:function (plan) {
            return ((this.active == plan) ? 'active':'' );
        }
    },
});
var parent = new Vue({
        el:'#app',
        data:{
            message:[],
            plans:[
                {name:'پیشرفته',price:1000},
                {name:'حرفه ایی',price:700},
                {name:'معمولی',price:500},
                {name:'ساده',price:300},
                {name:'رایگان',price:0},
            ]
        },
        methods:{
            addMessage:function (msg) {
                this.message.push(msg);
            }
    }
})