<template>
  <AppWrapper>
    <div class="mb-12">
      <div class="text-gray-700 dark:text-gray-400 text-base mb-1">
        Cardano Stake Pool Node Configuration
      </div>
      <div class="text-gray-900 dark:text-gray-200 text-2xl">
        Cardano
        <pre class="inline">Cloud-init</pre>
        Instructions
      </div>
      <div class="text-gray-900 dark:text-gray-200 text-base mt-4">
        How to use Cloud-init files to configure your Cardano stake pool
        servers.
      </div>
    </div>

    <div v-if="isRootRoute.value.path === '/help'">
      <div class="text-gray-700 dark:text-gray-400 text-lg mb-1">
        Select an option below:
      </div>

      <!-- <div class="bg-yellow-300 bg-opacity-25 px-3 py-2 mb-4 rounded-sm">
      Note: It's recommended to use Ubuntu 20.04 x64.
    </div> -->
    </div>

    <div v-if="chapters.length">
      <div class="flex mt-4 mb-8 justify-start items-center">
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
            <option v-for="(tab, i) in chapters" :key="`tab-${i}`">
              {{ tab.label }}
            </option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="flex justify-end space-x-4" aria-label="Tabs">
            <router-link
              :to="`/help/${tab.to}`"
              v-slot="{ isActive }"
              class="px-3 py-1 font-medium text-sm rounded-md cursor-pointer"
              :class="
                isActive
                  ? 'text-gray-100 hover:text-gray-200 bg-gray-700'
                  : 'text-gray-400 hover:text-gray-300'
              "
              v-for="(tab, i) in chapters"
              :key="`tab-${i}`"
              >{{ tab.label }}
            </router-link>
          </nav>
        </div>
      </div>
      <router-view class="w-full pb-12" />
    </div>

    <template v-slot:footer> </template>
  </AppWrapper>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "../store/index";
import { useRouter } from "vue-router";
import { fieldClassList } from "@/helpers/fieldClassList";

const chapters = [
  {
    label: "Block + Relay Install",
    component: "basicSetup",
    to: "basic",
  },
  {
    label: "Relay Node Setup",
    component: "setupRelay",
    to: "relay",
  },
  {
    label: "Block Node Setup",
    component: "setupBlock",
    to: "block",
  },
  {
    label: "Monitoring Dashboard",
    component: "setupDashboard",
    to: "dashboard",
  },
  {
    label: "Advanced",
    component: "advanced",
    to: "advanced",
  },
];
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const goBack = () => router.replace("/");
    const inputValues = computed(
      () => store.getters.configureCardanoNodeFields
    );
    const isRootRoute = computed(() => router.currentRoute);
    const displayLink = computed(() => {
      const base = process.env.VUE_APP_DOMAIN;
      const params = new URLSearchParams(inputValues.value);
      return `${base}/result?${params}`;
    });

    onMounted(() => {
      store.commit("setCardanoNodeConfigurationError", "");
    });

    const activeTab = ref(0);
    const fieldClasses = computed(() => fieldClassList(ref(true)));

    return {
      chapters,
      goBack,
      inputValues,
      displayLink,
      fieldClasses,
      activeTab,
      isRootRoute,
    };
  },
});
</script>
<style scoped>
.router-link-active {
  @apply bg-gray-700;
}
</style>
