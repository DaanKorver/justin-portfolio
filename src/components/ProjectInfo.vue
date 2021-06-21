<template>
    <transition name="project-fade">
        <div>
            <h1>{{ projectTitle }}</h1>
            <p>{{ projectDescription }}</p>
            <img :src="this.getProjectImage()" alt="image">
            <button @click="closeInfo">Close Info</button>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class Header extends Vue {

    @Prop({ default: 'logo.png'})
    image! : string

    @Prop({ default: 'not found'})
    projectTitle! : string    
    
    @Prop({ default: 'not found'})
    projectDescription! : string    

    getProjectImage() {
        if(this.image == '' || this.image == undefined) return false;
        return require(`@/assets/${this.image}`)
    }

    closeInfo() {
        this.$emit('closeInfo')
    }
}
</script>

<style lang="scss" scoped>
    .project-fade-enter,
    .project-fade-leave-to {
    opacity: 0;
    }

    .project-fade-enter-active,
    .project-fade-leave-active {
    transition: opacity .5s ease;
    }

    div {
        position: fixed;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(0,0,0,.8);
        z-index: 50;
    }
</style>