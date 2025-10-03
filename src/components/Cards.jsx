import { Card } from "flowbite-react";
import { InView } from "../../components/motion-primitives/in-view";

import Button from "./Button";

const Cards = (props) => {
  const cardDetails = [
    {
      title: "To Do List",
      description:
        "A simple, user-friendly Todo List application built with React JS.",
      url: "https://github.com/MedelDomingo/first-todo-list-app",
      tech: "HTML,CSS,React",
    },
    {
      title: "(MERN) Social Mapping Application",
      description:
        "An app where users can share places with images and location with other users",
      url: "/",
      tech: "React,MongoDB,Express.js,Node.js",
    },
  ];

  const cardItems = cardDetails.map((item, index) => (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      key={`tech-${index}`}
    >
      <Card className="m-4">
        <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white font-bold text-[16px] pb-1">
          {item.title}
        </h5>
        <ul className="flex content-evenly">
          {item.tech.split(",").map((techItem, techIndex) => (
            <li key={techIndex} className="text-[12px]">
              {techItem}
              <span className="p-1">
                {techIndex < item.tech.split(",").length - 1 && " | "}
              </span>
            </li>
          ))}
        </ul>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {item.description}
        </p>
        <Button gitLink={item.url} />
      </Card>
    </InView>
  ));
  return (
    <div
      id="card-section"
      className="card-wrapper grid md:grid-cols-2 m-auto mt-[15px]"
    >
      {cardItems}
    </div>
  );
};

export default Cards;
