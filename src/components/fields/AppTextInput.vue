<template>
  <div :class="wrapClass">
    <input
      v-if="['text', 'number'].includes(type)"
      v-model="inputEditValue"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :class="fieldClasses"
    />
    <textarea
      v-else-if="'textarea' === type"
      rows="6"
      :class="fieldClasses"
      v-model="inputEditValue"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { validateField, Validators } from "@/helpers/validators";
import { fieldClassList } from "@/helpers/fieldClassList";
import { defineComponent, computed, PropType } from "vue";

export default defineComponent({
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
    type: {
      type: String,
      default: "text",
    },
    validator: {
      type: Array as PropType<Validators[]>,
      default: () => [],
    },
    inputValue: {
      type: String,
      default: "",
    },
    wrapClass: {
      type: String,
      default: "col-span-6",
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

    const isFieldValid = computed(() => {
      const { validator } = props;
      return validateField(validator, inputEditValue.value);
    });

    const fieldClasses = computed(() => fieldClassList(isFieldValid));

    return {
      inputEditValue,
      isFieldValid,
      fieldClasses,
    };
  },
});
</script>
