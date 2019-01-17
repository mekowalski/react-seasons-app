## What Components to create

App: Has code to determine Location and Month
- Take current season
- Pass that as a PROP down to the second Component

SeasonContent: Shows different text/icons based on PROPs
- Displays content based on conditions

## What happens when user denies location?
- Need to somehow reset permission to make sure it appears again
- With location block, error message in Console: 'User denied Geolocation'
- This will be used for reasonable degree of functionality

## Position object
- Position object contains the latitude
- Figure out whether the user is in the Northern/Southern hemisphere
- Use that to customize look and feel of page
  - minor: get the latitude to display on the page
