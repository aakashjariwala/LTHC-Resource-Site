import {
  Card,
  Grid,
  Typography,
  List,
  ListItem,
  ListSubheader,
  CardContent,
} from '@mui/material'
import Contacts from '../../constants/contacts.json'

export default function landlordTable() {
  return (
    <List>
      {Object.entries(Contacts).map(([contactType, contacts]) => (
        <ListItem key={contactType}>
          <List>
            <ListSubheader>
              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                {contactType}
              </Typography>
            </ListSubheader>
            <Grid container spacing={2} mt={2}>
              {contacts.map(({ name, phone, description }) => (
                <Grid item xs={12} sm={6}>
                  <Card>
                    <CardContent>
                      <Typography variant="body1">{name}</Typography>
                      <Typography
                        sx={{ mb: 1.5 }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {phone}
                      </Typography>
                      <Typography variant="caption">{description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </List>
        </ListItem>
      ))}
    </List>
    // <List
    //   sx={{
    //     maxWidth: 720,
    //     bgcolor: 'background.paper',
    //     position: 'relative',
    //     overflow: 'auto',
    //     maxHeight: 600,
    //     '& ul': { padding: 0 },
    //   }}
    //   subheader={<li />}
    // >
    //   {['Apartments'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftApartment.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText // The left column in desktop view
    //               sx={{ maxWidth: 240 }} // Sets margins for text so it doesn't spill into right column
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText // The right column in desktop view
    //               // Sets right column offset from the left
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               // Uses indexof to avoid having to use a counter
    //               // Need to make sure # of elements in right = left
    //               // and if it doesn't, make an empty item at the end
    //               // of the respective json category in apartments.js
    //               // This is the case for all of the desktop view
    //               // info.
    //               primary={rightApartment[leftApartment.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>
    //                     {rightApartment[leftApartment.indexOf(item)].phone}
    //                   </div>
    //                   <div>
    //                     {
    //                       rightApartment[leftApartment.indexOf(item)]
    //                         .description
    //                     }
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    //   {['Subsidized Housing'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftSubsidized.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText
    //               sx={{ maxWidth: 240 }}
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               primary={rightSubsidized[leftSubsidized.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>
    //                     {rightSubsidized[leftSubsidized.indexOf(item)].phone}
    //                   </div>
    //                   <div>
    //                     {
    //                       rightSubsidized[leftSubsidized.indexOf(item)]
    //                         .description
    //                     }
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    //   {['Mobile Home Parks'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftMobile.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText
    //               sx={{ maxWidth: 240 }}
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               primary={rightMobile[leftMobile.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>{rightMobile[leftMobile.indexOf(item)].phone}</div>
    //                   <div>
    //                     {rightMobile[leftMobile.indexOf(item)].description}
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    //   {['Private Landlords'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftLords.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText
    //               sx={{ maxWidth: 240 }}
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               primary={rightLords[leftLords.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>{rightLords[leftLords.indexOf(item)].phone}</div>
    //                   <div>
    //                     {rightLords[leftLords.indexOf(item)].description}
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    //   {['Complexes and Rentals'].map((sectionId) => (
    //     <li key={`section-${sectionId}`}>
    //       <ul>
    //         <ListSubheader align="center">{`${sectionId}`}</ListSubheader>
    //         {leftComplex.map((item) => (
    //           <ListItem key={`item-${sectionId}-${item}`}>
    //             <ListItemText
    //               sx={{ maxWidth: 240 }}
    //               primary={item.name}
    //               secondary={
    //                 <div>
    //                   <div>{item.phone}</div>
    //                   <div>{item.description}</div>
    //                 </div>
    //               }
    //             />
    //             <ListItemText
    //               sx={{
    //                 maxWidth: 240,
    //                 position: 'relative',
    //                 left: 200,
    //               }}
    //               primary={rightComplex[leftComplex.indexOf(item)].name}
    //               secondary={
    //                 <div>
    //                   <div>{rightComplex[leftComplex.indexOf(item)].phone}</div>
    //                   <div>
    //                     {rightComplex[leftComplex.indexOf(item)].description}
    //                   </div>
    //                 </div>
    //               }
    //               align="left"
    //             />
    //           </ListItem>
    //         ))}
    //       </ul>
    //     </li>
    //   ))}
    // </List>
  )
}
