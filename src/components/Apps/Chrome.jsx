import React from 'react'

export default function Chrome() {
    return (
    <div className="windowbody">
        <div className='chrome window-head'>
            <div className='refresh'>
                <img class="w-5" src="./images/refresh.svg" alt="Ubuntu Chrome Refresh"/>
            </div>
            <div className='home'>
                <img class="w-5" src="./images/home.svg" alt="Ubuntu Chrome Home"/>
            </div>
            <input id="chrome-url-bar"  type="url" spellcheck="false" autocomplete="off" value="https://www.google.com"/>
        </div>
    </div>
    )
}
