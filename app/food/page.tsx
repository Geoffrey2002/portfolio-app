import ProjectDetail from "@/components/ProjectDetail";
import foodImg from "@/public/assets/projects/foodApp.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food App | Geoffrey Muthoni",
  description: "A React JS food ordering application using Context API for state management",
};

export default function FoodPage() {
  return (
    <ProjectDetail
      title="Food App"
      subtitle="React JS / CSS / Context API"
      image={foodImg}
      overview="This app demonstrates how to use Context API to pass data from one component to another component efficiently. Built with React JS and CSS, it showcases modern state management patterns and component architecture."
      codeUrl="https://github.com/Geoffrey2002/Food-App"
      demoUrl="https://food-app-dun.vercel.app/"
      technologies={[
        { name: "React" },
        { name: "CSS" },
        { name: "Context API" },
        { name: "JavaScript" },
      ]}
    />
  );
}



