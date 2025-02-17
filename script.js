let menuIcon = documnet.queryselector('#menu-icon');
let navbar = documeent.queryselector('.navbar');
let sections = documents.queryselectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsettop - 150;
        let height = sec.offsetheight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classlist.remove('active');
                document.queryselectior('header nav a [href*=' + id + ' ]').classlist.add('active')

            })
        }
    })
}
menuIcon.onclick = () => {
    menuIcon.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}