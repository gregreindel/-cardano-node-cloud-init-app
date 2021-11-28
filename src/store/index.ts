import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

import { State, state } from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters
});

export function useStore() {
  return baseUseStore(key);
}
