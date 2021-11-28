<template>
  <div :class="wrapClass">
    <!-- {{ isFieldValid }} -->

    <div v-if="['text'].includes(type)" class="relative">
      <input
        v-model="inputEditValue"
        :name="name"
        :placeholder="placeholder"
        type="text"
        :class="fieldClasses"
      />
      <XCircleIcon
        v-if="inputValue.length > 0"
        class="
          flex-shrink-0
          h-5
          w-5
          text-gray-400
          absolute
          right-2
          top-2
          cursor-pointer
          hover:text-red-600
        "
        aria-hidden="true"
        @click="handleClickRemove"
      />
    </div>

    <!-- <textarea
      v-else-if="'textareaMulti' === type"
      rows="3"
      class="
        shadow-sm
        focus:ring-indigo-500 focus:border-indigo-500
        mt-1
        block
        w-full
        sm:text-sm
        border border-gray-300
        rounded-md
      "
      v-model="inputEditValue"
      :placeholder="placeholder"
    /> -->
  </div>
</template>

<script lang="ts">
import { Validators, validateField } from "@/helpers/validators";
import { defineComponent, PropType, computed } from "vue";
import { XCircleIcon } from "heroicons-vue3/solid";
import { fieldClassList } from "@/helpers/fieldClassList";

export default defineComponent({
  components: { XCircleIcon },
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
    index: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(props, context) {
    const handleClickRemove = () => {
      const { index } = props;
      // if (props.index > 0) {
      context.emit("remove", { index });
      // }
    };
    const inputEditValue = computed({
      get(): string {
        return props.inputValue;
      },
      set(value: string): void {
        const { index } = props;
        context.emit("inputText", { value, index });
      },
    });

    const isFieldValid = computed(() => {
      const { validator, inputValue } = props;
      return validateField(validator, inputValue);
    });

    const fieldClasses = computed(() => fieldClassList(isFieldValid));

    return {
      isFieldValid,
      fieldClasses,
      inputEditValue,
      handleClickRemove,
    };
  },
});
</script>
