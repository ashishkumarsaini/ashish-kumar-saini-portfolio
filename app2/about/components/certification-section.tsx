export const CertificationSection = () => {
  return (
    <div className="pt-20 md:pt-25 lg:pt-28 sticky top-[100px]">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-5 sticky top-[100px]">
          <h2 className="text-[25px] sm:text-[35px] md:text-[55px] font-semibold">
            Certification
          </h2>
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="bg-background py-3 sticky top-[150px] md:top-[100px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] sm:text-[25px] md:text-[35px]">
                Web Development Cohort 2026
              </h2>
              <p>Offered by ChaiCode</p>
            </div>
            <p className="my-5">
              Currently enrolled in an intensive, hands-on web development program focused on building real-world applications using modern technologies. The cohort emphasizes practical learning, system thinking, and writing scalable, production-ready code.
            </p>
          </div>
          <div className="border-t bg-background py-3 sticky top-[200px] md:top-[180px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] sm:text-[25px] md:text-[35px]">
                React Native Development
              </h2>
              <p>Offered by LearnCodeOnline</p>
            </div>
            <p className="my-5">
              Completed a comprehensive program focused on building cross-platform mobile applications using React Native. Gained experience in developing performant mobile interfaces, managing state, and integrating APIs for real-world applications.
            </p>
          </div>
          <div className="border-t bg-background py-3 sticky top-[250px] md:top-[260px]">
            <div className="flex items-baseline justify-between">
              <h2 className="text-[15px] sm:text-[25px] md:text-[35px]">
                Full Stack MERN Bootcamp
              </h2>
              <p>Offered by LearnCodeOnline</p>
            </div>
            <p className="my-5">
              Completed an in-depth bootcamp covering the MERN stack (MongoDB, Express, React, Node.js). Learned to build full-stack applications from scratch, design RESTful APIs, and implement authentication, database management, and scalable backend systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}