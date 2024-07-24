This `README.md` file provides clear instructions on how to install the `RunOnAllTabsProvider` component, along with a practical example of integrating it into a React application to monitor and react to changes in the browser's `localStorage`.

# RunOnAllTabsProvider

`RunOnAllTabsProvider` is a React component that monitors changes in browser `localStorage` and triggers a callback whenever these changes occur. It facilitates real-time synchronization of data across multiple browser tabs within your application.

## Installation

You can install `RunOnAllTabsProvider` using npm or yarn:

```bash
npm install run-on-all-tabs-provider
```

### Explanation:

- Importing RunOnAllTabsProvider: Import the RunOnAllTabsProvider component from 'run-on-all-tabs-provider'.

- State Management: Use React's useState hook to manage localStorageData, which will hold the current state of localStorage.

- onChange Callback: Define a callback function (handleLocalStorageChange) that updates localStorageData whenever there's a change in localStorage.

- Wrapping Components: Wrap your application components inside RunOnAllTabsProvider, passing the onChange callback as a prop.

- Displaying Data: Display the localStorageData within your application to demonstrate real-time synchronization across multiple tabs.

### Props

##### onChange

- Type: (storage: Object) => void  
  Description: Callback function triggered whenever there is a change in the localStorage. It receives an object (storage) containing all current key-value pairs in the localStorage.

### Notes

Ensure that localStorage operations adhere to browser security policies and quotas.
The component uses React's useEffect hook to listen for 'storage' events, which are fired whenever changes occur in the localStorage.

### Example how to redirect all tabs to home after user logout:

```bash
    <RunOnAllTabsProvider
      onChange={(obj) => {
        if (obj.isLoggedIn === '0') { {/* you can save isLoggedIn at localStorage with value 1 at user login */}
          {/* your logout logic goes here */}
        }
      }}
    >
      {/* your components goes here */}
    </RunOnAllTabsProvider>
```
