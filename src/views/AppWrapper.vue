<template>
  <div class="w-full max-w-3xl">
    <div
      v-if="appErrorMessage"
      class="
        flex
        items-center
        justify-center
        w-full
        bg-red-500
        text-gray-200
        px-2
        py-3
        top-0
        left-0
        absolute
        z-10
      "
    >
      <div class="text-sm text-center font-medium">
        {{ appErrorMessage }}
      </div>
      <div
        class="
          cursor-pointer
          absolute
          z-15
          top-0
          right-0
          bg-red-600
          h-full
          w-12
          flex
          items-center
          justify-center
        "
        @click="clearAppErrorMessage"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <div class="sm:rounded-md relative" :class="backgroundClass">
      <transition>
        <AppLoading v-if="loading" />
      </transition>

      <div class="pt-5 px-4 sm:px-0">
        <div class="mt-8">
          <slot></slot>
        </div>
      </div>

      <div
        v-if="!loading && $slots.footer"
        class="bg-gray-50 dark:bg-gray-800 px-4 sm:px-0 pb-4"
      >
        <slot name="footer"></slot>

        <div class="flex justify-between items-start">
          <div class="dark:text-gray-400">
            <router-link class="hover:underline hover:text-gray-200" to="/"
              >Home</router-link
            >

            <span class="mx-2">|</span>
            <router-link class="hover:underline hover:text-gray-200" to="/help"
              >Instructions</router-link
            >

            <div class="text-xs dark:text-gray-500 mt-1">
              Not affiliated with Cardano, or Cloud-init
            </div>
          </div>
          <a
            class="hover:underline hover:text-gray-200"
            href="https://github.com/gregreindel/cardano-node-cloud-init"
          >
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              class="octicon octicon-mark-github v-align-middle"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path></svg
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store/index";

export default defineComponent({
  props: {
    pageTitle: {
      type: String,
      default: "",
    },
    backgroundClass: {
      type: String,
      default: "bg-white dark:bg-gray-800",
    },
    pageError: {
      type: Boolean,
      default: false,
    },
    pageErrorMessage: {
      type: String,
      default: "",
    },
  },
  setup() {
    const appErrorMessage = computed(() => store.getters.appErrorMessage);
    const clearAppErrorMessage = () => {
      store.commit("setCardanoNodeConfigurationError", "");
    };

    const store = useStore();
    const loading = computed(() => store.getters.isAppLoading);
    return { loading, appErrorMessage, clearAppErrorMessage };
  },
});
</script>
