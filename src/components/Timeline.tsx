"use client";
import {
  BriefcaseBusiness,
  Cable,
  Goal,
  GraduationCap,
  School,
  TicketCheck,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2020"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
        visible={true}
        icon={<School />}
      >
        <h3 className="vertical-timeline-element-title">Student</h3>
        <h4 className="vertical-timeline-element-subtitle">Gainesville, FL</h4>
        <p>Entered GE@SF program at the University of Florida</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2021 - August 2021"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
        visible={true}
        icon={<BriefcaseBusiness />}
      >
        <h3 className="vertical-timeline-element-title">
          IT Internship - Florida Stucco
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Boca Raton, FL</h4>
        <p>
          Developed a C# application for real-time weather tracking and shipment
          logs, enhancing export tracking. Maintained digital infrastructure,
          including computers, laptops, phones, and printers. Acted as liaison
          with service providers like Google, Microsoft, Comcast, and SAP.
          Assisted Finance and Customer Service with order write-up and
          inventory requests.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2023"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
        visible={true}
        icon={<TicketCheck />}
      >
        <h3 className="vertical-timeline-element-title">Certifications</h3>
        <h4 className="vertical-timeline-element-subtitle">Boca Raton, FL</h4>
        <p>
          Obtained&nbsp;
          <Link
            href={
              "https://www.coursera.org/account/accomplishments/specialization/certificate/9U8CQBSZRGQN"
            }
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Meta Frontend Developer Specialization
          </Link>{" "}
          and{" "}
          <Link
            href={
              "https://www.coursera.org/account/accomplishments/specialization/certificate/HWN8UGT8RHSE"
            }
            className="text-blue-600 hover:underline"
            target="_blank"
          >
            Google IT Support Specialization{" "}
          </Link>
          via Coursera
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="May 2023 - August 2023"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
        visible={true}
        icon={<Cable />}
      >
        <h3 className="vertical-timeline-element-title">
          IT Consulting - LANVision Inc.
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Boca Raton, FL</h4>
        <p>
          Installed networking hardware, including server racks, for new
          offices. Configured and installed Zyxel routers for clients. Provided
          customer service and tech support for computer issues. Managed
          installation and configuration of company technology like laptops,
          computers, and IP phones.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2024"
        iconStyle={{ background: "rgb(255, 255, 255)", color: "#000" }}
        visible={true}
        icon={<GraduationCap />}
      >
        <h3 className="vertical-timeline-element-title">Expected Graduation</h3>
        <h4 className="vertical-timeline-element-subtitle">Boca Raton, FL</h4>
        <p>
          Expected graduation from the University of Florida&apos;s Herbert
          Wertheim College of Engineeing with a Bachelors in Computer Science
          (Cum Laude)
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: "#5B7C99", color: "#fff" }}
        icon={<Goal />}
        visible={true}
      />
    </VerticalTimeline>
  );
};

export default Timeline;
