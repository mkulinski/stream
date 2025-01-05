type FetchSectionProps = {
    courseId: string;
    sectionId: string;
}

type LessonType = {
    id: string;
    title: string;
    content: object;
}

export type SectionType = {
    courseName: string;
    sectionName: string;
    lessons: LessonType[];
}

type FetchSectionReturnDataType = {
    json: () => SectionType
}

const fetchSectionReturnMockData = {
    json: () => ({
        courseName: 'Course 1',
        sectionName: 'Section 1',
        lessons: [
            { id: '1', title: 'Lesson 1', content: {} },
            { id: '2', title: 'Lesson 2', content: {} },
            { id: '3', title: 'Lesson 3', content: {} },
            { id: '4', title: 'Lesson 4', content: {} },
        ]
    })
}

export const fetchSection = ({ courseId, sectionId }: FetchSectionProps): Promise<FetchSectionReturnDataType> => {
    console.log('** calling id ', courseId);
    console.log('** calling id ', sectionId);

    return new Promise((res) => {
        res(fetchSectionReturnMockData);
    })
}

export async function getSectionData({courseId, courseSectionId}: { courseId: string, courseSectionId: string}) {
    // Fetch data (e.g., from an API or database)
    const courseData = await fetchSection({ courseId, sectionId: courseSectionId })
    .then(res => res.json());

    return courseData;
}