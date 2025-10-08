import { Link } from "wouter";
import { promptEngineeringTechniques } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Sparkles, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function TechniquesBrowser() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Prompt Engineering Techniques
          </h1>
          <p className="text-xl text-gray-600">
            Explore essential techniques with practical examples
          </p>
        </div>

        {/* Techniques Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {promptEngineeringTechniques.map((technique) => (
            <Card key={technique.id} className="hover:shadow-lg transition-shadow border-2 hover:border-indigo-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge className="mb-3 bg-purple-100 text-purple-700">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Technique
                    </Badge>
                    <CardTitle className="text-xl mb-2">{technique.name}</CardTitle>
                    <CardDescription className="text-base">
                      {technique.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Example Prompt:</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(technique.example, technique.id)}
                      className="h-8"
                    >
                      {copiedId === technique.id ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-800 font-mono">
                    {technique.example}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-white rounded-xl p-8 border-2 border-indigo-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Master These Techniques?
          </h2>
          <p className="text-gray-600 mb-6">
            Learn when and how to apply each technique in our comprehensive course
          </p>
          <Link href="/modules">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Start Learning
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
