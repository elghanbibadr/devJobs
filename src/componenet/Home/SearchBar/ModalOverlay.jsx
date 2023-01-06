import React, { useState } from 'react';

const ModalOverlay = (props) => {
  const handleOverlayClicked=props.overlayClicked;

  return (
    <div id='overlay' onClick={handleOverlayClicked} className={` modal-overlay ${ !props.modalIsOpen ? 'hidden':''} md:block md:w-8/12`}>
     {props.children}
    </div>
  );
};

export default ModalOverlay;