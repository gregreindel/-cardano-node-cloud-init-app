<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog
      as="div"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="emitClose"
    >
      <div
        class="
          flex
          items-end
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
            "
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="
                    mx-auto
                    flex-shrink-0 flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-full
                    bg-gray-200
                    sm:mx-0 sm:h-10 sm:w-10
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Why bundle the Cloud-init scripts?
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 mb-4">
                      Think about the node setup process as 2 steps.
                    </p>
                    <p class="text-sm text-gray-500 mb-4">
                      First, installing the packages, binaries, and config files
                      to the server. Getting through the first step will leave
                      you with a cardano-node server running, syncing with the
                      blockchain.
                    </p>
                    <p class="text-sm text-gray-500 mb-4">
                      Second, once your node is fully-synced with the
                      blockchain, you need to perform the actual node or relay
                      server setup. Like generate keys and certificates,
                      register the pool, configure topology, etc.
                    </p>
                    <hr class="pb-2 mt-2" />

                    <p class="text-sm text-gray-500 mb-4">
                      This tool will generate 2 scripts for each block and node.
                      One for the server install, the other will for the node
                      setup and config. They are split up because not everyone
                      will want to use our setup, so we want to provide a way to
                      separate these steps. Also, when using AWS, you have a
                      15kb limit on user data. This makes it a requirement to
                      supply the user data separate from the setup scripts to
                      keep the files within the limits.
                    </p>
                    <p class="text-sm text-gray-500 mb-4"></p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                class="
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-base
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-green-500
                  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                "
                @click="emitClose"
                ref="cancelButtonRef"
              >
                Got it
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const emitClose = () => context.emit("close");
    return { emitClose };
  },
};
</script>
