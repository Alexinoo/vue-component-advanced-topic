
<!-- INTRODUCTION TO SLOTS

-Since we have registered BaseCard globally on the main.js

- We can also control the styling of the content rendered between the <section></section> 

-We can do this by wrapping the  header and the ul  content using <basecard></basecard>

-Therefore we do not need the styling in the style section - That is why it is commented
      section {
        margin: 2rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
      } 
-->

<!-- NAMED  SLOTS

    -Now we want to tell Vue that this content  i.e the (   <h2>Available Badges</h2> ) should go to the header slot
  e.g.
     <template v-slot:header>
        <h2>Available Badges</h2>
      </template>

    -We can also be more explicit to tell Vue that the rest of the content should go to default slot
e.g. 

  <template>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>

      -And then adding a v-slot:default;

      -default is a reserved keyword and like the name applies it wlways targets the default slot

        -There is a shorthand for v-slot i.e the #symbol

    -Means you can write it as
    v-slot:header or #header

     <template #header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>



 -->

<template>
  <section>
    <base-card>
      <template #header>
        <h2>Available Badges</h2>
      </template>

      <template #default>
        <ul>
          <li>
            <base-badge type="admin" caption="ADMIN"></base-badge>
          </li>
          <li>
            <base-badge type="author" caption="AUTHOR"></base-badge>
          </li>
        </ul>
      </template>
    </base-card>
  </section>
</template>

<style scoped>
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */

section h2 {
  margin: 0.5rem 0;
  color: #3a3a3a;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

li {
  margin-right: 1rem;
}
</style>