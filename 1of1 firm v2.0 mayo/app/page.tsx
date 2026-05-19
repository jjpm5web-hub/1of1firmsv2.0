"use client"

import { useState } from "react"
import Menu from "@/components/menu"
import SignatureEvents from "@/components/signature-events"
import EventDetail from "@/components/event-detail"
import LunaLlenaDetail from "@/components/luna-llena-detail"
import LaFestaDetail from "@/components/la-festa-detail"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "events" | "babadook" | "luna-llena" | "la-festa">("home")

  const handleNavigate = (page: string) => {
    if (page === "events") {
      setCurrentPage("events")
    } else if (page === "babadook") {
      setCurrentPage("babadook")
    } else if (page === "luna-llena") {
      setCurrentPage("luna-llena")
    } else if (page === "la-festa") {
      setCurrentPage("la-festa")
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

  if (currentPage === "luna-llena") {
    return (
      <div>
        <LunaLlenaDetail onNavigate={handleNavigate} />
      </div>
    )
  }

  if (currentPage === "la-festa") {
    return (
      <div>
        <LaFestaDetail onNavigate={handleNavigate} />
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
