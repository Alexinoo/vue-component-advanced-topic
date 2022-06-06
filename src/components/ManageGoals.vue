
<!-- MANAGE GOALS

-Add an input field to add Goal - use ref="" for binding and a button to set Goal - Though not adding anywhere

-Add a click event and pass setGoal() to be executed once the click evt is fired

-Add setGoal() to methods  that validates required from this.ref$.enteredGoal.value

-Add data property isInvalid and initially set it to false

-The logic is to set isInvalid  to true if the user does not enter a value; and show an alert

-But default alert (JS - alert()) is not what we want because it does not fit the styles of our app - And therefore we wanna build our own modal/alert

-A good idea is to create an alert that will be shown if invalid is true and use it as a slot

-Import it and register it as a local Component 

-Created ErrorAlert.vue and added some styles for it to look nicer

-Import it and register it as a local Component in ManageGoals

            <template>
                <dialog open>
                    <slot></slot>
                </dialog>
            </template>

            <style scoped>

                dialog {
                    margin : 0;
                    position: fixed;
                    top: 20vh;
                    left: 30%;
                    width :40%;
                    background-color: #fff;
                    box-shadow: 0 2px 8px rgba( 0, 0 , 0 , 0.26);
                    padding: 1rem;
                }
            </style>

-Then we add it next  after <button @click="setGoal"> Set Goal</button>

-We show it once inpuIsInvalid is true;

     <error-alert v-if="inpuIsInvalid">
       <h2>Input is Invalid</h2>
        <p>Input cannot be blank</p>
         <button @click="confirmError">Okay</button>     
     </error-alert>

-->


<!-- TELEPORTING

-Howevere , its nested below  <button @click="setGoal"> Set Goal</button> which is somehow semantically incorrect.

-Therefore , in order to move it to some other section in our HTML - we use Teleport
    <teleport></teleport>

-Teleport takes to="" where we set/pass css selector to it and the dialog will be teleported to which place you specified

-e.g. 
<teleport to="body">
   <error-alert v-if="inpuIsInvalid">
       <h2>Input is Invalid</h2>
        <p>Input cannot be blank</p>
         <button @click="confirmError">Okay</button>     
     </error-alert>
    </teleport>

-In this case the dialog is displayed just above the </body> script tag

<dialog open="" data-v-2574a738="">
    <h2>Input is Invalid</h2>
    <p>Input cannot be blank</p>
    <button>Okay</button>
</dialog>


-->


<template>
    <div class="">
        <h2>Manage Goals</h2>
        <input type="text" ref="enteredGoal" />
        <button @click="setGoal"> Set Goal</button>

        <teleport to="body">
            <error-alert v-if="inpuIsInvalid">
                <h2>Input is Invalid</h2>
                <p>Input cannot be blank</p>
                <button @click="confirmError">Okay</button>
            </error-alert>
        </teleport>

    </div>
</template>

<script>

import ErrorAlert from './ErrorAlert.vue'

export default {

    components : {
        ErrorAlert
    },

    data(){
        return {
            inpuIsInvalid : false
        }
    },

    methods : {

        setGoal(){

            const enteredValue = this.$refs.enteredGoal.value

            if( enteredValue  === ''){

                // alert('Value required')
                this.inpuIsInvalid = true
            }


        },

        confirmError(){
            this.inpuIsInvalid = false
        }
    }
}
</script>