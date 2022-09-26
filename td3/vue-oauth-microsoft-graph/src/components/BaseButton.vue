<template>
    <button class="button-37"><slot>Submit</slot></button>
    <!-- Advanced case with our button in a root element
    <span>
        <button class="button-37" v-bind="$attrs"><slot>Submit</slot></button>
    </span>
    -->
    
</template>

<script>
    
    export default {
      name: 'BaseButton'
      //inheritAttrs: false
    }

</script>

<style>

/* CSS */
.button-37 {
  background-color: rgb(60, 1, 255);
  border: 1px solid #ffd900;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-37:disabled{
  background-color: gray;
  border: 1px solid black;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: not-allowed;
  font-family: "Akzidenz Grotesk BQ Medium", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  font-weight: 400;
  outline: none;
  outline: 0;
  padding: 10px 25px;
  text-align: center;
  transform: translateY(0);
  transition: transform 150ms, box-shadow 150ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
}

.button-primary:enabled {
  /* css properties specific to the primary color */
  background-color: #42b983;
}

.button-primary:enabled:hover {
  /* css properties specific to the primary color */
  background-color: #4cce93;
}

.button-primary:enabled:focus {
  /* css properties specific to the primary color */
  background-color: #47d696;
}

.button-warn:enabled {
  /* css properties specific to the primary color */
  background-color: #ff5722;
}

.button-warn:enabled:hover {
  /* css properties specific to the primary color */
  background-color: #ff7043;
}

.button-warn:enabled:focus {
  /* css properties specific to the primary color */
  background-color: #ff8a65;
}

.button-danger:enabled {
  /* css properties specific to the primary color */
  background-color: #e53935;
}

.button-danger:enabled:hover {
  /* css properties specific to the primary color */
  background-color: #ef5350;
}

.button-danger:enabled:focus {
  /* css properties specific to the primary color */
  background-color: #e57373;
}

.button-37:hover:enabled {
  box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
  transform: translateY(-2px);
}

@media (min-width: 768px) {
  .button-37 {
    padding: 10px 30px;
  }
}
</style>