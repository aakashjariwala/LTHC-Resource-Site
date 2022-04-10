import { Container, Typography } from '@mui/material'
import { createContext, useContext, useEffect } from 'react'
// eslint-disable-next-line import/no-cycle
import AboutView from '../../components/About'
import RequirementAccordion from '../../components/RequirementAccordion'
import Resources from '../../components/Resources'
import Contacts from '../../components/Contacts'
import SiteData from '../../hooks/SiteData'
import Section from '../../components/Section'

const SiteDataContext = createContext()
export const useSiteDataContext = () => useContext(SiteDataContext)

function Main() {
  const siteData = SiteData()

  useEffect(() => {}, [])

  return (
    <SiteDataContext.Provider value={siteData}>
      <Container sx={{ py: 5 }}>
        {siteData.sectionsToShow.map((section) => {
          if (section.type === 'section') {
            return <Section key={section.text} section={section} />
          }
          if (section.type === 'about') {
            return <AboutView key={section.type} />
          }
          if (section.type === 'resources') {
            // TODO
            // return <Resources />
          }
          if (section.type === 'additional resources') {
            // TODO
            // return <RequirementAccordion />
          }
          if (section.type === 'contacts') {
            // TODO
            // return <Contacts />
          }
          return (
            <Typography key={Math.random().toString(16).substr(2, 8)}>
              Bad parsing
            </Typography>
          )
        })}
      </Container>
    </SiteDataContext.Provider>
  )
}

export default Main
