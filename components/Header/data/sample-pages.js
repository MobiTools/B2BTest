import imgAPI from "~/public/images/imgAPI";
import link from "~/public/text/link";

const sample = [
  {
    id: "services",
    mainLink: "/services",
    name: "Services",
    child: [
      {
        name: "Support infrastructure ",
        link: "/services/supportinfrastructure",
      },
      {
        name: "Web and app support",
        link: "/services/webandappsupport",
      },
      {
        name: "Migration and implementation",
        link: "/services/migrationandimplementation",
      },
      {
        name: "Cloud solutions",
        link: "/services/cloudsolutions",
      },
      {
        name: "Other Services",
        link: "/services",
      },
    ],
  },
];

export default sample;
