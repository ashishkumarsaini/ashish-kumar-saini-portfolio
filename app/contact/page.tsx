import { ContactForm } from "./components/contact-form";

const ContactPage = () => {
  return (
    <div>
      <section className="pt-8 md:pt-10 lg:pt-12 max-w-[1024px] m-auto">
        <div>
          <p className="text-[25px] text-center">Have a project in mind.</p>
          <p className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px] text-center">
            {`Let's work `}
            <span className="text-muted-foreground">together</span>
          </p>
          <div className="mt-10 md:mt-15 text-center">
            <p className="text-[17px] md:text-[22px] w-full">
              I’m always open to discussing new opportunities, interesting projects, or collaborations.</p>
            <p className="text-[17px] md:text-[22px] w-full">
              Whether you’re building a product from scratch, scaling an existing system, or looking to improve performance—I’d be happy to help.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
