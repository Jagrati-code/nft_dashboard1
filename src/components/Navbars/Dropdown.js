import * as React from 'react';
import './App.css';

const App = (props) => {

    const handleMenuOne = () => {
      console.log('clicked one');
    };
  
    const handleMenuTwo = () => {
      console.log('clicked two');
    };
    const { variant, children, ...rest } = props;
    const searchIconColor = "white";
    const inputBg = "gray.800";
    return (

      <Dropdown
        trigger={<button color="white">Filters</button>}
        menu={[
          <button border-top-left-radius="10px" border-top-right-radius="10px" onClick={handleMenuOne}>A-Z</button>,
          <button border-bottom-left-radius="10px" border-bottom-right-radius="10px" onClick={handleMenuTwo}>Category</button>,
        ]}
      />

    );
  };
  
  const Dropdown = ({ trigger, menu }) => {

    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (

      <div className="dropdown">

        {React.cloneElement(trigger, {
          onClick: handleOpen,
        })}

        {open ? (
          
          <ul className="menu">
            {menu.map((menuItem, index) => (
              <li key={index} className="menu-item">
                {React.cloneElement(menuItem, {
                  onClick: () => {
                    menuItem.props.onClick();
                    setOpen(false);
                  },
                })}
              </li>
            ))}
          </ul>

        ) : null}
      </div>
    );
  };
  export default App;