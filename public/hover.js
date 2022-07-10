const projectsContent = document.querySelectorAll('.prod');

for (let i = 0; i < projectsContent.length; i++) {
    projectsContent[i].addEventListener('onmouseover', () => {
        console.log('hover')
    })
}