import Modal from 'react-modal';

export default function ImageModal({ isOpen, onClose, clickedPhoto }) {
    
     return (
        <Modal
            isOpen={isOpen}
             onRequestClose={onClose}
             shouldCloseOnOverlayClick={true}
    shouldCloseOnEsc={true}
            contentLabel="Image Modal"
            style={{
                overlay: {
                   backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
                },
                content: {
                  position: 'relative',
            width: 'auto', 
            height: 'auto', 
            padding: '0',
            background: 'transparent',
            border: 'none',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
                },
            }}
        >
            {clickedPhoto && clickedPhoto.urls ? (
    <img src={clickedPhoto.urls.regular} alt={clickedPhoto.alt_description} style={{
           width: '100%', maxHeight: '80vh',
            objectFit: 'contain',
        }}/>
) : null}
        </Modal>
    );
}