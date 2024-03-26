export interface IProps {
  show?: any | boolean;
  showIndex?: boolean;
  loading?: boolean;
  actionLoader?: boolean;
  actionOnStart?: boolean;
  disabled?: boolean;
  hideAction?: boolean;
  data?: Array | any;
  otherActions?: Array;
  pickItems?: Array;
  actionComponentTitle?: String;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
  onRowClick?: VoidFunction;
  onView?: VoidFunction;
  actionComponent?: any;
}
