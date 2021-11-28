<template>
  <div class="">
    <dl>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Version</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{ inputValues.version }}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">Network</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{ inputValues.network }}
        </dd>
      </div>


      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500">SSH Keys</dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          <ul
            class="border border-gray-200 rounded-md divide-y divide-gray-200"
          >
            <li
              class="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
            >
              <div class="w-0 flex-1 flex items-center">
                <FingerPrintIcon
                  class="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span class="ml-2 flex-1 w-0 truncate">
                  {{inputValues.sshKey}}&hellip;
                </span>
              </div>
              <div class="ml-4 flex-shrink-0">
                <a
                  href="#"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View
                </a>
              </div>
            </li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FingerPrintIcon } from "heroicons-vue3/solid";
const inputValues = { type: Object, default: () => ({}) };
export default defineComponent({
  components: { FingerPrintIcon },
  props: { inputValues }
});
</script>
