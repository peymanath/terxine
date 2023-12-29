export type DropDownMenuProps = {
  title: string;
  items: DropDownMenuItems[];
  url?: string;
  className?: string;
};
export type DropDownMenuItems = {
  title: string;
  href: string;
};
