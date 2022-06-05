
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


        <!-- STYLING ---
    
    - Styling added to App.vue needs to be Global if there is no scoped keyword

    -This means that the following styles are Global and will be used in all components

        <style>
            html {
              font-family: sans-serif;
            }

            body {
              margin: 0;
            }
        </style>

    - However <style scoped></style> with an attribute scoped means that they are only local to those components they have been defined

    -In short , it would be nice to scope this styles to just the components they are used in

    -Means that the styles will only affect the template in which you define them

    -This tells Vue that the styles defined there only affect the template that lives there

    -IF you inspect vue does this by giving them a specific ID

    e.g
            header[data-v-9a9f6144] {
                width: 100%;
                height: 5rem;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #14005e;
                }
    -->



    



<template>
  <div>
    <TheHeader />
    <BadgeList />
    <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
    <course-goals #default="slotProps">
        <h2>{{slotProps.item}}</h2>
        <p>{{slotProps['another-prop']}}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {

components : { 
    TheHeader ,
    BadgeList,
     UserInfo,
    CourseGoals,
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