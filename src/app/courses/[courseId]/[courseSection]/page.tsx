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
		<div>
			<div>
				<CourseTitle courseTitleText={courseData.courseName} />
			</div>
			<div>
				<h1>Course: {courseData.courseName}</h1>
				<h2>Section: {courseData.sectionName}</h2>
			</div>
		</div>
	);
};

export default CourseSection;
