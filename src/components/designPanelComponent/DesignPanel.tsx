'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import ReactPaginate from 'react-paginate';
import styles from '../../styles/components/DesignPanel.module.css'

export default function DesignPanel() {

    function buildDesigns(): Array<string> {
        return [
            '/designs/C_.png',
            '/designs/GOPHER_STAR_WARS.png',
            '/designs/RipLanguages.png',
            '/designs/anyTypescript.png',
            '/designs/backAndFrontJs.png',
            '/designs/cloudFamily.png',
            '/designs/deployEveryday.png',
            '/designs/designThinking.png',
            '/designs/developmentRegex.png',
            '/designs/frontendArmor2.png',
            '/designs/gopher_vacations.png',
            '/designs/mapTransparentEditedLimit.png',
            '/designs/mapaDeEmpatia2.png',
            '/designs/merchandising-JavaMate2.png',
            '/designs/mirrorGopher.png',
            '/designs/modern-merlin-960x960.png',
            '/designs/namingVariables.png',
            '/designs/springFramework.png',
            '/designs/subteSQL.png',
            '/designs/undergroundSQL.png',
            '/designs/unitTesting.png',
            '/designs/youtubeUniversity.png'
        ]
    }
    const itemsPerPage: number = 6;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = buildDesigns().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(buildDesigns().length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % buildDesigns().length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div className={styles.designPanelBase}>
            <div className={styles.imagePanel}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName={styles.containerPagination}
                    pageClassName={styles.pageClassName}
                    breakClassName={styles.breakClassName}
                    previousClassName={styles.previousButtons}
                    nextClassName={styles.nextButtons}

                />
                <div className={styles.imagesList}>
                    {currentItems && currentItems.map(particularDesign => (
                        <div className={styles.particularDesign} key={particularDesign}>
                            <Image
                                src={particularDesign}
                                alt={particularDesign.substring(8)}
                                width={180}
                                height={180} />
                            <div className={styles.buttonBase}>
                                <p>👀</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    containerClassName={styles.containerPagination}
                    pageClassName={styles.pageClassName}
                    breakClassName={styles.breakClassName}
                    previousClassName={styles.previousButtons}
                    nextClassName={styles.nextButtons}

                /> */}
            </div>
            <div className={styles.line}></div>
            <div className={styles.preSelectedProductBase}>
                <p>
                    modelo seleccionado
                </p>
                <div className={styles.preSelectedProduct}>
                    <Image
                        src='/model2.png'
                        alt="models mockup2"
                        width={400}
                        height={400} />
                    <div>
                        <div className={styles.colorBase}>
                            <div className={styles.red}></div>
                            <div className={styles.blue}></div>
                            <div className={styles.pink}></div>
                            <div className={styles.yellow}></div>
                            <div className={styles.black}></div>
                            <div className={styles.gray}></div>
                        </div>
                        <div className={styles.shirtSize}>
                            <p>S</p>
                            <p>M</p>
                            <p>XL</p>
                        </div>
                        <div className={styles.shirtSize}>
                            <Image
                                src='/options/optionFront.png'
                                alt='modelo de camiseta con diseño frontal'
                                width={50}
                                height={50} />
                            <Image
                                src='/options/optionBack.png'
                                alt='modelo de camiseta con diseño reves'
                                width={50}
                                height={50} />
                            <Image
                                src='/options/optionSmall.png'
                                alt='modelo de camiseta con diseño en el pecho'
                                width={50}
                                height={50} />
                        </div>
                        <div className={styles.shirtSize}>
                            <p>-</p>
                            <p>2</p>
                            <p>+</p>
                        </div>
                        <div>
                            <p className={styles.confirmButton}>AGREGAR</p>
                        </div>
                    </div>

                </div>
                <div className={styles.cartBase}>
                    <div className={styles.subTotalCartBase}>
                        <div className={styles.particularCartBase}>
                            <Image
                                src='/designs/springFramework.png'
                                alt='modelo de camiseta con diseño frontal'
                                width={50}
                                height={50} />
                            <Image
                                src='/options/optionFront.png'
                                alt='modelo de camiseta con diseño frontal'
                                width={40}
                                height={40} />
                            <div className={styles.descriptionParticularCart}>
                                <p>Java Mate design</p>
                                <p>color: azul  talla: XL</p>
                            </div>
                            <div className={styles.cartSize}>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <p>30500 $</p>
                        </div>
                        <div className={styles.particularCartBase}>
                            <Image
                                src='/designs/subteSQL.png'
                                alt='modelo de camiseta con diseño frontal'
                                width={50}
                                height={50} />
                            <Image
                                src='/options/optionFront.png'
                                alt='modelo de camiseta con diseño frontal'
                                width={40}
                                height={40} />
                            <div className={styles.descriptionParticularCart}>
                                <p>Java Mate design</p>
                                <p>color: rojo  talla: XL</p>
                            </div>
                            <div className={styles.cartSize}>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <p>30500 $</p>
                        </div>
                        <div className={styles.particularCartBase}>
                            <Image
                                src='/designs/deployEveryday.png'
                                alt='modelo de camiseta con diseño frontal'
                                width={50}
                                height={50} />
                            <Image
                                src='/options/optionBack.png'
                                alt='modelo de camiseta con diseño frontal'
                                width={40}
                                height={40} />
                            <div className={styles.descriptionParticularCart}>
                                <p>Java Mate design</p>
                                <p>color: negro  talla: S</p>
                            </div>
                            <div className={styles.cartSize}>
                                <p>-</p>
                                <p>1</p>
                                <p>+</p>
                            </div>
                            <p>30500 $</p>
                        </div>
                    </div>
                    <div className={styles.totalPriceBase}>
                        <p className={styles.totalPriceDescription}>Total</p>
                        <div className={styles.totalPriceData}>
                        <p className={styles.totalPrice}>40500 $</p>
                        <p className={styles.totalPriceCurrency}>pesos argentinos</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}