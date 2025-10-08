import { Link } from "wouter";
import { courseModules } from "@/data/courseData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, ChevronRight, Home } from "lucide-react";

export default function ModuleListing() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Course Modules</h1>
          <p className="text-xl text-gray-600">
            Choose a module to begin your learning journey
          </p>
        </div>

        {/* Modules List */}
        <div className="space-y-6">
          {courseModules.map((module, index) => (
            <Card key={module.id} className="hover:shadow-lg transition-shadow border-2 hover:border-indigo-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center text-2xl font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{module.title}</CardTitle>
                      <CardDescription className="text-base mb-4">
                        {module.description}
                      </CardDescription>
                      <div className="flex gap-4 mb-4">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {module.duration}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {module.lessons.length} lessons
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Link href={`/modules/${module.id}`}>
                    <Button className="bg-indigo-600 hover:bg-indigo-700">
                      Start Module
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-3 text-gray-700">Lessons in this module:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <Link 
                      key={lesson.id} 
                      href={`/modules/${module.id}/lessons/${lesson.id}`}
                    >
                      <div className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 hover:bg-indigo-50 transition-colors cursor-pointer group">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-medium flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                          {lessonIndex + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm text-gray-800 truncate">
                            {lesson.title}
                          </p>
                          <p className="text-xs text-gray-500">{lesson.duration}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
