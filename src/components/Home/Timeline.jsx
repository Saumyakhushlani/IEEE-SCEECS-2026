import React from 'react'
import { Timeline } from '../ui/timeline';

const HowItWorkTimeline = () => {
    const data = [
        {
            title: "SUBMISSIONS OPEN",
            date: "1 Sep 2025",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-4">
                        Submit paper on Microsoft CMT.
                    </p>
                    <a href="#" className="text-pink-500 hover:text-pink-600 text-sm md:text-base mb-4 inline-block">
                        here
                    </a>
                    <p className="text-gray-800 font-semibold text-base md:text-lg mb-2">
                        Acknowledgement
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                    </p>
                </div>
            ),
        },
        {
            title: "REVIEW",
            date: "WILL BE INFORMED",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Paper is blind reviewed by experts.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        All submitted papers undergo a rigorous double-blind peer review process conducted by a panel of international experts in the field. The review process evaluates papers based on originality, technical quality, clarity, and relevance to the conference themes. Authors will be informed about the review status and feedback from reviewers.
                    </p>
                </div>
            ),
        },
        {
            title: "Acceptance Notification",
            date: "18 Dec 2025",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Accepted papers will be notified through email.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Authors of accepted papers will receive formal notification via email along with detailed instructions for preparing the camera-ready version. The notification will include reviewer comments, required revisions, and important deadlines for camera-ready submission and registration. Please ensure your contact email is up-to-date in the submission system.
                    </p>
                </div>
            ),
        },
        {
            title: "Camera Ready Submissions",
            date: "25 Dec 2025",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Camera Ready Submission and Registration will be open for accepted papers.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                        Authors of accepted papers must submit the final camera-ready version incorporating all reviewer comments and following the IEEE conference template guidelines. The camera-ready submission must include all required forms, copyright transfer agreement, and proofreading. Simultaneously, at least one author from each accepted paper must register for the conference to ensure paper inclusion in the proceedings.
                    </p>
                </div>
            ),
        },
        {
            title: "Paper Presentation",
            date: "31 Jan-1 Feb 2026",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold mb-3">
                        Accepted Papers will be presented in conference in hybrid mode.
                    </p>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
                        The conference will be conducted in hybrid mode, allowing authors to present their research either in-person at the conference venue or remotely via virtual platforms. Each presentation will be allocated a specific time slot within technical sessions, followed by a Q&A session where authors can interact with the audience and receive feedback.
                    </p>
                    
                </div>
            ),
        },
        {
            title: "PUBLISH",
            date: "WILL BE INFORMED",
            content: (
                <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-900 text-lg md:text-xl font-bold">
                        Accepted papers will be published in the SCEECS 2026 Conference Proceedings and submitted to IEEE Xplore.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    )
}

export default HowItWorkTimeline
