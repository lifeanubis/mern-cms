import Link from "next/link"
import React from "react"

const BrousePlugins = () => {
  return (
    <div>
      <Link
        target="_blank"
        href="https://drive.google.com/drive/folders/1ZLLCqIttgw5xgpNhd4KT6JrxDLUWPSmr?usp=drive_link"
      >
        <div className="bg-emerald-700 text-black text-4xl p-4 font-bold ">
          {" "}
          Click here to browse some home made plugins{" "}
        </div>
      </Link>
    </div>
  )
}

export default BrousePlugins
