<template>
  <div :class="wrapClass">
    <input
      v-model="inputEditValueTime"
      type="time"
      class="
        mt-1
        focus:ring-indigo-500 focus:border-indigo-500
        block
        w-full
        shadow-sm
        sm:text-sm
        border-gray-300
        rounded-md
      "
    />
    <input
      type="date"
      v-model="inputEditValueDate"
      class="
        mt-1
        focus:ring-indigo-500 focus:border-indigo-500
        block
        w-full
        shadow-sm
        sm:text-sm
        border-gray-300
        rounded-md
      "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from "vue";

const combineDateAndTime = (dateString: string, timeString: string) => {
  const combined = new Date(dateString + " " + timeString);
  return combined;
};

const getTimeStringFromDate = (date: Date) => {
  const timeString = date.getHours() + ":" + date.getMinutes() + ":00";
  return timeString;
};

const getDateStringFromDate = (date: Date) => {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var dateString = "" + year + "-" + month + "-" + day;
  return dateString;
};

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
    inputValue: {
      type: Date,
      default: "",
    },
    wrapClass: {
      type: String,
      default: "col-span-6",
    },
  },
  setup(props, context) {
    const inputEditValueDate = ref("");
    const inputEditValueTime = ref("");

    if (props.inputValue) {
      inputEditValueDate.value = getDateStringFromDate(props.inputValue);
      inputEditValueTime.value = getTimeStringFromDate(props.inputValue);
    }

    const inputEditValue = computed(() =>
      combineDateAndTime(inputEditValueTime.value, inputEditValueDate.value)
    );

    watch(inputEditValue, (value) => {
      context.emit("inputText", value);
    });

    return {
      inputEditValue,
      inputEditValueDate,
      inputEditValueTime,
    };
  },
});
</script>
