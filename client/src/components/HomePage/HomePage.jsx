import Layout from "./Layout";
import MainContent from "./MainContent";

export default function HomePage() {
  const cardsData = [
    {
      title: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces",
      imgUrl:
        "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces",
      imgUrl:
        "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces",
      imgUrl:
        "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces",
      imgUrl:
        "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Peaceful Piano",
      description: "Relax and indulge with beautiful piano pieces",
      imgUrl:
        "https://images.unsplash.com/photo-1470019693664-1d202d2c0907?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <Layout>
      <div className="content">
        <MainContent titleText="Focus" cardsData={cardsData} />
        <MainContent titleText="Relax" cardsData={cardsData} />
        <MainContent titleText="Discover" cardsData={cardsData} />
      </div>
    </Layout>
  );
}
