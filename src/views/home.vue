<template>
  <AppWrapper>
    <div class="">
      <div class="text-gray-700 dark:text-gray-400 text-base mb-1">
        Cardano Stake Pool Node Configuration
      </div>
      <div class="text-gray-900 dark:text-gray-200 text-2xl">
        Generate
        <pre class="inline">Cloud-init</pre>
        Configuration
      </div>
      <div class="text-gray-900 dark:text-gray-200 text-base mt-4">
        Create a Cloud-init YAML file to use when launching Cardano stake pool
        servers.
      </div>
    </div>

    <div class="bg-gray-900 px-10 pt-4 pb-12 mt-8 rounded-md">
      <div class="grid grid-cols-6 gap-6 mt-8 mb-8">
        <AppField
          v-for="(field, index) in configureCardanoNodeForm(inputValues)"
          v-on:inputText="updateFormField({ key: field.key, value: $event })"
          v-on:inputAction="handleInputAction"
          :key="`field_${field.type}_${index}`"
          :selectOptions="field.options"
          :inputValue="inputValues[field.key]"
          :label="field.label"
          :type="field.type"
          :name="field.key"
          :show="field.show"
          :validator="field.validator"
          :description="field.description"
          :descriptionAction="field.descriptionAction"
          :wrapClass="field.wrapClass"
        />
      </div>

      <div class="mb-12">
        <div
          v-if="
            showAdvancedSettings &&
            (inputValues.prepareRelayNode || inputValues.prepareBlockNode)
          "
        >
          <div
            class="
              text-gray-900
              dark:text-gray-100
              mb-8
              flex
              justify-between
              items-center
            "
          >
            <span>Advanced Settings</span>
            <span class="text-xs cursor-pointer"
              ><span @click="showAdvancedSettings = false">Hide</span>
              <!-- |
            <span>Discard</span> -->
            </span>
          </div>

          <div
            class="bg-gray-800 rounded-md p-8 mb-6"
            v-if="inputValues.prepareBlockNode"
          >
            <div class="text-gray-300 text-xl font-light mb-3">Block Node</div>
            <div class="grid grid-cols-6 gap-6 mt-8">
              <AppField
                v-for="(field, index) in [
                  ...configureCardanoNodeFormBlock(inputValues),
                ]"
                v-on:inputText="
                  updateFormField({ key: field.key, value: $event })
                "
                v-on:inputAction="handleInputAction"
                :key="`advanced_field_${field.type}_${index}`"
                :selectOptions="field.options"
                :inputValue="inputValues[field.key]"
                :label="field.label"
                :type="field.type"
                :name="field.key"
                :show="field.show"
                :validator="field.validator"
                :description="field.description"
                :descriptionAction="field.descriptionAction"
                :wrapClass="field.wrapClass"
              />
            </div>
          </div>

          <div
            class="bg-gray-800 rounded-md p-8 mb-6"
            v-if="inputValues.prepareRelayNode"
          >
            <div class="text-gray-300 text-xl font-light mb-3">Relay Node</div>

            <div class="grid grid-cols-6 gap-6 mt-8">
              <AppField
                v-for="(field, index) in [
                  ...configureCardanoNodeFormRelay(inputValues),
                ]"
                v-on:inputText="
                  updateFormField({ key: field.key, value: $event })
                "
                v-on:inputAction="handleInputAction"
                :key="`advanced_field_${field.type}_${index}`"
                :selectOptions="field.options"
                :inputValue="inputValues[field.key]"
                :label="field.label"
                :type="field.type"
                :name="field.key"
                :show="field.show"
                :validator="field.validator"
                :description="field.description"
                :wrapClass="field.wrapClass"
                :descriptionAction="field.descriptionAction"
              />
            </div>
          </div>

          <div
            class="bg-gray-800 rounded-md p-8"
            v-if="inputValues.prepareDashboard"
          >
            <div class="text-gray-300 text-xl font-light mb-3">
              Monitoring Dashboard
            </div>

            <div class="grid grid-cols-6 gap-6 mt-8">
              <AppField
                v-for="(field, index) in [
                  ...configureCardanoNodeFormDashboard(inputValues),
                ]"
                v-on:inputText="
                  updateFormField({ key: field.key, value: $event })
                "
                v-on:inputAction="handleInputAction"
                :key="`advanced_field_${field.type}_${index}`"
                :selectOptions="field.options"
                :inputValue="inputValues[field.key]"
                :label="field.label"
                :type="field.type"
                :name="field.key"
                :show="field.show"
                :validator="field.validator"
                :description="field.description"
                :wrapClass="field.wrapClass"
                :descriptionAction="field.descriptionAction"
              />
            </div>
          </div>
        </div>
        <!-- Hiding advanced settings for now. -->
        <span
          v-if="inputValues.prepareRelayNode || inputValues.prepareBlockNode"
          class="
            cursor-pointer
            text-gray-600
            dark:text-gray-300
            hover:text-green-600
          "
          :class="{
            'mt-4 text-xs': showAdvancedSettings,
            'text-sm font-medium': !showAdvancedSettings,
          }"
          @click="showAdvancedSettings = !showAdvancedSettings"
        >
          {{ !showAdvancedSettings ? `Show Advanced` : `Hide Advanced` }}
        </span>
      </div>
      <AppButton
        :isDisabled="disableButton"
        class="w-full"
        text="Create"
        @click="submitCardanoNodeConfiguration"
      />
      <div
        class="
          flex
          justify-center
          items-center
          py-4
          text-gray-300
          italic
          text-sm
        "
      >
        or if you want to run it locally
      </div>

      <div class="relative">
        <code
          class="
            mb-2
            bg-gray-700
            p-3
            inline-block
            text-gray-600
            dark:text-gray-300
          "
        >
          <span class="select-none mr-2 text-sm">$</span>git clone
          https://github.com/gregreindel/cardano-node-cloud-init.git
        </code>
        <code class="mb-2 bg-gray-700 p-3 block text-gray-300 break-words">
          <span class="">. /cardano-node-cloud-init/cardano-cloud.sh \</span>
          <span
            class="block"
            v-for="(flag, index) in generateCommandFlags"
            :key="`flag-${index}`"
          >
            {{
              `${flag}${index !== generateCommandFlags.length - 1 ? " \\" : ""}`
            }}
          </span>
        </code>
        <div
          v-if="disableButton"
          class="
            absolute
            top-0
            left-0
            w-full
            h-full
            z-5
            bg-black bg-opacity-70
            text-white
            flex flex-col
            justify-center
            items-center
            select-none
            overflow-hiddden
          "
        >
          <div class="text-sm">Make sure you have all the required fields.</div>
        </div>
      </div>
    </div>

    <template v-slot:footer>
      <div class="my-20 text-gray-600 dark:text-gray-300">
        <div class="font-semibold mb-4 text-lg">What does this do?</div>
        <div class="mb-4">
          This tool will generate Cloud-init files that can then be used to
          download, install, and configure a cardano-node server. In under 5
          minutes you can now quickly and easily create a cardano-node server
          which will be running the latest cardano-node and syncing with the
          blockchain.
        </div>

        <hr class="my-4 border-gray-100 opacity-10 outline-none" />

        <div class="font-semibold mb-4 text-lg">What is Cloud-init?</div>

        <div class="mb-4">
          As they state in their documentation;
          <span class="mb-4 italic">
            "Cloud-init is the industry standard multi-distribution method for
            cross-platform cloud instance initialization. It is supported across
            all major public cloud providers, provisioning systems for private
            cloud infrastructure, and bare-metal installations."
          </span>
        </div>

        <div class="mb-4">
          What this means for us is that Cloud-init gives a way to provide a
          YAML template which will run on a server’s initial boot. This template
          will provide instructions to the server, telling it to create users,
          create files, and run commands. Cloud-init is made available by almost
          all cloud providers.
        </div>

        <hr class="my-4 border-gray-100 opacity-10 outline-none" />

        <div class="font-semibold mb-4 text-lg">How does this work?</div>

        <div class="mb-4">
          After completing the form above, the tool will generate a yaml file
          based on your inputs (or multiple files if you chose to split up the
          initial config from the setup) You can then supply this file to your
          server during creation to simplify the node setup process.
          <router-link to="/help" class="underline">Learn more</router-link>
        </div>
      </div>
    </template>

    <!-- <pre class="bg-white">{{ inputValues }}</pre> -->
    <sshHelp :open="showSSHHelp" @close="showSSHHelp = false" />
    <bundleScriptHelp
      :open="showBundleScriptHelp"
      @close="showBundleScriptHelp = false"
    />
  </AppWrapper>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "../store/index";
import { useRouter } from "vue-router";

import { configureCardanoNodeForm } from "../helpers/configureCardanoNodeForm";
import { configureCardanoNodeFormAdvanced } from "../helpers/configureCardanoNodeFormAdvanced";
import {
  configureCardanoNodeFormBlock,
  configureCardanoNodeFormRelay,
  configureCardanoNodeFormDashboard,
} from "../helpers/configureCardanoNodeFormAdvanced";

import sshHelp from "@/components/modals/sshHelp.vue";
import bundleScriptHelp from "@/components/modals/bundleScriptHelp.vue";

import { useGtag } from "vue-gtag-next";

export default defineComponent({
  components: { sshHelp, bundleScriptHelp },
  setup() {
    const store = useStore();
    const router = useRouter();

    const inputValues = computed(
      () => store.getters.configureCardanoNodeFields
    );

    const disableButton = computed(() => !store.getters.canSubmit);

    const { event } = useGtag();
    const track = () => {
      event("submit", {
        event_category: "form",
        event_label: "step_1",
      });
    };

    const showAdvancedSettings = ref(false);

    const updateFormField = (event: { key: string; value: string }) => {
      store.commit("updateConfigureCardanoNodeForm", event);
    };

    const submitCardanoNodeConfiguration = async () => {
      if (store.getters.canSubmit) {
        store.commit("setCardanoNodeConfigurationError", "");
        router.push({
          path: "/result",
          query: inputValues.value,
        });
        track();
      }
    };

    const showSSHHelp = ref(false);
    const showBundleScriptHelp = ref(false);
    const handleInputAction = (inputAction: string) => {
      switch (inputAction) {
        case "showSSHHelp":
          showSSHHelp.value = true;
          break;
        case "showBundleScriptHelp":
          showBundleScriptHelp.value = true;
          break;
      }
    };

    const generateCommandString = computed(() => {
      const path = ". /path/to/cloud.sh";
      const flags = [];
      if (inputValues.value.version) {
        flags.push(`--version ${inputValues.value.version}`);
      }
      if (inputValues.value.sshPort) {
        flags.push(`--ssh-port ${inputValues.value.sshPort}`);
      }
      if (inputValues.value.network) {
        flags.push(`--network ${inputValues.value.network}`);
      }
      if (inputValues.value.sshKey) {
        flags.push(`--ssh-key ${inputValues.value.sshKey}`);
      }
      if (inputValues.value.relayNode1Ip) {
        flags.push(`--rnip1${inputValues.value.relayNode1Ip}`);
      }
      if (inputValues.value.relayNode1Hostname) {
        flags.push(`--rnhost1 ${inputValues.value.relayNode1Hostname}`);
      }
      if (inputValues.value.relayNode2Ip) {
        flags.push(`--rnip2 ${inputValues.value.relayNode2Ip}`);
      }
      if (inputValues.value.relayNode2Hostname) {
        flags.push(`--rnhost2 ${inputValues.value.relayNode2Hostname}`);
      }
      if (inputValues.value.blockNodeIp) {
        flags.push(`--bnip1 ${inputValues.value.blockNodeIp}`);
      }
      if (inputValues.value.relayNodeUseSwap) {
        flags.push(`--rnswap ${inputValues.value.relayNodeSwap}`);
      }
      if (inputValues.value.blockNodeUseSwap) {
        flags.push(`--bnswap ${inputValues.value.blockNodeSwap}`);
      }
      if (inputValues.value.bundleSetupScripts) {
        flags.push(`--bundle`);
      }
      if (inputValues.value.prepareRelayNode) {
        flags.push(`--output-relay`);
      }
      if (inputValues.value.prepareBlockNode) {
        flags.push(`--output-block`);
      }
      if (inputValues.value.prepareDashboard) {
        flags.push(`--output-dashboard`);
      }
      return `${path}\n${flags.join(" \\ ")}`;
    });

    const generateCommandFlags = computed(() => {
      const flags = [];
      if (inputValues.value.version) {
        flags.push(`--version ${inputValues.value.version}`);
      }
      if (inputValues.value.sshPort) {
        flags.push(`--ssh-port ${inputValues.value.sshPort}`);
      }
      if (inputValues.value.network) {
        flags.push(`--network ${inputValues.value.network}`);
      }
      if (inputValues.value.sshKey) {
        flags.push(`--ssh-key ${inputValues.value.sshKey}`);
      }
      if (inputValues.value.relayNode1Ip) {
        flags.push(`--rnip1${inputValues.value.relayNode1Ip}`);
      }
      if (inputValues.value.relayNode1Hostname) {
        flags.push(`--rnhost1 ${inputValues.value.relayNode1Hostname}`);
      }
      if (inputValues.value.relayNode2Ip) {
        flags.push(`--rnip2 ${inputValues.value.relayNode2Ip}`);
      }
      if (inputValues.value.relayNode2Hostname) {
        flags.push(`--rnhost2 ${inputValues.value.relayNode2Hostname}`);
      }
      if (inputValues.value.blockNodeIp) {
        flags.push(`--bnip1 ${inputValues.value.blockNodeIp}`);
      }
      if (inputValues.value.relayNodeUseSwap) {
        flags.push(`--rnswap ${inputValues.value.relayNodeSwap}`);
      }
      if (inputValues.value.blockNodeUseSwap) {
        flags.push(`--bnswap ${inputValues.value.blockNodeSwap}`);
      }
      if (inputValues.value.bundleSetupScripts) {
        flags.push(`--bundle`);
      }
      if (inputValues.value.prepareRelayNode) {
        flags.push(`--output-relay`);
      }
      if (inputValues.value.prepareBlockNode) {
        flags.push(`--output-block`);
      }
      if (inputValues.value.prepareDashboard) {
        flags.push(`--output-dashboard`);
      }
      return flags;
    });

    return {
      inputValues,
      updateFormField,
      handleInputAction,
      showSSHHelp,
      showAdvancedSettings,
      configureCardanoNodeForm,
      submitCardanoNodeConfiguration,
      configureCardanoNodeFormAdvanced,
      configureCardanoNodeFormBlock,
      configureCardanoNodeFormRelay,
      configureCardanoNodeFormDashboard,
      showBundleScriptHelp,
      generateCommandString,
      generateCommandFlags,
      disableButton,
    };
  },
});
</script>
