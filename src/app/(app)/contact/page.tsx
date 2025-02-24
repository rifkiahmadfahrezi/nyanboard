import React from "react";
import { ContactPage as ContactPageExample } from "@/examples/contact-page";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return <ContactPageExample />;
};

export default ContactPage;
