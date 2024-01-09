export default interface Breadcrumbs {
  text: string;
  link: {
    title: string;
    href: string;
    queryParams: { [key: string]: any } | null;
  } | null;
  childText: string | null;
}
