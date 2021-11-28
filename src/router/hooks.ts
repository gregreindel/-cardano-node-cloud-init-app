import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { store } from "@/store/index";

export const routerBefore = async (
  toRoute: RouteLocationNormalized,
  fromRoute: RouteLocationNormalized,
  next: NavigationGuardNext
): Promise<void> => {
  if (toRoute.path === "/result") {
    const { query } = toRoute;

    /*
     * If we're coming to the result page via page-refresh
     * setup the values to the form from the query string
     */
    for (const key of Object.keys(query)) {
      if (
        [
          "blockNodeIp",
          "blockNodeSwap",
          "bundleSetupScripts",
          "network",
          "numberRelayNodes",
          "relayNodeUseHostname",
          "relayNode1Hostname",
          "relayNode1Ip",
          "relayNode2Hostname",
          "relayNode2Ip",
          "relayNodeSwap",
          "sshKey",
          "sshPort",
        ].includes(key)
      ) {
        store.commit("updateConfigureCardanoNodeForm", {
          key,
          value: query[key],
        });
      }
    }
  }
  next();
};
