function normalizeCourseName(courseName) {
    const courseNameSplit = courseName.split(" ");
    const courseNameArray = courseNameSplit.map(name => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    });
    return courseNameArray.join(" ") + " Course";
}

export default normalizeCourseName;