export type networkTypes = "testnet" | "mainnet";
export const allowedNetworkTypes: networkTypes[] = ["testnet", "mainnet"];

export type nodeVersions = "1.30.0" | "1.29.0" | "latest";
export const allowedNodeVersions: nodeVersions[] = [
  "1.30.0",
  "1.29.0",
  "latest",
];

export type stateFormKeys =
  | "network"
  | "version"
  | "sshKey"
  | "sshPort"
  | "prepareBlockNode"
  | "prepareRelayNode"
  | "prepareDashboard"
  | "numberRelayNodes"
  | "relayNodeUseIp"
  | "relayNodeUseHostname"
  | "relayNode1Hostname"
  | "relayNode1Ip"
  | "relayNode2Hostname"
  | "relayNode2Ip"
  | "relayNodeSwap"
  | "relayNodeUseSwap"
  | "blockNodeIp"
  | "blockNodeSwap"
  | "blockNodeUseSwap"
  | "blockNodeUseIp"
  | "bundleSetupScripts"
  | "isGeneratingConfiguration"
  | "dashboardUseWhitelistIp"
  | "dashboardWhitelistIp";

export interface CreateFormState {
  network: networkTypes;
  version: nodeVersions;
  sshKey: string;
  sshPort: string;
  prepareBlockNode: boolean;
  prepareRelayNode: boolean;
  prepareDashboard: boolean;
  numberRelayNodes: string;
  relayNodeUseIp: boolean;
  relayNode1Hostname: string;
  relayNodeUseHostname: boolean;
  relayNode1Ip: string;
  relayNode2Hostname: string;
  relayNode2Ip: string;
  relayNodeSwap: string;
  relayNodeUseSwap: boolean;
  blockNodeUseIp: boolean;
  blockNodeIp: string;
  blockNodeSwap: string;
  blockNodeUseSwap: boolean;
  bundleSetupScripts: boolean;
  dashboardUseWhitelistIp: boolean;
  dashboardWhitelistIp: string;
}

export interface FormResultState {
  block: string;
  relay: string;
  dashboard: string;
  downloadLink: string;
}
