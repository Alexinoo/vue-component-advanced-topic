
 <!-- WE CAN WRITE COMPONENTS AS FOLLOWS

        1.)    <TheHeader></TheHeader>  - PascalCase Notation

        2.)  <the-header></the-header> - kebab-case

        3.) < TheHeader/> - SelfClosing        

      -HOWEVER SelfClosing  WITH kebab-case IS NOT SUPPORTED !!!

      e.g. <the-header />
    -->


    <!-- WE CAN IMPORT COMPONENTS LOCALLY TO APP.VUE 
    
    - This means that these components are NOT AVAILABLE IN OTHER COMPONENTS 

    -We do the following imports between the opening <script> </script> tag i.e. Above export default{}

    -We import the components using the following way:

      -import TheHeader from './components/TheHeader.vue';
      -import BadgeList from './components/BadgeList.vue';
      -import UserInfo from './components/UserInfo.vue';     
    -->



    <!-- REGISTERING COMPONENTS IN OUR DEFAULT CONFIGURATION OBJECT
    
    - We add components property which takes in an object

    - This takes in  key : value pairs with comma separated , between components

    -We can do this in multiple ways

      1.)    'the-header' :  TheHeader,     - key- kebab-case and value -PascalCase
      2.)   TheHeader :  TheHeader,  - PascalCase
      3.)   TheHeader                         ES6 - syntax if key/value matches you can remove the value
    -->



<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {

components : { 
    TheHeader ,
    BadgeList,
     UserInfo,
},

  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>