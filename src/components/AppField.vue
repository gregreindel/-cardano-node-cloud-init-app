<template>
  <div :class="wrapClass">
    <label
      v-if="type !== 'checkbox'"
      :for="name"
      class="
        block
        text-sm
        font-medium
        text-gray-700
        dark:text-gray-200
        mb-1
        select-none
      "
      >{{ label }}</label
    >
    <component
      :is="fieldComponent"
      :name="name"
      :type="type"
      :label="label"
      :description="description"
      :descriptionAction="descriptionAction"
      :isValid="isValid"
      :validator="validator"
      :placeholder="placeholder"
      :inputValue="inputValue"
      :selectOptions="selectOptions"
      v-on:inputText="emitUpdate"
      v-on:inputAction="emitAction(descriptionAction)"
    />
    <div
      v-if="description && type !== 'checkbox'"
      class="text-sm text-gray-700 dark:text-gray-400 mt-3 select-none"
    >
      {{ description }}
      <span
        v-if="descriptionAction"
        @click="emitAction(descriptionAction)"
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
        >Help</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

import AppTextInput from "./fields/AppTextInput.vue";
import AppTextInputRepeater from "./fields/Repeater/AppTextInputRepeater.vue";
import AppSelectInput from "./fields/AppSelectInput.vue";
import AppCheckboxInput from "./fields/AppCheckboxInput.vue";
import AppDateTimeInput from "./fields/AppDateTimeInput.vue";

const allowedTypes = [
  "text",
  "textMulti",
  "textarea",
  "textareaMulti",
  "select",
  "date",
  "checkbox",
];

export default defineComponent({
  components: {
    AppTextInput,
    AppSelectInput,
    AppCheckboxInput,
    AppDateTimeInput,
    AppTextInputRepeater,
  },
  props: {
    label: {
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
    description: {
      type: String,
      default: "",
    },
    descriptionAction: {
      type: String,
      default: "",
    },
    show: {
      type: Array,
      default: () => [],
    },
    validator: {
      type: Array,
      default: () => [],
    },
    selectOptions: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: "text",
      validate: (val: string) => allowedTypes.includes(val),
    },
    inputValue: {
      type: [String, Array],
      default: "",
    },
    wrapClass: {
      type: String,
      default: "col-span-6",
    },
  },
  setup(props, context) {
    const fieldComponent = computed(() => {
      const options = {
        text: "AppTextInput",
        number: "AppTextInput",
        textMulti: "AppTextInputRepeater",
        textarea: "AppTextInput",
        textareaMulti: "AppTextInputRepeater",
        select: "AppSelectInput",
        date: "AppDateTimeInput",
        checkbox: "AppCheckboxInput",
      } as any;
      return options[props.type];
    });

    const emitUpdate = (event: any) => context.emit("inputText", event);
    const emitAction = (event: string) => context.emit("inputAction", event);
    const isValid = computed(() => false);

    return {
      fieldComponent,
      emitUpdate,
      emitAction,
      isValid,
    };
  },
});
</script>
