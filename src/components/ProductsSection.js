import React, { useState, useRef, Suspense } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import uploadedImage from '../assets/A.webp';
import uploadedImage2 from '../assets/B.webp';
import uploadedImage3 from '../assets/C.webp';
import uploadedImage4 from '../assets/D.webp';
import uploadedImage5 from '../assets/E.webp';
import Header from '../components/Header'; 

import './ProductsSection.css';

Modal.setAppElement('#root');

const ProductsSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [CurrentProductDetail, setCurrentProductDetail] = useState(null);
  const swiperRef = useRef(null); 

  const openModal = (productId) => {
    import(`../detailPages/ProductDetail${productId}`)
      .then((module) => {
        setCurrentProductDetail(() => module.default);
        setModalIsOpen(true);
      })
      .catch((error) => {
        console.error("Failed to load product detail:", error);
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentProductDetail(null);
  };
//products card information
  const products = [
    
    {
      id: 'A',
      title: 'Feature A',
      description: 'This is our product feature A, providing innovative functionality and quality design.',
      image: uploadedImage,
    },
    {
      id: 'B',
      title: 'Feature B',
      description: 'This is our product feature B, suitable for various use cases.',
      image: uploadedImage2,
    },
    {
      id: 'C',
      title: 'Feature C',
      description: 'This is our product feature C, offering the best performance and value.',
      image: uploadedImage3,
    },
    {
      id: 'D',
      title: 'Feature D',
      description: 'This is our product feature D, offering the best performance and value.',
      image: uploadedImage4,
    },
    {
      id: 'E',
      title: 'Feature E',
      description: 'This is our product feature E, suitable for various use cases.',
      image: uploadedImage5,
    }];


    // this is for the function of switching big card when click the left or right card 
    const handleCardClick = (productIndex) => {
      if (swiperRef.current) {
        const currentIndex = swiperRef.current.realIndex;
    
        
        if (productIndex < currentIndex) {
          swiperRef.current.slidePrev();
        } 
        
        else if (productIndex > currentIndex) {
          swiperRef.current.slideNext();
        }
      }
    };

  return (
    <div>
      <Header products={products} swiperRef={swiperRef} />
      <section id="products" className="products-section">
        <h2 className="products-heading">Projects</h2>
        <p className="products-subheading">
          Take a few minutes to discover our projects:
        </p>
        <div className="products-container full-width">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={200}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            loopedSlides={5}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id}>
                <div
                  className="product-card"
                  onClick={() => handleCardClick(index)}
                >
                  <img src={product.image} alt={product.title} className="product-image" />
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <button className="view-detail-button" onClick={() => openModal(product.id)}>
                    View Details
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Details"
        className="product-modal"
        overlayClassName="product-modal-overlay"
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
      >
        <button className="close-modal-button" onClick={closeModal}>
          &times;
        </button>
        {CurrentProductDetail && (
          <Suspense fallback={<div>Loading...</div>}>
            <CurrentProductDetail />
          </Suspense>
        )}
      </Modal>
    </div>
  );
};

export default ProductsSection;
