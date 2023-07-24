import React from 'react'

const Footer = (props) => {
  return (
    <footer className="flex items-center justify-between p-8 bg-green-500 text-black-500">
          <p>{props.formData.length} Locations World Wide</p>
    </footer>

  )
}

export default Footer