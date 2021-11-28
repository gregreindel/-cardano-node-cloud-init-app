<template>
  <div :class="wrapClass">
    <div v-if="['textMulti'].includes(type)" class="flex flex-wrap">
      <RepeaterItem
        @add="addInput"
        @remove="removeInput"
        @inputText="inputText"
        :inputValue="i"
        :validator="validator"
        :index="ii"
        :ref="
          (el) => {
            if (el) divs[ii] = el;
          }
        "
        v-for="(i, ii) in inputValue"
        :key="`rep-${ii}`"
        wrapClass="mb-2 mr-2"
      />
    </div>

    <span
      class="mt-1 cursor-pointer text-xs text-gray-900 dark:text-gray-100"
      @click="addInput"
      >Add another</span
    >
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  watch,
  reactive,
  ref,
  onMounted,
} from "vue";
import RepeaterItem from "@/components/fields/Repeater/RepeaterItem.vue";

export default defineComponent({
  components: {
    RepeaterItem,
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
    type: {
      type: String,
      default: "text",
    },
    validator: {
      type: Array,
      default: () => [],
    },
    inputValue: {
      type: Array as PropType<string[]>,
      default: (): string[] => [""],
    },
    wrapClass: {
      type: String,
      default: "col-span-6",
    },
  },
  setup(props, context) {
    const divs = ref([]);

    // const inputValue = ref("");
    // const inputEdit: { value: string[] } = ref([]);
    const inputEditValue = reactive([""]);
    const addInput = () => {
      inputEditValue.push("");
    };

    const removeInput = (event: { index: number }) => {
      const { index } = event;
      inputEditValue.splice(index, 1);
      if (inputEditValue.length === 0) {
        inputEditValue.push("");
      }
    };

    const inputText = (event: { value: string; index: number }) => {
      const { index, value } = event;
      inputEditValue[index] = value;
    };
    watch(inputEditValue, (count, prevCount) => {
      context.emit("inputText", count);
    });

    return {
      inputEditValue,
      inputText,
      removeInput,
      addInput,
      divs,
    };
  },
});
</script>
