import React from "react";

import { Card } from "flowbite-react";

import todoListappImg from "../assets/images/portfolios/todo_list_app.jpg";
import weatherAppImg from "../assets/images/portfolios/weather-app.jpg";
import Button from "./Button";

import "./Card.css";

const Cards = (props) => {
  const cardDetails = [
    {
      imgUrl: todoListappImg,
      title: "To Do List",
      description:
        "A simple, user-friendly Todo List application built with React JS with CRUD operations.",
      url: "https://github.com/MedelDomingo/first-todo-list-app",
      tech: "React JS,TaildwindCSS",
    },
    {
      imgUrl: weatherAppImg,
      title: "Weather Application",
      description:
        "React JS application that gets weather information of a city or country base on user input.",
      url: "https://github.com/MedelDomingo/weather-react-app",
      tech: "React JS, OpenWeather API",
    },
    {
      title: "Social Mapping Application (WIP)",
      description:
        "An app where users can share places with images and location with other users",
      url: "https://github.com/MedelDomingo/social-mapping-app",
      tech: "React JS,MongoDB,Express.js,Node.js",
    },
  ];

  const cardItems = cardDetails.map((item, index) => (
    <Card
      className="card__latest_project m-10"
      imgAlt="todo_list__img"
      href={item.url}
      target="_blank"
      key={index}
    >
      <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white font-bold text-[16px] pb-1 ">
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
      <p className="font-normal text-gray-400 dark:text-gray-400 text-sm">
        {item.description}
      </p>
      <Button />
    </Card>
  ));
  return (
    <section id="card-section" className="card-wrapper m-auto mt-[15px] ">
      <div className="relative w-full align-top grid gap-[20px] md:grid-cols-2">
        {cardItems}
      </div>
    </section>
  );
};

export default Cards;
