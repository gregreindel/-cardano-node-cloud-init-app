<template>
  <div
    class="
      w-full
      h-full
      absolute
      bg-white
      dark:bg-gray-800
      bg-opacity-50
      flex
      items-center
      justify-center
      z-10
      overflow-hidden
    "
  >
    <div
      class="
        w-48
        flex
        items-center
        justify-center
        text-gray-700
        dark:text-gray-200
      "
      title="loading"
    >
      <div class="text-center flex justify-center flex-col items-center">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="24px"
          height="30px"
          viewBox="0 0 24 30"
          style="enable-background: new 0 0 50 50"
          xml:space="preserve"
        >
          <rect x="0" y="0" width="4" height="10" class="fill-current">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="10" y="0" width="4" height="10" class="fill-current">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.2s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="20" y="0" width="4" height="10" class="fill-current">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.4s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
        <div class="text-center mt-4">
          Generating Cardano
          <pre>Cloud-init</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
