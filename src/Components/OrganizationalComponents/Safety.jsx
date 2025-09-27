import React from "react";
import { Tree } from "react-organizational-chart";
import { cn } from "../../lib/utils";

export default function Safety({
  headerTitle,
  isMobile,
  renderNode,
  chartData,
}) {
  return (
    <>
      <section className={headerTitle}>
        {/* <h2 className="title">
          Safety{" "}
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
