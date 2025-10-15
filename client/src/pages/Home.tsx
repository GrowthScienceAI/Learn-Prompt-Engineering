import { Link } from "wouter";
import { useEffect } from "react";
import { courseOverview, courseModules, promptEngineeringTechniques } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Sparkles, ArrowRight, GraduationCap } from "lucide-react";
import Header from "@/components/Header";

export default function Home() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a3caff] via-white to-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#a3caff] text-[#154072] hover:bg-[#5590f3] hover:text-white">
            <Sparkles className="w-3 h-3 mr-1" />
            Interactive Learning Experience
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {courseOverview.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {courseOverview.description}
          </p>
          <div className="flex gap-2 sm:gap-4 justify-center px-2">
            <Link href="/modules">
              <Button size="lg" className="bg-[#5590f3] hover:bg-[#154072] text-sm sm:text-base px-4 sm:px-6">
                Start Learning
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/techniques">
              <Button size="lg" variant="outline" className="border-[#5590f3] text-[#5590f3] hover:bg-[#a3caff] hover:text-[#154072] text-sm sm:text-base px-4 sm:px-6">
                <BookOpen className="mr-2 w-4 h-4" />
                Browse Techniques
              </Button>
            </Link>
          </div>
        </div>

        {/* Course Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 hover:border-[#5590f3] transition-colors">
            <CardHeader>
              <GraduationCap className="w-8 h-8 text-[#5590f3] mb-2" />
              <CardTitle>Modules</CardTitle>
              <CardDescription>{courseModules.length} comprehensive modules</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-2 hover:border-[#5590f3] transition-colors">
            <CardHeader>
              <Users className="w-8 h-8 text-[#5590f3] mb-2" />
              <CardTitle>Who It's For</CardTitle>
              <CardDescription>
                {courseOverview.targetAudience.slice(0, 3).join(", ")}
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-2 hover:border-[#5590f3] transition-colors">
            <CardHeader>
              <Target className="w-8 h-8 text-[#5590f3] mb-2" />
              <CardTitle>Prerequisites</CardTitle>
              <CardDescription>{courseOverview.prerequisites}</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Learning Outcomes */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">What You'll Learn</CardTitle>
            <CardDescription>
              By the end of this course, you'll be able to:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {courseOverview.learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#a3caff] text-[#154072] flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <p className="text-gray-700">{outcome}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Course Modules Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Course Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseModules.map((module, index) => (
              <Link key={module.id} href={`/modules/${module.id}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-[#5590f3]">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#a3caff] text-[#154072] flex items-center justify-center mb-3 text-xl font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-600">
                      {module.lessons.length} lessons
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Key Techniques Preview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Techniques You'll Master
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {courseOverview.keyTopics.map((topic, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border">
                <div className="w-8 h-8 rounded-full bg-[#a3caff] text-[#154072] flex items-center justify-center flex-shrink-0 font-semibold">
                  {index + 1}
                </div>
                <span className="font-medium text-gray-800">{topic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#5590f3] to-[#154072] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Master Prompt Engineering?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of learners unlocking the power of AI through effective prompts
          </p>
          <Link href="/modules">
            <Button size="lg" variant="secondary">
              Begin Your Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
