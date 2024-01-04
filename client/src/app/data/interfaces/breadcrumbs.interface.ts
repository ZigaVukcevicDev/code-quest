export default interface Breadcrumbs {
  text: string;
  link: {
    title: string;
    href: string;
  } | null;
  childText: string | null;
}
