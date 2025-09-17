

<template>
<div>   
   <RegAuthHeader></RegAuthHeader>  
    <RegAuthMain></RegAuthMain>
</div>
    </template>
    
    <script>
    import RegAuthMain from '@/components/RegAuthMain.vue';
    import RegAuthHeader from '@/components/RegAuthHeader.vue';
export default{
    name:'RegAuthPage',
    components:{
        RegAuthHeader,
        RegAuthMain
        
}
}
</script>