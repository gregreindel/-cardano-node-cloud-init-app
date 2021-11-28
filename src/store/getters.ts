import { State } from "./state";

export const configureCardanoNodeFields = (state: State) => ({
  network: state.network,
  version: state.version,
  sshKey: state.sshKey,
  sshPort: state.sshPort,
  numberRelayNodes: state.numberRelayNodes,
  relayNodeUseHostname: state.relayNodeUseHostname,
  relayNodeUseIp: state.relayNodeUseIp,
  relayNode1Hostname: state.relayNode1Hostname,
  relayNode1Ip: state.relayNode1Ip,
  relayNode2Hostname: state.relayNode2Hostname,
  relayNode2Ip: state.relayNode2Ip,
  relayNodeSwap: state.relayNodeSwap,
  relayNodeUseSwap: state.relayNodeUseSwap,
  blockNodeIp: state.blockNodeIp,
  blockNodeUseIp: state.blockNodeUseIp,
  blockNodeSwap: state.blockNodeSwap,
  blockNodeUseSwap: state.blockNodeUseSwap,
  bundleSetupScripts: state.bundleSetupScripts,
  prepareRelayNode: state.prepareRelayNode,
  prepareBlockNode: state.prepareBlockNode,
  prepareDashboard: state.prepareDashboard,
  dashboardUseWhitelistIp: state.dashboardUseWhitelistIp,
  dashboardWhitelistIp: state.dashboardWhitelistIp,
});

export const isAppLoading = (state: State) => {
  if (state.isGeneratingConfiguration) {
    return {
      loading: true,
      reason: "isGeneratingConfiguration",
    };
  }
};

export const appErrorMessage = (state: State) => {
  return state.isGeneratingConfigurationError;
};

export const canSubmit = (state: State) => {
  const { prepareRelayNode, prepareBlockNode, prepareDashboard, sshKey } =
    state;

  if (!prepareRelayNode && !prepareBlockNode && !prepareDashboard) {
    return false;
  }

  if (!sshKey) {
    return false;
  }

  return true;
};
