const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const projects = document.querySelectorAll(".project");
console.log(projects);
var currentProject = 0;
// set timeout function is required so that the first project is still visible
setTimeout(setMainProject(currentProject), 300);

leftButton.addEventListener("click", () => {
    if (currentProject <= 1) leftButton.style.display = "none";
    // check if we are at the beggining of the list and if not then adjust accordingly
    if (currentProject > 0) currentProject -= 1; 
    // this is so that the user doesnt have to go all the way right to go left again
    rightButton.style.display = "inline";
    setMainProject(currentProject);
})
rightButton.addEventListener("click", () => {
    if (currentProject === projects.length -2) rightButton.style.display = "none"; 
    // check if we are at the end of the list and if not then adjust accordingly
    if (currentProject < projects.length - 1) currentProject += 1;
    // this is so that the user doesnt have to go all the way left to go right again
    leftButton.style.display = "inline";
    setMainProject(currentProject);
})

function setMainProject(currentProject) {
    // set all projects to be invisible
    projects.forEach(project => {
        project.className = "project";
    });
    // set the slected project to be visible
    projects[currentProject].className = "projectMain";
}