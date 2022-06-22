import { getSubdomain } from "../../utils";

import { p1, p2, p3, subdomain1, subdomain2 } from "./constants";

export const palette = () => {
  return getSubdomain() === subdomain1
    ? p1
    : getSubdomain() === subdomain2
    ? p2
    : p3;
};
