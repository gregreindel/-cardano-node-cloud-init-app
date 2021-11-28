<template>
  <button type="submit" :class="buttonClasses" :disabled="isDisabled">
    {{ text }}
    <svg
      v-if="icon && icon === 'download'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-4 w-4 ml-1"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "primary",
      validator: (val: string) => ["primary", "text"].includes(val),
    },
    icon: {
      type: String,
      default: "primary",
      validator: (val: string) => ["download"].includes(val),
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const buttonClasses = computed(() =>
      Object.assign(
        {},
        {
          "inline-flex": true,
          "justify-center": true,
          "items-center": true,
          "py-4": true,
          "px-4": true,
          "border border-transparent": true,
          "shadow-sm": true,
          "text-sm": true,
          "font-medium": true,
          "rounded-md": true,
          "text-white": true,
          "bg-green-600": props.type === "primary",
          "hover:bg-green-700": props.type === "primary",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500":
            true,
          "cursor-not-allowed opacity-50": props.isDisabled,
        }
      )
    );
    return { buttonClasses };
  },
});
</script>
