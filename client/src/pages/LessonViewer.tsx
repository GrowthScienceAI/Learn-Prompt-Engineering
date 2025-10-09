import { useRoute, Link } from "wouter";
import { courseModules } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Header from "@/components/Header";

export default function LessonViewer() {
  const [, params] = useRoute("/modules/:moduleId/lessons/:lessonId");
  
  const module = courseModules.find(m => m.id === params?.moduleId);
  const lesson = module?.lessons.find(l => l.id === params?.lessonId);
  
  if (!module || !lesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#a3caff] via-white to-gray-50 flex items-center justify-center">
        <Header />
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Lesson Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">The lesson you're looking for doesn't exist.</p>
            <Link href="/modules">
              <Button>Back to Modules</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentLessonIndex = module.lessons.findIndex(l => l.id === lesson.id);
  const previousLesson = currentLessonIndex > 0 ? module.lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < module.lessons.length - 1 ? module.lessons[currentLessonIndex + 1] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a3caff] via-white to-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Bar */}
        <div className="mb-6 flex items-center justify-between">
          <Link href={`/modules/${module.id}`}>
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to {module.title}
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge className="mb-3 bg-[#a3caff] text-[#154072]">
                      Lesson {currentLessonIndex + 1} of {module.lessons.length}
                    </Badge>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {lesson.title}
                    </h1>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none">
                  <ReactMarkdown>{lesson.content}</ReactMarkdown>
                </div>
              </CardContent>
            </Card>

            {/* Key Points */}
            {lesson.keyPoints && lesson.keyPoints.length > 0 && (
              <Card className="mb-6 border-2 border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-800">
                    <CheckCircle2 className="w-5 h-5" />
                    Key Takeaways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {lesson.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Hands-on Exercise */}
            {lesson.handsOnExercise && (
              <Card className="mb-6 border-2 border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-800">
                    <Lightbulb className="w-5 h-5" />
                    Hands-on Exercise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{lesson.handsOnExercise}</p>
                </CardContent>
              </Card>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {previousLesson ? (
                <Link href={`/modules/${module.id}/lessons/${previousLesson.id}`}>
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous Lesson
                  </Button>
                </Link>
              ) : (
                <div></div>
              )}
              
              {nextLesson ? (
                <Link href={`/modules/${module.id}/lessons/${nextLesson.id}`}>
                  <Button className="bg-[#5590f3] hover:bg-[#154072]">
                    Next Lesson
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              ) : (
                <Link href="/modules">
                  <Button className="bg-[#5590f3] hover:bg-[#154072]">
                    Complete Module
                    <CheckCircle2 className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Sidebar - Lesson List */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-lg">Module Lessons</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {module.lessons.map((l, index) => (
                    <Link key={l.id} href={`/modules/${module.id}/lessons/${l.id}`}>
                      <div className={`p-4 hover:bg-[#a3caff] transition-colors cursor-pointer ${l.id === lesson.id ? 'bg-[#a3caff]' : ''}`}>
                        <div className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${l.id === lesson.id ? 'bg-[#5590f3] text-white' : 'bg-gray-200 text-gray-600'}`}>
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm font-medium ${l.id === lesson.id ? 'text-[#154072]' : 'text-gray-700'}`}>
                              {l.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
