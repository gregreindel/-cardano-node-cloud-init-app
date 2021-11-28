import {
  stateFormKeys,
  nodeVersions,
  allowedNodeVersions,
  networkTypes,
  allowedNetworkTypes,
} from "@/types";

import { State, createFormState } from "./state";

export const setIsCreatingCardanoNodeConfiguration = (
  state: State,
  bool: boolean
): void => {
  state.isGeneratingConfiguration = bool;
};

export const setCardanoNodeConfigurationError = (
  state: State,
  str: string
): void => {
  state.isGeneratingConfigurationError = str;
};

export const clearCardanoNodeConfigurationForm = (state: State): void => {
  (state.network = createFormState.network),
    (state.version = createFormState.version),
    (state.sshKey = createFormState.sshKey),
    (state.sshPort = createFormState.sshPort),
    (state.numberRelayNodes = createFormState.numberRelayNodes),
    (state.relayNodeUseHostname = createFormState.relayNodeUseHostname),
    (state.relayNode1Hostname = createFormState.relayNode1Hostname),
    (state.relayNode1Ip = createFormState.relayNode1Ip),
    (state.sshPort = createFormState.sshPort),
    (state.relayNodeUseIp = createFormState.relayNodeUseIp),
    (state.relayNode2Hostname = createFormState.relayNode2Hostname),
    (state.relayNode2Ip = createFormState.relayNode2Ip),
    (state.relayNodeUseSwap = createFormState.relayNodeUseSwap),
    (state.relayNodeSwap = createFormState.relayNodeSwap),
    (state.bundleSetupScripts = createFormState.bundleSetupScripts),
    (state.blockNodeIp = createFormState.blockNodeIp),
    (state.blockNodeSwap = createFormState.blockNodeSwap),
    (state.blockNodeUseSwap = createFormState.blockNodeUseSwap),
    (state.blockNodeUseIp = createFormState.blockNodeUseIp),
    (state.prepareRelayNode = createFormState.prepareRelayNode),
    (state.prepareBlockNode = createFormState.prepareBlockNode),
    (state.prepareDashboard = createFormState.prepareDashboard),
    (state.dashboardUseWhitelistIp = createFormState.dashboardUseWhitelistIp),
    (state.dashboardWhitelistIp = createFormState.dashboardWhitelistIp);
};

export const updateConfigureCardanoNodeForm = (
  state: State,
  {
    key,
    value,
  }: {
    key: keyof Pick<State, stateFormKeys>;
    value: string | nodeVersions | number;
  }
): void => {
  switch (key) {
    case "sshKey":
    case "sshPort":
    case "blockNodeIp":
    case "numberRelayNodes":
    case "relayNode1Hostname":
    case "relayNode1Ip":
    case "relayNode2Hostname":
    case "relayNode2Ip":
    case "blockNodeSwap":
    case "relayNodeSwap":
    case "dashboardWhitelistIp":
      if (typeof value === "string") state[key] = value;
      break;
    case "isGeneratingConfiguration":
    case "bundleSetupScripts":
    case "relayNodeUseSwap":
    case "blockNodeUseSwap":
    case "relayNodeUseHostname":
    case "relayNodeUseIp":
    case "blockNodeUseIp":
    case "prepareBlockNode":
    case "prepareRelayNode":
    case "prepareDashboard":
    case "dashboardUseWhitelistIp":
      if (typeof value === "boolean") state[key] = value;
      break;
    case "version":
      if (allowedNodeVersions.includes(value as nodeVersions))
        state[key] = value as nodeVersions;
      break;
    case "network":
      if (allowedNetworkTypes.includes(value as networkTypes))
        state[key] = value as networkTypes;
      break;
    default:
      console.warn(`Saving unknown key ${key}`);
      break;
  }
};
