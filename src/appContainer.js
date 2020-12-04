import React, { useEffect } from 'react'
import { useLocation, withRouter } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import translate from './functional/translate'
import { language } from './store';

function AppContainer(props) {
    const location = useLocation();
    const [currentLanguage] = useRecoilState(language);

    useEffect(()=>{
        window.scrollTo({top:0});
        translate(currentLanguage);
    },[location,currentLanguage])

    return (
        <>
          {props.children}  
        </>
    )
}

export default withRouter(AppContainer);