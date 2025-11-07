import React from "react";
import MainLayout from "../layout/MainLayout";

export default function JobServerAdminPage() {
  return (
    <MainLayout>
      <div className="img-content-wrapper  border-gray-200 border-b-1 pb-10 px-4">
        <div className="content-container text-center md:text-left">
          <div className="header-wrapper mb-5">
            <h1 className="font-bold">Server Administrator</h1>{" "}
            <span>2015 - 2016</span>
          </div>
          <ul className="jobs-list-items">
            <li>
              Managed server administration to ensure stable internet
              connectivity and secure deployment of websites to production
              environments.
            </li>
            <li>
              Configured and maintained company firewalls to enhance network
              security and protect sensitive data.
            </li>
            <li>
              Oversaw SSL certificate renewals for all websites, ensuring
              uninterrupted secure access and compliance with industry
              standards.
            </li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
