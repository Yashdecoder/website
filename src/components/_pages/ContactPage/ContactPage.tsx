import React from 'react';
import PageHeader from '@components/PageHeader';
import Layout from '@components/Layout';
import SEO from '@components/SEO';
import ContactSection from '@components/ContactSection';
import './ContactPage.scss';

const ContactPage: React.FC<{ data: any }> = () => {
  return (
    <Layout className="ContactPage">
      <SEO title="Contact" />
      <PageHeader
        className="ContactPage__pageHeader"
        title="Let’s Talk"
        innerContent="I can’t wait to hear what problems you’re looking to solve and discuss creative solutions to push your business forward. Fill out the form below and I’ll get back to you within the next business day."
        buttonText="Get Started Now"
        buttonHref="#contact"
      />
      <ContactSection id="contact" />
    </Layout>
  );
};

export default ContactPage;