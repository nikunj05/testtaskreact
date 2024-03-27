import React from 'react'

const Breadcrumbs = () => {
  return (
    <nav class="mb-10 relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
      <div class="flex w-full flex-wrap items-center justify-between px-3">
        <nav class="w-full rounded-md" aria-label="breadcrumb">
          <ol class="list-reset ms-2 flex">
            <li>
              <Badge className="primary">1</Badge>
              <a
                href="#"
                class="motion-reduce:transition-none-none text-gray-800 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 text-xs">
                Learning Path Overview
              </a>
            </li>
            <li>
              <span class="mx-4 text-gray-300">></span>
            </li>
            <li>
              <Badge>2</Badge>

              <a
                href="#"
                class="motion-reduce:transition-none-none text-gray-800 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 text-xs">
                Learning Path Overview
              </a>
            </li>
            <li>
              <span class="mx-4 text-gray-300">></span>
            </li>
            <li>
              <Badge>3</Badge>
              <a
                href="#"
                class="motion-reduce:transition-none-none text-gray-800 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition motion-reduce:transition-none dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 text-xs">
                Publish
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </nav>
  )
}

export default Breadcrumbs

const Badge = ({className, children}) => {
  // Define inline styles for the badge
  const badgeStyle = {
    display: 'inline-block',
    width: '25px', // Set width and height to ensure it's a perfect circle
    height: '25px', // Set width and height to ensure it's a perfect circle
    borderRadius: '50%', // Set borderRadius to 50% to make it perfectly round
    backgroundColor: className === 'primary' ? '#0068FF' : '#C5C5C5', // Apply different background colors based on className
    color: 'white',
    marginRight: '10px',
    textAlign: 'center',
    textAlignVertical: 'center'
  }

  return (
    <div style={badgeStyle}>
      <span className="text-xs text-center">{children}</span>
    </div>
  )
}
