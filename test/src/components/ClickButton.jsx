import React from 'react'
//rfce//

function ClickButton() {
  return (
    <button onClick={(event) => { //event helyére {target}
        event.target.innerText = "clicked" //event.-ot töröljük, és ez a verzió ugyan úgy működik, mint az eventes
      }}> Click me </button>
)
}

export default ClickButton