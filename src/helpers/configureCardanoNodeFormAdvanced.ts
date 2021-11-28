import {
  fieldIsRequired,
  fieldIsHostname,
  fieldIsIP,
} from "@/helpers/validators";

export const selectOptionsNumberOfRelayNodes = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
];

export const selectOptionsHostnameOrDNS = [
  {
    label: "IP Address",
    value: "IP Address",
  },
  {
    label: "Hostname",
    value: "Hostname",
  },
];

export const selectOptionsHSwapSizes = [
  {
    label: "No swap",
    value: "0",
  },
  {
    label: "2 GB",
    value: "2147483648",
    labelSub: "recommended for servers with at least 4 RAM",
  },
  {
    label: "4 GB",
    value: "4294967296",
    labelSub: "recommended for servers with at least 8 RAM",
  },
  {
    label: "8 GB",
    value: "8589934592",
    labelSub: "recommended for servers with at least 16 RAM",
  },
  {
    label: "16 GB",
    value: "17179869184",
    labelSub: "recommended for servers with at least 32 RAM",
  },
];

export const configureCardanoNodeFormAdvanced = (currentValues: any) => {
  const createFormJson = [
    {
      label: "Relay Hostname",
      key: "relayNode1Hostname",
      type: "text",
      initial: [""],
      show: [],
      validator: ["fieldIsRequired", "fieldIsHostname"],
    },
    {
      label: "Relay Node IP",
      key: "relayNodeIps",
      type: "textMulti",
      initial: [""],
      show: [],
      validator: ["fieldIsRequired", "fieldIsIP"],
    },
    {
      label: "Block Node IP",
      key: "blockNodeIp",
      type: "textMulti",
      initial: [""],
      show: [],
      validator: ["fieldIsRequired", "fieldIsIP"],
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

export const configureCardanoNodeFormRelay = (currentValues: any) => {
  const createFormJson = [
    {
      label: "Use Swap",
      key: "relayNodeUseSwap",
      type: "checkbox",
    },
    {
      label: "Swap Size",
      key: "relayNodeSwap",
      type: "select",
      options: selectOptionsHSwapSizes,
      show: [
        {
          operator: "eq",
          field: "relayNodeUseSwap",
          value: true,
        },
      ],
    },
    {
      label: "Number of Relay Nodes",
      key: "numberRelayNodes",
      options: selectOptionsNumberOfRelayNodes,

      type: "select",
    },
    {
      label: "Add IP Address",
      key: "relayNodeUseIp",
      type: "checkbox",
    },
    {
      label: "Use DNS Hostname",
      key: "relayNodeUseHostname",

      type: "checkbox",
    },

    {
      label: "Relay 1 IP Address",
      key: "relayNode1Ip",
      type: "text",
      initial: [""],
      show: [
        {
          operator: "eq",
          field: "relayNodeUseIp",
          value: true,
        },
      ],
      validator: ["fieldIsRequired", "fieldIsIP"],
      wrapClass: "col-span-3",
    },
    {
      label: "Relay 1 Hostname",
      key: "relayNode1Hostname",
      type: "text",
      initial: [""],
      validator: ["fieldIsRequired", "fieldIsHostname"],
      wrapClass: "col-span-3",

      show: [
        {
          operator: "eq",
          field: "relayNodeUseHostname",
          value: true,
        },
      ],
    },

    {
      label: "Relay 2 IP Address",
      key: "relayNode2Ip",
      type: "text",
      initial: [""],
      wrapClass: "col-span-3",

      show: [
        {
          operator: "eq",
          field: "numberRelayNodes",
          value: "2",
        },
        {
          operator: "eq",
          field: "relayNodeUseIp",
          value: true,
        },
      ],
      validator: ["fieldIsRequired", "fieldIsIP"],
    },
    {
      label: "Relay 2 Hostname",
      key: "relayNode2Hostname",
      type: "text",
      wrapClass: "col-span-3",

      initial: [""],
      show: [
        {
          operator: "eq",
          field: "relayNodeUseHostname",
          value: true,
        },
        {
          operator: "eq",
          field: "numberRelayNodes",
          value: "2",
        },
      ],
      validator: ["fieldIsRequired", "fieldIsHostname"],
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

export const configureCardanoNodeFormBlock = (currentValues: any) => {
  const createFormJson = [
    {
      label: "Use Swap",
      key: "blockNodeUseSwap",
      type: "checkbox",
    },
    {
      label: "Swap Size",
      key: "blockNodeSwap",
      type: "select",
      options: selectOptionsHSwapSizes,
      show: [
        {
          operator: "eq",
          field: "blockNodeUseSwap",
          value: true,
        },
      ],
    },
    {
      label: "Add IP Address",
      key: "dashboardUseWhitelistIp",
      type: "checkbox",
    },
    {
      label: "IP Address",
      key: "dashboardWhitelistIp",
      type: "text",
      show: [
        {
          operator: "eq",
          field: "dashboardUseWhitelistIp",
          value: true,
        },
      ],
      validator: ["fieldIsRequired", "fieldIsIP"],
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

export const configureCardanoNodeFormDashboard = (currentValues: any) => {
  const createFormJson = [
    {
      label: "Add IP Address to Whitelist Access",
      key: "blockNodeUseIp",
      type: "checkbox",
    },
    {
      label: "IP Address",
      key: "blockNodeIp",
      type: "text",
      show: [
        {
          operator: "eq",
          field: "blockNodeUseIp",
          value: true,
        },
      ],
      validator: ["fieldIsRequired", "fieldIsIP"],
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
