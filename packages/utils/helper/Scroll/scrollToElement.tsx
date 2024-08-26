export default function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  element && element.scrollIntoView({ behavior: 'smooth' });
}
