export type MenuListItem = {
  id: number;
  text: string;
  url: string;
  subMenu?: MenuListItem[];
};
