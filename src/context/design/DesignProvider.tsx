'use client'
import { useState } from "react";
import { DesignContext } from "./DesignContext";
import { DesignsByShopBase, DesignByShop, DesignByDescriptionBase, DesignByDescription, GetDesignByDescriptionRequest } from "./DesignContextInterface";


export const DesignProvider = ({ children }: { children: any }) => {

    const [designs, setDesigns] = useState<DesignByShop[]>([]);
    const [availableSizeColorComparator, setAvailableSizeColorComparator] = useState<Object>(new Object());
    const [availableSizeColor, setAvailableSizeColor] = useState<Map<string, string[]>>(new Map());
    const [designSelected, setDesignSelected] = useState<DesignByDescription>({
        description: 'simpleDescription',
        designUrl: 'URL',
        has_back_design: false,
        is_active: true,
        product_data: {
            data: {
                price: 7990,
                price_with_back: 8499,
                earning: 1600,
                earning_with_back: 1600,
                active: true,
                settings: {
                    colors: {
                        complete_colors: [
                            "#050505",
                            "#ffffff",
                            "#0b0e30",
                            "#cccccc",
                            "#faf4af",
                            "#c5f7c7",
                            "#f9bdda",
                            "#b20003",
                            "#e6faff"
                        ],
                        colors: {
                            "1 (3XS)": [
                                "#050505",
                                "#ffffff",
                                "#0b0e30",
                                "#cccccc",
                                "#faf4af",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003",
                                "#e6faff"
                            ],
                            "2 (2XS)": [
                                "#050505",
                                "#ffffff",
                                "#0b0e30",
                                "#cccccc",
                                "#faf4af",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003",
                                "#e6faff"
                            ],
                            "3 (XS)": [
                                "#050505",
                                "#ffffff",
                                "#0b0e30",
                                "#cccccc",
                                "#faf4af",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003",
                                "#e6faff"
                            ],
                            "4 (S)": [
                                "#050505",
                                "#ffffff",
                                "#0b0e30",
                                "#cccccc",
                                "#faf4af",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003",
                                "#e6faff"
                            ],
                            "5 (M)": [
                                "#ffffff",
                                "#cccccc",
                                "#faf4af",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003",
                                "#e6faff"
                            ],
                            "6 (L)": [
                                "#ffffff",
                                "#faf4af",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003",
                                "#e6faff"
                            ],
                            "7 (XL)": [
                                "#ffffff",
                                "#cccccc",
                                "#faf4af",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003",
                                "#e6faff"
                            ],
                            "8 (2XL)": [
                                "#050505",
                                "#ffffff",
                                "#cccccc",
                                "#faf4af",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003"
                            ],
                            "9 (3XL)": [
                                "#050505",
                                "#ffffff",
                                "#0b0e30",
                                "#cccccc",
                                "#c5f7c7",
                                "#f9bdda",
                                "#b20003",
                                "#e6faff"
                            ]
                        }
                    }
                }
            }
        }
    });

    async function getAllDesigns(): Promise<void> {
        const response = await fetch('http://localhost:8081/api/v1/get-own-products')
        const dataResponse: DesignsByShopBase = await response.json();
        let dataList: DesignByShop[] = dataResponse.data;
        setDesigns([...designs, ...dataList])
    }

    async function getDesignByDescription(getDesignByDescriptionRequest: GetDesignByDescriptionRequest) {
        const response = await fetch(`http://localhost:8081/api/v1/get-own-product-by-description/${getDesignByDescriptionRequest.description}`)
        const dataResponse: DesignByDescriptionBase = await response.json();
        const designFound = dataResponse.data;
        designFound.description = getDesignByDescriptionRequest.description;
        designFound.designUrl = getDesignByDescriptionRequest.designUrl;
        setDesignSelected(designFound);
        const availableSizeAndColorResponse = designFound.product_data.data.settings.colors.colors;
        if (JSON.stringify(availableSizeAndColorResponse) == JSON.stringify(availableSizeColorComparator)) return;
        
        console.log('son distintos')
        setAvailableSizeColorComparator(availableSizeAndColorResponse);
        convertAvailableSizeColor(availableSizeAndColorResponse);
    }

    function convertAvailableSizeColor(objectToConvert: Object) {
        const objectMap = new Map<string, string[]>(Object.entries(objectToConvert));
        const emptyMap = new Map<string, string[]>();

        for (const entry of Array.from(objectMap)) {
            const key: string = entry[0];
            const value: string[] = entry[1];
            let size = key.match(/\((.*?)\)/g)?.[0];
            size = size?.slice(1,-1);
            const hexColorList: string[] = value;
            if (!size) size = '-'
            emptyMap.set(size, hexColorList)
          }
        setAvailableSizeColor(emptyMap)
    }

    return <DesignContext.Provider value={{
        designs,
        designSelected,
        availableSizeColor,
        getAllDesigns,
        getDesignByDescription,
    }}>{children}</DesignContext.Provider>
}