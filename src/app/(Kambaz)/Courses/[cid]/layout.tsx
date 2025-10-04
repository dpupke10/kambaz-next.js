import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-courses-layout">
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          {children}
        </div>
      </div>
    </div>
  );
}