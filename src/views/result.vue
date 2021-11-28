<template>
  <AppWrapper>
    <div class="">
      <div class="text-gray-700 dark:text-gray-400 text-base mb-1">
        Cardano Stake Pool Node Configuration
      </div>
      <div class="text-gray-900 dark:text-gray-200 text-2xl">
        Download
        <pre class="inline">Cloud-init</pre>
        Configuration
      </div>
      <div class="text-gray-900 dark:text-gray-200 text-base mt-4">
        You'll need to copy the contents of the files below, and add it to the
        `user data` input when creating your servers.
        <router-link to="/help">Click here</router-link> for instructions.
      </div>
    </div>

    <TextAreaTab
      class="mt-20"
      sectionTitle="Block Node"
      :tabs="BlockNodeOptions"
    />
    <TextAreaTab
      class="mt-20"
      sectionTitle="Relay Node"
      :tabs="RelayNodeOptions"
    />
    <TextAreaTab
      class="mt-20"
      sectionTitle="Relay 2 Node"
      :tabs="RelayNode2Options"
    />
    <TextAreaTab
      class="mt-20"
      sectionTitle="Monitoring Node"
      :tabs="dashboardNodeOptions"
    />

    <template v-slot:footer>
      <div
        class="flex justify-between mt-12"
        v-if="inputValues.bundleSetupScripts"
      >
        <div class="text-gray-600 dark:text-gray-300">
          <div class="font-semibold mb-4 text-xl">What are these files?</div>
          <div class="font-semibold mb-4 text-lg">User-Data</div>
          <div class="mb-4">
            This contains the scripts needed to fully configure your block and
            relay server, including registering the pool.
          </div>

          <div class="font-semibold mb-4 text-lg">How to use user data</div>
          <div class="mb-4">
            Copy the content and insert it into the user data input while
            creating your servers. See links below for details on using user
            data, or Google 'your-host-name cloud init; or 'your-host user
            data'.
          </div>
          <div class="mb-4">
            <div class="mb-2">
              <a
                class="text-sm"
                href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/launching-instance.html"
                >AWS</a
              >
              |
              <a
                class="text-sm"
                href="https://docs.digitalocean.com/products/droplets/how-to/provide-user-data/"
                >Digital Ocean</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between" v-else>
        <div class="my-20 text-gray-600 dark:text-gray-300">
          <div class="font-semibold mb-4 text-xl">What are these files?</div>
          <div class="font-semibold mb-4 text-lg">User-Data</div>
          <div class="mb-4">
            This is the minimum configuration needed to create the cardano-node
            server. It does not contain any block/relay specific files or
            settings and contains no setup scripts or utilities.
          </div>

          <hr class="my-4 border-gray-100 opacity-10 outline-none" />
          <div class="font-semibold mb-4 text-lg">Setup Scripts</div>
          <div class="mb-4">
            This contains the scripts needed to fully configure your block or
            relay server, including registering the pool.
          </div>

          <hr class="my-4 border-gray-100 opacity-10 outline-none" />

          <div class="font-semibold mb-4 text-lg">Why are they separate?</div>
          <div class="mb-4">
            There are a few reasons you may want the files separated.
          </div>
          <div class="mb-2">
            - You may not want to use the setup scripts provided but do want to
            be able to spin up cardano-node servers in under 5 minutes.
          </div>
          <div class="mb-2">
            - You are using AWS which has a 15kb limit on user-data. By
            separating the files you can supply user-data that will install
            cardano-node on boot, and can upload and execute the setup scripts
            upon logging in for the first time.
          </div>
        </div>
      </div>
    </template>
  </AppWrapper>
</template>
<script lang="ts">
import { defineComponent, computed, onMounted, ref, Ref } from "vue";
import { useStore } from "../store/index";
import { useRouter } from "vue-router";
import { fieldClassList } from "@/helpers/fieldClassList";
import TextAreaTab from "@/components/TextAreaTab.vue";
export default defineComponent({
  components: { TextAreaTab },
  setup() {
    const router = useRouter();
    const store = useStore();

    const goBack = () => router.replace("/");
    const inputValues = computed(
      () => store.getters.configureCardanoNodeFields
    );
    const fieldClasses = computed(() => fieldClassList(ref(true)));

    let relayResult = ref("");
    let relaySetupResult = ref("");
    let relaySetupCombined = ref("");

    let relay2Result = ref("");
    let relay2SetupResult = ref("");
    let relay2SetupCombined = ref("");

    let blockResult = ref("");
    let blockSetupResult = ref("");
    let blockSetupCombined = ref("");

    let dashboardResult = ref("");

    onMounted(async () => {
      try {
        const {
          relay = {},
          block = {},
          dashboard = {},
          relay2 = {},
        } = await store.dispatch("submitCardanoNodeConfiguration");
        relayResult.value = relay.userData;
        relaySetupResult.value = relay.setupScripts;
        relaySetupCombined.value = relay.combined;

        relay2Result.value = relay2.userData;
        relay2SetupResult.value = relay2.setupScripts;
        relay2SetupCombined.value = relay2.combined;

        blockResult.value = block.userData;
        blockSetupResult.value = block.setupScripts;
        blockSetupCombined.value = block.combined;

        dashboardResult.value = dashboard.userData;
      } catch (error) {
        goBack();
      }
    });

    const RelayNodeOptions = computed(() => {
      const out: { label: string; data: string | Ref<string> }[] = [];

      if (relayResult.value) {
        out.push({
          label: "User Data",
          data: relayResult.value,
        });
      }

      if (relaySetupCombined.value) {
        out.push({
          label: "User Data + Scripts",
          data: relaySetupCombined.value,
        });
      }

      if (relaySetupResult.value) {
        out.push({
          label: "Setup Script",
          data: relaySetupResult.value,
        });
      }
      return out;
    });

    const Relay2NodeOptions = computed(() => {
      const out: { label: string; data: string | Ref<string> }[] = [];

      if (relay2Result.value) {
        out.push({
          label: "User Data",
          data: relay2Result.value,
        });
      }

      if (relay2SetupCombined.value) {
        out.push({
          label: "User Data + Scripts",
          data: relay2SetupCombined.value,
        });
      }

      if (relay2SetupResult.value) {
        out.push({
          label: "Setup Script",
          data: relay2SetupResult.value,
        });
      }
      return out;
    });

    const BlockNodeOptions = computed(() => {
      const out: { label: string; data: string | Ref<string> }[] = [];
      if (blockResult.value) {
        out.push({
          label: "User Data",
          data: blockResult.value,
        });
      }
      if (blockSetupCombined.value) {
        out.push({
          label: "User Data + Scripts",
          data: blockSetupCombined.value,
        });
      }
      if (blockSetupResult.value) {
        out.push({
          label: "Setup Script",
          data: blockSetupResult.value,
        });
      }
      return out;
    });

    const dashboardNodeOptions = computed(() => {
      const out: { label: string; data: string | Ref<string> }[] = [];
      if (dashboardResult.value) {
        out.push({
          label: "User Data",
          data: dashboardResult.value,
        });
      }
      return out;
    });

    const displayLink = computed(() => {
      const base = process.env.VUE_APP_DOMAIN;
      const params = new URLSearchParams(inputValues.value);
      return `${base}/result?${params}`;
    });
    return {
      goBack,
      inputValues,
      fieldClasses,
      displayLink,
      blockResult,
      relayResult,
      blockSetupResult,
      relaySetupResult,
      Relay2NodeOptions,
      RelayNodeOptions,
      BlockNodeOptions,
      dashboardNodeOptions,
    };
  },
});
</script>
