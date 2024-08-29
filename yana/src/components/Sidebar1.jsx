import React, { useState } from "react";

function SideBar(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <aside className={`flex h-screen ${collapsed ? 'w-16' : 'w-64'} flex-col overflow-y-auto border-r bg-white px-5 py-8 transition-width duration-300`}>
      <a href="#" className="flex items-center mb-6">
        {collapsed ? (
          <span className="text-lg font-bold">YANA</span>
        ) : (
          <img
            src="./src/assets/Main Logo.png"
            className="w-25 h-15"
            alt="Main Logo"
          />
        )}
      </a>
      <button onClick={toggleSidebar} className="mb-6">
        {collapsed ? (
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="#464255" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 15l6-6 6 6" stroke="#464255" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6">
          <div className="space-y-3">
            <a
              className={`flex items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${collapsed ? 'justify-center' : ''}`}
              href="#"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 7.41244V17.4124C2.5 17.6335 2.5878 17.8454 2.74408 18.0017C2.90036 18.158 3.11232 18.2458 3.33333 18.2458H7.5C7.72101 18.2458 7.93297 18.158 8.08925 18.0017C8.24554 17.8454 8.33333 17.6335 8.33333 17.4124V11.5791H11.6667V17.4124C11.6667 17.6335 11.7545 17.8454 11.9107 18.0017C12.067 18.158 12.279 18.2458 12.5 18.2458H16.6667C16.8877 18.2458 17.0996 18.158 17.2559 18.0017C17.4122 17.8454 17.5 17.6335 17.5 17.4124V7.41244C17.5 7.28306 17.4699 7.15547 17.412 7.03976C17.3542 6.92405 17.2702 6.82339 17.1667 6.74577L10.5 1.74577C10.3558 1.63758 10.1803 1.5791 10 1.5791C9.81969 1.5791 9.64425 1.63758 9.5 1.74577L2.83333 6.74577C2.72984 6.82339 2.64583 6.92405 2.58798 7.03976C2.53012 7.15547 2.5 7.28306 2.5 7.41244ZM4.16667 7.8291L10 3.4541L15.8333 7.8291V16.5791H13.3333V10.7458C13.3333 10.5248 13.2455 10.3128 13.0893 10.1565C12.933 10.0002 12.721 9.91244 12.5 9.91244H7.5C7.27899 9.91244 7.06702 10.0002 6.91074 10.1565C6.75446 10.3128 6.66667 10.5248 6.66667 10.7458V16.5791H4.16667V7.8291Z"
                  fill="#464255"
                />
              </svg>
              {!collapsed && <span className="mx-2 text-sm font-medium">Dashboard</span>}
            </a>
            <a
              className={`flex items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${collapsed ? 'justify-center' : ''}`}
              href="#"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5003 4.91276H2.50033C2.0281 4.91276 1.66699 4.55165 1.66699 4.07943C1.66699 3.6072 2.0281 3.24609 2.50033 3.24609H17.5003C17.9725 3.24609 18.3337 3.6072 18.3337 4.07943C18.3337 4.55165 17.9725 4.91276 17.5003 4.91276Z" fill="#464255"/>
                <path d="M12.5003 9.3571H2.50033C2.0281 9.3571 1.66699 8.99598 1.66699 8.52376C1.66699 8.05154 2.0281 7.69043 2.50033 7.69043H12.5003C12.9725 7.69043 13.3337 8.05154 13.3337 8.52376C13.3337 8.99598 12.9725 9.3571 12.5003 9.3571Z" fill="#464255"/>
                <path d="M17.5003 13.8017H2.50033C2.0281 13.8017 1.66699 13.4406 1.66699 12.9683C1.66699 12.4961 2.0281 12.135 2.50033 12.135H17.5003C17.9725 12.135 18.3337 12.4961 18.3337 12.9683C18.3337 13.4406 17.9725 13.8017 17.5003 13.8017Z" fill="#464255"/>
                <path d="M12.5003 18.246H2.50033C2.0281 18.246 1.66699 17.8849 1.66699 17.4127C1.66699 16.9405 2.0281 16.5793 2.50033 16.5793H12.5003C12.9725 16.5793 13.3337 16.9405 13.3337 17.4127C13.3337 17.8849 12.9725 18.246 12.5003 18.246Z" fill="#464255"/>
              </svg>
              {!collapsed && <span className="mx-2 text-sm font-medium">Orders</span>}
            </a>
            <a
              className={`flex items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700 ${collapsed ? 'justify-center' : ''}`}
              href="#"
            >
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5 10.5C17.5 11.6025 16.6855 12.5853 15.6336 12.9346L10.5 13.5V14.5896C10.5 14.8671 10.4096 15.1225 10.2624 15.3364L8.90719 18.0006C8.68124 18.3083 8.2936 18.5 7.875 18.5H2.5C2.22386 18.5 2 18.2761 2 18V11.5C2 11.2239 2.22386 11 2.5 11H7.875C8.2936 11 8.68124 11.1917 8.90719 11.5L10.2624 14.1636C10.4096 14.3775 10.5 14.6329 10.5 14.9104V15.5H15.6336C16.6855 15.8493 17.5 16.8321 17.5 17.9346V18.5H18.5C18.7761 18.5 19 18.7239 19 19V19.5C19 19.7761 18.7761 20 18.5 20H2.5C2.22386 20 2 19.7761 2 19.5V19C2 18.7239 2.22386 18.5 2.5 18.5H3.11648L3.33952 18.2577C3.55168 17.9132 3.75169 17.6206 3.96022 17.3329L6.08968 15.2923C6.28464 15.047 6.55156 14.8814 6.86719 14.8272L7.01641 14.8185C7.52928 14.7506 8.03657 14.7305 8.54167 14.7571L8.74168 14.7679L9.75632 14.8503C10.8358 14.9701 11.9232 15.2412 13.0207 15.7543C14.1724 16.2575 15.3116 16.989 16.3972 17.9565C17.4382 18.8738 17.5 19.4346 17.5 20V20.5C17.5 20.7761 17.7761 21 18 21C18.2239 21 18.5 20.7761 18.5 20.5V19.5C18.5 19.2239 18.7761 19 19 19H19.5C19.7761 19 20 19.2239 20 19V18.5H18.5C18.2239 18.5 18 18.7239 18 19V19.5H18.5C18.7761 19.5 19 19.7761 19 20C19 20.2239 19.7761 20.5 20 20.5V20.5C20.2239 20.5 20.5 20.2239 20.5 20V18.5C20.5 18.2239 20.7761 18 21 18H21.5V17.9346C21.5 16.8321 20.6855 15.8493 19.6336 15.5H14.5V14.9104C14.5 14.6329 14.5904 14.3775 14.7376 14.1636L16.0928 11.5C16.3188 11.1917 16.7064 11 17.125 11H18.5C18.7761 11 19 11.2239 19 11.5V11.5C19 11.7761 18.7761 12 18.5 12H17.5C17.2239 12 17 12.2239 17 12.5V12.9346C16.6855 12.5853 15.6336 11.6025 14.5 11.5V11.5H14.5C13.8356 11.5 13.198 11.6624 12.5 11.9304L12.5 9.3571H12.5003Z" fill="#464255"/>
              </svg>
              {!collapsed && <span className="mx-2 text-sm font-medium">Messages</span>}
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;
