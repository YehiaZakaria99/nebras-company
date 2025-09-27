import React from "react";
import { Tree } from "react-organizational-chart";
import { cn } from "../../lib/utils";

export default function Finance({
  headerTitle,
  isMobile,
  renderNode,
  chartData,
}) {
  return (
    <>
      <section className={headerTitle}>
        {/* <h2 className="title">
          Finance
        </h2> */}
        <div className="w-full overflow-x-auto md:flex md:justify-center py-6">
          <div
            className="min-w-[350px] w-fit flex justify-center"
            data-aos="fade-up"
          >
            <Tree
              direction={isMobile ? "vertical" : "horizontal"}
              lineWidth={"2px"}
              lineColor="#292C62"
              lineBorderRadius={"10px"}
              label={
                <div
                  className={cn(
                    "manager"
                  )}
                >
                  {chartData[headerTitle].name}
                  <div className="text-xs font-medium text-white/80">
                    {chartData[headerTitle].title}
                  </div>
                </div>
              }
            >
              {chartData[headerTitle].children.map((child, key) =>
                renderNode(child, key)
              )}
            </Tree>
          </div>
        </div>
      </section>
    </>
  );
}

/* 
  "HSE": {
    "name": "Mohsin Raza",
    "title": "HSE Manager",
    "children": [
      {
        "name": "Zahir Ghafoor",
        "title": "Dy Manager HSE",
        "children": [
          {
            "title": "Safety Officer"
          },
          {
            "title": "Safety Officer"
          },
          {
            "title": "Safety Officer"
          },
          {
            "title": "Safety Officer"
          }
        ]
      },
      {
        "name": "Work Permit Receivers (WPR)",
        "title": 12
      },
      {
        "name": "Azeem Sarwar",
        "title": "HSE Supervisro",
        "children": [
          {
            "title": "Safety Officer"
          },
          {
            "title": "Safety Officer"
          },
          {
            "title": "Safety Officer"
          },
          {
            "title": "Safety Officer"
          }
        ]
      }
    ]
  },
  "qualityControl": {
    "name": "Mohammed Sajid",
    "title": "QC Manager",
    "children": [
      {
        "name": "Sohail Iqbal ",
        "title": "Dy Manager QC",
        "children": [
          {
            "title": "QC Inspector"
          },
          {
            "title": "QC Inspector"
          },
          {
            "title": "QC Inspector"
          },
          {
            "title": "QC Inspector"
          }
        ]
      },
      {
        "name": "Ahmed Naseem",
        "title": "QC Supervisor",
        "children": [
          {
            "title": "QC Inspector"
          },
          {
            "title": "QC Inspector"
          },
          {
            "title": "QC Inspector"
          },
          {
            "title": "QC Inspector"
          }
        ]
      }
    ]
  }

*/
