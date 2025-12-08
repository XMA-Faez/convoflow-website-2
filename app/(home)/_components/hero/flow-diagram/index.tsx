"use client";

import { FlowDiagramDesktop } from "./flow-diagram-desktop";
import { FlowDiagramMobile } from "./flow-diagram-mobile";

export function FlowDiagram() {
  return (
    <>
      <div className="hidden lg:block">
        <FlowDiagramDesktop />
      </div>
      <div className="block lg:hidden">
        <FlowDiagramMobile />
      </div>
    </>
  );
}
