import ProjectDetail from "@/components/ProjectDetail";
import expenseImg from "@/public/assets/projects/expenseapp.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expense App | Geoffrey Muthoni",
  description: "A React JS expense tracking application with modern UI",
};

export default function ExpensePage() {
  return (
    <ProjectDetail
      title="Expense App"
      subtitle="React JS / CSS"
      image={expenseImg}
      overview="This app showcases my proficiency in React JS, allowing users to create and display new expenses seamlessly. Built with modern React patterns and state management, it provides an intuitive interface for tracking daily expenses."
      codeUrl="https://github.com/Geoffrey2002/Expense-App"
      demoUrl="https://expense-app-drab.vercel.app/"
      technologies={[{ name: "React" }, { name: "CSS" }, { name: "JavaScript" }]}
    />
  );
}



