<template>
    <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 跳转路由 并携带 query参数 to的 模板字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->


                <!-- 跳转路由 并携带 query参数 to的 对象写法 -->
                <router-link :to="{
                    //path:'/home/message/detail',
                    name:'xiangqing',   //命名路由， 可用于跳转的时候简化编码  
                    query:{id:m.id, title:m.title}
                    }">
                    {{m.title}}
                </router-link>

                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>

                <!-- 跳转路由 并携带 param参数 to的 对象写法 -->
                <!-- <router-link :to="{
                    name:'xiangqing',   //params 只能使用name ，不能使用path ->path:'/home/message/detail',
                    params:{id:m.id, title:m.title}
                    }">
                    {{m.title}}
                </router-link> -->

            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'Message',
        data() {
            return {
                messageList:[
                    {id:'001',title:'消息001'},
                    {id:'002',title:'消息002'},
                    {id:'003',title:'消息003'},
                ]
            }
        },
        methods:{
            pushShow(m){
                // console.log(this.$router)
                this.$router.push({
                    name:'xiangqing',   //命名路由， 可用于跳转的时候简化编码  
                    query:{id:m.id, title:m.title}
                })
            },
            replaceShow(m){
                // console.log(this.$router)
                this.$router.replace({
                    name:'xiangqing',   //命名路由， 可用于跳转的时候简化编码  
                    query:{id:m.id, title:m.title}
                })
            }
        }
    }
</script>

<style>

</style>