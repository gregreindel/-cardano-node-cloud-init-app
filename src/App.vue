<template>
  <div class="h-screen w-screen overflow-hidden" :class="enabled ? `dark` : ''">
    <div id="top"></div>
    <div
      class="
        flex flex-col
        justify-start
        items-center
        h-screen
        w-screen
        bg-white
        dark:bg-gray-800
        overflow-scroll
      "
    >
      <div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
// import { Switch } from "@headlessui/vue";
export default defineComponent({
  components: {
    // Switch,
  },
  setup() {
    const enabled = ref(true);
    return {
      enabled,
    };
  },
});
</script>
