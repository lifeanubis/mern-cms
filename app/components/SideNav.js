import Link from "next/link"

const SideNav = () => {
  return (
    // <div class="bg-gradient-to-r from-blue-500 to-green-500 h-32 w-full"></div>

    <div
      // id="sidenav-container "
      className="bg-gradient-to-r p-4 from-blue-500 to-green-500 w-full h-screen    "
    >
      <Link href={"/dashboard/add-header-page"}>
        <div className="p-4 mb-2 h-auto bg-cyan-950 font-bold cursor-pointer hover:bg-opacity-75 ">
          ADD HEADER PAGES
        </div>
      </Link>
      <Link href={"/dashboard/diamond-card-page"}>
        <div className="p-4 mb-2 h-auto bg-cyan-950 font-bold cursor-pointer hover:bg-opacity-75 ">
          ADD DIAMOND CARDS{" "}
        </div>
      </Link>
      <div className="p-4 mb-2 h-auto bg-cyan-950 font-bold cursor-pointer hover:bg-opacity-75 ">
        {" "}
        BROWSE PLUGINS{" "}
      </div>
      <Link href={"/dashboard/banner-page"}>
        <div className="p-4 mb-2 h-auto bg-cyan-950 font-bold cursor-pointer hover:bg-opacity-75 ">
          {" "}
          CHANGE BANNER{" "}
        </div>
      </Link>
    </div>
  )
}

export default SideNav
