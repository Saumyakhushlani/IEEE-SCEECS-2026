import { PixelImage } from '../components/pixel-image';
import Hero from '@/components/Hero';
import { ExternalLink } from 'lucide-react';

// All guest lecturer images - you can add name, title, and link as needed
const guestLecturers = [
    { name: "Striver", title: "Founder of takeUforward", image: "/guest/striver.jpeg", link: "https://www.linkedin.com/in/rajstriver/?originalSubdomain=in" },
    { name: "Sunchit Dudeja", title: "SDE | Adobe", image: "/guest/sunchit_dudeja.jpeg", link: "https://www.linkedin.com/in/sunchitdudeja/?original_referer=https%3A%2F%2Fwww%2Ebing%2Ecom%2F&originalSubdomain=in" },
    { name: "Kamran Ali", title: "Sr. Engineering Manager | Atlassian", image: "/guest/kamran_ali.jpeg", link: "https://www.linkedin.com/in/systemdesignengineer/?originalSubdomain=in" },
    { name: "Love Babbar", title: "Founder of Codehelp", image: "/guest/love_babbar.jpg", link: "https://www.linkedin.com/in/love-babbar-38ab2887/?originalSubdomain=in" },
    { name: "Lakshya Kumar", title: "Instructor at Codehelp", image: "/guest/lakshya_kumar.jpeg", link: "https://www.linkedin.com/in/lakshayk12/?originalSubdomain=in" },
    //   { name: "Speaker 01", title: "Guest Speaker", image: "/guest/01.jpg", link: null },

    { name: "Pushyamitra Bhargav", title: "Additional Advocate General, Indore Bench (MP Govt)", image: "/guest/gl1.jpg", link: "https://www.linkedin.com/in/pushyamitra-bhargav-1987331b2/" },
    { name: "Subhash Khare", title: "Vice President of Wipro", image: "/guest/gl2.jpg", link: "https://www.linkedin.com/in/subhash-khare-ab387b18/" },
    { name: "Sunil K. Prasad", title: "Chief Technology Officer at Leidos", image: "/guest/gl3.jpg", link: "https://www.linkedin.com/in/sunil-k-prasad-444a06/" },
    { name: "Tomy Sebastian", title: "Director, Motor Drive Systems at Halla Mechatronics", image: "/guest/gl4.jpg", link: "https://www.linkedin.com/in/drdonvaughn/" },
    { name: "Abhas Mitra", title: "Astrophysicist", image: "/guest/02.jpg", link: "https://www.linkedin.com/in/abhas-kumar-mitra-25245a202/" },
    { name: "Anima Patil-Sabale", title: "Scientist-Astronaut", image: "/guest/03.jpg", link: "https://www.linkedin.com/in/animasabale/" },
    { name: "Kailash Srivastava", title: "Power System Professional", image: "/guest/04.jpg", link: "https://www.linkedin.com/in/knsri" },
    { name: "Dr. Charles H. Lineweaver", title: "Associate Professor", image: "/guest/05.jpg", link: "https://www.mso.anu.edu.au/~charley/" },
    { name: "Kulpreet Yadav", title: "Author, Motivational Speaker", image: "/guest/06.jpg", link: "https://www.goodreads.com/author/show/5021313.Kulpreet_Yadav" },
    { name: "Dr. V.N Mani", title: "Scientist", image: "/guest/07.jpg", link: "https://vidwan.inflibnet.ac.in/profile/2738" },
    { name: "Sarang Verma", title: "CEO, Appointy Software Inc.", image: "/guest/08.jpg", link: "https://www.linkedin.com/in/sarangverma" },
    { name: "Dr. H.C Verma", title: "Author, Concepts of Physics", image: "/guest/09.jpg", link: "https://hcverma.in/" },
    { name: "JOHN C. MATHER", title: "Senior Astrophysicist", image: "/guest/10.jpg", link: "https://www.nobelprize.org/prizes/physics/2006/mather/biographical/" },
    { name: "Dr. A.S Pillai", title: "Scientist", image: "/guest/11.jpg", link: "https://en.wikipedia.org/wiki/A._Sivathanu_Pillai" },
    { name: "SACHIN GUPTA", title: "Co-Founder, HackerEarth", image: "/guest/12.jpg", link: "https://www.linkedin.com/in/sachingupta006/" },
    { name: "Dr. Viswanathan Raghunathan", title: "CEO, Academic, Author, Columnist", image: "/guest/13.jpg", link: "https://en.wikipedia.org/wiki/Viswanathan_Raghunathan" },
    { name: "Walter Lewin", title: "Former Professor, MIT", image: "/guest/14.jpg", link: "https://en.wikipedia.org/wiki/Walter_Lewin" },
    { name: "DR. C.P. RAVIKUMAR", title: "Senior Technologist, Texas Instruments India", image: "/guest/15.jpg", link: "https://www.linkedin.com/in/ravikumar-cp-1039825a" },
    { name: "Shyam Mardikar", title: "Chief - Strategy, Architecture & Engineering at Bharti Airtel (India)", image: "/guest/16.jpg", link: "https://en.wikipedia.org/wiki/Shyam_Mardikar" },
    { name: "Arvind Sanjeev", title: "Engineer, Inventor and Entrepreneur", image: "/guest/17.jpg", link: "https://arvindsanjeev.com/index.html" },
    { name: "Dr. ALOKNATH DE", title: "CTO of Samsung India Software Operations", image: "/guest/18.jpg", link: "https://www.linkedin.com/in/drdescitechlab" },
    { name: "Mr. N.K. GOYAL", title: "Senior Telecom Professional", image: "/guest/19.jpeg", link: "https://www.linkedin.com/in/nkgoyals" },
    { name: "JEFF LIEBERMAN", title: "Roboticist, Television Presenter", image: "/guest/20.jpg", link: "https://en.wikipedia.org/wiki/Jeff_Lieberman_(artist_engineer)" },
    //   { name: "Speaker 21", title: "Guest Speaker", image: "/guest/21.jpg", link: null },
];

function GuestLecturers() {
    return (
        <>
            <Hero src="/background/10.jpg" content="Guest Lecture"/>
            <div className="min-h-screen bg-white py-16 px-4 md:px-8 mt-12">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <p className="text-purple-600 text-lg font-medium mb-2">Welcome to SCEECS'26</p>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                            Guest Lecturers
                        </h1>
                        <div className="flex justify-center mb-6">
                            <svg
                                className="w-32 h-2 text-pink-400"
                                viewBox="0 0 128 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 2C18 1, 38 3, 54 2C70 1, 90 3, 106 2C114 1.5, 122 2, 126 2"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Guest Lecturers Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-12">
                        {guestLecturers.map((lecturer, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
                            >
                                {/* Image Section */}
                                <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gray-100">
                                    <PixelImage
                                        src={lecturer.image}
                                        grid="6x4"
                                        grayscaleAnimation={true}
                                        pixelFadeInDuration={1000}
                                        maxAnimationDelay={1600}
                                        colorRevealDelay={1800}
                                        className="w-full h-full"
                                        startAnimation={true}
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                                        {lecturer.name}
                                    </h3>
                                    <p className="text-purple-600 font-semibold text-sm md:text-base mb-4">
                                        {lecturer.title}
                                    </p>

                                    {/* Link Section */}
                                    {lecturer.link && (
                                        <a
                                            href={lecturer.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm w-full"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Know More
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuestLecturers;
