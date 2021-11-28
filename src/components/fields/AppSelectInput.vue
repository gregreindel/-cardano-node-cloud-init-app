<template>
  <Menu as="div" class="relative text-left overflow-visible">
    <div>
      <MenuButton
        v-slot="{ open }"
        ref="menuButton"
        class="
          inline-flex
          justify-center
          w-full
          rounded-md
          border
          focus:ring-gray-500 focus:border-gray-500
          text-gray-800
          dark:text-gray-200
          bg-white
          dark:bg-gray-700
          border-gray-600
          shadow-sm
          px-4
          py-2
          text-sm
          font-medium
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-100
        "
      >
        <span v-if="inputEditValue">{{ inputEditValue }}</span>
        <span v-else class="text-muted">Select</span>
        <svg
          :class="open ? 'opacity-40' : 'opacity-100'"
          xmlns="http://www.w3.org/2000/svg"
          class="-mr-1 ml-2 mt-1 h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <!-- <ChevronDownIcon class="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> -->
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          z-50
          origin-top-center
          absolute
          left-0
          mt-2
          w-full
          rounded-md
          shadow-lg
          ring-1 ring-black ring-opacity-5
          focus:outline-none
          text-gray-800
          dark:text-gray-200
          bg-white
          dark:bg-gray-700
        "
      >
        <div
          class="py-1"
          v-for="(item, index) in selectOptions"
          :key="`option-${index}`"
        >
          <MenuItem v-slot="{ active }">
            <span
              @click="inputEditValue = item.value"
              href="#"
              :class="[
                active
                  ? 'dark:bg-gray-900 dark:text-gray-200'
                  : 'dark:text-gray-200',
                'block px-4 py-2 text-sm',
              ]"
              >{{ item.label }}
              <span class="ml-2 text-xs opacity-75">{{
                item.labelSub
              }}</span></span
            >
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

export default defineComponent({
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    selectOptions: {
      type: Array,
    },
    inputValue: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    const menuButton = ref(null);
    const selectActive = ref(false);
    const inputEditValue = computed({
      get(): string {
        return props.inputValue;
      },
      set(value: string): void {
        selectActive.value = false;
        const thing = menuButton.value as any;
        context.emit("inputText", value);
        thing.$el.blur();
      },
    });

    return {
      inputEditValue,
      selectActive,
      menuButton,
    };
  },
});
</script>
