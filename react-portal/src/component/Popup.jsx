import React from 'react'
import { createPortal } from 'react-dom'
const Popup = (props) => {
  return createPortal(
    <section>
        {props.copied && (
            <div>Copied to the clipboard</div>
        )}
    </section>,
    document.querySelector('#popup-contenet')
  )
}

export default Popup