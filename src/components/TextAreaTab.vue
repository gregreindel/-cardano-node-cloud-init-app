<template>
  <div v-if="tabs.length">
    <div class="flex my-4 justify-between items-center">
      <div class="text-lg text-gray-900 dark:text-gray-100">
        {{ sectionTitle }}
      </div>
      <div class="sm:hidden mb-2">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select
          id="tabs"
          name="tabs"
          class="
            block
            w-full
            focus:ring-indigo-500 focus:border-indigo-500
            border-gray-300
            rounded-md
          "
        >
          <option v-for="(tab, i) in tabs" :key="`tab-${i}`">
            {{ tab.label }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex justify-end space-x-4" aria-label="Tabs">
          <span
            class="px-3 py-1 font-medium text-sm rounded-md cursor-pointer"
            :class="{
              'text-gray-100 hover:text-gray-200 bg-gray-700': activeTab === i,
              'text-gray-400 hover:text-gray-300': activeTab !== i,
            }"
            @click="activeTab = i"
            v-for="(tab, i) in tabs"
            :key="`tab-${i}`"
            >{{ tab.label }}</span
          >
        </nav>
      </div>
    </div>

    <div v-for="(tab, i) in tabs" :key="`tab-${i}`">
      <textarea
        readonly
        v-show="activeTab === i"
        keep-alive
        class="w-full overflow-scroll"
        :class="fieldClasses"
        rows="16"
        :value="tab.data"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from "vue";
import { fieldClassList } from "@/helpers/fieldClassList";

interface TabProp {
  label: string;
  data: string;
}

export default defineComponent({
  props: {
    sectionTitle: {
      type: String,
      default: "",
    },
    tabs: {
      type: Array as PropType<TabProp[]>,
      default: () => [],
    },
  },
  setup() {
    const activeTab = ref(0);
    const fieldClasses = computed(() => fieldClassList(ref(true)));
    const tabClasses = computed(() => ({}));
    return { fieldClasses, activeTab };
  },
});
</script>
