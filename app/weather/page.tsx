import ProjectDetail from "@/components/ProjectDetail";
import weatherImg from "@/public/assets/projects/weather.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weather App | Geoffrey Muthoni",
  description: "A React weather application using OpenWeather API and Tailwind CSS",
};

export default function WeatherPage() {
  return (
    <ProjectDetail
      title="Weather App"
      subtitle="React JS / Tailwind CSS / OpenWeather API"
      image={weatherImg}
      overview="Weather App is a React JS application that displays the current weather in your city. The weather is displayed in Celsius and Fahrenheit. I get the weather information from the OpenWeather API and styled the application using the Tailwind CSS framework for a modern, responsive design."
      codeUrl="https://github.com/Geoffrey2002/weather-app-reactTw"
      demoUrl="https://weather-app-react-tw.vercel.app/"
      technologies={[
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "OpenWeather API" },
        { name: "JavaScript" },
      ]}
    />
  );
}



