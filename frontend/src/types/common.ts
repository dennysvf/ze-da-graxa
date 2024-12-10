export interface MenuItem {
  id: string;
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
}

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface Filter {
  id: string;
  label: string;
  value: string;
  count?: number;
}
