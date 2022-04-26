import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Footer() {
  const theme = useTheme()
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
      <footer
        style={{
          bottom: 0,
          borderTop: '2px solid #dbdbdb',
          position: 'relative',
          textAlign: 'left',
          width: '100%',
          height: 'auto',
          fontSize: '10pt',
          padding: '10px 0',
        }}
      >
        {/* Logo */}
        <a href="https://htfpurdue.org" target="_blank" rel="noreferrer">
          <img
            alt="Hack the Future Logo"
            src="/htf-logo.png"
            style={{
              display: 'inline-block',
              height: 'auto',
              marginLeft: '3vw',
              textAlign: 'left',
              verticalAlign: 'middle',
              width: '36px',
              padding: '10px 0 0 0',
            }}
          />
        </a>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'left',
            verticalAlign: 'top',
            marginLeft: '3vw',
          }}
        >
          <p
            style={{
              marginBottom: 0,
              marginTop: 0,
              padding: '10px 0 10px 0',
            }}
          >
            Website developed by{' '}
            <a
              style={{
                color: '#1FA710',
                '&:hover': {
                  opacity: '50%',
                  textDecoration: 'none',
                },
              }}
              href="https://htfpurdue.org"
              target="_blank"
              rel="noreferrer"
            >
              Hack the Future
            </a>
            , a club at Purdue University.
          </p>
        </div>
        {/* Content links for Hack the Future */}
        <div
          style={{
            float: isSmall ? 'none' : 'right',
            display: isSmall ? 'inline-block' : 'block',
            margin: isSmall ? '0 3vw 0 3vw' : '0 3vw 0 0',
            textAlign: 'left',
            height: 'fit-content',
          }}
        >
          {/* Hack the Future email */}
          <div
            style={{
              display: 'inline-block',
              textAlign: 'left',
              verticalAlign: 'top',
              marginLeft: isSmall ? 0 : '3vw',
            }}
          >
            <p
              style={{
                marginBottom: 0,
                marginTop: 0,
                padding: isSmall ? '0 0 10px 0' : '10px 0 10px 0',
              }}
            >
              <a
                style={{
                  color: '#1FA710',
                  '&:hover': {
                    opacity: '50%',
                    textDecoration: 'none',
                  },
                }}
                href="mailto:htfpurdue@gmail.com"
              >
                htfpurdue@gmail.com
              </a>
            </p>
          </div>
          {/* Hack the Future instagram link */}
          <div
            style={{
              display: 'inline-block',
              textAlign: 'left',
              verticalAlign: 'top',
              marginLeft: '3vw',
            }}
          >
            <p
              style={{
                marginBottom: 0,
                marginTop: 0,
                padding: isSmall ? '0 0 10px 0' : '10px 0 10px 0',
              }}
            >
              <a
                style={{
                  color: '#1FA710',
                  '&:hover': {
                    opacity: '50%',
                    textDecoration: 'none',
                  },
                }}
                href="https://www.instagram.com/hackthefuturepurdue/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
