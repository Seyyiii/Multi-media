 const viewTest = document.getElementById("View-tests").addEventListener("click", (e)=>{
    window.location.href = "test-question.html";
});
const ViewAssignments = document.getElementById("View-assignments").addEventListener("click", (e)=> {
    window.location.href = "view-assignment.html";
});
// Set your real deadlines here:
    const examDate = new Date("2026-01-15");
    const projectDate = new Date("2025-12-12");

    const updateDue = (date) => {
        const today = new Date();
        const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
        return diff > 0 ? `Due in ${diff} days` : "Deadline passed";
    };

    document.getElementById("examDue").textContent = updateDue(examDate);
    document.getElementById("projectDue").textContent = updateDue(projectDate);