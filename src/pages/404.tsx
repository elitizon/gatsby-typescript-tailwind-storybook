import React from "react"

const NotFoundPage: React.FC<{}> = () => {
  return (
    <>
      <div className="h-screen w-full bg-pink-100 mx-auto flex flex-cols justify-center items-center">
        <div className="text-3xl text-gray-600">404 | Not Found</div>
      </div>
    </>
  )
}

export default NotFoundPage
