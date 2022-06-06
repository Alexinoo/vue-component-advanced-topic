
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


     <!-- DYNAMIC COMPONENTS ---

     -Vue has this concept of Dynamic components 

     -Let's say we are building a component that has various tabs/buttons we can press to show a different component 

     -i.e. In our case see Active goals / Manage goals

     -Normal cases , the scenario would look like this

        <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
        <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>

    -But this looks redundant because we have to set if conditions on each component and as your app grows, there will be a lot of repetition

    -This is where dynamic content comes into play

    -Vue offers a special HTML element which you can use - <component></component>

    -Cannot work on its own and therefore needs a :is="" property

    -The :is="" property tells component which component of all the components you define should be shown in place of this component

    -We bind :is="" dynamically  to active-goals

        <component :is="active-goals"></component>

        -But of course we dont want to hard code this because if we di we could have just used 

          <active-goals></active-goals>

      -Instead what we wanna do here , is to bind :is="" and then point to the selectedComponent which holds our component HTML tags as values

      -It's 'active-goals initially , but we have a method that switches between active-goals and manage-goals which are our component tags

      -And that we are telling Vue that the component should swap itself for either active-goals OR manage-goals i.e. Whatever that is currently stored in the selectedComponent

        <component :is="selectedComponent"></component>

      -And by doing that we have less code and avoided use of multiple if-statement for each component

       <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
       <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>


     -->   



<template>
  <div>
    <TheHeader />
    <!-- <BadgeList />
    <UserInfo :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role" />
    <course-goals #default="slotProps">
        <h2>{{slotProps.item}}</h2>
        <p>{{slotProps['another-prop']}}</p> 
    </course-goals>
        -->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <component :is="selectedComponent"></component>

  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {

components : { 
    TheHeader ,
    // BadgeList,
    //  UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,

},

  data() {
    return {

      selectedComponent : 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods : {
    setSelectedComponent(cmp){
      this.selectedComponent = cmp;
    }
  }
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