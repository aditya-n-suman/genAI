import { useState } from "react";
import IconClose from "../assets/icons/close";
import IconHamburger from "../assets/icons/hamburger";
import IconChatSquare from "../assets/icons/chatSquare";
import IconSettings from "../assets/icons/settings";
import IconPlus from "../assets/icons/plus";

interface SidebarProps {
  highlighted?: string;
}

const Sidebar = ({ highlighted = "1" }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const expandHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <aside
        className={`p-4 flex md:flex-col md:bg-slate-100 absolute w-full md:w-fit justify-between md:relative z-10 md:z-0 ${
          isExpanded
            ? " flex-col min-w-72 h-screen md:w-1/3 lg:w-1/4 xl:w-1/5"
            : ""
        }`}
      >
        <button
          onClick={expandHandler}
          className="h-12 w-12 rounded-full bg-transparent hover:bg-slate-200 active:bg-slate-300 mb-16"
        >
          {isExpanded ? (
            <IconClose className="sidebar-icon" />
          ) : (
            <IconHamburger className="sidebar-icon" />
          )}
        </button>

        <button className={`sidebar-btn w-fit mb-8`}>
          <IconPlus className="h-6 w-10" />
          {isExpanded && <span className="pr-3">New chat</span>}
        </button>

        {isExpanded && (
          <>
            <header className="font-bold text-sm text-left">
              Recent chats
            </header>
            <ul className="flex-1">
              <li className="history-item">
                <IconChatSquare className="h-4 w-10" />
                Chat History
              </li>
              <li
                className={`history-item ${
                  highlighted === "1" && "bg-blue-100"
                }`}
              >
                <IconChatSquare className="h-4 w-10" />
                Chat History 2
              </li>
            </ul>
          </>
        )}
        <hr className="hidden md:block md:flex-1 border-hidden" />
        <button className={`hidden md:sidebar-btn`}>
          <IconSettings className="h-6 w-10" />
          {isExpanded && "Settings"}
        </button>
        {isExpanded && (
          <button className={`sidebar-btn md:hidden`}>
            <IconSettings className="h-5 w-10" />
            {isExpanded && "Settings"}
          </button>
        )}
      </aside>
      {isExpanded && (
        <div className="md:hidden fixed flex flex-col h-screen w-screen z-[1] bg-black opacity-15"></div>
      )}
    </>
  );
};

export default Sidebar;
