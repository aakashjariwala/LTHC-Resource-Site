import { Container } from '@mui/material'
import { createContext, useContext, useEffect } from 'react'
import FirstView from '../../components/About'
import RequirementAccordion from '../../components/RequirementAccordion'
import Resources from '../../components/Resources'
import Contacts from '../../components/Contacts'
import SiteData from '../../hooks/SiteData'

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
      </Container>
    </SiteDataContext.Provider>
  )
}

export default Main
