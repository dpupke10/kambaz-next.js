import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

export default function CoursesLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-courses-layout">
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}