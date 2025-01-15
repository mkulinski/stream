import { getSectionData } from "../../api/fetchCourseSection";
import { CourseTitle } from "../../ui/CourseTitle";

type CourseSectionProps = {
	params: Promise<{ courseId: string; courseSection: string }>;
};

const CourseSection = async ({ params }: CourseSectionProps) => {
	const { courseId, courseSection } = await params;
	const courseData = await getSectionData({
		courseId,
		courseSectionId: courseSection,
	});

	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="bg-gray-100 p-4 rounded shadow">
				<CourseTitle title={courseData.courseName} />
			</div>
			<div className="col-span-2 bg-white p-4 rounded shadow">
				<h1>Course: {courseData.courseName}</h1>
				<h2>Section: {courseData.sectionName}</h2>
			</div>
		</div>
	);
};

export default CourseSection;
