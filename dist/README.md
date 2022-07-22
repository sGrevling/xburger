# Xburger

Mobile menu with button for React.
Made to supply the most basic functionality with minimal config, with the option to double as a close button because why not.

## Example
```React
<Menu
    onCloseClickOverride={
    mapMode ? closeMap : undefined
    }
    shouldCloseOnClick={(e) => 
        ['button', 'p'].includes(e.target.tagName.toLowerCase())
    }
    transitionTime={300}
>
    {locations.map((loc) => (
        <button
            key={loc.label} 
            className="locationOption"
            onClick={(e) => setLocation(i)}
        >
            {loc.label}
        </button>
    ))}
    <button
        className="addLocationButton"
        onClick={createLocation}
    >
        <AddLocationIcon/>
    </button>
</Menu>
```

### Props (optional)
- children: Menu items
- onCloseClickOverride: Replace the onClick function on the close button; as long as this prop exists the button is in the close mode
- shouldCloseOnClick: Function which receives the click event and should return a boolean to say whether the click should cause the menu to close 
- transitionTime(default 400): Menu animation transition time in ms
- zIndexLow (default 2): the z-index of the menu backdrop. The menu itself is one z-index higher, and the button yet one higher. 
- color (default white): color of the button icon
- bgColor (default hotpink): background color of the menu and button 
- backdropColor (default #e3e6e850): color of the backdrop 