<!--  INTRODUCTION TO SLOTS

-Since we have registered BaseCard globally on the main.js

- We can now use it to control the styling of the content rendered in the UserInfo like in the header section for example

-We use it by wrapping the  content of the header and paragraph content using <basecard></basecard>
-->


<!-- NAMED  SLOTS

    -Now we want to tell Vue that this content  i.e the ( h3 tag and the base-badge tag ) should go to the header slot

    -AND FOR THAT YOU WRAP IT WITH A <template></template> tag which is a default HTML element  and on that template tag  which holds the content that should go to you named slot; 

    -You add a special directive v-slot:

     <header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </header>

      -The v-slot directive can be used to let Vue know where certain content should go to;

      -Now you let Vue  know where that content shd go to by adding an argument to this directive i.e. 
      
       e.g. v-slot:header

      -And this tells Vue that the content inside the template will go to the named slot

      e.g.
         <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>

      -The other content i.e the paragraph will automatically go to the default slot

         -We can also be more explicit to tell Vue that the rest of the content should go to default slot
      e.g. 

   <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>

      -And then adding a v-slot:default to the template tag;

      -default is a reserved keyword and like the name applies it wlways targets the default slot
 -->


<template>
  <section>
    <base-card>
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template v-slot:default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>