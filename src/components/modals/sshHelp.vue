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
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    Create or add SSH keys
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500 mb-4">
                      Windows users without OpenSSH can install and use PuTTY
                      instead.
                    </p>

                    <p class="text-sm text-gray-500 mb-2 font-medium">
                      Copy existing key pair
                    </p>
                    <code
                      class="
                        mb-2
                        bg-gray-700
                        pl-2
                        pr-4
                        inline-block
                        text-gray-200
                      "
                    >
                      <span class="select-none mr-2 text-sm">$</span>cat
                      ~/.ssh/id_rsa.pub
                    </code>

                    <hr class="pb-2 mt-2" />
                    OR
                    <p class="text-sm text-gray-500 font-medium mb-1">
                      Create a new key pair (if needed)
                    </p>
                    <p class="text-sm text-gray-500 mb-2">
                      Open a terminal and run the following command:
                    </p>
                    <code
                      class="
                        mb-2
                        bg-gray-700
                        pl-2
                        pr-4
                        inline-block
                        text-gray-200
                      "
                    >
                      <span class="select-none mr-2 text-sm">$</span>ssh-keygen
                    </code>
                    <p class="text-sm text-gray-500 mb-2">
                      You will be prompted to save and name the key.
                    </p>
                    <p class="text-sm text-gray-500 mb-2">
                      Copy the new key pair
                    </p>
                    <code
                      class="
                        mb-2
                        bg-gray-700
                        pl-2
                        pr-4
                        inline-block
                        text-gray-200
                      "
                    >
                      <span class="select-none mr-2 text-sm">$</span>cat
                      ~/.ssh/name-of-key-pair.pub
                    </code>
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
