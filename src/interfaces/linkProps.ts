import { Path } from "react-router-dom";

interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  replace?: boolean;
  state?: any;
  to: To;
  reloadDocument?: boolean;
}

type To = string | Partial<Path>;

export type { LinkProps };
