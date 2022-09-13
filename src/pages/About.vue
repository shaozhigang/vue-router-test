<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
    export default {
        name:'About',

        /** 组件内 路由守卫 **/
        //通过路由规则， 进入该组件前被调用
        beforeRouteEnter(to, from, next) {
            next(vm => {});
        },
        //通过路由规则， 离开该组件时被调用
        beforeRouteLeave(to, from, next) {
            next();
        },
    }
</script>

<style>

</style>