import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Age() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal className="modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body className="modal-body">
            Hold up! The Nations Bar Crawl is only open to neighbors who are 21 and older. Is that you?
        </Modal.Body>
        <Modal.Footer>
          <Button className="age-button" variant="secondary" onClick={ handleClose }>
            Yep, that's me!
          </Button>

          <a href="https://www.facebook.com/westparkcommunitycenter/">
            <button className="age-button">No, I am under age 21.</button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Age;