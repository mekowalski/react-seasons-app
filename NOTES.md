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

## Refactor from Functional to Class Component
- Rules of Class Component
  - Must be JS Class
  - Must extend(subclass) React.Component
  - Must define 'render' method that returns some amount of JSX

[x] Create class Component

## State Initialization
[x] Implement State
  [x] Define constructor method
  [x] Initialize the state object
  [x] Assign a key-value pair to this.state

[x] Get result
[x] Get the Position and update the 'lat' property in State object
[x] Tell Component to re-render itself on the screen

## Handling Errors Gracefully
- Whenever State is updated, it isn't required to update every property in it
- Updating State is an added process
[x] Inform user about error
[x] Re-render Component
[x] Update error message with State!!!

- Need to only show error message when it's necessary(with conditional)
- Errors that a user can run into:
1. Have Latitude - No errorMessage ---> Show Latitude
2. No Latitude - Show errorMessage ---> Show Error
3. No Latitude - No errorMessage ---> Show 'loading'

## Get Back on Track
- Component SeasonContent is already created
[x] Import SeasonContent
[x] Create functionality using latitude and month to determine whether its summer or winter
[] Not show latitude but show current season(summer or winter)

### Summer/Winter Rules
- .getMonth() returns the numerical value of the current month from an index starting at 0
- Northern Hemisphere will have Summer from Apr-Sep
- Southern Hemisphere will have Summer from Oct-Mar

0  | 1  | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 | 11
-- | -- | -- | -- | -- | -- | -- | -- | -- | -- | -- | --
Jan | Feb | Mar | Apr| May | Jun | Jul | Aug | Sep | Oct | Nov | Dec
