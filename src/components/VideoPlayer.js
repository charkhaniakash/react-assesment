import React, { useRef } from 'react'
import ReactPlayer from 'react-player';


const VideoPlayer = ({ setShowModal , item }) => {



  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };




  return (
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        {item.cards.map((vid) => (
          <ReactPlayer
            url={vid.videoUrl}
            width="100%"
            height="100%"
            controls
          />
        ))}
      </div>
    </div>
  )
}

export default VideoPlayer
