import { useRoute, Link } from "wouter";
import { courseModules } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";

export default function ModuleDetail() {
  const [, params] = useRoute("/modules/:moduleId");
  
  const module = courseModules.find(m => m.id === params?.moduleId);
  
  if (!module) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#a3caff] via-white to-gray-50 flex items-center justify-center">
        <Header />
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Module Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">The module you're looking for doesn't exist.</p>
            <Link href="/modules">
              <Button>Back to All Modules</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const moduleIndex = courseModules.findIndex(m => m.id === module.id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a3caff] via-white to-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/modules">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Modules
            </Button>
          </Link>
          
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#5590f3] to-[#154072] text-white flex items-center justify-center text-3xl font-bold flex-shrink-0">
              {moduleIndex + 1}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{module.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{module.description}</p>
              <div className="flex gap-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  {module.lessons.length} lessons
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <Card className="mb-8 border-2 border-[#a3caff]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#5590f3]" />
              Your Progress
            </CardTitle>
            <CardDescription>Track your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">0 of {module.lessons.length} lessons completed</span>
                <span className="font-medium text-[#5590f3]">0%</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Lessons List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Lessons</h2>
          <div className="space-y-4">
            {module.lessons.map((lesson, index) => (
              <Link key={lesson.id} href={`/modules/${module.id}/lessons/${lesson.id}`}>
                <Card className="hover:shadow-lg transition-all cursor-pointer border-2 hover:border-[#5590f3] group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#a3caff] text-[#154072] flex items-center justify-center text-lg font-bold flex-shrink-0 group-hover:bg-[#5590f3] group-hover:text-white transition-colors">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {lesson.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          {lesson.handsOnExercise && (
                            <Badge variant="outline" className="text-xs">
                              Hands-on Exercise
                            </Badge>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#5590f3] transition-colors" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Start Learning CTA */}
        <Card className="mt-8 bg-gradient-to-r from-[#5590f3] to-[#154072] text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="text-lg mb-6 opacity-90">
              Begin with the first lesson and work your way through the module
            </p>
            <Link href={`/modules/${module.id}/lessons/${module.lessons[0].id}`}>
              <Button size="lg" variant="secondary">
                Start First Lesson
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
