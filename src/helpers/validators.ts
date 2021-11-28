// import { computed } from "vue";

import isURL from "validator/es/lib/isURL";
import isIP from "validator/es/lib/isIP";

export type validatorFunction = (str: string) => boolean;

export const fieldIsRequired = (str: string) => {
  return typeof str === "string" && str.length > 0;
};

export const fieldIsHostname = (str: string) =>
  isURL(str, {
    protocols: [],
    require_tld: true,
    require_valid_protocol: false,
  });

export const fieldIsIP = (str: string) => isIP(str, 4);

export const validateSSHPort = (inputValue: string) => {
  const notAllowed = ["6000", "6001", "3000", "3001", "123", "80", "443"];
  return !notAllowed.includes(inputValue);
};

export type Validators =
  | "fieldIsRequired"
  | "fieldIsHostname"
  | "fieldIsIP"
  | "validateSSHPort";

interface IValidators {
  fieldIsRequired: validatorFunction;
  fieldIsHostname: validatorFunction;
  fieldIsIP: validatorFunction;
  validateSSHPort: validatorFunction;
}

const validators: IValidators = {
  fieldIsRequired: fieldIsRequired,
  fieldIsHostname: fieldIsHostname,
  fieldIsIP: fieldIsIP,
  validateSSHPort: validateSSHPort,
};

export const validateField = (validator: Validators[], inputValue: string) => {
  for (const validatorFn of validator) {
    if (typeof validators[validatorFn] === "function") {
      if (!validators[validatorFn](inputValue)) {
        return false;
      }
    }
  }
  return true;
};
