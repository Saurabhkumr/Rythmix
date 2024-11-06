import { useState, useEffect } from "react";
import Card from "./Card";

export default function MainContent({ titleText, cardsData }) {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good morning");
    } else if (currentHour < 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  return (
    <div className="text-white mb-8">
      <div className="text-2xl font-semibold mb-5">{titleText}</div>
      <div className="w-full flex overflow-x-auto space-x-3 scrollbar-hide">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imgUrl={card.imgUrl}
          />
        ))}
      </div>
    </div>
  );
}
