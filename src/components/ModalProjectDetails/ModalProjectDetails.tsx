
import * as S from "./ModalProjectDetails.styles";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ModalProjectDetailsProps } from "./Types";
import Markdown from 'react-markdown';
import "react-image-gallery/styles/css/image-gallery.css";
import { SwiperSlide, type SwiperRef } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};


const ModalProjectDetails: React.FC<ModalProjectDetailsProps> = ({ onRequestClose, title, detailDescription, developedFor, gallery }) => {

    const [activeSlide, setActiveSlide] = useState(0);
    const swiperRef = useRef<SwiperRef | null>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    const goToSlide = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index);
        }
        setActiveSlide(index);
    };

    const renderGallery = useMemo(() => {
        return gallery.map((item, index) => (
            <SwiperSlide key={index}>
                {item.type === 'image' ? (
                    <img src={item.src} style={{ width: '100%', borderRadius: '8px', height: '350px', objectFit: 'contain' }} />
                ) : (
                    <iframe
                        style={{ width: '99%', height: '350px', borderRadius: '8px' }}
                        title={`Video ${index + 1}`}
                        allowFullScreen
                        src={item.src}
                        loading="lazy"
                    />
                )}
            </SwiperSlide>
        ))
    }, [gallery, activeSlide]);

    const renderIdicators = useMemo(() => {
        return gallery.map((item, index) => (
            <S.Indicator
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                key={index}
                onClick={() => goToSlide(index)}
                activeIndex={activeSlide === index}
            >
                {item.type == "image" ? <img src={item.src} /> : <i className="fa-solid fa-play"></i>}
            </S.Indicator>
        ))
    }, [gallery, activeSlide]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
            onRequestClose();
        }
    };


    return (
        <S.ModalContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleBackdropClick}
        >

            <S.ModalContent ref={modalContentRef}>
                <S.ModalHeader>
                    <S.ModalTitle>{title}</S.ModalTitle>
                    <i className="fab fa-x" onClick={onRequestClose}> </i>
                </S.ModalHeader>
                <S.ModalBody>
                    <S.GalleryContainer>
                        <S.SwiperContainer
                            modules={[Navigation]}
                            navigation
                            spaceBetween={10}
                            slidesPerView={1}
                            initialSlide={activeSlide}
                            ref={swiperRef}
                            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                            onActiveIndexChange={(swiper) => setActiveSlide(swiper.activeIndex)}
                        >
                            {renderGallery}
                        </S.SwiperContainer>
                        <S.SwiperIndicators>
                            {renderIdicators}
                        </S.SwiperIndicators>
                    </S.GalleryContainer>
                    <S.DevelopedFor>Desenvolvido para: {developedFor}</S.DevelopedFor>
                    <S.ProjectDescription>
                        <Markdown>{detailDescription}</Markdown>
                    </S.ProjectDescription>
                </S.ModalBody>
            </S.ModalContent>

        </S.ModalContainer>
    )
}

export default ModalProjectDetails;