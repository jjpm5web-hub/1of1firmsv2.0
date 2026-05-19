"use client"

import { useState } from "react"
import Menu from "@/components/menu"
import SignatureEvents from "@/components/signature-events"
import EventDetail from "@/components/event-detail"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "events" | "babadook">("home")

  const handleNavigate = (page: string) => {
    if (page === "events") {
      setCurrentPage("events")
    } else if (page === "babadook") {
      setCurrentPage("babadook")
    } else {
      setCurrentPage("home")
    }
  }

  if (currentPage === "babadook") {
    return (
      <div>
        <EventDetail onNavigate={handleNavigate} />
      </div>
    )
  }

  if (currentPage === "events") {
    return (
      <div>
        <SignatureEvents onNavigate={handleNavigate} />
      </div>
    )
  }

  return (
    <div>
      <Menu onNavigate={handleNavigate} />
    </div>
  )
}
