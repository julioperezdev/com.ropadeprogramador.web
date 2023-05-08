'use client'
import React, {useState, useEffect} from "react"
import {AnimatePresence, motion} from 'framer-motion'
import {useSnapshot} from 'valtio'
import config from '../../config/config';
import state from '../../store';
import {download} from '../../assets';
import {downloadCanvasToImage, reader} from '../../config/helpers'
import {EditorTabs, FilterTabs, DecalTypes} from '../../config/constants'
import {fadeAnimation, slideAnimation} from '../../config/motion';

import {AIPicker, ColorPicker, CustomButton, FilePicker, Tab} from '..'


export default function Customizer(){

    const snap = useSnapshot(state);

    const [file, setFile] = useState('')

    const [prompt, setPrompt] = useState('')
    const [generatingImg, setGeneratingImg] = useState(false)

    const [activeEditorTab, setActiveEditorTab] = useState<any>("")
    const [activeFilterTab, setActiveFilterTab] = useState<any>({
        logoShirt: true,
        stylishShirt: false
    })

    //show tab content depending on the activeTab
    const generateTabContent = () => {
        switch(activeEditorTab){
            case "colorpicker":
                return <ColorPicker/>
            case "filepicker":
                return <FilePicker
                file={file}
                setFile={setFile}
                readFile={readFile}
                />
            case "aipicker":
                return <AIPicker/>

            default:
                return null;
        }
    }

    const handleDecals = (type:any, result:any) => {
        const decalType = DecalTypes[type];
        state[decalType.stateProperty] = result;

        if(!activeFilterTab[decalType.filterTab]){
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const handleActiveFilterTab = (tabName:any) =>{
        switch(tabName){
            case "logoShirt":
                state.isLogoTexture = !activeFilterTab[tabName]
                break;
            case "stylishShirt":
                state.isFullTexture = !activeFilterTab[tabName]
                //es posible falte un break, en el momento 1:31:50 del video
            default:
                state.isFullTexture = true;
                state.isLogoTexture = false;
        }

        //after setting the state, activeFilverTab is updated

        setActiveFilterTab((prevState:any) =>{
            return {
                ...prevState,
                [tabName]: !prevState[tabName]
            }
        })
    }

    const readFile = (type:any) => {
        reader(file)
        .then((result) => {
            handleDecals(type, result);
            setActiveEditorTab("");
        })
    }

    return(
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div
                    key='custom'
                    className="absolute top-0 left-0 z-10"
                    {...slideAnimation('left')}
                    >
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {EditorTabs.map((tab) =>(
                                    <Tab
                                    key={tab.name}
                                    tab={tab}
                                    handleClick={()=>setActiveEditorTab(tab.name)}
                                    />
                                ))}

                                {generateTabContent()}
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                    className="absolute z-10 top-5 right-5"
                    {...fadeAnimation}
                    >
                        <CustomButton
                        type='filled'
                        title='Go back'
                        handleClick={() => state.intro = true}
                        customStyles='w-fit px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                    <motion.div
                    className="filtertabs-container"
                    {...slideAnimation('up')}
                    >
                        {FilterTabs.map((tab) =>(
                            <Tab
                            key={tab.name}
                            tab={tab}
                            isFilterTab
                            isActiveTab={activeFilterTab[tab.name]}
                            handleClick={()=> handleActiveFilterTab(tab.name)}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}