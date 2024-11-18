import React from "react"

import { Calendar, dayjsLocalizer } from "react-big-calendar"
import dayjs from "dayjs"
import "react-big-calendar/lib/css/react-big-calendar.css"

const localizer = dayjsLocalizer(dayjs)

const BigCalander = () => {
  return (
    <div className="bg-gray-400 w-full flex justify-center ">
      <div className="w-1/2 justify-center ">
        <Calendar
          localizer={localizer}
          //   events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  )
}

export default BigCalander
