/* eslint-disable import/no-cycle */
import { Container } from '@mui/material'
import { createContext, useContext } from 'react'
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

  return (
    <SiteDataContext.Provider value={siteData}>
      <Container sx={{ py: 5 }}>
        {siteData.sectionsToShow.flatMap((section) => {
          if (section.type === 'section')
            return [<Section key={section.text} section={section} />]
          if (section.type === 'about')
            return [<AboutView key={section.type} />]
          if (section.type === 'resources')
            return [<RequirementAccordion key={section.type} />]
          if (section.type === 'additional resources')
            return [<Resources key={section.type} />]
          if (section.type === 'contacts')
            return [<Contacts key={section.type} />]
          return []
          // <Typography key={Math.random().toString(16).substr(2, 8)}>
          //   Bad parsing
          // </Typography>
        })}
      </Container>
    </SiteDataContext.Provider>
  )
}

export default Main
