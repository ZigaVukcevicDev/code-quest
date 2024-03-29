export default interface Breadcrumbs {
  text: string;
  link: {
    title: string;
    href: string;
    queryParams: { [key: string]: string | number } | null;
  } | null;
  childText: string | null;
}
