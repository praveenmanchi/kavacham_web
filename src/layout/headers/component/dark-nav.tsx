import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import menu_data from "../../../data/menu-data";
import { ISubItems } from "../../../types/menu-d-t";

export default function DarkNav() {
  const [activeMenu, setActiveMenu] = useState([-1, false]);
  const { pathname } = useLocation();

  const isChildActive = (links: ISubItems[] | undefined) => {
    let isActive = false;
    links?.forEach((element) => {
      if (
        element.link &&
        element.link.split("/")[1] === pathname?.split("/")[1]
      ) {
        isActive = true;
      } else if (element.subMenuItems) {
        element.subMenuItems.forEach((element2) => {
          if (
            element2.link &&
            element2.link.split("/")[1] === pathname?.split("/")[1]
          ) {
            isActive = true;
          }
        });
      }
    });

    return isActive;
  };
  return (
    <>
      {menu_data.map((elm, i) => (
        <li
          key={i}
          className={`${
            elm.subMenuItems
              ? "menu-item-has-children submenu-item-has-children2"
              : ""
          }

          ${activeMenu[0] == i ? "active-class2" : ""}
          `}
        >
          {elm.subMenuItems ? (
            <>
              <a
                href="#"
                onClick={() =>
                  setActiveMenu((pre) => {
                    return pre[0] == i ? [-1, false] : [i, false];
                  })
                }
                className={isChildActive(elm.subMenuItems) ? "activeMenu" : ""}
              >
                {elm.title}
                <span className="mean-expand-class2"></span>
              </a>

              <ul
                className="sub-menu submenu-class2 menu-open2 overflow-hidden"
                style={
                  activeMenu[0] == i
                    ? { maxHeight: "500px" }
                    : { maxHeight: "0px" }
                }
              >
                {elm.subMenuItems.map((elm2, i2) => (
                  <li
                    key={i2}
                    className={`${
                      elm2.subMenuItems
                        ? "menu-item-has-children submenu-item-has-children2"
                        : ""
                    }
                    ${activeMenu[1] ? "active-class2" : ""}
                    `}
                  >
                    {elm2.subMenuItems ? (
                      <>
                        <a
                          href="#"
                          onClick={() => {
                            setActiveMenu((pre) => {
                              return pre[1] ? [pre[0], false] : [pre[0], true];
                            });
                          }}
                          className={
                            isChildActive(elm2.subMenuItems) ? "activeMenu" : ""
                          }
                        >
                          {elm2.title}
                          <span className="mean-expand-class2"></span>
                          <span className="mean-expand-class2"></span>
                        </a>
                        <ul
                          className="sub-menu submenu-class overflow-hidden"
                          style={
                            activeMenu[1]
                              ? { maxHeight: "500px" }
                              : { maxHeight: "0px" }
                          }
                        >
                          {elm2.subMenuItems.map((elm3, i3) => (
                            <li key={i3}>
                              <NavLink
                                className={
                                  elm3.link?.split("/")[1] ==
                                  pathname?.split("/")[1]
                                    ? "activeMenu"
                                    : ""
                                }
                                to={elm3.link}
                              >
                                {elm3.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <NavLink
                        className={
                          elm2.link?.split("/")[1] == pathname?.split("/")[1]
                            ? "activeMenu"
                            : ""
                        }
                        to={elm2.link!}
                      >
                        {elm2.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <NavLink
              className={
                elm.link?.split("/")[1] == pathname?.split("/")[1]
                  ? "activeMenu"
                  : ""
              }
              to={elm.link!}
            >
              {elm.title}
            </NavLink>
          )}
        </li>
      ))}
    </>
  );
}
