<template>
    <h1>Transform</h1>
    <div>
        <div class="out-box">
            <div class="inner-box" ref="innerBox"></div>
        </div>
    </div>
    <div class="controller">
        <el-row>
            <el-col>
                <h3>位移 translate</h3>
            </el-col>
            <el-col>
                <div style="width: 300px;">
                    <el-radio v-model="translateMode" label="X">X</el-radio>
                    <el-radio v-model="translateMode" label="Y">Y</el-radio>
                    <el-radio v-model="translateMode" label="Z">Z</el-radio>
                    <el-slider v-model="translate" :min="0" :max="200" :step="1" @input="changeTranslate"></el-slider>
                </div>
            </el-col>
        </el-row>
       <el-row>
           <el-col>
               <h3>旋转 rotate</h3>
           </el-col>
           <el-col>
               <div style="width: 300px;">
                   <el-radio v-model="rotateMode" label="x">X</el-radio>
                   <el-radio v-model="rotateMode" label="y">Y</el-radio>
                   <el-radio v-model="rotateMode" label="z">Z</el-radio>
                   <el-slider v-model="rotate" :min="0" :max="360" :step="1" @input="changeRotate"></el-slider>
               </div>
           </el-col>
       </el-row>
        <div>
            <h3>小提示</h3>
            <el-tag>
                1. CSS X,Y,Z坐标系
            </el-tag>
        </div>
    </div>
</template>

<script>
    import { ref, toRaw } from 'vue';
    export default {
        name: "index",
        data(){
            return {
                translateMode: 'X',
                translate: 0,
                rotateMode: 'z',
                rotate: 0,
            }
        },
        methods: {
            changeRotate(e){
                this.$refs.innerBox.style.transform = 'rotate'+this.rotateMode+`(${e}deg)`;
            },
            changeTranslate(e){
                this.$refs.innerBox.style.transform = 'translate'+this.translateMode+`(${e}px)`;
            }
        }
    }
</script>

<style scoped lang="scss">
.out-box{
    width: 300px;
    height: 300px;
    border: 1px solid black;
    .inner-box {
        width: 100px;
        height: 100px;
        background: blue;
    }
}
</style>
