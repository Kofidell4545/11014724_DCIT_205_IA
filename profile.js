function showBio(bioId) {
    var bioContent = document.getElementById(bioId);
    bioContent.style.display = (bioContent.style.display === 'none' || bioContent.style.display === '') ? 'block' : 'none';
}