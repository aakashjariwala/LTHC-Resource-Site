import { Container } from '@mui/material'
import { createContext, useContext, useEffect } from 'react'
// eslint-disable-next-line import/no-cycle
import FirstView from '../../components/About'
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
        <FirstView />
        <RequirementAccordion />
        <Resources />
        <Contacts />
        {siteData.sectionsToShow.map((section) => (
          <Section key={section} sectionText={section} />
        ))}
      </Container>
    </SiteDataContext.Provider>
  )
}

export default Main
