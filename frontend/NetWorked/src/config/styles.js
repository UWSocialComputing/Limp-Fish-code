// src/styles/styles.js or src/constants/styles.js

import {StyleSheet} from 'react-native';
import colors from './colors'; // Adjust the import path according to your project structure

export default StyleSheet.create({
  // Styles for the relationship category
  categoryContainer: {
    marginVertical: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.darkOlive,
    marginBottom: 10,
  },
  relationshipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  relationshipText: {
    fontSize: 16,
    color: colors.oliveDrab,
  },
  // TextInput styles
  textInput: {
    height: 40, // Set the height of the input
    borderColor: 'gray', // Add a border color
    borderWidth: 1, // Add a border width
    margin: 10, // Add margin for better spacing
    padding: 10, // Add padding for better spacing
    borderRadius: 5, // Add border radius to round the corners
  },

  // General text styles
  primaryText: {
    color: colors.darkOlive,
    // Add additional styling like font size, font family, etc.
  },
  secondaryText: {
    color: colors.deepKhaki,
    // Additional styling
  },
  subtitleText: {
    color: colors.taupe,
    // Additional styling for subtitles
  },
  attributesContainer: {
    marginVertical: 10,
  },
  attribute: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  attributeText: {
    marginLeft: 10,
  },
  dateContainer: {
    height: '15%', // Height is 25% of the screen
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
    backgroundColor: 'transparent', // or any desired background color
    marginBottom: 20, // Decrease existing bottom margin by 60
  },
  dateText: {
    fontSize: 90, // 50pt size
    color: 'ivory', // White text color
    fontWeight: 'regular', // If you want the text to be bold
  },
  centersContainer: {
    flexDirection: 'row', // Aligns children side by side
    paddingHorizontal: 10, // Optional padding
    alignItems: 'flex-start', // Ensure the container aligns correctly vertically
    height: 280, // Set a fixed height for the centersContainer and divider
    backgroundColor: 'lightKhaki', // uncomment if you want to test with a background color
    marginBottom: 20, // Decrease existing bottom margin by 60
  },
  goalCenterContainer: {
    flex: 1, // Takes up half of the space
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'flex-start', // Centers content vertically
    padding: 10, // Optional padding
    backgroundColor: 'lightKhaki', // for visibility
    marginBottom: 20, // Decrease existing bottom margin by 60
    // Add border or background color if needed
  },
  centerDivider: {
    width: 1, // Vertical divider line is 3 pixels wide
    backgroundColor: 'white', // White color for the divider
    height: '100%', // This should work if centersContainer has a fixed height
  },
  eventCenterContainer: {
    flex: 1, // Takes up half of the space
    alignItems: 'center', // Centers content horizontally
    justifyContent: 'flex-start', // Centers content vertically
    padding: 10, // Optional padding
    backgroundColor: 'lightKhaki', // for visibility
    marginBottom: 20, // Decrease existing bottom margin by 60
  },
  centerText: {
    // Style for text in both goal and event center containers
    fontSize: 24, // Choose an appropriate size
    color: colors.darkOlive, // Choose a color
    alignSelf: 'left', // Aligns text in the center
    // Add any other text styling needed
  },
  // Button styles
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around', // This will distribute space evenly around the buttons
    alignItems: 'center',
    //marginTop: 'auto', // This pushes the button container to the bottom
    paddingVertical: 1, // Add padding for better spacing
    marginBottom: 1, // Adjust the value to manage distance from the bottom of the screen
    marginTop: 5, // Space from the above content
  },
  button: {
    backgroundColor: colors.oliveDrab, // Use your bronze color
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5, // Add space between buttons
    // Set a specific width or use flex to share space
    width: '40%', // Uncomment and use a fixed width if needed
    // flex: 1, // Each button will take up equal space
    margin: 5, // Adjust the margin as needed
  },
  leftButton: {
    marginRight: 10, // Optionally, add margin to only one button to space them out
  },
  fullWidthButton: {
    backgroundColor: colors.oliveDrab, // Same color as the other buttons
    padding: 10,
    borderRadius: 5,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    width: '90%', // Almost full width
    alignSelf: 'center', // Center button in the container
    marginVertical: 2, // Space from the top and bottom
    marginTop: 5, // Space from the above content

  },
  messageCenterContainer: {
    paddingVertical: 10, // Adjust as needed
    marginTop: 1, // Space from the above content
    marginBottom: 20, // Pushes towards the bottom, or adjust as needed
  },
  buttonText: {
    textAlign: 'center', // Center text inside the button
    color: 'ivory', // Use a color that contrasts with the button's background
    fontSize: 18, // Example font size
    fontWeight: '500', // Example font weight
    // Add any other styling for text like font size, font family
  },

  secondaryButton: {
    backgroundColor: colors.taupe,
    padding: 8,
    borderRadius: 5,
    // Additional styling for secondary buttons
  },
  // Tab styles
  activeTab: {
    borderBottomColor: colors.deepKhaki,
    borderBottomWidth: 2,
    // Additional styling for active tabs
  },
  nonActiveTab: {
    borderBottomColor: colors.mediumBrown,
    borderBottomWidth: 2,
    // Additional styling for non-active tabs
  },
  // Icon styles
  highlightedIcon: {
    color: colors.deepKhaki,
    // Additional styling for icons that are active or highlighted
  },
  icon: {
    color: colors.oliveDrab,
    // Additional styling for other icons
  },
  // Popup, Card, and Menu Item styles
  popupBackground: {
    backgroundColor: colors.sageGreen,
    padding: 15,
    borderRadius: 10,
    // Additional styling for popup backgrounds
  },
  cardBackground: {
    backgroundColor: colors.sageGreen,
    padding: 10,
    borderRadius: 8,
    // Additional styling for card elements
  },
  highlightedMenuItem: {
    backgroundColor: colors.sageGreen,
    // Additional styling for highlighted menu items
  },
  // Background styles
  mainBackground: {
    flex: 1, // Add flex to make sure it fills the screen
    backgroundColor: colors.lightKhaki, // existing background color
    // Additional styling for the main background of the app
  },
  // Use this style for the ScrollView to ensure it fills the screen
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start', // This will push your button container to the bottom
    paddingVertical: 40, // Add some padding at the top if needed
  },
  secondaryBackground: {
    backgroundColor: colors.khaki,
    // Additional styling for secondary context areas like sidebar
  },
  // Divider styles
  divider: {
    borderBottomColor: colors.mediumBrown,
    borderBottomWidth: StyleSheet.hairlineWidth,
    // Additional styling for dividers
  },
  // Notification styles
  urgentNotification: {
    backgroundColor: colors.darkBrown,
    // Additional styling for urgent notifications
  },
  // Navigation styles
  navigationBar: {
    backgroundColor: colors.darkOlive,
    // Additional styling for the navigation bar
  },
  footer: {
    backgroundColor: colors.darkOlive,
    // Additional styling for the footer
  },
  // ... any other common styles you need
});