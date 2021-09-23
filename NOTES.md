<!-- Tell us about your solution here -->
## How I Created a way to update the chat button color when the user selects a color
### In the host project
- There is a function called `handleColorChange` already created in App.tsx file, once user select another color and the `handleColorChange` function is called, then I used a react hook called useState inside the function to set the current color picked.
- Then pass the current color as a props to the component called ColorPicker and ChatBotIFrame.
- In ChatBotIFrame Component, I received the color as props, pass it to the src attribute in iframe as a query parameter, I also ensure to remove the "#" in the color as it will prevent useLocation from getting the value.

### In the chat-button-frame project
- In order to be able to use useLocation to get the query param, I installed react-router-dom, then created a file called Routes.tsx, inside the Routes.tsx file, I imported BrowserRouter and Route from react-router-dom then use it to declare a file part for App.tsx and make sure Routes.tsx is imported in index.tsx instead of App.tsx.
- Inside App.tsx, I used useLocation to get the current color passed as a query parameter.
- In order to pass the color to the style file instead of having to do inline styling, I installed installed @material-ui/styles, I created a file called styles.js, then move all the style we have in App.css to the styles.js file.
- I imported the styles.js in the App.tsx file, pass the current color to it as parameter then use it accordingly in styles.js
- Then I change all the class name in App.tsx accordingly.


## How I Persist the color such that color choice is maintained upon page refresh.

### In the host project
- In the App.tsx file, I used a react hook called useEffect twice, one of the useEffect is called when page finish loading, once it is called I ensure to get color from localstorage if available and if not, I use a default color.
- Another useEffect is called once current color change and what that does is set the curret color to the localstorage.
 

## If I had more time
- I would update all the style to material UI instead of just updating the one for the chat-button-frame only.
- I would also change the chat icon to a vector or an icon that can accept color of white incase a deep background is use for the chat button.

