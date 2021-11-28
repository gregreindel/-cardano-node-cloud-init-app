<template>
  <div :class="wrapClass">
    <div class="mt-4 space-y-4">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            v-model="inputEditValue"
            :id="name"
            :name="name"
            type="checkbox"
            class="
              focus:ring-indigo-500
              h-4
              w-4
              text-indigo-600
              border-gray-300
              rounded
            "
          />
        </div>
        <div class="ml-3 text-sm">
          <label
            :for="name"
            class="font-medium text-gray-700 dark:text-gray-200"
            >{{ label }}</label
          >
          <p class="text-sm text-gray-700 dark:text-gray-400 mt-1">
            {{ description }}
            <span
              class="
                text-xs
                font-semibold
                cursor-pointer
                hover:bg-opacity-50
                border-b
                dark:text-gray-300
                hover:border-green-900
                border-gray-600
              "
              v-if="descriptionAction"
              @click="emitAction('clickDescriptionAction', descriptionAction)"
              >Help</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    descriptionAction: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    inputValue: {
      type: String,
      default: "",
    },
    wrapClass: {
      type: String,
      default: "col-span-6",
    },
    selectOptions: {
      type: Array,
    },
  },
  setup(props, context) {
    const inputEditValue = computed({
      get(): string {
        return props.inputValue;
      },
      set(value: string): void {
        context.emit("inputText", value);
      },
    });

    const emitAction = (event: string) => context.emit("inputAction", event);

    return {
      inputEditValue,
      emitAction,
    };
  },
});
</script>
