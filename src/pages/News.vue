<template>
    <ul>
        <li :style="{opacity}">欢迎学习Vue</li>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        data() {
            return {
                opacity:1
            }
        },
        mounted(){
            console.log('mounted', this)
            
        },
        beforeDestroy(){
            console.log("news 即将被销毁了")
            
        },
        activated(){
            console.log("news 被激活了")
            this.timer = setInterval(() => {
                console.log('@news')
                this.opacity -= 0.01
                if(this.opacity < 0) this.opacity = 1
            }, 16);
        },
        deactivated(){
            console.log("news 失活了")
            clearInterval(this.timer)
        }
    }
</script>

<style>

</style>