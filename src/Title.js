import React from 'react'
import TypeIt from "typeit-react";
import './titles.css'


function Title() {
    return (
      
    <div className='titlesbox'>
        <TypeIt className='titles'
 getBeforeInit={(instance) => {
        const titles=[
            "그때 이후로.. 며칠이나 지났지?",
            "우리는 얼마나 만났을까?",
            "군대는 도대체 언제 끝나..!!",
            "그거 하나 계산 못 해?",
            "며칠이나 지났는 지 계산해주는 프로그램"
            
        ];
            for(let i=0;i<=titles.length-1;i++){
                instance
                .type(titles[i])
                .pause(2000)
                if(i===titles.length-1) break;
                instance
                .delete(titles[i].length)
                .pause(500);
            }
            
            

        // Remember to return it!
        return instance;
    }}
/>
        
    </div>
    
  )
}

export default Title