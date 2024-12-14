import styles from './Section.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Section() {
    return (
        <div>
            <div className="w-2/3 mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="text-2xl">Experience</div>
                    <button className="rounded-full outline bg-orange-400 hover:bg-orange-300 transition duration-300 px-4 py-2.5">
                        View Resume
                    </button>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-once="true"
                    className={cx('section', 'rounded-3xl p-8 mb-8 shadow-lg')}
                >
                    <div>
                        <h1 className="text-xl font-medium pb-2">August 2022 - Present</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl pb-2">Software Engineer - South Australian Police Payment</h2>
                            <p className="font-thin pb-2">Genix Ventures pty</p>
                            <p className="font-thin pb-2">Melbourne, VIC</p>
                        </div>
                        <div>
                            <span className="block p-1.5">
                                Developed and integrated a payment portal for the South Australian Police, facilitating
                                fine payments through seamless interactions with Salesforce and the ANZ CyberSource
                                payment gateway.
                            </span>
                            <span className="block p-1.5">
                                Utilized n8n workflow automation tool to streamline data processing between the portal,
                                Salesforce, and ANZ CyberSource Secure Acceptance, enhancing operational efficiency.
                            </span>
                            <span className="block p-1.5">
                                Gained foundational understanding of Kubernetes, covering both management and scaling of
                                clusters and resources.
                            </span>
                            <span className="block p-1.5">
                                Experienced in CI/CD processes with Jenkins, deploying changes to various environments
                                as part of the development and release process.
                            </span>
                            <span className="block p-1.5">
                                Used Kong API Gateway to transform API requests, enabling the seamless transfer of
                                published endpoints into related services.
                            </span>
                            <span className="block p-1.5">
                                Created and maintained extensive documentation for APIs using Open API, ensuring clarity
                                and accessibility for both developers and stakeholders.
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-once="true"
                    className={cx('section', 'rounded-3xl p-8 mb-8 shadow-lg')}
                >
                    <div>
                        <h1 className="text-xl font-medium pb-2">August 2022 - Present</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl pb-2">Software Engineer - Exam Platform</h2>
                            <p className="font-thin pb-2">Genix Ventures pty</p>
                            <p className="font-thin pb-2">Melbourne, VIC</p>
                        </div>
                        <div>
                            <span className="block p-1.5">
                                Developed an exam platform by utilizing Directus CMS, configuring and customizing it
                                through data bootstrapping.
                            </span>
                            <span className="block p-1.5">
                                Used Vue.js to create custom components that precisely catered to customer needs,
                                resulting in a highly customized and customer-centric web application.
                            </span>
                            <span className="block p-1.5">
                                Utilized SCSS to maintain a well-organized CSS structure, resulting in a visually
                                appealing and maintainable codebase.
                            </span>
                            <span className="block p-1.5">
                                Ensured every website component is responsive and provides optimal usability across all
                                devices.
                            </span>
                            <span className="block p-1.5">
                                Managed Docker images, volumes, and containers effectively, contributing to a robust and
                                stable infrastructure.
                            </span>
                            <span className="block p-1.5">
                                Demonstrated proficient knowledge of SQL and PSQL, executing query statements for
                                efficient data retrieval and manipulation.
                            </span>
                            <span className="block p-1.5">Maintained consistency in Git version control system.</span>
                            <span className="block p-1.5">
                                Participated in daily meetings with the team and used JIRA to track progress and manage
                                tasks.
                            </span>
                            <span className="block p-1.5">
                                Utilized n8n workflow automation tool to orchestrate and manage the project's workflow.
                            </span>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-once="true"
                    className={cx('section', 'rounded-3xl p-8 mb-8 shadow-lg')}
                >
                    <div>
                        <h1 className="text-xl font-medium pb-2">February 2019 - August 2022</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl pb-2">Front-end Web Developer</h2>
                            <p className="font-thin pb-2">Independent Freelance</p>
                            <p className="font-thin pb-2">Melbourne, VIC</p>
                        </div>
                        <div>
                            <span className="block p-1.5">
                                Outline and build static sites using HTML, CSS, and JavaScript.
                            </span>
                            <span className="block p-1.5">
                                Exploited JavaScript to develop simple games, music players, and form validation.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/3 mx-auto">
                <div className="text-2xl mb-8">Education</div>
                <div
                    data-aos="fade-left"
                    data-aos-once="true"
                    className={cx('section', 'rounded-3xl p-8 mb-8 shadow-lg')}
                >
                    <div>
                        <h1 className="text-xl font-medium pb-2">2019 - 2022</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl pb-2">Charles Sturt University</h2>
                            <p className="font-thin pb-2">Bachelor of Information Technology</p>
                            <p className="font-thin pb-2">Melbourne, VIC</p>
                        </div>
                        <div>
                            During my time at Charles Sturt, I gained a strong foundation in networking and fundamental
                            of programming. I took courses in algorithms, data structures, and databases. I also
                            participated in various hackathons and coding competitions to develop my coding skills.
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-once="true"
                    className={cx('section', 'rounded-3xl p-8 mb-8 shadow-lg')}
                >
                    <div>
                        <h1 className="text-xl font-medium pb-2">2019 - 2020</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl pb-2">Fullstack.edu.vn</h2>
                            <p className="font-thin pb-2">Certificate of HTML, CSS, Web Responsive and JavaScript</p>
                            <p className="font-thin pb-2">Melbourne, VIC</p>
                        </div>
                        <div>
                            During this course, I learned the fundamentals of web developing and programming. I took
                            courses in HTML, CSS, and Javascript and gained experience working with different operating
                            systems and software development tools.
                        </div>
                    </div>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-once="true"
                    className={cx('section', 'rounded-3xl p-8 mb-8 shadow-lg')}
                >
                    <div>
                        <h1 className="text-xl font-medium pb-2">2017 - 2019</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="text-xl pb-2">Da Nang University of Technology</h2>
                            <p className="font-thin pb-2">Bachelor of Embedded System</p>
                            <p className="font-thin pb-2">Da Nang, Viet Nam</p>
                        </div>
                        <div>
                            This basic embedded systems course allow me to gain a fundamental understanding of embedded
                            systems and the applications
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
