import React from "react";
import { UserDetailsForm } from "./UserDetailsForm";
import "./Aside.css";

export function Aside({ ...props }) {
  return (
    <aside>
      <a
        href="https://web.archive.org/web/20210927135800/https://www.theatlantic.com/family/archive/2021/08/oliver-burkeman-advice-time-productivity/619723/"
        target="_blank"
      >
        4000 Weeks
      </a>
      <a href="https://unsplash.com/photos/CaVBkPUSwM4" target="_blank">
        Photo Source
      </a>
      <a href="https://github.com/radavis/weeks-left" target="_blank">
        Repository
      </a>
      <UserDetailsForm {...props} />
    </aside>
  );
}
