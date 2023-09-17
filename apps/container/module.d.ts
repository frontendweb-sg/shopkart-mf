type MountProps = {
  defaultHistory?: any;
  initialPath?: string;
  onNavigate?: (options: Update) => void;
};
declare module "auth/AuthBootstrap" {
  export function mount(
    el: HTMLElement,
    options?: MountProps
  ): { onParentNavigation: any };
}

declare module "admin/AdminBootstrap" {
  export function mount(
    el: HTMLElement,
    options?: MountProps
  ): { onParentNavigation: any };
}

declare module "users/UsersBootstrap" {
  export function mount(
    el: HTMLElement,
    options?: MountProps
  ): { onParentNavigation: any };
}

declare module "categories/CategoriesBootstrap" {
  export function mount(
    el: HTMLElement,
    options?: MountProps
  ): { onParentNavigation: any };
}
declare module "cart/CartBootstrap" {
  export function mount(
    el: HTMLElement,
    options?: MountProps
  ): { onParentNavigation: any };
}
