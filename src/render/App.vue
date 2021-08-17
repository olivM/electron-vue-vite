<template>
  <div class="h-screen w-screen flex flex-col pt-12">
    <nav
      class="
        w-screen
        h-12
        border-primary-800 border-b
        items-center
        flex
        shadow-xl
        z-0
        fixed
        top-0
      "
      style="-webkit-app-region: drag"
    />
    <Editor />
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";

export default {
  name: "App",
  components: {
    Editor,
  },
};
</script>
