const dropdown = new CGSelect({
  selector: ".cg-dropdown_cdn",
  placeholder: "Choose a car",
  label: "CDN EXAMPLE",
  items: [
    "BMW",
    {
      id: "213sade",
      title: "Opel",
      value: 1,
    },
    "Mersedes",
    "MAN",
    "Ferari",
  ],
  styles: {
    head: {
      width: "830px",
    },
    list: {
      width: "824px",
    },
  },
});
