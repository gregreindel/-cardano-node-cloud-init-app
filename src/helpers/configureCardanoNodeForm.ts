export const selectOptionsVersion = [
  {
    label: "latest",
    labelSub: "recommended",
    value: "latest",
  },
  {
    label: "1.30.0",
    value: "1.30.0",
  },
  {
    label: "1.29.0",
    value: "1.29.0",
  },
];

export const selectOptionsNetwork = [
  {
    label: "mainnet",
    value: "mainnet",
  },
  {
    label: "testnet",
    value: "testnet",
  },
];

export const configureCardanoNodeForm = (currentValues: any) => {
  const createFormJson = [
    {
      label: "Network",
      description:
        "Select whether you are going to be running your node on mainnet or testnet.",
      key: "network",
      type: "select",
      options: selectOptionsNetwork,
      initial: "testnet",
      wrapClass: "col-span-3",
      show: [],
    },
    {
      label: "Node Version",
      key: "version",
      description:
        "Select the version of cardano-node you would like to install.",

      type: "select",
      options: selectOptionsVersion,
      initial: "latest",
      wrapClass: "col-span-3",
      show: [],
    },
    {
      label: "SSH Port",
      key: "sshPort",
      type: "number",
      initial: "",
      show: [],
      validator: ["fieldIsRequired", "validateSSHPort"],
      description: "Pick a random SSH port, if you'd like.",
    },
    {
      label: "SSH Key",
      key: "sshKey",
      type: "textarea",
      initial: "",
      show: [],
      validator: ["fieldIsRequired"],
      description:
        "An SSH public key is required to connect to your node server. ",
      descriptionAction: "showSSHHelp",
    },

    {
      label: "Include Setup Scripts in User Data",
      key: "bundleSetupScripts",
      type: "checkbox",
      description:
        "Check this if you want to bundle the node configuration and setup scripts into one output. This will make it easier if you intend on using the setup scripts, and you do not have size limits on user data.",
      descriptionAction: "showBundleScriptHelp",
    },
    {
      label: "Generate Block Node YAML",
      key: "prepareBlockNode",
      type: "checkbox",
      description:
        "This option will prepare the YAML file configured for your block node",
    },
    {
      label: "Generate Relay Node YAML",
      key: "prepareRelayNode",
      type: "checkbox",
      description:
        "This option will prepare the YAML file configured for your block node",
    },
    {
      label: "Generate Dashboard YAML",
      key: "prepareDashboard",
      type: "checkbox",
      description:
        "This option will prepare the YAML file configured for your metrics dashboard",
    },
  ];
  return createFormJson.filter((f) => {
    if (f.show && f.show.length) {
      for (const rule of f.show) {
        const { field, value, operator } = rule;
        if (typeof currentValues[field] !== "undefined") {
          switch (operator) {
            case "eq":
              if (currentValues[field] !== value) return false;
          }
        }
      }
    }
    return true;
  });
};
