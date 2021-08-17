<template>
  <div id="editor" class="p-4">
    <div class="flex w-full">
      <textarea class="flex-1 p-2" :value="input" @input="update"></textarea>
      <div class="flex-1 p-2 prose lg:prose-xl" v-html="compiledMarkdown"></div>
    </div>
  </div>
</template>
<script>
import marked from "marked";
import _ from "lodash";

export default {
  data() {
    return {
      input: "# hello",
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    update: _.debounce(function (e) {
      this.input = e.target.value;
    }, 300),
  },
};
</script>


<style scoped>
</style>
