
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const moods = [
  {
    name: "Funky Loft Apartment DJ Set",
    mixUrl: "https://soundcloud.com/loftzonefamily/funky-loft-set",
  },
  {
    name: "Deep Warehouse Rave Party",
    mixUrl: "https://soundcloud.com/loftzonefamily/warehouse-rave-set",
  },
];

export default function Home() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-pink-600 to-indigo-900 text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold">LoftZone Family</h1>
        <p className="text-lg mt-2">AI-Driven Electronic Dance Music Experience</p>
      </header>

      <section className="max-w-4xl mx-auto">
        <Card className="bg-black/40 border border-pink-500">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">AI DJ Generator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {moods.map((mood, index) => (
                <Button
                  key={index}
                  className="w-full py-4 text-lg"
                  variant="secondary"
                  onClick={() => setSelectedMood(mood)}
                >
                  {mood.name}
                </Button>
              ))}
            </div>

            {selectedMood && (
              <div className="mt-8">
                <h3 className="text-xl mb-2">Now Playing:</h3>
                <p className="mb-4">{selectedMood.name}</p>
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
                    selectedMood.mixUrl
                  )}&color=%23ff0066&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
                ></iframe>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
