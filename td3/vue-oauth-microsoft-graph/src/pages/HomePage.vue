<template>
    <div class="hello">
      <h1>This is our new main page. Hello!</h1>
      <base-button role="button">Confirm</base-button>
      <base-button role="button" disabled>Not allowed</base-button><br>
      <base-button role="button" class="button-primary">Submit</base-button>
      <base-button role="button" class="button-warn">Log off</base-button>
      <base-button role="button" class="button-danger">Bomb!</base-button><br><br>
      <async-button role="button" v-bind:onClick="release2">{{buttonText}}</async-button>
    </div>
  </template>
  
  <script>

    import BaseButton from './../components/BaseButton.vue'
    import AsyncButton from './../components/AsyncButton.vue'
    export default {
      name: 'HomePage',
      components: {
        BaseButton,
        AsyncButton
      },
      data () {
      return {
        attempts: 2,
        buttonText: "Async button"
      }
    },
  
    methods: {
      release2() {
        this.buttonText = "Please wait for " + this.attempts + "s..."
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            this.attempts++; 
          }, this.attempts * 1000)
        }).finally(() => {
          this.buttonText  = "Async button";
        })
      }
    }
    }
  </script>
  