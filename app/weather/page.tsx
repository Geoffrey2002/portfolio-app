import ProjectDetail from "@/components/ProjectDetail";
import weatherImg from "@/public/assets/projects/weather.png";
import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';

export const metadata: Metadata = {
  title: "Weather App - React & OpenWeather API Project",
  description: "A responsive React weather application using OpenWeather API and Tailwind CSS. Get real-time weather information for any city in Celsius or Fahrenheit with a modern, beautiful interface.",
  keywords: [
    "Weather App",
    "React Weather",
    "OpenWeather API",
    "Tailwind CSS",
    "Weather Forecast",
    "Geoffrey Muthoni Projects",
  ],
  openGraph: {
    title: "Weather App - React & OpenWeather API Project | Geoffrey Muthoni",
    description: "Responsive weather application built with React JS, OpenWeather API, and Tailwind CSS for real-time weather information.",
    url: `${siteUrl}/weather`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/projects/weather.png`,
        width: 1200,
        height: 630,
        alt: "Weather App Screenshot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weather App - React & OpenWeather API",
    description: "Real-time weather application with React and Tailwind CSS",
    images: [`${siteUrl}/assets/projects/weather.png`],
  },
  alternates: {
    canonical: `${siteUrl}/weather`,
  },
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



