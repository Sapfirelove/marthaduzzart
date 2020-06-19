import React, { useState, useCallback } from 'react';
//Gallery
import Gallery from 'react-photo-gallery';
//ReactImages
import Carousel, { Modal, ModalGateway } from "react-images";
//Containers
import { photos } from '../Pages/PhotoPage';
//Bootstrap
import Container from 'react-bootstrap/Container';

function GalleryContainer() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };

    return (
        <Container>
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                    }))}
                    />
                </Modal>
                ) : null}
            </ModalGateway>
        </Container>
    )
}

export default GalleryContainer;