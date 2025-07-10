import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Swiper} from 'swiper/react';

export const ModalContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(10px);
    z-index: 1001;
    padding: 1rem;
    overflow: hidden;            
`

export const ModalContent = styled(motion.div)`
    background: #1e293b;
    border-radius: 0.5rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    width: 100%;
    max-width: 800px;
    height: 90%;
    max-height: 90vh;
    overflow: hidden;
`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid rgba(148, 163, 184, 0.1);

    i {
        padding: 0.5rem;
        cursor: pointer;
    }
`

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    color: rgb(226, 232, 240);
    font-weight: 600;
    margin: 0;
    text-shadow: 0 0 10px rgba(88, 145, 229, 0.3);
    flex-grow: 1;
    text-align: center;

`

export const ModalBody = styled.div`
    padding: 1rem;
    overflow-y: auto;
    max-height: calc(90vh - 100px);
    
`

export const ProjectDescription = styled.div`
    color: rgb(148, 163, 184);
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    padding: 0 1rem 1rem 1rem;
    h2 {
        font-size: 1.1em;
    }
`

export const DevelopedFor = styled.p`
    color: rgb(148, 163, 184);
    font-size: 0.85rem;
    margin-bottom: 1rem;
    font-style: italic;
`

export const GalleryContainer = styled.div`
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    
    .image-gallery {        
        .image-gallery-content {
            height: 400px;
            
            @media (max-width: 768px) {
                height: 300px;
            }
        }
                
        .image-gallery-slide {
            height: 300px;            
            img {
                max-height: 300px;
                max-width: 100%;
                width: auto;
                height: auto;
                object-fit: contain;
                border-radius: 8px;
                
                @media (max-width: 768px) {
                    max-height: 250px;
                }
            }
            @media (max-width: 768px) {
                max-height: 250px;
            }
        }
                
        .image-gallery-thumbnails-wrapper {
            margin-top: 10px;
        }
                
        .image-gallery-thumbnail {
            width: 80px;
            height: 60px;
            margin-right: 8px;
            border: 2px solid transparent;
            border-radius: 4px;
            overflow: hidden;
            
            &.active {
                border-color: rgb(88, 145, 229);
            }
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            @media (max-width: 768px) {
                width: 60px;
                height: 45px;
            }
        }
                
        .image-gallery-left-nav,
        .image-gallery-right-nav {
            color: rgb(88, 145, 229);      
            &:hover {
                color: white;
            }

            svg {
                height: 70px;
                width: 60px;
            }
        }
                
        .image-gallery-bullets {
            bottom: 10px;
            
            .image-gallery-bullet {
                background: rgba(88, 145, 229, 0.5);
                
                &.active {
                    background: rgb(88, 145, 229);
                }
            }
        }
        
        &.image-gallery-content, .fullscreen {
            .image-gallery-content {
                height: 100vh !important;
            }
            
            .image-gallery-slide {
                height: 100vh !important;
                display: flex;
                align-items: center;
                justify-content: center;
                
                img {
                    max-height: 100vh !important;
                    max-width: 100vw !important;
                    width: auto !important;
                    height: auto !important;
                    object-fit: contain !important;
                    border-radius: 0 !important;
                }
            }
            
            .image-gallery-thumbnails-wrapper {
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 2;
                background: rgba(0, 0, 0, 0.7);
                padding: 10px;
                border-radius: 8px;
            }
            
            .image-gallery-thumbnail {
                width: 60px;
                height: 45px;
                margin: 0 5px;
            }
                        
            .image-gallery-left-nav,
            .image-gallery-right-nav {
                svg {
                    height: 100px;
                    width: 80px;
                }
            }
                        
            .image-gallery-bullets {
                bottom: 30px;
                z-index: 3;
            }
        }
    }
`;

export const SwiperContainer = styled(Swiper)`
    width: 100%;
    max-width: 800px;
    height: 400px;
`

export const SwiperIndicators = styled.div`    
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    padding: 10px;
    justify-content: center;
    gap: 10px;
`

export const Indicator = styled(motion.div)<{ activeIndex: boolean }>`
    border-radius: 6px;
    width: 50px;
    height: 50px;    
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;    
    box-shadow: ${({ activeIndex }) => (activeIndex ? '0 0 0 2px rgb(88, 145, 229)' : '0 0 0 1px rgba(88, 145, 229, 0.3)')};

    i {
        font-size: 1.4rem;
        margin-left: 5px;
    }

    img {
        object-fit: cover;
        width: 50px;
        height: 50px;
        border-radius: 6px;        
    }


`