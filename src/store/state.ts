import { CreateFormState, FormResultState } from "@/types";

export const createFormState: CreateFormState = {
  network: "testnet",
  version: "latest",
  sshKey: "",
  sshPort: "2249",
  prepareBlockNode: true,
  prepareRelayNode: true,
  prepareDashboard: true,
  numberRelayNodes: "1",
  relayNodeUseIp: false,
  relayNodeUseHostname: false,
  relayNode1Hostname: "",
  relayNode1Ip: "",
  relayNode2Hostname: "",
  relayNode2Ip: "",
  relayNodeSwap: "0",
  relayNodeUseSwap: false,
  blockNodeIp: "",
  blockNodeSwap: "0",
  blockNodeUseIp: false,
  blockNodeUseSwap: false,
  bundleSetupScripts: true,
  dashboardUseWhitelistIp: false,
  dashboardWhitelistIp: "",
};

export const formResultState: FormResultState = {
  block: "",
  relay: "",
  dashboard: "",
  downloadLink: "",
};

export interface State extends CreateFormState, FormResultState {
  isGeneratingConfiguration: boolean;
  isGeneratingConfigurationError: string;
}

export const state: State = {
  ...createFormState,
  ...formResultState,
  isGeneratingConfiguration: false,
  isGeneratingConfigurationError: "",
};
