
<!-- INTRODUCTION TO SLOTS

    -Props allows you to re-use components by passing different data

    -Although props are great for re-usability , we do have a strict parent-child relationship

    -The child will always be in control of the HTML content and the parent can only pass in data values 

    -Slot on the other hand are more powerful

    -They allow you to re-use a component but also allow the parent component to control the content inside the child content

    -In other words , slots allow a parent component to embed any content in a child component including HTML elements

    -Slots can also be used to control the styling of the content wrapped inside them - This makes them more powerful than slots

 -->

<!-- NAMED  SLOTS

    -You may have some scenarios where you custom component may have multiple slots

    -For example in the UserInfo component we can have one slot for the header and another one for the main-content to ensure we have the same structure for the card
    e.g.

    <header>
         <slot></slot>
    </header>

     <div>
       <slot></slot>
    </div>

    -But ofcourse now we have 2 slots and therefore Vue would really not know where the povided content would really go

    -So that's why , if you use it more than once, you add names to slots with the name attribute on the slot element - Names can be upto you

    e.g   <slot name="header"></slot>

        <div>
            <header>
                <slot name="header"></slot>
            </header>            
        </div>

    -You don't have to name all slots , if you leave one unnamed though ; That will be the default slot

    -But you must have only one unnamed slot

    -And now you can assign the content to the different slots

     -->


    <!-- MORE ON SLOTS

    -We can add default content by Adding Content between our slots tag 

    e.g. 
         <slot name="header">
         
         <h2>Default</h2>
         </slot>

    -This might not be visible because all the places we have use v-slot:header do provide content for the header slot

    -But we have another $slots which is another property  provide by Vue and it holds info about the slot data this component recieves for it's different slots

    -There is a shorthand for v-slot i.e the #symbol

    -Means you can write it as
    v-slot:header or #header


 -->

<template>
    <div>
        <header v-if="$slots.header">
            <slot name="header">
                <!-- <h2>The Default</h2> -->
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>

export default {
    mounted(){
        console.log(this.$slots.header);
    }
}

</script>

<style scoped>


header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>