"use client"

import { useState } from "react"
import Menu from "@/components/menu"
import SignatureEvents from "@/components/signature-events"
import EventDetail from "@/components/event-detail"
import LunaLlenaDetail from "@/components/luna-llena-detail"
import LaFestaDetail from "@/components/la-festa-detail"
import AnimalDetail from "@/components/animal-detail"
import CelestialDetail from "@/components/celestial-detail"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "events" | "babadook" | "luna-llena" | "la-festa" | "animal" | "celestial">("home")

  const handleNavigate = (page: string) => {
    if (page === "events") {
      setCurrentPage("events")
    } else if (page === "babadook") {
      setCurrentPage("babadook")
    } else if (page === "luna-llena") {
      setCurrentPage("luna-llena")
    } else if (page === "la-festa") {
      setCurrentPage("la-festa")
    } else if (page === "animal") {
      setCurrentPage("animal")
    } else if (page === "celestial") {
      setCurrentPage("celestial")
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

  if (currentPage === "animal") {
    return (
      <div>
        <AnimalDetail onNavigate={handleNavigate} />
      </div>
    )
  }

  if (currentPage === "celestial") {
    return (
      <div>
        <CelestialDetail onNavigate={handleNavigate} />
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
