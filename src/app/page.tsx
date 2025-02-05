"use client";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { ViewProvider } from "@/context/ViewContext";
import SelectedView from "@/components/SelectedView";

export default function Home() {
  return (
    <ViewProvider>
      <div className="overflow-hidden text-black bg-white">
        <Navigation />
        <main>
          <Hero />
          <SelectedView />
        </main>
        <Footer />
      </div>
    </ViewProvider>
  );
}
