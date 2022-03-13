import React, { useState, useImperativeHandle } from 'react';

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div className='flex items-center justify-center m-3 bg-slate-200'>
      <div className=''>
        <div style={hideWhenVisible} className='w-full m-auto'>
          <button
            className='ml-auto text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded'
            onClick={toggleVisibility}
          >
            {props.buttonLabelShow}
          </button>
        </div>
        <div className='flex items-center'>
          <div style={showWhenVisible} className='w-full m-auto content-center'>
            <div className='flex items-center justify-center mr-80'>
              <button
                className='ml-auto text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded'
                onClick={toggleVisibility}
              >
                {props.buttonLabelHide ? props.buttonLabelHide : 'Cancel'}
              </button>
            </div>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Togglable;
